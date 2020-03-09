import React from 'react';
import { connect } from 'react-redux';

import './App.scss';
import TodoList from './List';
import Header from './Header';
import { createAction } from './redux/createAction';
import { UPDATE_TODO_ITEM, UPDATE_TODO_LIST, TODO_ITEM_CHANGE, CANCEL_EDIT, EDIT_TODO_ITEM } from './redux/types';
import WithLogin from './WithLogin';

const App = ({ todo, dispatch, match }) => {
  const { todoList, todoItem, isAdd, indexUpdate } = todo;
  const { name, priority, endsAt } = todoItem;
  const priorityOptions = [1, 2, 3, 4];

  const _handleChange = (key, value) => {
    dispatch(createAction(TODO_ITEM_CHANGE, { ...todoItem, [key]: value }))
  }

  const _handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || endsAt === "") {
      if (name === "")
        alert("please enter your name!");
      else alert("End At is invalid!");
    }
    else {
      if (isAdd) {
        dispatch(createAction(UPDATE_TODO_LIST, [...todoList, todoItem]));
      }
      else {
        dispatch(createAction(UPDATE_TODO_ITEM, todoList.map((item, index) =>
          index === indexUpdate ? todoItem : item
        )));
      }
    }
  }

  const _handleDelete = (index) => {
    dispatch(createAction(UPDATE_TODO_LIST, todoList.filter((item, i) => i !== index)));
  }

  const _handleEdit = (index) => {
    dispatch(createAction(EDIT_TODO_ITEM, {
      isAdd: false,
      indexUpdate: index,
      todoItem: todoList.find((item, i) => i === index)
    }));
  }

  const _handleCancel = () => {
    dispatch(createAction(CANCEL_EDIT));
  }

  return (
    <>
      <Header user={match.params.username} />
      <div className="box">
        <h2>TodoList</h2>
        <form className="box__form" onSubmit={_handleSubmit}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => _handleChange("name", e.target.value)} />
          <label>Priority</label>
          <select className="priority" value={priority} onChange={e => _handleChange("priority", e.target.value)}>
            {priorityOptions.map((item, index) =>
              <option key={index} value={item}>{item}</option>
            )}
          </select>
          <label>Ends At</label>
          <input type="date" value={endsAt} onChange={e => _handleChange('endsAt', e.target.value)} />
          <div>
            <button type="submit">{isAdd ? 'Add' : 'Save'}</button>
            {!isAdd && <button onClick={_handleCancel} type="button">Cancel</button>}
          </div>
        </form>
        {todoList.length > 0 && < TodoList onDelete={_handleDelete} onEdit={_handleEdit} />}
      </div>
    </>
  )
}

export default connect(state => ({
  todo: state.todo
}))(WithLogin(App));

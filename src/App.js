import React, { Component } from 'react';
import './App.scss';
import TodoList from './List';

class App extends Component {
  state = {
    todoList: [],
    todoItem: { name: "", priority: 1, endsAt: "" },
    isAdd: true,
    indexUpdate: 0
  }

  initialTodoItem = { name: "", priority: 1, endsAt: "" };

  _handleChange = (key, value) => {
    this.setState({ todoItem: { ...this.state.todoItem, [key]: value } });
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    const { todoList, todoItem, indexUpdate, isAdd } = this.state;
    const { name, endsAt } = todoItem;

    if (name === "" || endsAt === "") {
      if (name === "")
        alert("please enter your name!");
      else alert("End At is invalid!")
    }
    else {
      if (isAdd) {
        this.setState({ todoList: [...todoList, todoItem] });
      }
      else {
        this.setState({
          todoList: todoList.map((item, index) =>
            index === indexUpdate ? todoItem : item
          ),
          isAdd: true
        });
      }
    }
  }

  _handleDelete = (index) => {
    this.setState({ todoList: this.state.todoList.filter((item, i) => i !== index) });
  }

  _handleEdit = (index) => {
    this.setState({ isAdd: false, indexUpdate: index, todoItem: this.state.todoList.find((item, i) => i === index) });
  }

  _handleCancel = () => {
    this.setState({ isAdd: true, indexUpdate: 0, todoItem: this.initialTodoItem })
  }

  render() {
    const { todoList, todoItem, isAdd } = this.state;
    const { name, priority, endsAt } = todoItem;
    const priorityOptions = [1, 2, 3, 4];

    return (
      <div className="box">
        <h2>TodoList</h2>
        <form className="box__form" onSubmit={this._handleSubmit}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => this._handleChange("name", e.target.value)} />
          <label>Priority</label>
          <select className="priority" value={priority} onChange={e => this._handleChange("priority", e.target.value)}>
            {priorityOptions.map((item, index) =>
              <option key={index} value={item}>{item}</option>
            )}
          </select>
          <label>Ends At</label>
          <input type="date" value={endsAt} onChange={e => this._handleChange('endsAt', e.target.value)} />
          <div>
            <button type="submit">{isAdd ? 'Add' : 'Save'}</button>
            {!isAdd && <button onClick={this._handleCancel} type="button">Cancel</button>}
          </div>
        </form>
        {todoList.length > 0 && < TodoList list={todoList} onDelete={this._handleDelete} onEdit={this._handleEdit} />}
      </div>
    )
  }
}
export default App;

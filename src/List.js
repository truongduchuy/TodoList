import React from 'react';

export default ({ list, onDelete, onEdit }) => {
    return (
        <div className="box__table">
            <div className="row">
                <h4>Name</h4>
                <h4>Priority</h4>
                <h4>End At</h4>
                <h4>Actions</h4>
            </div>
            {list.map((item, index) =>
                <div key={index} className="row">
                    <div>{item.name}</div>
                    <div>{item.priority}</div>
                    <div>{item.endsAt}</div>
                    <div>
                        <button onClick={() => onEdit(index)}>edit</button>
                        <button onClick={() => onDelete(index)}>delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};
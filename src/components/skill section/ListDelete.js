import React from "react";

const ListDelete = ({ text, handleDelete }) => {
  return (
    <div className="ui form">
      <div className="ui segment">
        <div className="ui middle aligned divided list">
          <div className="item">
            <div className="right floated content">
              <div onClick={handleDelete} className="ui mini button">
                Delete
              </div>
            </div>
            <div className="ui header">
              <div className="content">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDelete;

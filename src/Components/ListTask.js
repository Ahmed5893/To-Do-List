import React from "react";
import { completetask, deletetask } from "../js/action/ActionTask";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ModalComponent from "../ModalComponent";

const ListTask = ({ taskList }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [id, setId] = useState();
  const handleShow = (id) => {
    setShow(true);
    setId(id)
  };
  const dispatch = useDispatch();
  return (
    <div className="Command">
      {taskList.map((el) => (
        <div key={el.id} className="Command-bar">
          <span className={el.isDone ? "line-thr" : "text"}>{el.task}</span>
          <button onClick={() => dispatch(completetask(el.id))}>
            {el.isDone ? "UnDone" : "Done"}
          </button>
          <button onClick={() => dispatch(deletetask(el.id))}>Delete</button>
          <button onClick={() => handleShow(el.id)}>Edit </button>
        </div>
      ))}
      <ModalComponent
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        id={id}
      />
    </div>
  );
};

export default ListTask;

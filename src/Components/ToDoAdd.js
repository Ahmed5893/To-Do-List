import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../js/action/ActionTask";

const ToDoAdd = ({ handleFilter,filter }) => {
  const dispatch = useDispatch();
  const [myInput, setMyInput] = useState("");
  const handleChange = (e) => {
    setMyInput(e.target.value);
  };
  const add = () => {
    if (myInput) {
      dispatch(addtask({ task: myInput, isDone: false, id: Math.random() }));
      setMyInput("");
    } else {
      alert("Please Enter A Valid Task");
    }
  };
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Add a Task"
        onChange={handleChange}
        value={myInput}
      ></input>
      <div className="btn">
        <button onClick={add}> ADD </button>
        <button onClick={handleFilter}>{filter?'ALL':'DONE'}</button>
      </div>
    </div>
  );
};

export default ToDoAdd;

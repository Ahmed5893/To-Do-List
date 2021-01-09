import React from "react";
import ToDoAdd from "./ToDoAdd";
import { useSelector } from "react-redux";
import ListTask from "./ListTask";
import { useState } from "react";


const ToDoList = () => {
  const taskList = useSelector((state) => state);
  const [filter,setFilter] = useState(false);
  const handleFilter=()=>{
      setFilter(!filter);
  }
  return (
    <div>
      <ToDoAdd handleFilter={handleFilter} filter={filter} />
      <ListTask taskList={filter?taskList.filter(el=>el.isDone):taskList} />
    </div>
  );
};

export default ToDoList;

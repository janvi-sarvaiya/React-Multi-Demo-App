import React, { useState } from "react";

export default function Tasks() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [complateTask, setComplateTask] = useState([]);

  function handleTaskChange(e) {
    setTask(e.target.value);
  }
  function handlePriorityChange(e) {
    setPriority(e.target.value);
  }
  function handleSelectDate(e) {
    setSelectDate(e.target.value);
  }

  const addTask = () => {
    if (task == "" || priority == "" || selectDate == "") {
      alert("please enter all fields!");
      return;
    }
    const selectedDate = new Date(selectDate);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert("please enter valid date!");
      return;
    }

    const newData = {
      id: tasks.length + 1,
      task,
      priority,
      selectDate,
      done: false,
    };

    setTasks([...tasks, newData]);
    console.log(newData);
    setTask("");
    setPriority("");
    setSelectDate("");
  };

  const updateTask = (id) => {
    const taskUpdate = tasks.map((val) =>
      val.id == id ? { ...val, done: true } : val
    );
    setTasks(taskUpdate);

    const complatedTask = tasks.find((val) => val.id == id);
    if (complatedTask) {
      setComplateTask([...complateTask, complatedTask]);
    }
  };

  const taskList = tasks.filter((val) => val.done == false);

  return (
    <div className="task-container">
      <div className="taskBox">
        <h1>Task Shedular</h1>
        <div className="task-form">
          <input
            type="email"
            value={task}
            onChange={handleTaskChange}
            placeholder="enter task"
          />
          <select value={priority} onChange={handlePriorityChange}>
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input type="date" value={selectDate} onChange={handleSelectDate} />
          <button className="submit-btn" onClick={addTask}>
            Add Task
          </button>
        </div>
        <div className="task-list">
          <h3>Task List</h3>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Priority</th>
                <th>Deadline</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {taskList.length == 0 ? (
                <tr className="label">
                  <td colSpan={4}>Not Assign Task!</td>
                </tr>
              ) : (
                taskList.map((val) => (
                  <tr key={val.id}>
                    <td>{val.task}</td>
                    <td>{val.priority}</td>
                    <td>{val.selectDate}</td>
                    <td>
                      {!val.done && (
                        <button onClick={() => updateTask(val.id)}>
                          <i className="fa-solid fa-check"></i>
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="complate-list">
          <h3>Complate Task</h3>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Priority</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {complateTask.length == 0 ? (
                <tr className="label">
                  <td colSpan={4}>Not Complated Task!</td>
                </tr>
              ) : (
                complateTask.map((val) => (
                  <tr key={val.id}>
                    <td>{val.task}</td>
                    <td>{val.priority}</td>
                    <td>{val.selectDate}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

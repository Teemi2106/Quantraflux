import React from "react";
import { useState } from "react";
import "../CSS/Calendar.css";

const Calendar = () => {
  const [activities, setActivities] = useState(
    localStorage.getItem("Activities List")
      ? JSON.parse(localStorage.getItem("Activities List"))
      : []
  );

  const [newItem, setNewItem] = useState("");

  const saveActivities = (newActivities) => {
    setActivities(newActivities);
    localStorage.setItem("Activities List", JSON.stringify(newActivities));
  };

  const addItems = (activity) => {
    const id = activities.length ? activities[activities.length - 1].id + 1 : 1;
    const myNewActivity = { id, activity, checked: false };
    const activityList = [...activities, myNewActivity];
    saveActivities(activityList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItems(newItem);
    setNewItem("");
  };

  const handleDelete = (id) => {
    let filtered = activities.filter((activity) => activity.id !== id);
    saveActivities(filtered);
  };

  const handleCheck = (id) => {
    const listActivities = activities.map((activity) =>
      activity.id === id
        ? { ...activity, checked: !activity.checked }
        : activity
    );
    saveActivities(listActivities);
  };

  return (
    <div className="todoList">
      <h2
        style={{
          textAlign: "center",
          fontFamily: "arial",
          color: "white",
          padding: "2vmin",
        }}
      >
        Todo List
      </h2>
      <ul className="listDiv">
        {activities.map((activity) => (
          <li className="mainList" key={activity.id}>
            <input
              type="checkbox"
              onChange={() => {
                handleCheck(activity.id);
              }}
              checked={activity.checked}
              className="checkbox"
            ></input>
            <label className="label">{activity.activity}</label>
            <button
              className="delete"
              onClick={() => handleDelete(activity.id)}
              checked={activity.checked}
            >
              Delete
            </button>
          </li>
        ))}
        <hr></hr>
      </ul>
      <hr></hr>
      <form
        style={{
          paddingBottom: "4vmin",
          minHeight: "fit-content",
          width: "100%",
          paddingTop: "4vmin",
          display: "flex",
          justifyContent: "space-around",
          flexGrow: "1",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          className="input"
          id="addActivity"
          placeholder="Add New Activity"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="add" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Calendar;

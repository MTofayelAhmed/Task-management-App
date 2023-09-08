import { useState } from "react";

const TaskList = () => {
  const [items, setItems] = useState(getTasksFromLocalStorage());

  function getTasksFromLocalStorage() {
    const itemJSON = localStorage.getItem("tasks");
    return JSON.parse(itemJSON) || [];
  }
  const handleStatusChange = (index) => {
    const updatedItems = [...items];
    updatedItems[index].status = "Completed";
    localStorage.setItem("tasks", JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Due Time</th>
            <th>Priority</th>
            <th>Assignee</th>
            <th>description</th>
            <th>Status</th>
            <th>status Change Button</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.priorityLevel}</td>
              <td>{item.assignedTo}</td>
              <td>{item.description}</td>
              <td>{item.status} </td>
              <td>
                <button onClick={() => handleStatusChange(index)}>
                  StatusChange
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

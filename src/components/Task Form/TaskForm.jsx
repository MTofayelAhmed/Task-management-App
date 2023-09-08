import { useState } from "react";

const teamMembers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Kabir khan" },
  { id: 4, name: "Jon depp" },
  { id: 5, name: "Monkey Adam" },
];

const TaskForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [assignedTo, setAssignedTo] = useState('');



  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const date = form.date.value;
    const description = form.description.value;
    const priorityLevel = selectedOption;

    const taskObject = {
      title,
      date,
      priorityLevel,
      description,
      assignedTo,
      status: "in Progress"


     

    };
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    existingTasks.push(taskObject);
    localStorage.setItem('tasks', JSON.stringify(existingTasks));
    console.log('Task saved to localStorage:', taskObject);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full ">
          <div className="text-center lg:text-left my-10">
            <h1 className="text-5xl font-bold">Task Creation Page</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="card-body">
              {/* title for task */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="title"
                  required
                  className="input input-bordered"
                />
              </div>
              {/* due date */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Date:</span>
                </label>
                <input
                  type="number"
                  placeholder="Due date"
                  name="date"
                  required
                  className="input input-bordered"
                />
              </div>
              {/* priority level */}
              <div className=" mt-5">
                <label htmlFor="dropdown">Priority level:</label>
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="">-- Select priority level --</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                </select>
              </div>

              {/* team members: */}
              <div className="mt-5">
                <label htmlFor="assignee">Assign to:</label>
                <select
                  id="assignee"
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                >
                  <option value="">Select a team member</option>
                  {teamMembers.map((member) => (
                    <option key={member.id} value={member.name}>
                      {member.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  placeholder="description"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input className="btn " type="submit" value="Task Button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;

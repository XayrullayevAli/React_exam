import React from "react";
import { useState } from "react";

export default function Exam() {
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(1);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const deleteTask = (id) => {
    let newTask = tasks.filter((item) => item.id !== id);
    setTasks([...newTask]);
  };

  const addTask = (e) => {
    e.preventDefault();
    setId((prev) => prev + 1);
    tasks.push({ id, title, status });
    setTasks([...tasks]);
    setStatus("");
    setTitle("");
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-3">
          <div className="card  p-2">
            <h3 className="text-center">Open</h3>
            {tasks
              .filter((i) => i.status === "open")
              .map((item, index) => {
                return (
                  <div>
                    <div className="p-2" key={index}>
                      <span className="me-5">{item.title}</span>
                      <button
                        className="btn btn-info m-2"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger m-2"
                        onClick={() => deleteTask(item.id)}
                      >
                        Delete
                      </button>
                    </div>

                    <div
                      className="modal fade"
                      id="exampleModal2"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Edit task
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form id="form2">
                              <input
                                className="form-control mb-3"
                                defaultValue={item.title}
                                onChange={handleTitle}
                                type="text"
                                placeholder="title"
                              />
                              <select
                                defaultValue={item.status}
                                onChange={handleStatus}
                                className="form-select"
                              >
                                <option value="" hidden>
                                  Select status
                                </option>
                                <option value="open">open</option>
                                <option value="pending">pending</option>
                                <option value="inprog">inprog</option>
                                <option value="complete">complete</option>
                              </select>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Exit
                            </button>
                            <button
                              type="submit"
                              form="form2"
                              data-bs-dismiss="modal"
                              className="btn btn-primary"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <button
              className="btn btn-success"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add card
            </button>
          </div>
        </div>
        <div className="col-3">
          <div className="card p-2">
            <h3 className="text-center">Pending</h3>
            {tasks
              .filter((i) => i.status === "pending")
              .map((item, index) => {
                return (
                  <div className="p-2" key={index}>
                    <span className="me-5">{item.title}</span>
                    <button
                      className="btn m-1 btn-primary"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      Edit
                    </button>
                    <button
                      className="btn m-1 btn-danger"
                      onClick={() => deleteTask(item.id)}
                    >
                      Delete
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal2"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Edit task
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form id="form2">
                              <input
                                className="form-control mb-3"
                                defaultValue={tasks[index].title}
                                onChange={handleTitle}
                                type="text"
                                placeholder="title"
                              />
                              <select
                                defaultValue={item.status}
                                onChange={handleStatus}
                                className="form-select"
                              >
                                <option value="" hidden>
                                  Select status
                                </option>
                                <option value="open">open</option>
                                <option value="pending">pending</option>
                                <option value="inprog">inprog</option>
                                <option value="complete">complete</option>
                              </select>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Exit
                            </button>
                            <button
                              type="submit"
                              form="form2"
                              data-bs-dismiss="modal"
                              className="btn btn-primary"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <button
              className="btn btn-success"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add card
            </button>
          </div>
        </div>

        <div className="col-3">
          <div className="card p-2">
            <h3 className="text-center">Inprog</h3>
            {tasks
              .filter((i) => i.status === "inprog")
              .map((item, index) => {
                return (
                  <div className="p-2" key={index}>
                    <span className="me-5">{item.title}</span>
                    <button
                      className="btn m-1 btn-primary"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      Edit
                    </button>
                    <button
                      className="btn m-1 btn-danger"
                      onClick={() => deleteTask(item.id)}
                    >
                      Delete
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal2"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Edit task
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form id="form2">
                              <input
                                className="form-control mb-3"
                                defaultValue={tasks[index].title}
                                onChange={handleTitle}
                                type="text"
                                placeholder="title"
                              />
                              <select
                                defaultValue={item.status}
                                onChange={handleStatus}
                                className="form-select"
                              >
                                <option value="" hidden>
                                  Select status
                                </option>
                                <option value="open">open</option>
                                <option value="pending">pending</option>
                                <option value="inprog">inprog</option>
                                <option value="complete">complete</option>
                              </select>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Exit
                            </button>
                            <button
                              type="submit"
                              form="form2"
                              data-bs-dismiss="modal"
                              className="btn btn-primary"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <button
              className="btn btn-success"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add card
            </button>
          </div>
        </div>

        <div className="col-3">
          <div className="card  p-2">
            <h3 className="text-center">Complete</h3>
            {tasks
              .filter((i) => i.status === "complete")
              .map((item, index) => {
                return (
                  <div className="p-2" key={index}>
                    <span className="me-5">{item.title}</span>
                    <button
                      className="btn m-1 btn-primary"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      Edit
                    </button>
                    <button
                      className="btn m-1 btn-danger"
                      onClick={() => deleteTask(item.id)}
                    >
                      Delete
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal2"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Edit task
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form id="form2">
                              <input
                                className="form-control mb-3"
                                defaultValue={tasks[index].title}
                                onChange={handleTitle}
                                type="text"
                                placeholder="title"
                              />
                              <select
                                defaultValue={item.status}
                                onChange={handleStatus}
                                className="form-select"
                              >
                                <option value="" hidden>
                                  Select status
                                </option>
                                <option value="open">open</option>
                                <option value="pending">pending</option>
                                <option value="inprog">inprog</option>
                                <option value="complete">complete</option>
                              </select>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Exit
                            </button>
                            <button
                              type="submit"
                              form="form2"
                              data-bs-dismiss="modal"
                              className="btn btn-primary"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <button
              className="btn btn-success"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add card
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add task
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={addTask} id="form">
                  <input
                    className="form-control mb-3"
                    value={title}
                    onChange={handleTitle}
                    type="text"
                    placeholder="title"
                  />
                  <select
                    value={status}
                    onChange={handleStatus}
                    className="form-select"
                  >
                    <option value="" hidden>
                      Select status
                    </option>
                    <option value="open">open</option>
                    <option value="pending">pending</option>
                    <option value="inprog">inprog</option>
                    <option value="complete">complete</option>
                  </select>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Exit
                </button>
                <button
                  type="submit"
                  form="form"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

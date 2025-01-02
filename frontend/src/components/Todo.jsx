import React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useTaskStore } from "../../store/task";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "black",
  border: "1px solid #fff",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const Todo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const { createTask } = useTaskStore();
  async function handleSubmit(event) {
    event.preventDefault();
    const { message, success } = await createTask(newTask);
    if (!success) {
      console.error("Error creating task");
    } else {
      console.log("Task created successfully");
    }
    console.log(`Success: ${success}, Message: ${message}`);
    setNewTask({
      title: "",
      description: "",
      priority: "",
    });
  }

  return (
    <div className=" flex flex-col gap-5 m-auto pt-[13rem] px-5 w-auto md:w-[60rem] md:pt-[150px] md:px-0 ">
      <p className="text-white text-3xl font-bold">
        Welcome to Task-flow, Start managing your time
      </p>

      <button
        onClick={handleOpen}
        className=" border border-slate-200 w-[10rem] font-bold px-5 py-2 rounded-[5px] text-white bg-slate-950"
      >
        Add a task
      </button>

      <div className="grid grid-cols-5 text-violet-950 text-[15px] font-bold border-b border-gray-500 pb-2 mb-2 md:text-xl">
        <p className="text-center">Title</p>
        <p className="text-center">Description</p>
        <p className="text-center">Priority</p>
        <p className="text-center">Update</p>
        <p className="text-center">Delete</p>
      </div>

      <div className="grid grid-cols-5 text-white text-[13px] font-bold border-b border-gray-500 pb-2 mb-2 md:text-[15px]">
        <p className="text-center">Clean</p>
        <p className="text-center whitespace-nowrap">Clean the house</p>
        <p className="text-center">Medium</p>
        <button className="mx-auto border border-transparent px-4 py-1 rounded-[5px] bg-blue-800 text-white">
          Update
        </button>
        <button className="mx-auto border border-transparent px-4 py-1 rounded-[5px] bg-red-800 text-white">
          Delete
        </button>
      </div>

      <p className="text-white mt-5 text-center h-[15rem] text-xl font-bold">
        No task yet 🥲...
      </p>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              onSubmit={(event) => handleSubmit(event)}
              className=" flex flex-col"
              action=""
            >
              <label className="text-white font-bold" htmlFor="title">
                Task title...
              </label>
              <input
                onChange={(event) =>
                  setNewTask({ ...newTask, title: event.target.value })
                }
                className=" mt-1 border border-gray-200 font-semibold text-xl px-5 py-2 bg-transparent text-white rounded-[5px] placeholder:text-white"
                type="text"
                placeholder="Enter your task title..."
                required
                id="title"
              />
              <label className="text-white font-bold mt-5" htmlFor="descp">
                Task&apos;s Description...
              </label>
              <input
                onChange={(event) =>
                  setNewTask({ ...newTask, description: event.target.value })
                }
                className=" mt-1 border border-gray-200 font-semibold text-xl px-5 py-2 bg-transparent text-white rounded-[5px] placeholder:text-white"
                type="text"
                placeholder="Write a description of your task..."
                required
                id="Descp"
              />
              <div className=" text-white mt-5 flex flex-row gap-2">
                <p className=" text-xl font-bold self-center">Priority :</p>
                <select
                  onChange={(event) =>
                    setNewTask({ ...newTask, priority: event.target.value })
                  }
                  className=" bg-black cursor-pointer border border-white rounded-[5px] px-2 py-1 self-center"
                  name=""
                  id=""
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <button
                onClick={handleSubmit}
                className=" mt-5 border border-white bg-slate-950 py-1 rounded-[5px] w-[150px] text-white"
              >
                Add
              </button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Todo;

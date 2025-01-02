import React from "react";
import googleLogo from "../assets/pngwing.com.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 items-center m-auto pt-[13rem] px-5 w-auto md:w-[60rem] md:pt-[150px] md:px-0">
      <h1 className=" text-white self-start text-3xl font-extrabold md:text-5xl">
        Welcome to{" "}
        <span className=" font-extrabold text-blue-900">Task-Flow</span>
      </h1>
      <p className="text-zinc-100 text-[16px] font-semibold leading-7 md:text-xl">
        Welcome to your ultimate productivity companion! Our to-do list web app
        is designed to help you stay organized, prioritize your tasks, and
        achieve your goals effortlessly. With a sleek and user-friendly
        interface, powerful features, and seamless accessibility across all your
        devices, managing your daily tasks has never been easier. Whether
        you&apos;re planning a project, organizing your schedule, or simply
        keeping track of your ideas, our app is here to streamline your workflow
        and keep you on top of everything. Signup and start using .
      </p>

      <div className=" mt-5 flex flex-col gap-10 items-center">
        {/* <h1 className="text-white text-center text-4xl font-bold">
          Create Your account
        </h1> */}
        {/* <form
          className=" flex flex-col w-auto gap-4 border-2 border-white rounded-[5px] bg-transparent p-4 md:w-[40rem]"
          action=""
        >
          <input
            className="border-2 font-semibold border-gray-100 text-white bg-transparent rounded-[5px] text-xl p-1"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border-2 font-semibold border-gray-100 text-white bg-transparent rounded-[5px] text-xl p-1"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="border-2 font-semibold border-gray-100 text-white bg-transparent rounded-[5px] text-xl p-1"
            type="text"
            placeholder="Email"
          />
          <input
            className="border-2 font-semibold border-gray-100 text-white bg-transparent rounded-[5px] text-xl p-1"
            type="password"
            placeholder="Password"
          />
          <button className="border border-transparent px-5 py-2 bg-blue-900 text-white font-semibold rounded-[5px]">
            Signup
          </button>
        </form> */}

        {/* <div className=" text-white flex flex-row gap-2">
          <span className=" self-center w-[100px] h-[1px] bg-white rounded-[5px] md:w-[300px] " />
          <p>or</p>
          <span className=" self-center w-[100px] h-[1px] bg-white rounded-[5px] md:w-[300px] " />
        </div> */}

        <button className=" flex flex-row gap-2 border text-xl font-bold border-transparent text-white px-5 py-2 rounded-[5px] bg-red-700">
          <img className=" w-[30px] object-cover self-center" src={googleLogo} alt="GOOGLE LOGO" />
          <p className=" self-center">Login with Google</p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;

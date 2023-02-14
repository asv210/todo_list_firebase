import React, { useState, useEffect } from "react";
import Display from "./Display";
import db from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

// import "./Todo.css";
function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([
    {
      text: "",
      completed: false,
      id: "",
    },
  ]);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo["comple"],
    });
    console.log(todo["comple"]);
  };

  const onChangeHandler = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const submitHandler = async (e) => {
    e.preventDefault(e);
    if (task === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: task,
      completed: false,
    });
    setTask("");
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      console.log("df");
      let todosArr = [
        {
          text: "",
          completed: "",
          id: "",
        },
      ];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());

        todosArr.push({ ...doc.data(), id: doc.id });
        // console.log(doc.data());
        // console.log(todosArr[1]);
      });
      if (todosArr.length >= 1) {
        setData(todosArr);
      }
      // console.log(data[1]["text"]);
    });
    return () => unsubscribe();
  }, []);
  // useEffect(() => {
  //   const q = query(collection(db, "todos"));
  //   const unsubscribe = onSnapshot(q, async (querySnapshot) => {
  //     let todoArr = [];
  //     console.log("Dff");
  //     await querySnapshot.forEach((doc) => {
  //       todoArr.push({ ...doc.data(), id: doc.id });
  //     });
  //     await setData(todoArr);
  //   });
  //   return () => unsubscribe();
  // }, []);
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  const showdata = () => {
    // <h1>he</h1>;
    // data.forEach((x) => {
    //   return <h2>x.text</h2>;
    // });
  };
  return (
    <div className=" bg-[url('./1.jpg')] flex h-screen  justify-center">
      <div className="w-full min-[375px]:w-9/12 sm:w-5/12  h-4/5 mt-16  rounded-2xl  ">
        <div className=" center">
          <div className="pt-2.5 pb-2.5 ">
            <h4 className=" font-serif text-center text-black rounded font-bold text-3xl">
              <span className="bg-white rounded-3xl sm:rounded-2xl px-5 py-2 sm:py-0 shadow-xl border-2 border-black font-sans">
                To-Do List
              </span>
            </h4>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className="my-4 flex justify-center">
            <div className="mx-4 w-full">
              <input
                id="todo-input"
                type="text"
                className="form-control border-[2px] sm:tracking-normal tracking-tighter shadow-lg shadow-gray-500 rounded-2xl px-5 border-black w-full h-10 text-lg font-mono"
                value={task}
                onChange={onChangeHandler}
                placeholder="Add your task"
              />
            </div>
            <button
              type="submit"
              className="mx-auto bg-[#073b4c] font-bold shadow-lg  shadow-gray-500 text-white px-8 mr-4 rounded-2xl  hover:bg-white hover:text-black"
            >
              Add
            </button>
          </div>
        </form>
        <div className="overflow-y-auto h-[22rem]">
          {data.map((value, index) => {
            {
              return (
                index != 0 && (
                  <Display
                    task={value["text"]}
                    id={value["id"]}
                    comple={value["completed"]}
                    toggleComplete={toggleComplete}
                    onSelect={deleteItem}
                  />
                )
              );
            }
            {
              /* if (index != 0) {
              return <Display task={value["text"]} />;
            } */
            }
          })}

          {/* heloo */}
        </div>
      </div>
    </div>
  );
}

export default Todo;

{
  /*  */
}

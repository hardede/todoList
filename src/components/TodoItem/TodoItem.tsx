import { FC, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import todoStore from "../../store/todoStore";
import { ITodo } from "../../types/types";
import Bin from "./Item/Bin";

interface TodoItemProps {
  todo: ITodo;
  index: number;
}

const TodoItem: FC<TodoItemProps> = ({ todo, index }) => {
  const [pageLocation, setPageLocation] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/deleted") {
      setPageLocation(true);
    }
  }, []);

  return (
    <>
      <div
        key={todo.id}
        className="border border-[#EB4608] p-5 mb-5 rounded-2xl flex justify-between items-center hover:scale-105 transition-all last:mb-0 xs:p-2"
      >
        <div className="text-xl">
          <span className="text-[#EB4608] font-semibold">{index + 1}.</span>
          <h3 className="text-[#300089]">{todo.title}.</h3>
        </div>
        <div className="flex sm:block">
          <div className="flex sm:mb-1">
            <button
              onClick={() => todoStore.toggleTodo(todo.id, todo.title)}
              className={
                todo.isCompleted
                  ? "text-xl font-bold border border-purple-800 px-3 py-2 rounded-xl bg-purple-100 text-red-500"
                  : "text-xl font-bold border border-purple-800 text-[#EB4608] px-3 py-2 rounded-xl hover:bg-orange-300 hover:text-slate-800 cursor-pointer"
              }
            >
              {todo.isCompleted ? (
                <AiOutlineCheck />
              ) : (
                <AiOutlineCheck className="opacity-40 hover:opacity-90 " />
              )}
            </button>
            <Bin todo={todo} />
          </div>
          {pageLocation && (
            <button
              onClick={() => todoStore.fullDelete(todo.id)}
              className="ml-3 text-xl font-bold border border-red-600 text-[#EB4608] px-3 py-2 rounded-xl hover:bg-red-300 hover:text-slate-800 cursor-pointer sm:text-sm sm:px-1 sm:ml-0 sm:w-full"
            >
              Full delete
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoItem;

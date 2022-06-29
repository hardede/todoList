import React, { FC } from "react";
import { ImBin } from "react-icons/im";
import todoStore from "../../../store/todoStore";
import { ITodo } from "../../../types/types";

interface BinProps {
  todo: ITodo
}

const Bin: FC<BinProps> = ({ todo }) => {
  return (
    <div
      className={
        todo.isDeleted
          ? "ml-3 text-xl font-bold border border-red-600 px-3 py-3 rounded-xl bg-red-300 text-slate-800 cursor-pointer"
          : "ml-3 text-xl font-bold border border-red-600 text-[#EB4608] px-3 py-3 rounded-xl hover:bg-red-300 hover:text-slate-800 cursor-pointer"
      }
      onClick={() => todoStore.deletedTodo(todo.id, todo.title)}
    >
      <ImBin />
    </div>
  );
};

export default Bin;

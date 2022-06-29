import { observer } from "mobx-react-lite";
import { FC } from "react";
import Input from "../../components/Input/Input";
import List from "../../components/List";
import Tabs from "../../components/Tabs/Tabs";
import TodoItem from "../../components/TodoItem/TodoItem";
import todoStore from "../../store/todoStore";
import { ITodo } from "../../types/types";

const Completed: FC = observer(() => {
  return (
    <>
      <Input />
      <Tabs />
      <div className="w-1/2 m-auto p-10 border border-[#B207F3] rounded-xl">
        {todoStore.completedTodos.length <= 0 ? (
          <div className="text-center text-2xl text-[#EB4608] font-bold">
            Return to the tab "Todos" and complete some todos
          </div>
        ) : (
          <List
            items={todoStore.completedTodos}
            renderItem={(todos: ITodo, index: any) => (
              <TodoItem todo={todos} index={index} key={todos.id} />
            )}
          />
        )}
      </div>
    </>
  );
});

export default Completed;

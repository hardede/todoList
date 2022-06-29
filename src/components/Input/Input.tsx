import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import todoStore from "../../store/todoStore";

const Input: FC = observer(() => {
  const [value, setValue] = useState("");
  const [taskDirty, setTaskDirty] = useState(false);
  const [taskError, setTaskError] = useState("This field cannot be empty");
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  const click = () => {
    todoStore.addTodo(value);
    navigate("/home");
    setValue("");
  };

  useEffect(() => {
    taskError ? setFormValid(false) : setFormValid(true);
  }, [taskError]);

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "task":
        setTaskDirty(true);
        break;
      default:
    }
  };

  const taskHandler = (e: any) => {
    setValue(e.target.value);
    if (e.target.value.length < 4) {
      setTaskError("This field length must be more four");
      if (!e.target.value) {
        setTaskError("This field cannot be empty");
      }
    } else {
      setTaskError("");
    }
  };

  return (
    <div className="w-1/2 pt-20 shadow-xl m-auto h-44 rounded-2xl shadow-slate-300">
      <div className="flex justify-center">
        <div>
          <input
            name="task"
            type="text"
            value={value}
            className="w-96 px-4 py-2 border-2 border-purple-800 rounded-lg text-lg font-bold text-[#EB4608] placeholder:font-semibold   placeholder:text-orange-500 placeholder:opacity-50 focus-visible:outline-none"
            placeholder="Write your tasks here :)"
            onChange={e => taskHandler(e)}
            onKeyPress={e => e.key === "Enter" && click()}
            onBlur={e => blurHandler(e)}
          />
          {taskDirty && taskError && (
            <div className="text-red-500">{taskError}</div>
          )}
        </div>
        <button
          className="ml-2 h-12 text-xl font-bold border-2 border-purple-800 text-[#EB4608] px-10 rounded-xl hover:bg-orange-300 hover:text-slate-800 cursor-pointer"
          type="submit"
          onClick={click}
          disabled={!formValid}
        >
          Add
        </button>
      </div>
    </div>
  );
});

export default Input;
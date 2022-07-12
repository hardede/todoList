import { FC } from "react";
import { Link } from "react-router-dom";
import todoLogo2 from "../assets/img/turborepo-icon.svg";
import { menu } from "../constants/headerList";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

interface HeaderProps {
  handleDarkThemeClick: any;
  handleLightThemeClick: any;
  theme: string;
}

const Header: FC<HeaderProps> = ({
  handleDarkThemeClick,
  handleLightThemeClick,
  theme,
}) => {
  console.log("hi");

  return (
    <div className="absolute left-0 top-0 w-full z-10">
      <div className="flex justify-between items-center px-10 py-4">
        <img
          src={todoLogo2}
          alt="logoTodo"
          className="h-16"
          draggable={false}
        />
        <div className="flex justify-between">
          <ul className="mr-10 block border-r-2 border-solid border-purple-500">
            {menu.map(item => (
              <li
                key={item.id}
                className="inline-block px-5 py-1.5 text-xl font-semibold opacity-75 text-skin-headerLinks hover:opacity-100"
              >
                <Link to={item.linkUrl}>{item.title}</Link>
              </li>
            ))}
          </ul>
          {theme === "light" ? (
            <button onClick={handleDarkThemeClick}>
              <BsFillMoonStarsFill className="text-2xl fill-slate-700" />
            </button>
          ) : (
            <button onClick={handleLightThemeClick}>
              <BsFillSunFill className="text-2xl fill-yellow-400" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

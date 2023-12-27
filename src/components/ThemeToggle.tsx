"use client";

import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter);

  const toggleTheme = () => {
    setTheme(theme === themes.winter ? themes.dracula : themes.winter);
  };

  return (
    <div className='btn btn-sm btn-outline' onClick={toggleTheme}>
      {theme === themes.winter ? <BsMoonFill /> : <BsSunFill />}
    </div>
  );

  // <div className='btn btn-sm btn-outline'>
  //   {theme === themes.winter ? (
  //     <BsMoonFill onClick={() => setTheme(themes.dracula)} />
  //   ) : (
  //     <BsSunFill onClick={() => setTheme(themes.winter)} />
  //   )}
  // </div>
};

export default ThemeToggle;

// src/Components/DarkModeToggle.jsx
import { useEffect, useState } from "react";

import { IoSunnySharp } from "react-icons/io5";
import { GoMoon } from "react-icons/go";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="rounded-full cursor-pointer hover:scale-105 duration-200"
    >
      {isDark ?
        <IoSunnySharp size={35} className="text-yellow-400 bg-white rounded-full px-0.5 py-0.5 " />
        : <GoMoon size={35} className="text-white bg-black rounded-full px-0.5 py-0.5" />
      }
    </button>
  );
};

export default DarkModeToggle;

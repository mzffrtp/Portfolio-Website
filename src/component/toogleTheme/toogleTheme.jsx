import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "../../redux/actions/themeAction";

export default function ToogleTheme() {
  const { themeState } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div
      className={`${themeState.darkMode ? "bg-primary-light" : "bg-primary-dark"} 
      flex items-center justify-between text-white px-6 py-4 h-20 mx-auto`}>
      <span></span>
      <button
        onClick={() => dispatch(toogleTheme())}
        className="my-5 px-6 py-2 text-white bg-pink-600 rounded-md font-semibold uppercase">
        {themeState.darkMode ? "Dark" : "Light"}
      </button>
    </div>
  )
}
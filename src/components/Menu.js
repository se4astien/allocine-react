import React from "react";

const Menu = props => {
  return (
    <ul className="menu">
      <li
        className={props.selected === "popular" ? "active" : ""}
        onClick={() => {
          props.setSelected("popular");
        }}
      >
        Popular movies
      </li>
      <li
        className={props.selected === "upcoming" ? "active" : ""}
        onClick={() => {
          props.setSelected("upcoming");
        }}
      >
        Upcoming movies
      </li>
      <li
        className={props.selected === "top_rated" ? "active" : ""}
        onClick={() => {
          props.setSelected("top_rated");
        }}
      >
        Top rated movies
      </li>
    </ul>
  );
};
export default Menu;

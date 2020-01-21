import React from "react";

const Menu = props => {
  return (
    <ul className="menu">
      <li
        className={props.selected === "popular" ? "active" : null}
        onClick={() => {
          props.setSelected("popular");
          // équivaut à faire => props.fetch("popular");
        }}
      >
        Popular movies
      </li>
      <li
        className={props.selected === "upcoming" ? "active" : null}
        onClick={() => {
          props.setSelected("upcoming");
          // équivaut à faire => props.fetch("upcoming");
        }}
      >
        Upcoming movies
      </li>
      <li
        className={props.selected === "top_rated" ? "active" : null}
        onClick={() => {
          props.setSelected("top_rated");
          // équivaut à faire => props.fetch("top_rated");
        }}
      >
        Top rated movies
      </li>
    </ul>
  );
};
export default Menu;

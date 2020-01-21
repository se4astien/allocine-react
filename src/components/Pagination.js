import React from "react";

const Pagination = props => {
  return (
    <ul className="pagination">
      {props.counter > 1 ? (
        <li
          onClick={() => {
            props.setCounter(props.counter - 1);
          }}
        >
          Prev
        </li>
      ) : null}

      {props.counter <= 10 ? (
        <li
          onClick={() => {
            props.setCounter(props.counter + 1);
          }}
        >
          Next
        </li>
      ) : null}
    </ul>
  );
};
export default Pagination;

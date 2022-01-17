import React from "react";

import "./VTlist.css";

function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li key={props.index} className="section__Jobs-listCompany">
      <button
        className="section__Jobs-buttonCompany"
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "var(--clr-hover)" }
            : { color: "var(--clr-tertiary)" }
        }
      >
        {props.data.expData.company}
      </button>
    </li>
  );
}

export default VTlist;

import React from "react";

const input = ({
  item: {
    name,
    placeholder,
    validation,
    label,
    type,
    formType,
    onClick,
    className,
    value,
    error,
    clicked,
  },
}) => {
  switch (formType) {
    case "input":
      return (
        <div className="mb-3">
          <label htmlFor={name} className="form-label text-start">
            {label}
          </label>
          <input
            className="form-control"
            id={name}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
          ></input>
          <div class="text-danger ">{error}</div>
        </div>
      );

    case "button":
      return (
        <button className={`btn btn-block ${className}`} onClick={onClick}>
          {" "}
          {name}
        </button>
      );
  }
};

export default input;

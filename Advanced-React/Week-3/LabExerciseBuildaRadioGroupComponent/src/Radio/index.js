import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = 
    React.Children.map((children, (child) => {
      return React.cloneElement(child, {
        onChange,
        selected: children.props.value === 'selected',
      });
    }));

  return <div className="RadioGroup">{RadioOptions}</div>;
};


export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input id={value} type="radio" name={value} checked={checked} onChange={(e) => {
        onchange(e.target.value)
      }} />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};

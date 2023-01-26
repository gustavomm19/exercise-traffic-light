import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
  const [selected, setSelected] = useState(null);
  const colors = [
    'red',
    'yellow',
    'green'
  ]
	return (
		<div className="main">
      <div id="container" className="container bg-black rounded-4">
        <div id="traffic-top" />
        {colors.map((color) => (
          <div
            className={`${color} light rounded-circle ${selected === color ? 'selected' : ''}`}
            onClick={() => {
              if (selected === color) setSelected(null);
              else setSelected(color);
            }}
          />
        ))}
      </div>
		</div>
	);
};

export default TrafficLight;
import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let BarFilled = "0%";

  if (props.maxValue > 0) {
    BarFilled = Math.round((props.value / props.maxValue) * 100 + "%");
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar_fill" style={{ height: BarFilled }}></div>
      </div>
      <div className="chart-bar_label"> {props.label}</div>
    </div>
  );
};

export default ChartBar;

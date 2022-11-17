import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
    const amountArr = props.dataPoints.map((data) => data.value);
    const totalMax = Math.max(...amountArr); // ...amountArr convert arr to numbers
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, i) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={i}
        />
      ))}
    </div>
  );
};

export default Chart;

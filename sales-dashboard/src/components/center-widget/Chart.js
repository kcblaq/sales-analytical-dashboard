import React from "react";
import { Chart } from "react-charts";

function MyChart() {
  const data = React.useMemo(
    () => [
      [
        [1, 10],
        [2, 10],
        [3, 10],
      ],
      [
        [1, 10],
        [2, 10],
        [3, 10],
      ],
      [
        [1, 10],
        [2, 10],
        [3, 10],
      ],
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        width: "95%",
        height: "80%",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}
export default MyChart;

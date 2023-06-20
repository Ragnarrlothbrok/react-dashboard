import React from "react";
import { Legend, PieChart } from "bizcharts";

const dataReal = [
  {
    type: "A",
    value: 27,
  },
  {
    type: "B",
    value: 25,
  },
  {
    type: "C",
    value: 18,
  },
  {
    type: "D",
    value: 15,
  },
];

const customLegend = (item) => {
    return (<div>
        {item}
    </div>)
}

const PieChartComponent = ({ title }) => {
  return (
    <div className="bg-white w-1/2 rounded-2xl py-7 px-10">
      <h4 className="font-montserrat text-lg font-bold mb-1">{title}</h4>
      <div className="mt-6 h-36">
        {/* <PieChart
          data={dataReal}
          radius={0.5}
          width={"100%"}
          angleField="value"
          colorField="type"
          label={{
            visible: true,
            labelHeight: 28,
            content: (v) => `${v.type}\n${v.value}`,
          }}
          legend={{
            label: {
                formatter: v => `${v.type}\n${v.value}`
            },
          }}
        /> */}
        {/* <Legend /> */}
      </div>
    </div>
  );
};

export default PieChartComponent;

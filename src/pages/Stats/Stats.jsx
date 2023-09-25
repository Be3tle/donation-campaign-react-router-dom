import { Pie, PieChart, Legend, Cell } from "recharts";

const data = [
  { name: "Your Donation", value: 4 },
  { name: "Total Donation", value: 12 },
];

const COLORS = ["#0088FE", "#FFBB28"];

const pieChartWidth = 400;
const pieChartHeight = 400;

const Stats = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <PieChart width={pieChartWidth} height={pieChartHeight}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default Stats;

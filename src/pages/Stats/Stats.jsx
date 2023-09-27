import { useEffect, useState } from "react";
import { Pie, PieChart, Legend, Cell } from "recharts";

const COLORS = ["#0088FE", "#FFBB28"];

const pieChartWidth = 400;
const pieChartHeight = 400;

const Stats = () => {
  const [stat, setStat] = useState([]);

  useEffect(() => {
    const donatedItem = JSON.parse(localStorage.getItem("donations"));
    if (donatedItem) {
      setStat(donatedItem);
    }
  }, []);

  const yourDonationCount = stat.length;
  const totalDonationCount = 12;
  const yourDonationPercentage = (
    (yourDonationCount / totalDonationCount) *
    100
  ).toFixed(1);
  const totalDonationPercentage = (100 - yourDonationPercentage).toFixed(1);

  const data = [
    { name: "Your Donation", value: parseFloat(yourDonationPercentage) },
    { name: "Total Donation", value: parseFloat(totalDonationPercentage) },
  ];

  return (
    <div className="flex flex-col gap-2 justify-center  items-center">
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

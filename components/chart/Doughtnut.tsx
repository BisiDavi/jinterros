import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart() {
  const data = {
    labels: ["Delivered", "On Delivery", "Cancelled"],
    datasets: [
      {
        label: "My First Dataset",
        data: [50, 25, 25],
        backgroundColor: ["#F5AE30", "black", "#BD6A2C"],
        hoverOffset: 4,
      },
    ],
  };
  Chart.register(ArcElement);
  return (
    <div className="w-1/2 flex mx-auto my-10">
      <Doughnut data={data} />
    </div>
  );
}

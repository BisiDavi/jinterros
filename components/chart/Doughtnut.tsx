import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart() {
  const data = {
    labels: ["Delivered", "On Delivery", "Cancelled"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  Chart.register(ArcElement);
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
}

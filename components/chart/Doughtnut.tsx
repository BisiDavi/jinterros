import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ orders }: any) {
  const data = {
    labels: ["Delivered", "On Delivery", "Cancelled"],
    datasets: [
      {
        label: "Delivery Data",
        data: orders,
        backgroundColor: ["#F5AE30", "#BD6A2C", "black"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="w-full my-4 lg:my-0 lg:w-1/3 flex">
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              labels: {
                color: "black",
              },
            },
          },
        }}
      />
    </div>
  );
}

// orders = { memoizedOrders };
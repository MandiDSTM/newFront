import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler
);

const rand = () =>
  Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const MyChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["00:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM"],
    datasets: [
      {
        label: "Current month",
        data: rand(),
        backgroundColor: "rgba(113, 88, 203, .15)",
        borderColor: "rgba(113, 88, 203, 1)",
        borderWidth: 1,
        fill: "start"
      },
      {
        label: "Last month",
        data: rand(),
        backgroundColor: "rgba(161, 201, 249, .15)",
        borderColor: "rgba(161, 201, 249, 1)",
        borderWidth: 1,
        fill: "start"
      }
    ]
  });

  const chartRef = useRef(null);

  const addData = () => {
    setChartData((prevChartData) => {
      const newDatasets = prevChartData.datasets.map((dataset) => {
        const newData = [...dataset.data];
        const first = newData.shift();
        newData.push(first);
        return {
          ...dataset,
          data: newData
        };
      });
      return {
        ...prevChartData,
        datasets: newDatasets
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => addData(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Public Bandwidth</h2>
      <Line ref={chartRef} data={chartData} options={{
        animation: {
          duration: 250
        },
        plugins: {
          tooltip: {
            intersect: false,
            backgroundColor: "rgba(113, 88, 203, 1)",
            titleFont: {
              size: 16,
              weight: '400',
            },
            bodyFont: {
              size: 12,
              weight: '400',
            },
            padding: 8,
            cornerRadius: 4,
            displayColors: false,
            callbacks: {
              title: function (tooltipItems) {
                const dataPoints = tooltipItems.map(t => chartData.datasets.map(ds => ds.data[t.dataIndex] + "%"));
                return dataPoints.join(', ');
              },
              label: function (tooltipItem) {
                return chartData.labels[tooltipItem.dataIndex];
              }
            }
          },
          title: {
            display: true,
            text: "Public Bandwidth"
          },
          filler: {
            propagate: false
          }
        },
        maintainAspectRatio: true,
        spanGaps: false,
        elements: {
          line: {
            tension: 0.3
          }
        },
        scales: {
          x: {
            ticks: {
              autoSkip: false,
              maxRotation: 0
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }} />
    </div>
  );
};

export default MyChart;

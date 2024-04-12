import api from "@/config/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { server } from "../assets/serverLink";
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);



function Homepage() {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);

  const Card = ({ title, content, link }) => (
    <div className="bg-white text-black shadow-lg rounded-lg p-6 m-4 flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-3xl font-bold my-2">{content}</p>
      {link && (
        <Link to={link} className="text-blue-500 hover:text-blue-600 transition duration-300">
          View More
        </Link>
      )}
    </div>
  );

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      const fetchDashboardData = async () => {
        try {
          const response = await api.get(`${server}/contract/dashboard-data`);
          setDashboard(response.data.data);
        } catch (err) {
          console.error(err.message);
        }
      };
      fetchDashboardData();
    }
  }, []);

  const dataBar = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Contracts Drafted',
        data: [0, 0, 1, 1, 1, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dataLine = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Contracts Approved',
        data: [1, 1, 2, 1, 1, 2],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const dataPie = {
    labels: ['Drafted', 'Negotiation', 'Approved', 'Renewal'],
    datasets: [
      {
        label: 'Contract Status',
        data: [dashboard?.draftedCount, dashboard?.inNegotiationsCount, dashboard?.approvedCount, dashboard?.expiredCount],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=" text-white min-h-screen p-5">
      <h1 className="text-4xl mb-3 font-thin ">ContractIQ Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6shadow rounded-lg">
          <Bar data={dataBar} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="p-6 shadow rounded-lg">
          <Line data={dataLine} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="p-6 shadow rounded-lg">
          <Pie data={dataPie} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
      <div className="px-5 py-3 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dashboard && (
            <>
              <Card title="Drafted" content={dashboard?.draftedCount || 0} link="/drafted-contracts" />
              <Card title="Negotiation" content={dashboard?.inNegotiationsCount || 0} link="/negotiation-contracts" />
              <Card title="Approval" content={dashboard?.approvedCount || 0} link="/approval-contracts" />
              <Card title="Renewal" content={dashboard?.expiredCount || 0} link="/renewal-contracts" />
              <Card title="Contracts Expiring Soon..." content={dashboard?.expiringSoonCount} link="/expiring-soon-contracts" />
              <Card title="Total Contracts" content={dashboard?.totalCount || 0} />
              <Card title="View All Contracts" link="/all-contracts" />
              <Card title="Contracts Uploaded Today" link="/contracts-added-today" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;

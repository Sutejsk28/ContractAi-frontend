import CustomCard from "@/components/custom-component/CustomCard";
import api from "@/config/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../assets/serverLink";

function Homepage() {
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    try {
      if (!localStorage.getItem("token")) {
        navigate("/");
      } else {
        const fetch = async () => {
          const response = await api.get(`${server}/contract/dashboard-data`);
          setDashboard(response.data.data);
        };
        fetch();
      }
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  return (
    <>
      <div className="flex my-5">
        <CustomCard
          title={"Drafted"}
          content={dashboard?.draftedCount || 0}
          link={"/drafted-contracts"}
        />
        <CustomCard
          title={"Negotiation"}
          content={dashboard?.inNegotiationsCount || 0}
          link={"/negotiation-contracts"}
        />
        <CustomCard
          title={"Approval"}
          content={dashboard?.approvedCount || 0}
          link={"/approval-contracts"}
        />
        <CustomCard
          title={"Renewal"}
          content={dashboard?.expiredCount || 0}
          link={"/renewal-contracts"}
        />
      </div>
      <div className="flex my-5">
        <CustomCard
          title={"Contracts Expiring soon..."}
          content={dashboard?.expiringSoonCount}
          link={"/expiring-soon-contracts"}
        />
        <CustomCard
          title={"Total Contracts"}
          content={dashboard?.totalCount || 0}
          link={null}
        />
      </div>
      <div className="flex my-5">
        <CustomCard
          title={"View all contracts"}
          content={""}
          link={"/all-contracts"}
        />
        <CustomCard
          title={"Contracts uploaded today"}
          content={""}
          link={"/contracts-added-today"}
        />
      </div>
    </>
  );
}

export default Homepage;

import CustomCard from "@/components/custom-component/CustomCard";
import React from "react";

function Homepage() {
  return (
    <>
      <div className="flex my-5">
        <CustomCard title={"Drafted"} content={2} link={"/drafted-contracts"} />
        <CustomCard
          title={"Negotiation"}
          content={5}
          link={"/negotiation-contracts"}
        />
        <CustomCard
          title={"Approval"}
          content={2}
          link={"/approval-contracts"}
        />
        <CustomCard title={"Renewal"} content={5} link={"/renewal-contracts"} />
      </div>
      <div className="flex my-5">
        <CustomCard
          title={"Contracts Expiring soon..."}
          content={2}
          link={"/expiring-soon-contracts"}
        />
        <CustomCard
          title={"Total Contracts"}
          content={5}
          link={"/total-contracts"}
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
          link={"/uploaded-today-contracts"}
        />
      </div>
    </>
  );
}

export default Homepage;

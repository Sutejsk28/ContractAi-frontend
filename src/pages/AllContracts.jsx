import ContractCard from "@/components/custom-component/ContractCard";
import React from "react";

function AllContracts() {
  const id = "2354222";

  const contractDetails = {
    title: "Contract Title",
    id,
    content: "Contract's content",
    startDate: "23/02/2024",
    expireDate: "23/02/2034",
    link: `/contract/${id}`,
  };

  const contractArray = [];
  contractArray.push(contractDetails);
  contractArray.push(contractDetails);
  contractArray.push(contractDetails);
  contractArray.push(contractDetails);
  contractArray.push(contractDetails);
  contractArray.push(contractDetails);
  console.log(contractArray);
  return (
    <>
      <h1 className="text-2xl font-semibold m-3 p-3">All Contracts</h1>
      {contractArray.map((contractDetail, index) => {
        return <ContractCard id={index} contractDetails={contractDetail} />;
      })}
    </>
  );
}

export default AllContracts;

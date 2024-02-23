import ContractCard from "@/components/custom-component/ContractCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../assets/serverLink";

function AllContracts() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`${server}/contract`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log(data.data.contracts);
      setContracts(data.data.contracts);
    };
    fetch();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold m-3 p-3">All Contracts</h1>
      {contracts.length === 0 ? (
        <p>No Contracts available</p>
      ) : (
        contracts.map((contractDetail, index) => {
          return <ContractCard id={index} contractDetails={contractDetail} />;
        })
      )}
    </>
  );
}

export default AllContracts;

import axios from "@/config/axiosConfig";
import React, { useEffect, useState } from "react";
import { server } from "../assets/serverLink";
import ContractCard from "@/components/custom-component/ContractCard";

function ExpiredContracts({ status }) {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    try {
      if (!localStorage.getItem("token")) {
        navigate("/");
      } else {
        const fetch = async () => {
          const response = await axios.get(`${server}/contract/expired`, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
          console.log(response.data.data.contracts);
          setContracts(response.data.data.contracts);
        };
        fetch();
      }
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold m-3 p-3">Expired Contracts</h1>
      {contracts.length === 0 ? (
        <p>No contracts that have expired</p>
      ) : (
        contracts.map((contractDetail, index) => {
          return <ContractCard id={index} contractDetails={contractDetail} />;
        })
      )}
    </>
  );
}

export default ExpiredContracts;

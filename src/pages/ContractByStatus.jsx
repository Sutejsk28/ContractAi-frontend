import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../assets/serverLink";
import ContractCard from "@/components/custom-component/ContractCard";

function ContractByStatus({ status }) {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    try {
      if (!localStorage.getItem("token")) {
        navigate("/");
      } else {
        const fetch = async () => {
          const response = await axios.post(
            `${server}/contract/status`,
            {
              status: status,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
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
      <h1 className="text-2xl font-semibold m-3 p-3">{status} Contracts</h1>
      {contracts.length === 0 ? (
        <p>No contracts in {status} stage</p>
      ) : (
        contracts.map((contractDetail, index) => {
          return <ContractCard id={index} contractDetails={contractDetail} />;
        })
      )}
    </>
  );
}

export default ContractByStatus;

import Tag from "@/components/custom-component/Tag";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import axios from "axios";
import { server } from "../assets/serverLink";
import StatusDropdown from "@/components/custom-component/StatusDropdown";

const pdfPath = "../assests/Agreement1.pdf";

function ContractDetails() {
  const params = useParams();
  const contractNumber = params.contractNumber;

  const [contract, setContract] = useState({});
  const [expireDate, setExpireDate] = useState();
  const [initiatedDate, setInitiatedDate] = useState();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`${server}/contract/${contractNumber}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log(data.data.contract);
      setContract(data.data.contract);
      setExpireDate({
        key: "expire date",
        value: data.data.contract.expireDate.slice(0, 10),
      });
      setInitiatedDate({
        key: "Initiated date",
        value: data.data.contract.initiatedDate.slice(0, 10),
      });
    };
    fetch();
  }, []);

  return (
    <>
      <div className="flex justify-start">
        <h1 className="mx-3 font-semibold text-3xl">{contract?.name}</h1>
        <h2 className="mx-3 mt-2 font-medium text-xl">#{contractNumber}</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-start">
          {contract?.tags?.length > 0 &&
            contract?.tags?.map((keyValue, index) => {
              return <Tag id={index} keyValue={keyValue} />;
            })}
          {expireDate && <Tag keyValue={expireDate} />}
          {initiatedDate && <Tag keyValue={initiatedDate} />}
        </div>
        <div className="flex m-6 p-3">
          <StatusDropdown contract={contract} />
          <Button asChild className="ml-3" variant="outline">
            <a href={`/contract/query/${contractNumber}`}>Ask AI</a>
          </Button>
        </div>
      </div>
      <div className="flex m-3 p-3">
        <div className="flex-1">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfPath} />
          </Worker>
        </div>
        <div className="flex-1 border rounded-sm p-2 size-1/2">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <p className="text-justify">
            {contract?.summary ? (
              contract.summary
            ) : (
              <p className="m-3">Processing....</p>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default ContractDetails;

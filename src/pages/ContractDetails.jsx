import Tag from "@/components/custom-component/Tag";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import axios from "@/config/axiosConfig";
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
    <div className="mt-5 p-4">
      <div className="flex justify-start">
        <h2 className="mx-3 font-medium text-3xl">{contract?.name}</h2>
        <h2 className="mx-3 mt-2 font-thin text-xl">#{contractNumber}</h2>
      </div>
      <div className="flex justify-between mt-7">
        <div className="flex justify-start flex-wrap gap-3">
          {contract?.tags?.length > 0 &&
            contract?.tags?.map((keyValue, index) => {
              return <Tag id={index} keyValue={keyValue} />;
            })}
          {expireDate && <Tag keyValue={expireDate} />}
          {initiatedDate && <Tag keyValue={initiatedDate} />}
        </div>
        <div className="flex">
          <StatusDropdown contract={contract} />
          <Button asChild className="ml-3" variant="outline">
            <a href={`/contract/query/${contractNumber}`}>Ask AI</a>
          </Button>
        </div>
      </div>
      <div className="flex mt-16 p-3">
        <div className="flex-1">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={"https://instruction-manual-testing.s3.eu-north-1.amazonaws.com/uploads/contracts/4200548843?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCmV1LW5vcnRoLTEiRzBFAiAt%2FjjhsvNJ2VAj3ivGp%2FPuwsRW%2Fjh1hdyM32isYTASawIhAOWMKcJeXLtK6dDmdN2fXBU6mREw%2FyN9FejjHHq4T0Y1KuQCCGQQABoMNDMxNjI0MDk4OTAzIgzbEGk%2FZEiElpVyM1QqwQL85%2B5sIuHiyO1tw1nZV6sDBw7FkaqZ%2B5suttCq%2FDlJuoIA0taUDbnqEhuzkXjKSdgRoSpktJiirHtoIUqUaUlG98bZJGpR%2BEkXqFEw6Ca9msYQ4pVQuD8%2BYGmsHLXCZEhPdAuSY0VxRM4qgxeJ35720m0%2B49R%2BuYQXZhSNfvwKa%2F9XqVBZeOHz3XD4c%2BUvVD3vpwC6jeL3Dc1zUvTLvyYdBCH3nSHE8TmhKIR1PfQww4dygKyAJOUODML3sAt8rxld4UOG7shwe1BdSZWa%2FB1zFvLs%2BknAXDi2enjckQaQSmVbUJT%2FcKbGAFMxCzAuqIybPP2oezwWkFy0b0J4eRlrWsR2816xDYgBZedEsXPxJcTFCL%2FweecGy46qLetMIljABuQwfZ0QMpV8QYDISVbiT504yX7RyDwWAXq9MVkg5Hgw7vnlsAY6swIDy4mxga9DnDZufDS0o9QKS2SrpEJ6Z1xvhAfZWQP%2FPIEJe1k0j8Cqa6mLYHXwr7inaLdKV5D7DfnguJ34Z6lHtvyj8wtSoN8sribdbf19ODDiPI1JO8UTilM0eyjFwqlnBdeNluD2VYGFQBJvKQ4XFNlwERTr2xdMOA%2FZy%2FxdW8aOFywRSYKqlmPxKPoRRgjZemu7Fx1%2B6ap0PepPHptG1e8fCKH9MdhTvhm8b7tuEUg2LIG%2FX5FqdH5vmxLvyFxq6snk6owCR9ETaMdtGwLFBHM5BapQY3wJGakmmX2VrQZLfWuFB2VR5xHBTa%2FQWhhfYQoSS3qh2MYq0WALExPzSmO0z%2FpxwNf0gCqLsFQARc8WO%2FgbJpUUZYQpy3NWtimyC29pmCae5jsAOnc0rqmlaBpM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240412T185234Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWI7WNCRLQ4CFJB3D%2F20240412%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=c70c182c63521daab485cb260e217f8ef11a3c6761fc8b2ebf35a536ff17f471"} />
          </Worker>
        </div>
        <div className="flex- border rounded-lg shadow-xl p-8 size-1/2">
          <h1 className="text-2xl font-thin mb-2">Contract Summary</h1>
          <hr className="mb-3"/>
          
          <p className="text-justify">
            {contract?.summary ? (
              contract.summary
            ) : (
              <p className="m-3">Processing....</p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContractDetails;

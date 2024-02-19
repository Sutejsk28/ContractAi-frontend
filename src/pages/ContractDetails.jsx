import Tag from "@/components/custom-component/Tag";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const pdfPath =
  "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf";

function ContractDetails() {
  const params = useParams();
  const contractId = params.contractId;

  const keyValueArray = [];
  keyValueArray.push({
    key: "key1",
    value: "value1",
  });
  keyValueArray.push({
    key: "key2",
    value: "value2",
  });
  keyValueArray.push({
    key: "key3",
    value: "value3",
  });
  keyValueArray.push({
    key: "key4",
    value: "value4",
  });

  console.log(keyValueArray[1].key);

  const changeStatus = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="flex justify-start">
        <h1 className="mx-3 font-semibold text-3xl">Contract name</h1>
        <h2 className="mx-3 mt-2 font-medium text-xl">#{contractId}</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-start">
          {keyValueArray.map((keyValue, index) => {
            return <Tag id={index} keyValue={keyValue} />;
          })}
        </div>
        <div className="flex m-6 p-3">
          <Select onValueChange={changeStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Change status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="drafted">Drafted</SelectItem>
                <SelectItem value="negotiation">Negotiation</SelectItem>
                <SelectItem value="approval">Approval</SelectItem>
                <SelectItem value="renewal">Renewal</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button asChild className="ml-3" variant="outline">
            <a href={`/chat/contract/${contractId}`}>Chat with AI</a>
          </Button>
        </div>
      </div>
      <div className="flex m-3 p-3">
        <div className="flex-1">
          <Viewer fileUrl={pdfPath} />
        </div>
        <div className="flex-1 border rounded-sm p-2 size-1/2">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
}

export default ContractDetails;

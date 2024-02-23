import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ContractCard({ contractDetails }) {
  console.log(contractDetails);
  return (
    <div className="mx-4 mr-36 my-2">
      <Card className="mx-4 min-h-36 shadow-2xl flex-1">
        <a href={`/contract/${contractDetails.contractNumber}`}>
          <CardHeader className="justify-start">
            <CardTitle className="font-normal">
              <div className="flex justify-between">
                <p>{contractDetails.name}</p>
                <p className="hidden md:inline-block">
                  Starts on: {contractDetails.startDate?.slice(0, 10)} - Expires
                  on: {contractDetails.expireDate.slice(0, 10)}
                </p>
              </div>
            </CardTitle>
            <CardDescription className="flex justify-start">
              #{contractDetails.contractNumber}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xl flex justify-start truncate">
            {contractDetails.summary}
          </CardContent>
        </a>
      </Card>
    </div>
  );
}

export default ContractCard;

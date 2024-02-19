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
        <a href={contractDetails.link}>
          <CardHeader className="justify-start">
            <CardTitle className="font-normal">
              <div className="flex justify-between">
                <p>{contractDetails.title}</p>
                <p className="hidden md:inline-block">
                  Starts on: {contractDetails.startDate} - Expires on:{" "}
                  {contractDetails.expireDate}
                </p>
              </div>
            </CardTitle>
            <CardDescription className="flex justify-start">
              #{contractDetails.id}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xl flex justify-start truncate">
            {contractDetails.content}
          </CardContent>
        </a>
      </Card>
    </div>
  );
}

export default ContractCard;

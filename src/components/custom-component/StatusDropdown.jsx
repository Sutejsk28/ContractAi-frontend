import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "@/config/axiosConfig";
import { server } from "../../assets/serverLink";

function StatusDropdown({ contract }) {
  const [status, setStatus] = useState(contract.status);

  const onChange = async (value) => {
    if (value === "negotiation") {
      value = "inNegotiations";
    } else if (value === "approval") {
      value = "approved";
    }

    const response = await axios.put(
      `${server}/contract/status/${contract._id}`,
      {
        status: value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(response.data);
    setStatus(value);
  };

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Change status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem
            value="drafted"
            className={status === "drafted" ? "bg-green-500" : ""}
          >
            Drafted
          </SelectItem>
          <SelectItem
            value="negotiation"
            className={status === "inNegotiations" ? "bg-green-500" : ""}
          >
            Negotiation
          </SelectItem>
          <SelectItem
            value="approval"
            className={status === "approved" ? "bg-green-500" : ""}
          >
            Approval
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default StatusDropdown;

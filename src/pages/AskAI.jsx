import axios from "@/config/axiosConfig";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../assets/serverLink";

function AskAI() {
  const params = useParams();
  const contractNumber = params.contractNumber;

  const [answer, setAnswer] = useState("");
  const [query, setQuery] = useState("");
  const [prevQueries, setPrevQueries] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${server}/contract/${contractNumber}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response.data);
      setPrevQueries(response.data.data.contract.queries);
    };
    fetch();
  }, []);

  const setInputQuery = (event) => {
    setQuery(event.target.value);
  };

  const getResponse = async () => {
    setAnswer("Getting reponse from AI....");
    const { data } = await axios.post(
      `${server}/contract/query/${contractNumber}`,
      {
        query: query,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log(data.data.answer);
    setAnswer(data.data.answer);
  };

  return (
    <>
      <div>
        <label>Enter your query</label>
        <input
          placeholder="Enter your query"
          className="m-3 p-3 border rounded-sm min-w-16"
          value={query}
          onChange={setInputQuery}
        />
        <button onClick={getResponse}>Ask</button>
      </div>
      <div>
        <p>Answer: </p>
        <p className="m-3 p-3 border rounded-sm min-w-16">{answer}</p>
      </div>
      <div className="m-3 mt-10">
        <h1 className=" text-2xl font-semibold italic">Previous queries</h1>
        {prevQueries.map((ele, index) => (
          <div className="mt-4 p-3 flex-col justify-start">
            <hr />
            <p className=" font-semibold mt-2">question: {ele.question}</p>
            <p className="text-justify">
              <span className="font-semibold">Answer:</span> {ele.answer}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default AskAI;

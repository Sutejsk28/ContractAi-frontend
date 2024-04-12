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
    setAnswer("Getting response from ContractGPT...");
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
    <div className="p-10  bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <label htmlFor="query" className="block text-2xl mb-5 font-medium text-gray-700">Enter your query</label>
        <div className="flex flex-row gap-3 h-full">
          <input
            id="query"
            type="text"
            placeholder="Enter your query"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={query}
            onChange={setInputQuery}
          />
          <button
            onClick={getResponse}
            className="mt-4 px-4 py-2.5 bg-gray-700 text-white rounded-md"
          >
            Ask
          </button>
        </div>

      </div>
      {answer?.length ? <div className="max-w-2xl mx-auto mt-6 bg-white shadow p-4 rounded-lg">
        <p className="text-md font-bold text-gray-700">Answer:</p>
        <p className="mt-2 text-gray-900">{answer}</p>
      </div> : <></>}
      <div className="max-w-2xl mx-auto mt-10">
        <h1 className="text-2xl font-thin text-gray-900">Previous queries</h1>
        {prevQueries.map((ele, index) => (
          <div key={index} className="mt-4 p-4 bg-white shadow-lg rounded-lg">
            <p className="font-bold">Question: {ele.question}</p>
            <p className="mt-2 text-justify">
              <span className="font-semibold">Answer:</span> {ele.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AskAI;

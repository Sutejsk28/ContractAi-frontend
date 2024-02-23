import "./App.css";
import Navbar from "@/components/custom-component/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllContracts from "./pages/AllContracts";
import ContractDetails from "./pages/ContractDetails";
import CreateContract from "./pages/CreateContract";
import Auth from "./pages/Login";
import ContractByStatus from "./pages/ContractByStatus";
import ExpiredContracts from "./pages/ExpiredContracts";
import ContractsExpiringSoon from "./pages/ContractsExpiringSoon";
import ContractsAddedToday from "./pages/ContractsAddedToday";
import AskAI from "./pages/AskAI";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/all-contracts" element={<AllContracts />} />
          <Route
            path="/contract/:contractNumber"
            element={<ContractDetails />}
          />
          <Route path="/new-contract" element={<CreateContract />} />
          <Route path="/contract/query/:contractNumber" element={<AskAI />} />
          <Route
            path="/drafted-contracts"
            element={<ContractByStatus status={"drafted"} />}
          />
          <Route
            path="/negotiation-contracts"
            element={<ContractByStatus status={"inNegotiations"} />}
          />
          <Route
            path="/approval-contracts"
            element={<ContractByStatus status={"approved"} />}
          />
          <Route
            path="/expiring-soon-contracts"
            element={<ContractsExpiringSoon />}
          />
          <Route path="/renewal-contracts" element={<ExpiredContracts />} />
          <Route
            path="contracts-added-today"
            element={<ContractsAddedToday />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

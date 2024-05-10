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
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/all-contracts" element={<AllContracts />} />
          <Route
            path="/contract/:contractNumber"
            element={<ContractDetails />}
          />
          <Route path="/new-contract" element={<CreateContract />} />
          <Route path="/contract/query/:contractNumber" element={<AskAI />} />
          <Route
            path="/drafted-contracts"
            element={<ContractByStatus status={"drafted"} displayName={"Drafted"}/>}
          />
          <Route
            path="/negotiation-contracts"
            element={<ContractByStatus status={"inNegotiations"} displayName={"In Negotiations"}/>}
          />
          <Route
            path="/approval-contracts"
            element={<ContractByStatus status={"approved"} displayName={"Approved"} />}
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

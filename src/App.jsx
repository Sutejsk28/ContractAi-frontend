import "./App.css";
import Navbar from "@/components/custom-component/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllContracts from "./pages/AllContracts";
import ContractDetails from "./pages/ContractDetails";
import CreateContract from "./pages/CreateContract";
import { Worker } from "@react-pdf-viewer/core";

function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/all-contracts" element={<AllContracts />} />
            <Route path="/contract/:contractId" element={<ContractDetails />} />
            <Route path="/new-contract" element={<CreateContract />} />
          </Routes>
        </Router>
      </>
    </Worker>
  );
}

export default App;

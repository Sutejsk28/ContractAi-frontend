import { Link } from "react-router-dom";

function ContractCard({ contractDetails }) {
  return (
    <div className="m-16 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl">
        <Link to={`/contract/${contractDetails.contractNumber}`} className="block p-6">
          <div className="mb-4">
            <h5 className="text-2xl font-bold text-gray-800">
              {contractDetails.name}
            </h5>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Contract #{contractDetails.contractNumber}
            </p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700">
              <span className="font-semibold">Starts on:</span> {contractDetails.initiatedDate?.slice(0, 10)}
              <span className="mx-2">|</span>
              <span className="font-semibold">Expires on:</span> {contractDetails.expireDate.slice(0, 10)}
            </p>
          </div>
          <div className="text-gray-600 text-sm">
            {contractDetails.summary?.slice(0,150)}...
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ContractCard;

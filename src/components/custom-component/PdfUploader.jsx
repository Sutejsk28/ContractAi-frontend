import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { server } from "../../assets/serverLink";
import api from "@/config/axiosMultipartConfig";


const PdfUploader = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setIsUploading(true);
      setUploadError(null);

      // Access the selected file and other form data
      const file = data.file[0]; // Assuming single file selection
      const contractName = data.contractName;
      const expireDate = data.expireDate + "T12:00:00.000Z";
      const initiatedDate = data.initiatedDate + "T12:00:00.000Z";

      // Implement your API request or file handling logic here
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", contractName);
      formData.append("expireDate", expireDate);
      formData.append("initiatedDate", initiatedDate);

      const response = await api.post(`${server}/contract/`, formData);


      console.log("Upload successful:", response.data);
      const id = response.data.data.contract.contractNumber;
      navigate(`/contract/${id}`);
    } catch (error) {
      console.error("Upload error:", error);
      setUploadError(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form
      className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Upload a New Contract</h2>
      <hr />
      <p className="text-sm font-thin text-center text-gray-600 mt-0.5 mb-4">Analysis powered by: ContractGPT</p>

      <div className="mb-5">
        <label htmlFor="contractName" className="block text-sm font-medium text-gray-700 mb-2">
          Contract Name
        </label>
        <input
          type="text"
          id="contractName"
          {...register("contractName", { required: true })}
          placeholder="ContractIQ - 001"
          className="block w-full p-3 text-sm border-gray-300 rounded-md shadow-sm border"
        />
        {errors.contractName && (
          <span className="text-red-500 text-xs mt-1">
            {errors.contractName.message}
          </span>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="initiatedDate" className="block text-sm font-medium text-gray-700 mb-2">
          Initiated Date (DD-MM-YYYY)
        </label>
        <input
          type="date"
          id="initiatedDate"
          {...register("initiatedDate", { required: true })}
          className="block w-full p-3 text-sm border-gray-300 border rounded-md shadow-sm "
        />
        {errors.initiatedDate && (
          <span className="text-red-500 text-xs mt-1">
            {errors.initiatedDate.message}
          </span>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="expireDate" className="block text-sm font-medium text-gray-700 mb-2">
          Expire Date (DD-MM-YYYY)
        </label>
        <input
          type="date"
          id="expireDate"
          {...register("expireDate", { required: true })}
          className="block w-full p-3 text-sm border-gray-300 border rounded-md shadow-sm "
        />
        {errors.expireDate && (
          <span className="text-red-500 text-xs mt-1">
            {errors.expireDate.message}
          </span>
        )}
      </div>

      <div className="mb-6">

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>

        <input
          type="file"
          id="file"
          accept=".pdf"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          {...register("file", { required: true })}
        />

        {errors.file && (
          <span className="text-red-500 text-xs mt-1">
            {errors.file.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className={`w-full py-2 rounded-md text-white shadow-md transition-colors duration-200 ease-in-out ${isUploading ? "bg-gray-300" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Upload Contract"}
      </button>

      {uploadError && <p className="text-red-500 text-sm mt-2">{uploadError}</p>}
    </form>

  );
};

export default PdfUploader;

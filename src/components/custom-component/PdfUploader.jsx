import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { redirect, useNavigate } from "react-router-dom";
//import axios from "axios"; // For making API requests (if applicable)

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
      const expireDate = data.expireDate;
      const initiatedDate = data.initiatedDate;

      // Implement your API request or file handling logic here
      const formData = new FormData();
      formData.append("file", file);
      formData.append("contractName", contractName);
      formData.append("expireDate", expireDate);
      formData.append("initiatedDate", initiatedDate);

      //   const response = await axios.post('/api/upload', formData, {
      //     headers: { 'Content-Type': 'multipart/form-data' },
      //   });

      //console.log("Upload successful:", response.data); // Handle success
      console.log(file, contractName, expireDate, initiatedDate);
      const id = "2354222";
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
      className="inline-block p-6 m-3 border border-spacing-2 shadow-lg rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-xl font-medium m-3">Upload a new contract</h2>
      <div className="mb-4 flex justify-center">
        <label
          htmlFor="contractName"
          className="block text-sm font-medium text-gray-700"
        >
          Contract Name
        </label>
        <input
          type="text"
          id="contractName"
          {...register("contractName", { required: true })}
          className="block w-full p-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.contractName && (
          <span className="text-red-500 text-sm mt-1">
            {errors.contractName.message}
          </span>
        )}
      </div>

      <div className="mb-4 flex justify-center">
        <label
          htmlFor="initiatedDate"
          className="block text-sm font-medium text-gray-700"
        >
          Initiated Date (DD-MM-YYYY)
        </label>
        <input
          type="date"
          id="initiatedDate"
          {...register("initiatedDate", { required: true })}
          className="block w-full p-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.initiatedDate && (
          <span className="text-red-500 text-sm mt-1">
            {errors.initiatedDate.message}
          </span>
        )}
      </div>

      <div className="mb-4 flex justify-center">
        <label
          htmlFor="expireDate"
          className="block text-sm font-medium text-gray-700"
        >
          Expire Date (DD-MM-YYY)
        </label>
        <input
          type="date"
          id="expireDate"
          {...register("expireDate", { required: true })}
          className="block w-full p-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.expireDate && (
          <span className="text-red-500 text-sm mt-1">
            {errors.expireDate.message}
          </span>
        )}
      </div>

      <div className="mb-4 flex justify-center">
        <label
          htmlFor="file"
          className="block text-sm font-medium m-4 text-gray-700"
        >
          Upload the contract file:
        </label>
        <input
          type="file"
          id="file"
          accept=".pdf"
          {...register("file", { required: true })}
          className="block p-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.file && (
          <span className="text-red-500 text-sm mt-1">
            {errors.file.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className={`${
          isUploading
            ? "bg-gray-200 shadow-sm"
            : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
        } px-4 py-2 rounded-md focus:outline-none`}
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Upload Contract"}
      </button>

      {uploadError && <p className="text-red-500 mt-2">{uploadError}</p>}
    </form>
  );
};

export default PdfUploader;

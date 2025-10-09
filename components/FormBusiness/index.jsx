// RealEstateForm.js
import React, { useState } from "react";
import LandingPageHeader from "components/LandingPageHeader1";
import LandingPageFooter from "components/LandingPageFooter";

const FormBusiness = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    userName: "",
    officialEmail: "",
    companyPhone: "",
    yearOfEstablishment: "",
    productAndServices: "",
    companyAddress: "",
    servicesRequired: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Real Estate Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="businessName"
              className="block text-xl font-medium text-gray-600"
            >
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-xl font-medium text-gray-600"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="officialEmail"
              className="block text-xl font-medium text-gray-600"
            >
              Official Email ID
            </label>
            <input
              type="email"
              id="officialEmail"
              name="officialEmail"
              value={formData.officialEmail}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="companyPhone"
              className="block text-xl font-medium text-gray-600"
            >
              Company Phone Number
            </label>
            <input
              type="tel"
              id="companyPhone"
              name="companyPhone"
              value={formData.companyPhone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="yearOfEstablishment"
              className="block text-xl font-medium text-gray-600"
            >
              Year of Establishment
            </label>
            <input
              type="text"
              id="yearOfEstablishment"
              name="yearOfEstablishment"
              value={formData.yearOfEstablishment}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="productAndServices"
              className="block text-xl font-medium text-gray-600"
            >
              Product and Services
            </label>
            <textarea
              id="productAndServices"
              name="productAndServices"
              value={formData.productAndServices}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="companyAddress"
              className="block text-xl font-medium text-gray-600"
            >
              Company Address
            </label>
            <textarea
              id="companyAddress"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="servicesRequired"
              className="block text-xl font-medium text-gray-600"
            >
              Services Required from Acrestoacres
            </label>
            <textarea
              id="servicesRequired"
              name="servicesRequired"
              value={formData.servicesRequired}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mt-6 text-xl text-yellow-50">
            <button
              type="submit"
              className="btn-primary mt-auto h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-blue-700 rounded-md py-4 px-10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
  );
};

export default FormBusiness;

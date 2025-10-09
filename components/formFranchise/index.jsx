// src/FranchiseForm.js
import React, { useState } from "react";
import LandingPageHeader from "components/LandingPageHeader1";
import LandingPageFooter from "components/LandingPageFooter";

const FormFranchise = () => {
  const [formData, setFormData] = useState({
    format: "",
    investment: "",
    space: "",
    staff: "",
    monthlySales: "",
    profitMargin: "",
    royalty: "",
    legalDocuments: null,
    aboutBusiness: "",
    productsAndServices: "",
    preferredLocations: "",
    support: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const inputValue = type === "file" ? e.target.files[0] : value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (you can send the data to a server or perform other actions)
    console.log(formData);
  };

  return (
    <div className="container mx-auto flex-col">
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
      <form onSubmit={handleSubmit} className="ml-16 my-4">
        <h1 className="text-3xl my-4 font-semibold">Franchise Form</h1>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            Format
          </label>
          <input
            type="text"
            name="format"
            value={formData.format}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            Investment with brand fee
          </label>
          <input
            type="text"
            name="investment"
            value={formData.investment}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            Space
          </label>
          <input
            type="number"
            name="space"
            value={formData.space}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            staff
          </label>
          <input
            type="number"
            name="staff"
            value={formData.staff}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            Expected Monthly Sales
          </label>
          <input
            type="number"
            name="monthySales"
            value={formData.monthlySales}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            Profit Margin
          </label>
          <input
            type="number"
            name="profitMargin"
            value={formData.profitMargin}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            Royalty
          </label>
          <input
            type="number"
            name="royalty"
            value={formData.royalty}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            About the bussiness
          </label>
          <input
            type="text"
            name="aboutBusiness"
            value={formData.aboutBusiness}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            Product and Services
          </label>
          <input
            type="text"
            name="productsAndServices"
            value={formData.productsAndServices}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            Preferred Locations
          </label>
          <input
            type="text"
            name="preferredLocations"
            value={formData.preferredLocations}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            Legal Documents
          </label>
          <input
            type="file"
            name="legalDocuments"
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-600">
            Support required from the franchise
          </label>
          <input
            type="text"
            name="support"
            value={formData.support}
            onChange={handleChange}
            className="mt-1 p-2 w-2/3 border rounded-md"
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
      <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
  );
};

export default FormFranchise;

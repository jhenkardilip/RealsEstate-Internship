// InvestorForm.js
import React, { useState } from "react";
import LandingPageHeader from "components/LandingPageHeader1";
import LandingPageFooter from "components/LandingPageFooter";

const FormInvestor = () => {
  const [userType, setUserType] = useState("investor");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [interestType, setInterestType] = useState("");
  const [location, setLocation] = useState("");
  const [investmentRange, setInvestmentRange] = useState({ min: "", max: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here

    // Example: Log form data
    console.log({
      userType,
      name,
      company,
      email,
      phone,
      investmentType,
      interestType,
      location,
      investmentRange,
    });
  };

  return (
    <div>
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Are you an Investor or Advisor?
            </label>
            <div className="mt-2">
              <input
                type="radio"
                id="investor"
                value="investor"
                checked={userType === "investor"}
                onChange={() => setUserType("investor")}
                className="mr-2"
              />
              <label htmlFor="investor">Investor</label>
              <input
                type="radio"
                id="advisor"
                value="advisor"
                checked={userType === "advisor"}
                onChange={() => setUserType("advisor")}
                className="ml-4 mr-2"
              />
              <label htmlFor="advisor">Advisor</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Company:
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Investing On:
            </label>
            <select
              id="investmentType"
              value={investmentType}
              onChange={(e) => setInvestmentType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select...</option>
              <option value="Acquiring/Buying a Business">
                Acquiring / Buying a Business
              </option>
              <option value="Investing in a Business">
                Investing in a Business
              </option>
              <option value="Lending to a Business">
                Lending to a Business
              </option>
              <option value="Taking up a Franchise/Distributorship/Sales Agency">
                Taking up a Franchise / Distributorship / Sales Agency
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Select Field Interested In:
            </label>
            <select
              id="interestType"
              value={interestType}
              onChange={(e) => setInterestType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select...</option>
              <option value="Residential real estate">
                Residential real estate
              </option>
              <option value="Commercial real estate">
                Commercial real estate
              </option>
              <option value="Industrial real estate">
                Industrial real estate
              </option>
              <option value="Land">Land</option>
              <option value="Real estate investment trusts (REITs)">
                Real estate investment trusts (REITs)
              </option>
              <option value="Real estate crowdfunding">
                Real estate crowdfunding
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Location Interested In:
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Investment Range:
            </label>
            <div className="flex">
              <input
                type="number"
                placeholder="Min"
                value={investmentRange.min}
                onChange={(e) =>
                  setInvestmentRange({
                    ...investmentRange,
                    min: e.target.value,
                  })
                }
                className="w-1/2 p-2 mr-2 border rounded"
              />
              <input
                type="number"
                placeholder="Max"
                value={investmentRange.max}
                onChange={(e) =>
                  setInvestmentRange({
                    ...investmentRange,
                    max: e.target.value,
                  })
                }
                className="w-1/2 p-2 border rounded"
              />
            </div>
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

export default FormInvestor;

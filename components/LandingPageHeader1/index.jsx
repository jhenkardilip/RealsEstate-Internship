import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Hamburger from "../../assets/images/Hamburger.svg";

const LandingPageHeader = (props) => {
  const navigate = useNavigate();
  const [showAgentDropdown, setShowAgentDropdown] = useState(false);
  const [showMarketDropdown, setShowMarketDropdown] = useState(false);
  const [showFintechDropdown, setShowFintechDropdown] = useState(false);
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePostPropertyToggle = () => {
    setShowPropertyDropdown(!showPropertyDropdown);
    setShowAgentDropdown(false);
    setShowFintechDropdown(false);
    setShowMarketDropdown(false);
  };

  const handleFintechSolutionToggle = () => {
    setShowFintechDropdown(!showFintechDropdown);
    setShowAgentDropdown(false);
    setShowMarketDropdown(false);
    setShowPropertyDropdown(false);
  };

  const handleAgentDropdownToggle = () => {
    setShowAgentDropdown(!showAgentDropdown);
    setShowMarketDropdown(false);
    setShowFintechDropdown(false);
    setShowPropertyDropdown(false);
  };

  const handleAgentDropdownSelect = (option) => {
    // Handle the selected agent type
    console.log(`Selected agent type: ${option}`);
    // You can navigate to the respective page or perform other actions based on the selected option
    if (option === "Real Estate Agents") {
      navigate("/agentList");
    } else {
      navigate("/AgentsReview");
    }
  };

  const handleFintechSolutions = (option) => {
    console.log(`Selected fintech solution: ${option}`);
    if (option === "AI Vasthu Reading") {
      navigate("/VastuPage");
    } else {
      navigate("/landingpage");
    }
  };

  const handlePropertySolutions = (option) => {
    console.log(`Selected market type: ${option}`);
    if (option === "Your Property") {
      navigate("/post-property");
    } else {
      navigate("/Business-profile1");
    }
  };

  const isLoggedIn = window.sessionStorage.getItem("Logged In");

  // const capitalMarketDropdownOptions = ["Investors/Advisors", "Franchise"];
  const agentDropdownOptions = [
    "Real Estate Agents",
    "Contractors",
    "Property Managers",
    "Real Estate Photographers",
    "Designers/Renovators",
  ];
  const fintechSolutionDropdownOptions = [
    "AI Vasthu Reading",
    "Market Valuation",
    "Loan/EMI Calculator",
    "AI Investment Suggestions",
  ];
  const postPropertyDropdownOptions = ["Your Property", "Business Project"];

  return (
    <>
      <header
        className={`${props.className} sticky top-0 z-10 drop-shadow-md w-screen`}
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img
                className=" sm:w-1/5 sm:h-1/5 cursor-pointer w-36"
                src={logo}
                alt="home"
                onClick={() => navigate("/")}
              />
            </div>
            <div className="hidden sm:block" onClick={handleMobileMenuToggle}>
              <img
                src={Hamburger}
                className="w-full h-full scale-150 flex z-20 items-end"
                alt="Hamburger Icon"
              />
            </div>
          </div>
          {isMobileMenuOpen && (
            <List
              className="sm:flex-col flex text-left justify-center items-center gap-4" // Set the grid-cols to 7
            >
              <Button onClick={() => navigate("/listingmapview")}>
                <div className="flex flex-row text-lg font-semibold">
                  Property
                </div>
              </Button>
              <div className="relative group flex">
                <Button onClick={handleAgentDropdownToggle}>
                  <div className="flex flex-row text-lg font-semibold">
                    Agents
                  </div>
                </Button>
                {showAgentDropdown && (
                  <div className="absolute z-20 bg-white-A700 border border-gray-300 divide-y divide-gray-300 mt-8 w-[200px] shadow-xl">
                    {agentDropdownOptions.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleAgentDropdownSelect(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative group flex">
                <Button onClick={() => navigate("/InvestmentPlatform")}>
                  <div className="flex flex-row text-lg font-semibold">
                    Capital Market
                  </div>
                </Button>
              </div>
              <div className="relative group flex">
                <Button onClick={handleFintechSolutionToggle}>
                  <div className="flex flex-row text-lg font-semibold">
                    Fintech Solutions
                  </div>
                </Button>
                {showFintechDropdown && (
                  <div className="absolute z-20 bg-white-A700 border border-gray-300 divide-y divide-gray-300 mt-8 w-[180px] shadow-xl">
                    {fintechSolutionDropdownOptions.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleFintechSolutions(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Button onClick={() => navigate("/aboutus")}>
                <div className="flex flex-row text-lg font-semibold">
                  About Us
                </div>
              </Button>
              <Button onClick={() => navigate("/BlogPage")}>
                <div className="flex flex-row text-lg font-semibold">Blog</div>
              </Button>
              <div className="relative group flex">
                <Button onClick={handlePostPropertyToggle}>
                  <div className="flex flex-row text-lg font-semibold">
                    Post Property
                  </div>
                </Button>
                {showPropertyDropdown && (
                  <div className="absolute z-20 bg-white-A700 border border-gray-300 divide-y divide-gray-300 mt-8 w-[180px] shadow-xl">
                    {postPropertyDropdownOptions.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handlePropertySolutions(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full">
                {isLoggedIn ? (
                  "Hey, User!"
                ) : (
                  <Button onClick={() => navigate("/Login")}>
                    {" "}
                    Get Started
                  </Button>
                )}
              </div>
            </List>
          )}
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-evenly w-full ml-16 sm:w-full">
            <List
              className="sm:flex-col flex-row flex gap-12 justify-evenly" // Set the grid-cols to 7
              orientation="horizontal"
            >
              <Button onClick={() => navigate("/listingmapview")}>
                <div className="flex flex-row text-lg font-semibold">
                  Property
                </div>
              </Button>
              <div className="relative group flex">
                <Button onClick={handleAgentDropdownToggle}>
                  <div className="flex flex-row text-lg font-semibold ml-1">
                    Agents
                  </div>
                </Button>
                {showAgentDropdown && (
                  <div className="font-manrope absolute z-20 bg-white-A700 border border-gray-300 divide-y divide-gray-300 mt-16 w-[200px] shadow-xl">
                    {agentDropdownOptions.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleAgentDropdownSelect(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative group flex">
                <Button onClick={() => navigate("/InvestmentPlatform")}>
                  <div className="flex flex-row text-lg font-semibold">
                    Capital Market
                  </div>
                </Button>
              </div>
              <div className="relative group flex">
                <Button onClick={handleFintechSolutionToggle}>
                  <div className="flex flex-row text-lg font-semibold">
                    Fintech Solutions
                  </div>
                </Button>
                {showFintechDropdown && (
                  <div className="absolute z-20 bg-white-A700 border border-gray-300 divide-y divide-gray-300 mt-16 w-[180px] shadow-xl">
                    {fintechSolutionDropdownOptions.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleFintechSolutions(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Button onClick={() => navigate("/aboutus")}>
                <div className="flex flex-row text-lg ml-2 font-semibold">
                  About Us
                </div>
              </Button>
              <Button onClick={() => navigate("/BlogPage")}>
                <div className="flex flex-row text-lg font-semibold">Blog</div>
              </Button>
              <div className="relative group flex">
                <Button onClick={handlePostPropertyToggle}>
                  <div className="flex flex-row text-lg -ml-2 font-semibold">
                    Post Property
                  </div>
                </Button>
                {showPropertyDropdown && (
                  <div className="absolute z-20 bg-white-A700 border border-gray-300 divide-y divide-gray-300 mt-16 w-[180px] shadow-xl">
                    {postPropertyDropdownOptions.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handlePropertySolutions(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </List>
          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]">
            <div className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full">
              {isLoggedIn ? (
                "Hey, User!"
              ) : (
                <Button onClick={() => navigate("/Login")}> Get Started</Button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;

import React, { useState } from "react";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader1";

export default function RealEstateForm() {
  const [transactionType, setTransactionType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [subOption, setSubOption] = useState("");
  const [additionalOption, setAdditionalOption] = useState("");
  const [customOption, setCustomOption] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [askResidentialQuestions, setAskResidentialQuestions] = useState(false);
  const [numberOfTiers, setNumberOfTiers] = useState(1);
  const [numberOfSquareFeet, setNumberOfSquareFeet] = useState("");
  const [numberOfBedrooms, setNumberOfBedrooms] = useState("");
  const [furnishedStatus, setFurnishedStatus] = useState("");
  const [numberOfBalcony, setNumberOfBalcony] = useState("");
  const [possessionStatus, setPossessionStatus] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [ownershipDetails, setOwnershipDetails] = useState("");
  const [directionFacing, setDirectionFacing] = useState("");
  const [showCommercialQuestions, setShowCommercialQuestions] = useState(false);
  const [numberOfTiersCommercial, setNumberOfTiersCommercial] = useState("");
  const [numberOfSquareFeetCommercial, setNumberOfSquareFeetCommercial] =
    useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [numberOfBathrooms, setNumberOfBathrooms] = useState("");
  const [furnishedStatusCommercial, setFurnishedStatusCommercial] =
    useState("");
  const [possessionStatusCommercial, setPossessionStatusCommercial] =
    useState("");
  const [completionDateCommercial, setCompletionDateCommercial] = useState("");
  const [ownershipDetailsCommercial, setOwnershipDetailsCommercial] =
    useState("");
  const [propertyVersion, setPropertyVersion] = useState("");
  const [numberOfFloors, setNumberOfFloors] = useState("");
  const handleIncrementTiersCommercial = () => {};
  const [numberOfSquareFeetPlot, setNumberOfSquareFeetPlot] = useState("");
  const [plotLength, setPlotLength] = useState("");
  const [plotBreadth, setPlotBreadth] = useState("");
  const [numberOfTiersPlot, setNumberOfTiersPlot] = useState("");
  const [numberOfPanSides, setNumberOfPanSides] = useState("");
  const [fencedStatusPlot, setFencedStatusPlot] = useState("");
  const [directionFacingPlot, setDirectionFacingPlot] = useState("");
  const [distanceFromMainRoad, setDistanceFromMainRoad] = useState("");

  // Function to handle incrementing tiers for plot
  const handleIncrementTiersPlot = () => {
    // Your logic for incrementing tiers
  };
  const handleIncrementTiers = () => {
    setNumberOfTiers((prevValue) => prevValue + 1);
  };
  const [numberOfAcres, setNumberOfAcres] = useState("");
  const [cropsGrown, setCropsGrown] = useState("");
  const [typesOfLand, setTypesOfLand] = useState("");
  const [waterSource, setWaterSource] = useState("");
  const [landStatus, setLandStatus] = useState("");

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
    setPropertyType("");
    setSubOption("");
    setAdditionalOption("");
    setCustomOption("");
    setCity("");
    setLocality("");
    setPinCode("");
    setAddress("");
  };

  const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
    setSubOption("");
    setAdditionalOption("");
    setCustomOption("");
    setCity("");
    setLocality("");
    setPinCode("");
    setAddress("");
  };

  const handleSubOptionChange = (e) => {
    setSubOption(e.target.value);
    setAdditionalOption("");
    setCustomOption("");
    setCity("");
    setLocality("");
    setPinCode("");
    setAddress("");
  };

  const handleAdditionalOptionChange = (e) => {
    setAdditionalOption(e.target.value);
    setCustomOption("");
  };

  const handleCustomOptionChange = (e) => {
    setCustomOption(e.target.value);
    const handlePropertyTypeChange = (e) => {
      setPropertyType(e.target.value);
      setSubOption("");
      setAdditionalOption("");
      setCustomOption("");
      setCity("");
      setLocality("");
      setPinCode("");
      setAddress("");
      setAskResidentialQuestions(e.target.value === "residential"); // Show residential questions only for residential property type
    };
  };

  return (
    <>
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
      <div className="w-1/2 max-w-screen mx-auto bg-white p-8 shadow-md flex flex-col min-h-screen sm:w-11/12">
        <h1 className="text-4xl font-semibold mb-6 font-manrope tracking-tight">
          Real Estate Form
        </h1>

        <form action="#" method="POST">
          <div className="mb-4">
            <label
              htmlFor="transactionType"
              className="block text-xl font-medium text-gray-600"
            >
              Select Transaction Type
            </label>
            <select
              id="transactionType"
              name="transactionType"
              value={transactionType}
              onChange={handleTransactionTypeChange}
              className="form-select w-full rounded-lg"
            >
              <option value="">Select...</option>
              <option value="sell">Sell</option>
              <option value="rent">Rent</option>
              <option value="lease">Lease</option>
            </select>
          </div>

          {transactionType && (
            <div className="mb-4">
              <label
                htmlFor="propertyType"
                className="block text-xl font-medium text-gray-600"
              >
                Select Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={propertyType}
                onChange={handlePropertyTypeChange}
                className="form-select w-full rounded-lg"
              >
                <option value="">Select...</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="farmland">Farmland</option>
                <option value="plot">Plot</option>
              </select>
            </div>
          )}

          {propertyType && propertyType !== "farmland" && (
            <div className="mb-4">
              <label
                htmlFor="subOption"
                className="block text-xl font-medium text-gray-600"
              >
                Select Sub-Option for {propertyType}
              </label>
              <select
                id="subOption"
                name="subOption"
                value={subOption}
                onChange={handleSubOptionChange}
                className="form-select w-full rounded-lg"
              >
                <option value="">Select...</option>
                {propertyType === "residential" && (
                  <>
                    <option value="Villa">Villa</option>
                    <option value="Flat">Flat</option>
                    <option value="Single House">Single House</option>
                  </>
                )}
                {propertyType === "commercial" && (
                  <>
                    <option value="Office Space">Office Space</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Storage">Storage</option>
                  </>
                )}
                {propertyType === "plot" && (
                  <>
                    <option value="Residential Plot">Residential Plot</option>
                    <option value="Commercial Plot">Commercial Plot</option>
                    <option value="Corner Plot">Corner Plot</option>
                    <option value="Recreational Plot">Recreational Plot</option>
                  </>
                )}
              </select>
            </div>
          )}

          {subOption &&
            propertyType !== "farmland" &&
            ![
              "Residential Plot",
              "Commercial Plot",
              "Recreational Plot",
              "Corner Plot",
            ].includes(subOption) && (
              <div className="mb-4">
                {/* Additional options based on the selected sub-option go here */}
                <label
                  htmlFor="additionalOption"
                  className="block text-xl font-medium text-gray-600"
                >
                  Additional Options for {subOption}
                </label>
                <select
                  id="additionalOption"
                  name="additionalOption"
                  value={additionalOption}
                  onChange={handleAdditionalOptionChange}
                  className="form-select w-full rounded-lg"
                >
                  <option value="">Select...</option>
                  {subOption === "Villa" && (
                    <>
                      <option value="Town house">Town House</option>
                      <option value="Courtyard">Courtyard</option>
                      <option value="Freestanding">Freestanding</option>
                      <option value="Others">Others</option>
                    </>
                  )}
                  {subOption === "Flat" && (
                    <>
                      <option value="Micro Apartment">Micro Apartment</option>
                      <option value="Builder Floor">Builder Floor</option>
                      <option value="Rail Road">Rail Road</option>
                      <option value="Convertable">Convertable</option>
                      <option value="Co-living">Co-living</option>
                      <option value="Pent House">Pent House</option>
                      <option value="Others">Others</option>
                    </>
                  )}
                  {subOption === "Single House" && (
                    <>
                      <option value="Town house">Town House</option>
                      <option value="Duplex">Duplex</option>
                      <option value="Community House">Community House</option>
                      <option value="Others">Others</option>
                    </>
                  )}
                  {subOption === "Office Space" && (
                    <>
                      <option value="Serviced OS">Serviced OS</option>
                      <option value="Private">Private</option>
                      <option value="Enterprise suite">Enterprise suite</option>
                      <option value="Convertable">Convertable</option>
                      <option value="Others">Others</option>
                    </>
                  )}
                  {subOption === "Hospitality" && (
                    <>
                      <option value="Showrooms/Shops">Showrooms/Shops</option>
                      <option value="Cafes/Party Halls">
                        Cafes/Party Halls
                      </option>
                      <option value="Hotels/Lodges">Hotels/Lodges</option>
                      <option value="Guest Houses">Guest Houses</option>
                      <option value="Factory">Factory</option>
                      <option value="Others">Others</option>
                    </>
                  )}
                  {subOption === "Storage" && (
                    <>
                      <option value="Cold Storage">Cold Storage</option>
                      <option value="Ware House">Ware House</option>
                      <option value="Others">Others</option>
                    </>
                  )}
                </select>

                {additionalOption === "Others" && (
                  <div className="mb-2 rounded-lg">
                    <label
                      htmlFor="customOption"
                      className="block text-xl font-medium text-gray-600"
                    >
                      Enter Your Option
                    </label>
                    <input
                      type="text"
                      id="customOption"
                      name="customOption"
                      value={customOption}
                      onChange={handleCustomOptionChange}
                      className="form-input w-full font-lg"
                      placeholder="Type your option..."
                    />
                  </div>
                )}
                {propertyType === "residential" && (
                  <div>
                    <label
                      htmlFor="numberOfTiers"
                      className="block text-xl font-medium text-gray-600"
                    >
                      Number of Tiers for Residential
                    </label>
                    <div className="flex items-center">
                      <input
                        type="number"
                        id="numberOfTiers"
                        name="numberOfTiers"
                        value={numberOfTiers}
                        onChange={(e) =>
                          setNumberOfTiers(Number(e.target.value))
                        }
                        className="form-input w-full text-lg rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={handleIncrementTiers}
                        className="ml-2 btn-primary h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-blue-700 rounded-md px-4"
                      >
                        +
                      </button>
                    </div>

                    {/* Additional Residential Questions */}
                    <div className="mt-4">
                      <label
                        htmlFor="numberOfSquareFeet"
                        className="block text-xl font-medium text-gray-600"
                      >
                        Number of Square Feet
                      </label>
                      <input
                        type="number"
                        id="numberOfSquareFeet"
                        name="numberOfSquareFeet"
                        value={numberOfSquareFeet}
                        onChange={(e) => setNumberOfSquareFeet(e.target.value)}
                        className="form-input w-full text-lg rounded-lg"
                      />
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="numberOfBedrooms"
                        className="block text-xl font-medium text-gray-600"
                      >
                        Number of Bedrooms
                      </label>
                      <input
                        type="number"
                        id="numberOfBedrooms"
                        name="numberOfBedrooms"
                        value={numberOfBedrooms}
                        onChange={(e) => setNumberOfBedrooms(e.target.value)}
                        className="form-input w-full text-lg rounded-lg"
                      />
                    </div>
                  </div>
                )}
                <div className="mt-4">
                  <label
                    htmlFor="furnishedStatus"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Furnished Status
                  </label>
                  <div>
                    <input
                      type="radio"
                      id="furnishedYes"
                      name="furnishedStatus"
                      value="Yes"
                      checked={furnishedStatus === "Yes"}
                      onChange={(e) => setFurnishedStatus(e.target.value)}
                      className="mr-2"
                    />
                    <label htmlFor="furnishedYes" className="mr-4">
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="furnishedNo"
                      name="furnishedStatus"
                      value="No"
                      checked={furnishedStatus === "No"}
                      onChange={(e) => setFurnishedStatus(e.target.value)}
                      className="mr-2"
                    />
                    <label htmlFor="furnishedNo">No</label>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="numberOfBalcony"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Number of Balcony
                  </label>
                  <input
                    type="number"
                    id="numberOfBalcony"
                    name="numberOfBalcony"
                    value={numberOfBalcony}
                    onChange={(e) => setNumberOfBalcony(e.target.value)}
                    className="form-input w-full text-lg rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="possessionStatus"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Possession Status
                  </label>
                  <select
                    id="possessionStatus"
                    name="possessionStatus"
                    value={possessionStatus}
                    onChange={(e) => setPossessionStatus(e.target.value)}
                    className="form-select w-full rounded-lg"
                  >
                    <option value="">Select...</option>
                    <option value="readyToMoveIn">Ready to Move In</option>
                    <option value="underConstruction">
                      Under Construction
                    </option>
                  </select>
                  {possessionStatus === "underConstruction" && (
                    <div className="mt-2">
                      <label
                        htmlFor="completionDate"
                        className="block text-xl font-medium text-gray-600"
                      >
                        Completion Date
                      </label>
                      <input
                        type="date"
                        id="completionDate"
                        name="completionDate"
                        value={completionDate}
                        onChange={(e) => setCompletionDate(e.target.value)}
                        className="form-input w-full text-lg rounded-lg"
                      />
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="ownershipDetails"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Ownership Details
                  </label>
                  <select
                    id="ownershipDetails"
                    name="ownershipDetails"
                    value={ownershipDetails}
                    onChange={(e) => setOwnershipDetails(e.target.value)}
                    className="form-select w-full rounded-lg"
                  >
                    <option value="">Select...</option>
                    <option value="freehold">Freehold</option>
                    <option value="leaseHold">Lease Hold</option>
                    <option value="powerOfAttorney">Power of Attorney</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="directionFacing"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Direction Facing
                  </label>
                  <select
                    id="directionFacing"
                    name="directionFacing"
                    value={directionFacing}
                    onChange={(e) => setDirectionFacing(e.target.value)}
                    className="form-select w-full rounded-lg"
                  >
                    <option value="">Select...</option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                    <option value="northEast">North-East</option>
                    <option value="northWest">North-West</option>
                    <option value="southEast">South-East</option>
                    <option value="southWest">South-West</option>
                  </select>
                </div>
              </div>
            )}
          {propertyType === "commercial" && (
            <div>
              <div>
                <div className="mt-4">
                  <label
                    htmlFor="numberOfTiersCommercial"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Number of Tiers
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="numberOfTiersCommercial"
                      name="numberOfTiersCommercial"
                      value={numberOfTiersCommercial}
                      onChange={(e) =>
                        setNumberOfTiersCommercial(Number(e.target.value))
                      }
                      className="form-input w-full text-lg rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={handleIncrementTiersCommercial}
                      className="ml-2 btn-primary h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-blue-700 rounded-md px-4"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Additional Commercial Questions */}
                <div className="mt-4">
                  <label
                    htmlFor="numberOfSquareFeetCommercial"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Number of Square Feet
                  </label>
                  <input
                    type="number"
                    id="numberOfSquareFeetCommercial"
                    name="numberOfSquareFeetCommercial"
                    value={numberOfSquareFeetCommercial}
                    onChange={(e) =>
                      setNumberOfSquareFeetCommercial(e.target.value)
                    }
                    className="form-input w-full text-lg rounded-lg"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="numberOfRooms"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    id="numberOfRooms"
                    name="numberOfRooms"
                    value={numberOfRooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                    className="form-input w-full text-lg rounded-lg"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="numberOfBathrooms"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Number of Bathrooms
                  </label>
                  <input
                    type="number"
                    id="numberOfBathrooms"
                    name="numberOfBathrooms"
                    value={numberOfBathrooms}
                    onChange={(e) => setNumberOfBathrooms(e.target.value)}
                    className="form-input w-full text-lg rounded-lg"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="furnishedStatusCommercial"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Furnished Status
                  </label>
                  <select
                    id="furnishedStatusCommercial"
                    name="furnishedStatusCommercial"
                    value={furnishedStatusCommercial}
                    onChange={(e) =>
                      setFurnishedStatusCommercial(e.target.value)
                    }
                    className="form-select w-full rounded-lg"
                  >
                    <option value="">Select...</option>
                    <option value="furnished">Furnished</option>
                    <option value="nonFurnished">Non-furnished</option>
                    <option value="serviced">Serviced</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="possessionStatusCommercial"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Possession Status
                  </label>
                  <select
                    id="possessionStatusCommercial"
                    name="possessionStatusCommercial"
                    value={possessionStatusCommercial}
                    onChange={(e) =>
                      setPossessionStatusCommercial(e.target.value)
                    }
                    className="form-select w-full rounded-lg"
                  >
                    <option value="">Select...</option>
                    <option value="readyToMoveIn">Ready to Move In</option>
                    <option value="underConstruction">
                      Under Construction
                    </option>
                  </select>
                  {possessionStatusCommercial === "underConstruction" && (
                    <div className="mt-2">
                      <label
                        htmlFor="completionDateCommercial"
                        className="block text-xl font-medium text-gray-600"
                      >
                        Completion Date
                      </label>
                      <input
                        type="date"
                        id="completionDateCommercial"
                        name="completionDateCommercial"
                        value={completionDateCommercial}
                        onChange={(e) =>
                          setCompletionDateCommercial(e.target.value)
                        }
                        className="form-input w-full text-lg rounded-lg"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="ownershipDetailsCommercial"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Ownership Details
                  </label>
                  <select
                    id="ownershipDetailsCommercial"
                    name="ownershipDetailsCommercial"
                    value={ownershipDetailsCommercial}
                    onChange={(e) =>
                      setOwnershipDetailsCommercial(e.target.value)
                    }
                    className="form-select w-full rounded-lg"
                  >
                    <option value="">Select...</option>
                    <option value="freehold">Freehold</option>
                    <option value="leaseHold">Lease Hold</option>
                    <option value="powerOfAttorney">Power of Attorney</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="propertyVersion"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Property Version
                  </label>
                  <select
                    id="propertyVersion"
                    name="propertyVersion"
                    value={propertyVersion}
                    onChange={(e) => setPropertyVersion(e.target.value)}
                    className="form-select w-full rounded-lg"
                  >
                    <option value="">Select...</option>
                    <option value="resale">Resale</option>
                    <option value="newProperty">New Property</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="numberOfFloors"
                    className="block text-xl font-medium text-gray-600"
                  >
                    Number of Floors
                  </label>
                  <input
                    type="number"
                    id="numberOfFloors"
                    name="numberOfFloors"
                    value={numberOfFloors}
                    onChange={(e) => setNumberOfFloors(e.target.value)}
                    className="form-input w-full text-lg rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
          {propertyType === "plot" && (
            <div>
              <div className="mt-4">
                <label
                  htmlFor="numberOfSquareFeetPlot"
                  className="block text-xl font-medium text-gray-600"
                >
                  Number of Square Feet for Plot
                </label>
                <input
                  type="number"
                  id="numberOfSquareFeetPlot"
                  name="numberOfSquareFeetPlot"
                  value={numberOfSquareFeetPlot}
                  onChange={(e) => setNumberOfSquareFeetPlot(e.target.value)}
                  className="form-input w-full text-lg rounded-lg"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="plotLength"
                  className="block text-xl font-medium text-gray-600"
                >
                  Plot Length
                </label>
                <input
                  type="number"
                  id="plotLength"
                  name="plotLength"
                  value={plotLength}
                  onChange={(e) => setPlotLength(e.target.value)}
                  className="form-input w-full text-lg rounded-lg"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="plotBreadth"
                  className="block text-xl font-medium text-gray-600"
                >
                  Plot Breadth
                </label>
                <input
                  type="number"
                  id="plotBreadth"
                  name="plotBreadth"
                  value={plotBreadth}
                  onChange={(e) => setPlotBreadth(e.target.value)}
                  className="form-input w-full text-lg rounded-lg"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="numberOfTiersPlot"
                  className="block text-xl font-medium text-gray-600"
                >
                  Number of Tiers for Plot
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="numberOfTiersPlot"
                    name="numberOfTiersPlot"
                    value={numberOfTiersPlot}
                    onChange={(e) =>
                      setNumberOfTiersPlot(Number(e.target.value))
                    }
                    className="form-input w-full text-lg rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleIncrementTiersPlot}
                    className="ml-2 btn-primary h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-blue-700 rounded-md px-4"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="numberOfPanSides"
                  className="block text-xl font-medium text-gray-600"
                >
                  Number of Pan Sides for Plot
                </label>
                <input
                  type="number"
                  id="numberOfPanSides"
                  name="numberOfPanSides"
                  value={numberOfPanSides}
                  onChange={(e) => setNumberOfPanSides(e.target.value)}
                  className="form-input w-full text-lg rounded-lg"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="fencedStatusPlot"
                  className="block text-xl font-medium text-gray-600"
                >
                  Fenced Status for Plot
                </label>
                <div>
                  <input
                    type="radio"
                    id="fencedYesPlot"
                    name="fencedStatusPlot"
                    value="Yes"
                    checked={fencedStatusPlot === "Yes"}
                    onChange={(e) => setFencedStatusPlot(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="fencedYesPlot" className="mr-4">
                    Yes
                  </label>
                  <input
                    type="radio"
                    id="fencedNoPlot"
                    name="fencedStatusPlot"
                    value="No"
                    checked={fencedStatusPlot === "No"}
                    onChange={(e) => setFencedStatusPlot(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="fencedNoPlot">No</label>
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="directionFacingPlot"
                  className="block text-xl font-medium text-gray-600"
                >
                  Direction Facing for Plot
                </label>
                <select
                  id="directionFacingPlot"
                  name="directionFacingPlot"
                  value={directionFacingPlot}
                  onChange={(e) => setDirectionFacingPlot(e.target.value)}
                  className="form-select w-full rounded-lg"
                >
                  <option value="">Select...</option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                  <option value="east">East</option>
                  <option value="west">West</option>
                  <option value="northEast">North-East</option>
                  <option value="northWest">North-West</option>
                  <option value="southEast">South-East</option>
                  <option value="southWest">South-West</option>
                </select>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="distanceFromMainRoad"
                  className="block text-xl font-medium text-gray-600"
                >
                  Distance from Main Road (in meters)
                </label>
                <input
                  type="number"
                  id="distanceFromMainRoad"
                  name="distanceFromMainRoad"
                  value={distanceFromMainRoad}
                  onChange={(e) => setDistanceFromMainRoad(e.target.value)}
                  className="form-input w-full text-lg rounded-lg"
                />
              </div>
            </div>
          )}
          {propertyType === "farmland" && (
            <div>
              <div className="mt-4">
                <label
                  htmlFor="numberOfAcres"
                  className="block text-xl font-medium text-gray-600"
                >
                  Number of Acres for Farmland
                </label>
                <input
                  type="number"
                  id="numberOfAcres"
                  name="numberOfAcres"
                  value={numberOfAcres}
                  onChange={(e) => setNumberOfAcres(e.target.value)}
                  className="form-input w-full text-lg rounded-lg"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="cropsGrown"
                  className="block text-xl font-medium text-gray-600"
                >
                  Crops Mainly Grown
                </label>
                <input
                  type="text"
                  id="cropsGrown"
                  name="cropsGrown"
                  value={cropsGrown}
                  onChange={(e) => setCropsGrown(e.target.value)}
                  className="form-input w-full text-lg rounded-lg"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="typesOfLand"
                  className="block text-xl font-medium text-gray-600"
                >
                  Types of Land
                </label>
                <select
                  id="typesOfLand"
                  name="typesOfLand"
                  value={typesOfLand}
                  onChange={(e) => setTypesOfLand(e.target.value)}
                  className="form-select w-full rounded-lg"
                >
                  <option value="">Select...</option>
                  <option value="dry">Dry</option>
                  <option value="wet">Wet</option>
                </select>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="waterSource"
                  className="block text-xl font-medium text-gray-600"
                >
                  Water Source
                </label>
                <select
                  id="waterSource"
                  name="waterSource"
                  value={waterSource}
                  onChange={(e) => setWaterSource(e.target.value)}
                  className="form-select w-full rounded-lg"
                >
                  <option value="">Select...</option>
                  <option value="bore">Bore</option>
                  <option value="canal">Canal</option>
                  <option value="dam">Dam</option>
                </select>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="landStatus"
                  className="block text-xl font-medium text-gray-600"
                >
                  Land Status
                </label>
                <div>
                  <input
                    type="radio"
                    id="emptyLand"
                    name="landStatus"
                    value="empty"
                    checked={landStatus === "empty"}
                    onChange={(e) => setLandStatus(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="emptyLand" className="mr-4">
                    Empty Land
                  </label>
                  <input
                    type="radio"
                    id="cultivatedLand"
                    name="landStatus"
                    value="cultivated"
                    checked={landStatus === "cultivated"}
                    onChange={(e) => setLandStatus(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="cultivatedLand">Cultivated</label>
                </div>
              </div>
            </div>
          )}
          <div className="mb-4">
            {/* User details section based on the selected property type */}
            <label className="block text-3xl font-manrope font-semibold text-black">
              User Details
            </label>
            <div className="mt-2">
              <label htmlFor="city" className="block text-xl text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="form-input w-full text-lg rounded-lg"
                placeholder="Enter City..."
              />
            </div>
            <div className="mt-2">
              <label htmlFor="locality" className="block text-xl text-gray-600">
                Locality
              </label>
              <input
                type="text"
                id="locality"
                name="locality"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="form-input w-full text-lg rounded-lg"
                placeholder="Enter locality..."
              />
            </div>
            <div className="mt-2">
              <label htmlFor="pinCode" className="block text-xl text-gray-600">
                Pin Code
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="form-input w-full text-lg rounded-lg"
                placeholder="Enter pin code..."
              />
            </div>
            <div className="mt-2">
              <label htmlFor="address" className="block text-xl text-gray-600">
                Address(*optional)
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-input w-full  text-lg rounded-lg"
                placeholder="Enter address..."
              />
            </div>
            {askResidentialQuestions && (
              <div className="mb-4">
                <label
                  htmlFor="residentialQuestion"
                  className="block text-xl font-medium text-gray-600"
                >
                  Additional Questions for Residential Property
                </label>
                {/* Add your additional questions or inputs here */}
                <div className="mt-2">
                  <label
                    htmlFor="residentialQuestion1"
                    className="block text-xl text-gray-600"
                  >
                    Question 1
                  </label>
                  <input
                    type="text"
                    id="residentialQuestion1"
                    name="residentialQuestion1"
                    className="form-input w-full text-lg rounded-lg"
                    placeholder="Enter your answer..."
                  />
                </div>
                {/* Add more questions as needed */}
              </div>
            )}
          </div>

          <div className="mt-6 text-xl text-yellow-50">
            <button
              type="submit"
              className="btn-primary h-14 bg-black rounded-md py-4 px-10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </>
  );
}

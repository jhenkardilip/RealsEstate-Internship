import React, { useState } from "react";

import {
  Button,
  GoogleMap,
  Img,
  Input,
  List,
  SelectBox,
  Text,
} from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader1";

const dropdownlargeOptionsList = [
  { label: "Buy", value: "Buy" },
  { label: "Rent", value: "Rent" },
  { label: "Lease", value: "Lease" },
];
const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownlargeOneOptionsList = [
  { label: "Bed-1", value: "Bed-1" },
  { label: "Bed-2", value: "Bed-2" },
  { label: "Bed-3", value: "Bed-3" },
];

const ListingMapViewPage = () => {
  const [activeSection, setActiveSection] = useState("propertyDetails");
  const [showFiltersPopup, setShowFiltersPopup] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [showTenancyPreference, setShowTenancyPreference] = useState(false);
  const [showTypesOfCommercialSpace, setShowTypesOfCommercialSpace] =
    useState(false);
  const [showHospitalityOptions, setShowHospitalityOptions] = useState(false); // If required
  const [selectedPropertyType, setSelectedPropertyType] = useState(""); // State to hold selected property type

  const handleDropdownChange = (value) => {
    // Handle logic based on dropdown selection (Buy, Rent, Lease, Commercial)
    // For example, show or hide filters based on the selection
    setSelectedPropertyType(value); // Set the selected property type
    if (value === "Rent" || value === "Commercial") {
      setShowTenancyPreference(true); // Show the tenancy preference filter
      if (value === "Commercial") {
        setShowTypesOfCommercialSpace(true); // Show types of commercial space filter for Commercial property type
      } else {
        setShowTypesOfCommercialSpace(false); // Hide types of commercial space filter for other property types
      }
    } else {
      setShowTenancyPreference(false); // Hide the tenancy preference filter
      setShowTypesOfCommercialSpace(false); // Hide types of commercial space filter
    }
  };

  const priceOptionsList = [
    { label: "Residential", value: "residential" },
    { label: "Commercial", value: "commercial" },
    { label: "Villa", value: "villa" },
    { label: "Farmhouse", value: "farmhouse" },
  ];

  // New dropdown options for types of commercial space
  const typesOfCommercialSpaceOptions = [
    { label: "Office Space", value: "officeSpace" },
    { label: "Storage", value: "storage" },
    { label: "Hospitality", value: "hospitality" },
  ];

  const toggleFiltersPopup = () => {
    setShowFiltersPopup(!showFiltersPopup);
  };

  const changeSection = (section) => {
    setActiveSection(section);
  };

  const propertyDetailsFilters = [
    { label: "Bathrooms 2+", value: "bathrooms" },
    { label: "Square Feet 750 - 2000 sq. ft", value: "squareFeet" },
    { label: "Year Built 5 - 15", value: "yearBuilt" },
    { label: "For Sale By Agent", value: "forSaleByAgent" },
    // Add more property details filters as needed
  ];

  const amenitiesFilters = [
    { label: "Swimming Pool", value: "swimmingPool" },
    { label: "Gym", value: "gym" },
    { label: "Parking", value: "parking" },
    { label: "Garden", value: "garden" },
    { label: "Gas Connection", value: "gasConnection" },
    { label: "Pool", value: "pool" },
    { label: "AC", value: "ac" },
    { label: "Lift", value: "lift" },
    { label: "Security", value: "security" },
    { label: "wifi", value: "wifi" },
    { label: "Mall", value: "mall" },
    { label: "Pharmacy Access", value: "pharmaAccess" },
    { label: "Store Room", value: "storeRoom" },
    // Add more amenities filters as needed
  ];

  const landingPageCardPropList = [
    {
      image: "images/img_image_1.png",
      p3bedroom: "3 Bed Room",
      bathcounter: "2 Baths",
      sqftcounter: "1,200 sqft",
      p1bath: "Family",
      viewDetails: "View Details",
      price: "$900",
    },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_2.png" },
  ];
  const handleAmenityChange = (amenity) => {
    const isSelected = selectedAmenities.includes(amenity.value);

    if (isSelected) {
      setSelectedAmenities((prevSelected) =>
        prevSelected.filter((selected) => selected !== amenity.value)
      );
    } else {
      setSelectedAmenities((prevSelected) => [...prevSelected, amenity.value]);
    }
  };
  return (
    <>
      <div className="bg-gray-51 flex flex-col sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
          <div className="flex flex-col font-manrope items-center justify-start md:px-10 sm:px-5 px-8 w-full">
            <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                Find Property
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-1 flex-col h-[60px] md:h-auto items-start justify-start px-4 py-3.5 rounded-[10px] w-full">
                    <Input
                      name="frame1000001565"
                      placeholder="Enter your address"
                      className="font-semibold p-0 placeholder:text-gray-700 text-gray-700 text-left text-lg w-full"
                      wrapClassName="flex pt-2 w-full sm:w-1/2 sm:w-full"
                      suffix={
                        <Img
                          className="mt-auto mb-[3px] h-6 ml-10"
                          src="images/img_search_gray_700.svg"
                          alt="search"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                    <SelectBox
                      className="bg-white-A700 border border-bluegray-100 border-solid font-bold pb-3.5 pt-[18px] rounded-[10px] text-gray-700 text-lg h-[60px] w-20 text-center"
                      placeholderClassName="text-gray-700"
                      indicator={
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowdown_gray_700.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="dropdownlarge"
                      options={dropdownlargeOptionsList}
                      isSearchable={false}
                      placeholder="Buy"
                    />
                  </div>
                  <SelectBox
                    className="bg-white-A700 border border-bluegray-100 border-solid md:flex-1 font-bold px-4 py-[17px] rounded-[10px] text-gray-700 text-left text-lg w-[18%] md:w-full h-[60px]"
                    placeholderClassName="text-gray-700"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="price"
                    options={priceOptionsList}
                    isSearchable={false}
                    placeholder="Property Type"
                    onChange={(value) => handleDropdownChange(value)}
                  />
                  <div className="flex flex-row gap-5 items-start justify-start w-[300px]">
                    <SelectBox
                      className="bg-white-A700 border border-bluegray-100 border-solid font-bold pl-4 pr-[9px] py-[17px] rounded-[10px] text-gray-700 text-left text-lg w-[50%] md:w-full h-[60px]"
                      placeholderClassName="text-gray-700"
                      indicator={
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowdown_gray_700.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="dropdownlarge_One"
                      options={dropdownlargeOneOptionsList}
                      isSearchable={false}
                      placeholder="Bedroom"
                    />
                    <Button
                      className="bg-white-A700 border border-bluegray-100 border-solid cursor-pointer flex items-center justify-center pl-[15px] pr-[22px] py-[17px] rounded-[10px]  h-[60px]"
                      onClick={toggleFiltersPopup}
                      rightIcon={
                        <Img
                          className="h-6 mb-px ml-3"
                          src="images/img_plus_gray_700.svg"
                          alt="plus"
                        />
                      }
                    >
                      <div className="font-bold sm:pr-5 text-gray-700 text-left text-lg">
                        More
                      </div>
                    </Button>
                    {showFiltersPopup && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                        {/* Your popup content here */}
                        <div className="bg-white p-8 rounded-lg bg-slate-50 border-2 w-[400px] h-[500px]">
                          {/* Filter navigation buttons */}
                          <div className="flex items-center justify-between mb-4 ">
                            <Button
                              className={`font-semibold ${
                                activeSection === "propertyDetails"
                                  ? "text-gray-900"
                                  : "text-gray-700"
                              }`}
                              onClick={() => changeSection("propertyDetails")}
                            >
                              Property Details
                            </Button>
                            <Button
                              className={`font-semibold ${
                                activeSection === "amenities"
                                  ? "text-gray-900"
                                  : "text-gray-700"
                              }`}
                              onClick={() => changeSection("amenities")}
                            >
                              Amenities
                            </Button>
                          </div>

                          {/* Filter options based on active section */}
                          {activeSection === "propertyDetails" && (
                            <div className="flex flex-col gap-4 max-h-[350px] overflow-y-auto">
                              {[
                                {
                                  name: "locality",
                                  placeholder: "Locality",
                                  type: "text",
                                },
                                {
                                  name: "city",
                                  placeholder: "City",
                                  type: "text",
                                },
                                {
                                  name: "area",
                                  placeholder: "Area",
                                  type: "text",
                                },
                                {
                                  name: "bhk",
                                  placeholder: "BHK",
                                  type: "number",
                                },
                                {
                                  name: "possessionStatus",
                                  placeholder: "Possession Status",
                                  type: "text",
                                },
                                {
                                  name: "furnishedStatus",
                                  placeholder: "Furnished Status",
                                  type: "radio",
                                  options: ["Furnished", "Not Furnished"],
                                },
                                {
                                  name: "bathroom",
                                  placeholder: "Bathroom",
                                  type: "number",
                                },
                                {
                                  name: "directionFacing",
                                  placeholder: "Direction Facing",
                                  type: "radio",
                                  options: [
                                    "North",
                                    "South",
                                    "East",
                                    "West",
                                    // "North-East",
                                    // "North-West",
                                    // "South-East",
                                    // "South-West",
                                  ],
                                },
                                {
                                  name: "tenancePreferred",
                                  placeholder: "Tenancy Preferred",
                                  type: "text",
                                },
                                {
                                  name: "costPerSquareFeet",
                                  placeholder: "Cost Per Square Feet",
                                  type: "number",
                                },
                              ].map((param) => (
                                <div
                                  key={param.name}
                                  className="flex flex-col gap-1"
                                >
                                  <label className="text-gray-700 text-sm">
                                    {param.placeholder}
                                  </label>
                                  {param.type === "radio" ? (
                                    <div className="flex gap-2">
                                      {param.options.map((option) => (
                                        <label
                                          key={option}
                                          className="flex items-center"
                                        >
                                          <input
                                            type="radio"
                                            name={param.name}
                                            value={option}
                                            className="mr-2"
                                          />
                                          {option}
                                        </label>
                                      ))}
                                    </div>
                                  ) : (
                                    <input
                                      type={param.type}
                                      name={param.name}
                                      placeholder={param.placeholder}
                                      className="border border-bluegray-101 border-solid font-bold p-2.5 rounded-[10px] text-gray-700 text-lg w-full"
                                    />
                                  )}
                                </div>
                              ))}
                              {showTypesOfCommercialSpace &&
                                selectedPropertyType === "Commercial" && (
                                  <SelectBox
                                    className="bg-white-A700 border border-bluegray-100 border-solid md:flex-1 font-bold px-4 py-[17px] rounded-[10px] text-gray-700 text-left text-lg w-[18%] md:w-full h-[60px]"
                                    placeholderClassName="text-gray-700"
                                    indicator={
                                      <Img
                                        className="h-6 w-6"
                                        src="images/img_arrowdown_gray_700.svg"
                                        alt="arrow_down"
                                      />
                                    }
                                    isMulti={false}
                                    name="commercialSpaceType"
                                    options={typesOfCommercialSpaceOptions}
                                    isSearchable={false}
                                    placeholder="Commercial Space Type"
                                  />
                                )}
                            </div>
                          )}

                          {activeSection === "amenities" && (
                            <div className="flex flex-col gap-2">
                              {amenitiesFilters.map((amenity) => (
                                <label
                                  key={amenity.value}
                                  className="flex items-center"
                                >
                                  <input
                                    type="checkbox"
                                    value={amenity.value}
                                    checked={selectedAmenities.includes(
                                      amenity.value
                                    )}
                                    onChange={() =>
                                      handleAmenityChange(amenity)
                                    }
                                    className="mr-2"
                                  />
                                  <span className="text-gray-700 text-sm">
                                    {amenity.label}
                                  </span>
                                </label>
                              ))}
                            </div>
                          )}

                          {/* Close button */}
                          <Button
                            onClick={toggleFiltersPopup}
                            className="my-4 text-red-600"
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                  <Button
                    className="bg-gray-900 cursor-pointer flex items-center justify-center min-w-[124px] px-4 py-[17px] rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-5 mt-px mb-[3px] ml-2.5"
                        src="images/img_search_white_a700.svg"
                        alt="search"
                      />
                    }
                  >
                    <div className="font-bold text-left text-lg text-white-A700">
                      Search
                    </div>
                  </Button>
                </div>
                <div className="flex flex-row flex-wrap gap-2.5 items-start justify-start max-w-[1200px] w-full">
                  <Button
                    className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center px-[13px] py-2 rounded-[10px] w-[145px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-0.5 mb-px ml-2"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray-700 text-left text-sm">
                      Bathrooms 2+
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[243px] px-[13px] py-2 rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-px mb-[3px] ml-2"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray-700 text-left text-sm">
                      Square Feet 750 - 2000 sq. ft
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[151px] px-[13px] py-2 rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-0.5 mb-px ml-2"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray-700 text-left text-sm">
                      Year Built 5 - 15
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[168px] px-[13px] py-2 rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-px mb-[3px] ml-2"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray-900 text-left text-sm">
                      For Sale By Agent
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[174px] px-[13px] py-2 rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-0.5 mb-px ml-2"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray-900 text-left text-sm">
                      New Construction
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1200px] mx-auto w-full">
              <div className="h-[428px] relative w-full">
                <GoogleMap
                  className="h-[428px] m-auto rounded-[10px] w-full"
                  showMarker={false}
                ></GoogleMap>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto p-[67px] md:px-10 sm:px-5 w-[91%]"
                  style={{ backgroundImage: "url('images/img_group1.svg')" }}
                >
                  <div className="bg-white-A700 border border-gray-600 border-solid flex flex-col items-start justify-start mb-[15px] mt-6 px-4 py-6 rounded-lg w-[308px]">
                    <div className="flex flex-col gap-[21.66px] items-start justify-start w-[276px]">
                      <div className="flex flex-row gap-[9.63px] items-center justify-start w-full">
                        <Img
                          className="h-[19px] w-[19px]"
                          src="images/img_eye.svg"
                          alt="eye"
                        />
                        <Text
                          className="flex-1 text-[12.83px] text-gray-900 w-auto"
                          size="txtManropeSemiBold1283"
                        >
                          2861 62nd Ave, Oakland, CA 94605
                        </Text>
                      </div>
                      <List
                        className="flex flex-col gap-[16.84px] items-start w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-[32.08px] items-center justify-between my-0 w-full">
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_bookmark.svg"
                              alt="bookmark"
                            />
                            <Text
                              className="flex-1 text-[12.83px] text-gray-700 w-auto"
                              size="txtManropeSemiBold1283Gray700"
                            >
                              3 Bed Room
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_ticket.svg"
                              alt="ticket"
                            />
                            <Text
                              className="text-[12.83px] text-gray-700 w-auto"
                              size="txtManropeSemiBold1283Gray700"
                            >
                              1 Bath
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[32.08px] items-center justify-between my-0 w-full">
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_icon.svg"
                              alt="icon"
                            />
                            <Text
                              className="flex-1 text-[12.83px] text-gray-700 w-auto"
                              size="txtManropeSemiBold1283Gray700"
                            >
                              1,032 sqft
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_iocnmenu_16x16.svg"
                              alt="iocnmenu"
                            />
                            <Text
                              className="text-[12.83px] text-gray-700 w-auto"
                              size="txtManropeSemiBold1283Gray700"
                            >
                              Family
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-[19.25px] text-gray-900 tracking-[-0.39px] w-auto"
                          size="txtManropeBold1925"
                        >
                          $649,900
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {landingPageCardPropList.map((props, index) => (
                    <React.Fragment key={`LandingPageCard${index}`}>
                      <LandingPageCard
                        className="flex flex-1 mb-24 flex-col h-[512px] md:h-auto items-start justify-start w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                  <Button className="border border-gray-700 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    1
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    2
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    3
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    4
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    5
                  </Button>
                </div>
                <Button
                  className="border border-bluegray-102 border-solid cursor-pointer flex items-center justify-center min-w-[134px] px-[17px] py-[13px] rounded-[10px]"
                  rightIcon={
                    <Img
                      className="h-4 mt-px mb-[5px] ml-1"
                      src="images/img_arrowright_gray_900.svg"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-semibold text-base text-gray-900 text-left">
                    Next Page
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default ListingMapViewPage;

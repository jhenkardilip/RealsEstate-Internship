import React, { useState } from "react";
import { Button } from "components";
import LandingPageHeader from "components/LandingPageHeader1";
import LandingPageFooter from "components/LandingPageFooter";
import backImage from "../../assets/images/vasthuback.jpg";
import vastuImg from "../../assets/images/vastuImg.jpeg";
const VastuAI = () => {
  const [formData, setFormData] = useState({
    mainEntrance: "",
    kitchen: "",
    masterBedroom: "",
    childrensBedroom: "",
    guestRoom: "",
    drawingOrDiningRoom: "",
    tubeWellOrUndergroundTank: "",
    toiletsOrBathrooms: "",
    garageOrServantsQuarters: "",
    houseDirection: "",
  });

  const questions = [
    {
      identifier: "mainEntrance",
      question: "What is the position of the Main Entrance/Gate?",
    },
    { identifier: "kitchen", question: "Where is the Kitchen?" },
    { identifier: "masterBedroom", question: "Where is the master bedroom?" },
    {
      identifier: "childrensBedroom",
      question: "Where is the children's bedroom?",
    },
    { identifier: "guestRoom", question: "Where is the Guest Room?" },
    {
      identifier: "drawingOrDiningRoom",
      question: "Where is the Drawing Room or the Dining room?",
    },
    {
      identifier: "tubeWellOrUndergroundTank",
      question: "Where is the Tube-well or Underground Tank?",
    },
    {
      identifier: "toiletsOrBathrooms",
      question: "Where are the Toilets or bathrooms?",
    },
    {
      identifier: "garageOrServantsQuarters",
      question: "Where is the Garage or Servant's Quarters?",
    },
    {
      identifier: "houseDirection",
      question: "Which direction of the plot is the house built in?",
    },
  ];

  const handleInputChange = (question, value) => {
    setFormData({
      ...formData,
      [question]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to calculate Vastu score or perform other actions
    console.log("Form submitted with data:", formData);
  };

  const handleReset = () => {
    setFormData({
      mainEntrance: "",
      kitchen: "",
      masterBedroom: "",
      childrensBedroom: "",
      guestRoom: "",
      drawingOrDiningRoom: "",
      tubeWellOrUndergroundTank: "",
      toiletsOrBathrooms: "",
      garageOrServantsQuarters: "",
      houseDirection: "",
    });
  };

  const backgroundStyles = {
    backgroundImage: `url(${backImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex flex-col">
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
      <div></div>
      <div
        className="w-6xl mx-auto mt-8 text-white-A700 rounded-lg"
        style={backgroundStyles}
      >
        <h1 className="text-3xl font-bold mt-6 mx-6 border-b-2">
          Vastu Score Calculator
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mb-4 flex flex-col overflow-y-auto rounded-lg shadow-xl py-8 px-12"
        >
          {/* Render radio options for each question */}
          {questions.map(({ identifier, question }) => (
            <div key={identifier} className="mb-8">
              <label className="block mb-2 font-semibold">{question}</label>
              <div className="grid grid-cols-4 gap-4">
                {[
                  "East",
                  "West",
                  "North",
                  "South",
                  "Northeast",
                  "Northwest",
                  "Southeast",
                  "Southwest",
                ].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={`${identifier}-${option}`}
                      name={identifier}
                      value={option}
                      checked={formData[identifier] === option}
                      onChange={() => handleInputChange(identifier, option)}
                    />
                    <label htmlFor={`${identifier}-${option}`} className="ml-2">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-6 ">
            <Button
              type="submit"
              className="bg-white-A700 text-black px-4 py-2 rounded font-semibold"
            >
              View Full Vastu
            </Button>
            <Button
              type="Button"
              onClick={handleReset}
              className="bg-white-A700 text-black px-4 py-2 rounded font-semibold"
            >
              Reset
            </Button>
            <Button
              type="Button"
              className="bg-white-A700 text-black px-4 py-2 rounded font-semibold"
            >
              View Matching
            </Button>
          </div>
        </form>
      </div>
      <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
  );
};

export default VastuAI;

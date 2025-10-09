import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Img, Text } from "components";
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const LandingPageFooter = (props) => {
  const navigate = useNavigate();
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    // Include the Simple Analytics script
    const script = document.createElement("script");
    script.src = "https://scripts.simpleanalyticscdn.com/latest.js";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Fetch real-time visitor count
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.simpleanalytics.io/realsstates.com//count"
        );
        const data = await response.json();
        setVisitorCount(data.visits);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    const interval = setInterval(fetchData, 5000); // Update every 5 seconds

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-[43px] items-start justify-start w-[341px]">
              <div className="flex flex-row gap-[11px] h-10 md:h-auto items-center justify-start w-[341px]">
                <Img
                  className="w-2/5 sm:w-2/5 sm:h-2/5 cursor-pointer"
                  src={logo}
                  alt="home_One"
                  onClick={() => navigate("/")}
                />
              </div>
              <div className="flex flex-col gap-7 h-[194px] md:h-auto items-start justify-start w-full ">
                <Text className="leading-[160.00%] text-base text-gray-900">
                  <>
                    59 Bervely Hill Ave, Brooklyn Town,
                    <br />
                    New York, NY 5630, CA, US
                  </>
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text className="text-base text-gray-900 w-auto">
                    +(123) 456-7890
                  </Text>
                  <Text className="text-base text-gray-900 w-auto">
                    info@mail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </div>
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_instagram_orange_a700_30x30.svg"
                    alt="instagram"
                  />
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_clock_orange_a700.svg"
                      alt="clock"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Features
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Button onClick={() => navigate("/aboutus")}>
                    <div className="flex">
                      <Link to="src\pages\AboutUs\index.jsx">About Us</Link>
                    </div>
                  </Button>
                  <Button onClick={() => navigate("/contactpage")}>
                    <div className="flex">
                      <Link to="src\pages\ContactPage\index.jsx">Contact</Link>
                    </div>
                  </Button>
                  <Text className="text-base text-gray-900 w-full">Search</Text>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Documentation{" "}
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Button onClick={() => navigate("/faq")}>
                    <div className="flex">
                      <Link to="src\pages\FAQ\index.jsx">FAQ</Link>
                    </div>
                  </Button>
                  <a href="" target="_blank">
                    <button>Privacy Policy</button>
                  </a>

                  <a href="" target="_blank">
                    <button>License</button>
                  </a>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Others
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Button onClick={() => navigate("/Login")}>
                    <div className="flex">
                      <Link to="src\pages\Login\index.jsx">Log In</Link>
                    </div>
                  </Button>
                  <Text className="text-base text-gray-900 w-full">
                    New Password
                  </Text>
                  <Text className="text-base text-gray-900 w-full">
                    Reset Password
                  </Text>
                  <Button onClick={() => navigate("/Login")}>
                    <div className="flex">
                      <Link to="src\pages\Login\index.jsx">Create Account</Link>
                    </div>
                  </Button>
                  {visitorCount !== null && (
                    <Text className="text-base text-gray-900 w-full">
                      Visitor Count: {visitorCount}
                    </Text>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Text className="text-base text-gray-900 w-full">
            © 2022. All rights reserved.
          </Text>
        </div>
      </footer>
    </>
  );
};

LandingPageFooter.defaultProps = {};

export default LandingPageFooter;

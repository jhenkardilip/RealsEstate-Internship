import React, { useState } from "react";
import LandingPageHeader from "components/LandingPageHeader1";
import LandingPageFooter from "components/LandingPageFooter";
import backImage from "../../assets/images/homeback3.jpg";
import backImage1 from "../../assets/images/greyback.avif";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, List, Text } from "components";
import { Link } from "react-router-dom";
import AuctionImg from "../../assets/images/AuctionImg.jpg";
export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const backgroundStyles = {
    backgroundImage: `url(${backImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const backgroundStyles1 = {
    backgroundImage: `url(${backImage1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
      <div
        className="flex items-center justify-center min-h-screen min-w-screen"
        style={backgroundStyles}
      >
        <div className="flex flex-col items-center justify-center w-2/3 lg:w-3/4 xl:w-1/2 h-full lg:h-3/4 xl:h-1/2 bg-slate-50 bg-opacity-40 rounded-xl backdrop-blur-sm sm:w-screen sm:h-3/5 mx-1 sm:backdrop-blur-lg">
          <form className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex-col w-screen">
              <h1 className="text-3xl my-4 font-bold p-2 rounded-md text-center sm:text-xl md:text-lg">
                World's Largest No Brokerage Property Site
              </h1>
              <div className="flex justify-center items-center text-center sm:flex-col w-screen">
                <div className="flex">
                  <select className="h-10">
                    <option>Places</option>
                    <option>Bengaluru</option>
                    <option>Mysuru</option>
                    <option>Mangaluru</option>
                  </select>
                </div>
                <div className="flex sm:mt-4">
                  <input
                    type="text"
                    placeholder="Search localities or landmarks"
                    className="h-1/5 w-11/12 border text-lg justify-center items-center"
                  />
                  <Link to="/listingmapview">
                    <button
                      type="submit"
                      className=" text-white-A700 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 rounded-l-none"
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center my-6 flex-col ">
                <div className="flex  gap-3 pb-4 font-medium sm:flex-col ">
                  <label className="text-lg flex">
                    <input
                      type="radio"
                      value="residential"
                      checked={selectedOption === "residential"}
                      onChange={handleOptionChange}
                      className="mr-4 form-radio text-black"
                    />
                    Residential
                  </label>
                  <label className="text-lg flex">
                    <input
                      type="radio"
                      value="commercial"
                      checked={selectedOption === "commercial"}
                      onChange={handleOptionChange}
                      className="mr-4 form-radio text-black"
                    />
                    Commercial
                  </label>
                  <label className="text-lg flex">
                    <input
                      type="radio"
                      value="plot"
                      checked={selectedOption === "plot"}
                      onChange={handleOptionChange}
                      className="mr-4 form-radio text-black"
                    />
                    Plot
                  </label>
                  <label className="text-lg flex">
                    <input
                      type="radio"
                      value="farmland"
                      checked={selectedOption === "farmland"}
                      onChange={handleOptionChange}
                      className="mr-4 form-radio text-black"
                    />
                    Farmland
                  </label>
                </div>
                <div className="text-lg text-center font-semibold">
                  <p>-------Are You A Property Owner?-------</p>
                </div>
                <Link to="/post-property">
                  <button className="flex mt-4 justify-center items-center p-3 h-10 w-52 rounded text-center mx-auto text-white-A700 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300">
                    Post Free Property Ad
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="bg-gray-51 flex flex-col font-manrope items-center justify-center p-[100px] md:px-10 sm:px-5 w-full"
        style={backgroundStyles1}
      >
        <div className="flex flex-col md:gap-10 gap-[150px] items-center justify-center max-w-[1200px] mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start w-full">
            <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="leading-[140.00%] max-w-[557px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                  size="txtManropeExtraBold36"
                >
                  Discover your Vastu alignment!
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[557px] md:max-w-full text-gray-700 text-lg"
                  size="txtManropeRegular18Gray700"
                >
                  Discover the transformative power of Vastu as it guides you to
                  create spaces that resonate with positive vibrations and
                  support your journey towards holistic living. Rooted in the
                  principles of balance and cosmic energy, Vastu offers a
                  profound understanding of how our surroundings impact our
                  well-being. Explore the art of aligning your home or workplace
                  with natural forces to invite positivity, prosperity, and
                  harmony into your life
                </Text>
              </div>
              <Button
                className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700"
                onClick={() => navigate("/VastuPage")}
              >
                Get Started
              </Button>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Img
                  className="h-[327px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/vasthu1.png"
                  alt="vasthupic1"
                />
                <Img
                  className="h-[218px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/vasthu3.jpg"
                  alt="rectangleTwentyOne"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Img
                  className="h-[218px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/vasthu2.png"
                  alt="rectangleNineteen"
                />
                <Img
                  className="h-[327px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/vasthu4.jpg"
                  alt="rectangleTwenty"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
            <Img
              className="flex-1 md:flex-none h-[350px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
              src="images/valuation1(1).jpg"
              alt="rectangleTwenty_One"
            />
            <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col mt-20 gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] max-w-[521px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                    size="txtManropeExtraBold36"
                  >
                    Unlock the true potential of your property with our
                    cutting-edge valuation and retail prediction tool
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[521px] md:max-w-full text-gray-700 text-lg"
                    size="txtManropeRegular18Gray700"
                  >
                    Determine its market value and retail valuation with our
                    comprehensive assessment tool. Discover the true value of
                    your asset with our property valuation service.Empowering
                    property owners and buyers alike, our platform offers
                    comprehensive insights into the market value and retail
                    projections of your real estate assets. Whether you're
                    planning to sell, buy, or simply curious about your
                    property's worth, our accurate valuation system provides a
                    clear understanding of its financial standing. Explore the
                    future possibilities and make informed decisions backed by
                    our precise property valuation and retail value predictions
                  </Text>
                </div>
              </div>
              <Button
                className="bg-gray-900 cursor-pointer font-semibold min-w-[134px] py-[13px] rounded-[10px] text-base text-center text-white-A700"
                onClick={() => navigate("/landingpage")}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
            <Img
              className="flex-1 md:flex-none h-[350px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
              src={AuctionImg}
              alt="rectangleTwenty_One"
            />
            <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col mt-20 gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] max-w-[521px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                    size="txtManropeExtraBold36"
                  >
                    Unlock Your Dream Home: Dive into the Excitement of Real
                    Estate Auctions!
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[521px] md:max-w-full text-gray-700 text-lg"
                    size="txtManropeRegular18Gray700"
                  >
                    Explore unparalleled opportunities in real estate through
                    our cutting-edge auction platform. Dive into a dynamic
                    marketplace where transparency and competition converge,
                    offering a streamlined and thrilling experience for buyers.
                    From coveted homes to lucrative investments, our
                    user-friendly interface empowers you to browse, bid, and
                    secure your dream property with ease. Join us in
                    revolutionizing the real estate journey, where every bid
                    brings you closer to the keys of your future.
                  </Text>
                </div>
              </div>
              <Button
                className="bg-gray-900 cursor-pointer font-semibold min-w-[134px] py-[13px] rounded-[10px] text-base text-center text-white-A700"
                onClick={() => navigate("/Auction")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
              <Text
                className="flex-1 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-auto"
                size="txtManropeExtraBold36WhiteA700"
              >
                News & Consult
              </Text>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
                onClick={() => navigate("/listing")}
                rightIcon={
                  <Img
                    className="h-6 mb-[3px] ml-2"
                    src="images/img_arrowright.svg"
                    alt="arrow_right"
                  />
                }
              >
                <div className="font-bold text-left text-lg text-orange-A700">
                  Explore All
                </div>
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_image_350x384.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                    size="txtManropeBold24"
                  >
                    9 Easy-to-Ambitious DIY Projects to Improve Your Home
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                    <Text
                      className="text-deep_orange-400 text-lg w-auto"
                      size="txtManropeBold18Deeporange400"
                    >
                      Read the Article
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_deep_orange_400.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_image_6.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                    size="txtManropeBold24"
                  >
                    Serie Shophouse Launch In July, Opportunity For Investors
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                    <Text
                      className="text-deep_orange-400 text-lg w-auto"
                      size="txtManropeBold18Deeporange400"
                    >
                      Read the Article
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_deep_orange_400.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_image_7.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                    size="txtManropeBold24"
                  >
                    Looking for a New Place? Use This Time to Create Your
                    Wishlist
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                    <Text
                      className="text-deep_orange-400 text-lg w-auto"
                      size="txtManropeBold18Deeporange400"
                    >
                      Read the Article
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_deep_orange_400.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-gray-401 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[100px] py-10 rounded-[10px] w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[200px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.56px] w-full"
                  size="txtManropeExtraBold28"
                >
                  For Recent Updates and News
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[600px] md:max-w-full text-center text-gray-900 text-lg"
                  size="txtManropeRegular18"
                >
                  We help businesses customize, automate and scale up their ad
                  production and delivery.
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                <Input
                  name="input"
                  placeholder="Enter your Email"
                  className="font-semibold p-0 placeholder:text-gray-700 text-gray-700 text-left text-sm w-full"
                  wrapClassName="bg-gray-52 flex-1 sm:flex-1 pb-3 pl-4 pr-3 pt-[15px] rounded-[10px] w-[78%] sm:w-full"
                  type="email"
                ></Input>
                <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[126px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, List, SelectBox, Slider, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader1";

// import { Button, Img, Input, List, Slider, Text, TextArea } from "components";

// import { CloseSVG } from "../../assets/images";

const AuctionBIddingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />

      <div className="flex md:flex-col flex-row my-10 gap-[40px] items-center justify-start max-w-[1200px] mx-auto md:px-5 w-full bg-cyan-200 ]">
        <div className=" flex md:flex-1 flex-col items-center bg-stone-400 justify-start p-[30px] sm:px-5  shadow-bs w-[63%] md:w-full">
          <div className="flex flex-col  items-start justify-start w-full">
            <Img
              className="h-[516px] sm:h-auto object-cover rounded-[20px] rounded-br-[10px] w-full"
              src="images/img_image_6.png"
              alt="Rectangle1380"
            />
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[30px] pb-1 w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start sm:mt-0 mt-2">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtGilroySemiBold28"
                >
                  Secluded intown Treehouse
                </Text>
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtGilroyMedium18"
                >
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-row gap-[30px] items-center justify-between w-[18%] sm:w-full">
                <Button
                  className="border border-blue-A700 border-solid cursor-pointer flex h-[50px] items-center justify-center w-[50px]"
                  onClick={() => sliderRef.current?.slidePrev?.()}
                  shape="circle"
                  color="white_A700"
                >
                  <Img
                    className="h-8"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="border border-blue-A700 border-solid cursor-pointer flex h-[50px] items-center justify-center w-[50px]"
                  onClick={() => sliderRef.current?.slideNext?.()}
                  shape="circle"
                  color="white_A700"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
            <Text
              className="mt-[20px] text-black-900 font-bold text-2xl text-[20px]"
              size="txtGilroySemiBold18"
            >
              Review
            </Text>
            <div className="flex flex-row gap-2 items-end justify-start mt-[15px] w-[26%] md:w-full">
              {/* <Img
                  className="h-14 md:h-auto rounded-[50%] w-14"
                  src="images/img_profileimglarg.png"
                  alt="ProfileImgLarg"
                /> */}
              <div className="flex flex-col gap-[4px] items-center justify-start mb-[3px] mt-[0px] w-full">
                <Text
                  className="text-base font-medium text-2xl text-[20px] text-black-900_01"
                  size="txtGilroyMedium16Black90001"
                >
                  By: Prakash S
                </Text>
                {/* <div className="flex flex-row items-center justify-evenly w-[98%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_star.svg"
                      alt="star"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_star.svg"
                      alt="star One"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_star.svg"
                      alt="star Two"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_star.svg"
                      alt="star Three"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_star_20X20.svg"
                      alt="star Four"
                    />
                  </div> */}
              </div>
            </div>
            <Text
              className="leading-[26.00px] mt-4 text-base text-blue_gray-400 w-full"
              size="txtGilroyMedium16Bluegray400"
            >
              Located in the heart of Bangalore, this premier layout offers a
              harmonious blend of serene surroundings and urban convenience.
              Known for its meticulously planned infrastructure, lush green
              spaces, top-tier amenities, and seamless connectivity, it stands
              as a pinnacle of modern living in Bangalore.
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end mr-10 p-[20px] sm:px-5 rounded-lg shadow-bs w-[36%] md:w-full sm:justify-center sm:items-center sm:mx-0">
          <div className="flex flex-col items-start justify-start w-full sm:justify-center sm:items-center">
            <Text
              className="text-2xl md:text-[30px] font-bold font-mono text-black-900 sm:text-xl"
              size="txtGilroySemiBold24"
            >
              Place Your Bid
            </Text>
            <div className="flex flex-row items-start justify-between mt-[31px] pt-[5px] w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-[45%]">
                <Text
                  className="text-blue_gray-400 text-2xl md:text-[30px] text-lg"
                  size="txtGilroyMedium18"
                >
                  Ends In
                </Text>
                <div className="flex flex-row gap-2 items-center justify-between w-full">
                  <Button className="cursor-pointer font-bold h-[45px] bg-blue-200 rounded-[10px] text-center text-lg w-[45px]">
                    00
                  </Button>
                  {/* <Img className="h-5" src="images/img_group24.svg" alt="GroupTwentyFour" /> */}
                  <Button className="cursor-pointer font-bold h-[45px] bg-blue-200 rounded-[10px] text-center text-lg w-[45px]">
                    00
                  </Button>
                  {/* <Img className="h-5" src="images/img_group24.svg" alt="Group9828" /> */}
                  <Button className="cursor-pointer font-bold h-[45px] bg-blue-200 rounded-[10px] text-center text-lg w-[45px]">
                    00
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-center justify-start">
                <Text
                  className="text-blue_gray-400  md:text-[30px] text-lg"
                  size="txtGilroyMedium18"
                >
                  Highest Bid
                </Text>
                <Text className="sm:text-md md:text-[26px] text-[28px] text-blue-A700">
                  $20,000
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-start mt-8 pt-[9px] w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-2xl md:text-[30px] text-black-900_01 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  Bid History
                </Text>
                <a href="javascript:" className="text-blue_gray-400 text-lg">
                  <Text size="txtGilroyMedium18">See All</Text>
                </a>
              </div>
              <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-gray-50 border-double border-4 border-black flex flex-1 flex-col items-center justify-start p-2 rounded-md w-full">
                  <div className="flex flex-row items-center h-[54px] justify-between rounded-[3px] w-[98%] md:w-full">
                    {/* <Img
                        className="h-[54px] md:h-auto object-cover rounded-[3px] w-[54px]"
                        src="images/img_rectangle755.png"
                        alt="Rectangle755"
                      /> */}
                    <Text className="text-blue_gray-400 text-2xl md:text-[30px] ">
                      Ralph Edwards
                    </Text>
                    <Text className="text-blue-A700 text-2xl md:text-[30px]">
                      $20,000
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50 border-double border-4 border-black flex flex-1 flex-col items-center justify-start p-2 rounded-md w-full">
                  <div className="flex flex-row items-center h-[54px] justify-between rounded-[3px] w-[98%] md:w-full">
                    {/* <Img
                        className="h-[54px] md:h-auto object-cover rounded-[3px] w-[54px]"
                        src="images/img_rectangle755.png"
                        alt="Rectangle755 One"
                      /> */}
                    <Text className="text-blue_gray-400 text-2xl md:text-[30px]">
                      Ralph Edwards
                    </Text>
                    <Text className=" text-blue-A700 text-2xl md:text-[30px]">
                      $20,000
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50 border-double border-4 border-black flex flex-1 flex-col items-center justify-start p-2 rounded-md w-full">
                  <div className="flex flex-row items-center justify-between h-[54px] rounded-[3px] w-[98%] md:w-full">
                    {/* <Img
                        className="h-[54px] md:h-auto object-cover rounded-[3px] w-[54px]"
                        src="images/img_rectangle755.png"
                        alt="Rectangle755 Two"
                      /> */}
                    <Text className="text-blue_gray-400 text-2xl md:text-[30px]">
                      Ralph Edwards
                    </Text>
                    <Text className=" text-blue-A700 text-2xl md:text-[30px]">
                      $20,000
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Slider
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 2 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="mt-8 w-full"
              items={[...Array(6)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col gap-1 items-start justify-start mx-2.5">
                    <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                      <Text
                        className="text-black-900_01 font-bold text-xl text-[20px]"
                        size="txtGilroyMedium18Black90001"
                      >
                        Your Bid Amount
                      </Text>
                    </div>
                    <Input
                      name="InputField One"
                      placeholder="Enter amount"
                      className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium h-[50px] text-base text-left w-full"
                      wrapClassName="bg-gray-50 border-double border-4 border-black flex flex-1 flex-col items-center justify-start p-1 rounded-md w-full"
                      size="md"
                    ></Input>
                  </div>
                </React.Fragment>
              ))}
            />
            <button className="relative inline-flex ml-20 mt-10 items-center justify-center p-4 mb-3 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 sm:justify-center sm:items-center sm:mx-suto sm:text-center sm:ml-0">
              <span className="relative px-5 py-2.5 transition-all ease-in font-bold text-4xl text-[30px] duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Place Your Bid
              </span>
            </button>
          </div>
        </div>
      </div>
      <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </>
  );
};

export default AuctionBIddingPage;

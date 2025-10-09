import React from "react";
import { Button, Img, Text } from "components";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";

const LandingPageCard = (props) => {
  const navigate = useNavigate();
  console.log(props);
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[260px] sm:h-auto object-cover w-full"
          alt="image"
          src={props?.image}
        />
        <div className="bg-gray-51 border border-red-101 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
          <div className="flex flex-col gap-[27px] items-start justify-start w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <Img className="h-6 w-6" src="images/img_eye.svg" alt="eye" />
              <Text
                className="flex-1 text-base text-gray-900 w-auto"
                size="txtManropeSemiBold16"
              >
                {props?.p286162ndaveoaklone}
              </Text>
            </div>
            <div className="flex flex-col gap-[21px] items-start justify-start w-full">
              <div className="flex flex-row gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_bookmark.svg"
                    alt="bookmark"
                  />
                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.pbhk}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.bathcounter}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.sqftcounter}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.posStat}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.furnStat}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.parkAvail}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.dirFacing}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.pref}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[31px] items-center justify-start w-full">
              <Button
                onClick={() => navigate("/PropertyDetails")}
                className="bg-gray-900 cursor-pointer flex-1 font-manrope font-semibold py-[13px] rounded-[10px] text-base text-center text-white-A700 w-full"
              >
                {props?.viewDetails}
              </Button>
              <div className="flex flex-col">
                <Text
                  className="flex text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                  size="txtManropeBold24Gray900"
                >
                  {props?.price}
                </Text>
                <Text
                  className="flex text-xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                  size="txtManropeBold24Gray900"
                >
                  {props?.priceSqFt}/ sq. ft
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageCard.defaultProps = {
  image: "images/img_image_260x384.png",
  p286162ndaveoaklone: "2861 62nd Ave, Oakland, CA 94605",
  pbhk: "3 BHK",
  bathcounter: "1 Bathroom",
  sqftcounter: "1,032 sqft",
  posStat: "Under Const.",
  furnStat: "Furnished",
  parkAvail: "Yes",
  viewDetails: "View Details",
  dirFacing: "North-East",
  pref: "Rent/Sale",
  price: "$649,900",
  priceSqFt: "$10",
};

export default LandingPageCard;

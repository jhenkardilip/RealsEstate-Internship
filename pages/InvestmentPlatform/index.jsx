import { Text } from "components";
import { Img } from "components";
import { Button } from "components";
import LandingPageHeader from "components/LandingPageHeader1";
import LandingPageFooter from "components/LandingPageFooter";
import investhome2 from "../../assets/images/investhome2.avif";
import { useNavigate } from "react-router";

export default function InvestmentPlatform() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col ">
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
      <div className="h-[646px] max-w-[1500px] mx-auto md:px-5 relative w-full sm:h-[1200px]">
        <div className="absolute bg-cyan-50 inset-[0] justify-center m-auto rounded-md w-full">
          <div className="absolute h-auto inset-y-[0] my-auto right-[0] w-[94%] md:w-full sm:flex-col">
            <div className="sm:hidden">
              <Img
                className="absolute h-auto inset-y-[0] rounded-[5px] mr-10 my-auto object-cover right-[0] w-1/2"
                src={investhome2}
                alt="group665"
              />
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[5px] top-[10%] w-[55%] sm:w-11/12 sm:ml-6">
              <Text className="leading-[80.00px] md:text-5xl text-[75px] text-black-900 w-full">
                <span className="text-black-900 text-left font-bold">
                  Maximize your business with{" "}
                </span>
                <span className="text-red-401 text-left font-bold">us</span>
              </Text>
              <Text
                className="leading-[35.00px] md:ml-[0] ml-[3px] mt-[25px] text-black-900_60 text-xl w-[73%] sm:w-full"
                size="txtSourceSansProRegular20"
              >
                Ready to start investing smarter? Create your investor profile
                now and gain instant access to our exclusive deals and
                personalized recommendations.
              </Text>
              <div className="flex sm:flex-col flex-row items-center justify-start mt-[39px] rounded-[5px] w-[71%] md:w-full sm:justify-center sm:items-center sm:mx-auto sm:gap-2">
                <select className="h-10  rounded-[5px] flex">
                  <option hidden disabled selected>
                    Looking for
                  </option>
                  <option>Investors</option>
                  <option>Advisors</option>
                  <option>Enterprise</option>
                  <option>Projects</option>
                </select>
                <input
                  type="text"
                  placeholder="Search localities or landmarks"
                  className="cursor-pointer  md:min-w-[300px] sm:w-2/3 rounded-[5px] text-base text-left flex items-center justify-center"
                />
                <button
                  type="submit"
                  class=" text-white-A700 bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-[5px] text-sm px-5 py-2.5 me-2 sm:text-center"
                >
                  SEARCH
                </button>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 sm:gap-2 items-center justify-between rounded-[5px] w-[71%] md:w-full">
                <div className="w-[350px] mt-10 sm:mt-2 text-black-900_60 rounded-[5px] text-base text-left sm:text-center">
                  Selling your business and looking for fund?
                </div>

                <div className="w-[300px] mt-10 sm:mt-2 text-black-900_60 rounded-[5px] ml-12 text-base text-left sm:text-center sm:-ml-2">
                  Are you an investor/advisor?
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:mt-2 gap-6 items-center justify-between rounded-md w-[71%] md:w-full">
                <Button
                  className="sm:w-[90%] cursor-pointer font-normal leading-normal min-w-[300 px] rounded-md text-base text-center bg-black text-white-A700 px-2 py-2"
                  onClick={() => navigate("/Business-profile")}
                >
                  Business Profile
                </Button>
                <Button
                  className="sm:w-[90%] cursor-pointer font-normal leading-normal min-w-[300 px] rounded-md text-base text-center bg-black text-white-A700 px-2 py-2 mr-2"
                  onClick={() => navigate("/FormInvestor")}
                >
                  Investor Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
  );
}

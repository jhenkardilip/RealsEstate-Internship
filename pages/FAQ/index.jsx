import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/LandingPageHeader1";

import { CloseSVG } from "../../assets/images";

const FAQPage = () => {
  const [searchonevalue, setSearchonevalue] = React.useState("");

  function handleNavigate1() {
    window.location.href = "https://relasto.com";
  }

  return (
    <>
      <div className="bg-gray-51 flex flex-col sm:gap-10 md:gap-10 gap-[68px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
        <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-8 w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[42px] text-[46px] text-center text-gray-900 tracking-[-0.92px] w-full"
              size="txtManropeExtraBold46"
            ></Text>
            <div className="flex flex-col gap-[25px] items-start justify-start w-full">
              <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[30px] py-7 rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[25px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      * What kind of properties are listed on your website?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        We list a range of residential real estate properties
                        including apartments, villas and plots through our web
                        and mobile platform. Our listings include everything
                        from new, resale, under construction and
                        upcoming properties.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[25px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      What are the taxes that I need to pay before buying a
                      property?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        The buyer needs to pay the following taxes: TDS or tax
                        deduction at source on amount exceeding Rs 50 lakhs for
                        the purchase of property excluding agricultural land.
                        Stamp duty Service Tax - Applicable if the property is
                        being purchased from the builder who conceived and
                        constructed the project before offering possession to
                        the buyer. If a `ready to move in' property is purchased
                        from the seller, service tax is not applicable. Value
                        Added Tax (VAT) - If applicable in the concerned state.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[25px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      What is the difference between leasehold property and
                      freehold property?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        The difference between a leasehold property and a
                        freehold property lies in its ownership . In a leasehold
                        property, the ownership remains with the concerned local
                        authority or the government (as the case may be). The
                        lease period varies typically between 30 to 99 years.
                        But, this does not prevent the individual owner from
                        selling or perform other transactions with the property,
                        provided the lease deed is registered.In case of a
                        freehold property, the owner of the property is the
                        legal owner and can sell/lease/rent the property as
                        per his/her wish
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[25px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      How can I register my property?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        Registration of a property includes necessary stamping
                        and paying of registration charges for a sale deed and
                        getting it recorded at the sub-registrar's office of the
                        concerned jurisdictional area. If a property is
                        purchased from a developer directly, getting it
                        registered amounts to act of legal conveyance. In case
                        the purchased property is a second or third transaction,
                        it involves a duly stamped and registered transfer deed.
                        Nowadays, property registration process is computerized
                        in most states.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[25px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      What documents are required for registration of a new
                      apartment/plot?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        Sale Deed, No Objection Certificate (NOC) from builder,
                        NOC from banks, Building Plan approvals, Completion
                        Certificate, PAN Card and Photographs.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[25px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Are there Any Tax Benefits For Non-Resident Indians buying
                      properties?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        No tax benefits are available for NRI's unless you file
                        your returns and subsequently become eligible to avail
                        the tax benefits as mentioned under Home Loan FAQ's.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[25px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      What is the eligibility criteria for obtaining NRI Home
                      Loans?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        The eligibility is calculated in the same way as it is
                        done for resident Indians with special emphasis on:
                        Qualifications - Graduate (minimum)<br></br>
                        Current job profile and work experience<br></br>
                        Chances of continuing abroad for the loan tenure
                        <br></br>
                        Chances of servicing the loan with an extended tenure in
                        case the applicant needs to return to India
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[25px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Are a household's peace and well-being connected with its
                      Vastu?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        Houses that are designed to provide smooth coordination
                        between the five elements of nature: earth, air, water,
                        fire and space, are likely to attract peace. By laying
                        down specific rules, the ancient Indian science of Vastu
                        ensures the same. Since healthy living has a lot to do
                        with a healthy life and a growing career, a home that is
                        blessed with easy access to all the natural elements, is
                        likely to promote an overall healthy and prosperou life
                        cycle.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[25px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      What should be a house's floor plan according to Vastu?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        North-facing homes are considered the ideal floor plan
                        according to Vastu.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[30px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      What kind of properties are listed on your website?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        We list a range of residential real estate properties
                        including apartments, villas and plots through our web
                        and mobile platform. Our listings include everything
                        from new, resale, under construction and
                        upcoming properties.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[30px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      What kind of properties are listed on your website?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        We list a range of residential real estate properties
                        including apartments, villas and plots through our web
                        and mobile platform. Our listings include everything
                        from new, resale, under construction and
                        upcoming properties.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl text-[30px] tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      What kind of properties are listed on your website?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[900px]">
                      <Text
                        className="leading-[170.00%] text-xl text-[20px] max-w-[900px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        We list a range of residential real estate properties
                        including apartments, villas and plots through our web
                        and mobile platform. Our listings include everything
                        from new, resale, under construction and
                        upcoming properties.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;

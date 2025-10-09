import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, List, ReactTable, Text } from "components";
import BlogPageColumnactive from "components/BlogPageColumnactive";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader1";

const BlogDetailsPage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col  sm:gap-10 md:gap-10 gap-[111px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <div className="flex flex-col font-manrope items-start justify-start pl-[120px] pr-[324px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
              size="txtManropeExtraBold36"
            >
              Innovative AI Solutions in Real Estate: Vastu Reading, Horoscope
              Matching, and Beyond
            </Text>
            <div className="flex flex-col md:gap-10 gap-[84px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-4 items-end justify-between w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <Img
                    className="h-[550px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5618_550x996.png"
                    alt="rectangle5618"
                  />
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                      The integration of Artificial Intelligence (AI) into the
                      real estate sector is reshaping the industry in
                      unprecedented ways. Beyond traditional functionalities of
                      property search and transaction management, AI is now
                      venturing into the realms of ancient wisdom, blending
                      technology with cultural and astrological considerations.
                      This blog explores innovative AI solutions in real estate,
                      delving into Vastu reading, horoscope matching, and other
                      transformative applications that go beyond conventional
                      approaches. <br />
                      <br />
                      1. Vastu Reading for Harmonious Living Spaces: Vastu
                      Shastra, an ancient Indian architectural science,
                      emphasizes the creation of harmonious living spaces. AI
                      has now taken this concept to new heights by offering
                      Vastu reading for real estate properties. Advanced
                      algorithms analyze architectural blueprints, floor plans,
                      and spatial arrangements to ensure alignment with Vastu
                      principles. This innovative solution caters to individuals
                      who believe in the influence of Vastu on well-being and
                      prosperity.
                      <br /> 2. Horoscope Matching for Property Selection:
                      Astrology has long played a role in decision-making, and
                      now AI is extending its reach to real estate through
                      horoscope matching. By integrating astrological data and
                      personalized horoscopes, AI can provide insights into
                      properties that align with an individual's astrological
                      profile. This unique approach aims to offer a more
                      personalized and auspicious selection process for
                      potential property buyers. <br />
                      3. Predictive Analytics for Property Investment: AI-driven
                      predictive analytics is revolutionizing the way investors
                      approach real estate. By analyzing historical data, market
                      trends, and economic indicators, AI can generate
                      predictions about future property values and investment
                      opportunities. This empowers investors with data-driven
                      insights, enhancing their ability to make informed
                      decisions in a dynamic real estate market.
                      <br /> 4. Virtual Reality (VR) Property Tours with Feng
                      Shui Insights: Virtual Reality property tours are not a
                      new concept, but AI is taking them a step further by
                      incorporating Feng Shui insights. Feng Shui, an ancient
                      Chinese practice, emphasizes the flow of energy in a
                      space. AI algorithms analyze the spatial elements of a
                      property and provide recommendations to enhance its Feng
                      Shui alignment. This innovation combines modern technology
                      with ancient principles to offer a holistic property
                      viewing experience.
                      <br /> 5. Energy Efficiency Assessments with AI:
                      Sustainability is a growing concern in real estate, and AI
                      is contributing to energy efficiency assessments. By
                      analyzing factors such as insulation, lighting, and
                      appliances, AI can provide recommendations to improve a
                      property's energy efficiency. This not only aligns with
                      environmental consciousness but also positions the
                      property as a more attractive and cost-effective option
                      for potential buyers. <br />
                      6. Personalized Property Recommendations with Emotional
                      AI: Emotional AI, which analyzes user emotions and
                      preferences, is being utilized to provide personalized
                      property recommendations. By understanding a buyer's
                      emotional responses to different properties, AI can tailor
                      suggestions based on individual preferences and lifestyle
                      considerations, creating a more engaging and personalized
                      property search experience.
                      <br />
                      <br />
                      Conclusion: The integration of innovative AI solutions in
                      real estate, such as Vastu reading, horoscope matching,
                      and beyond, marks a fascinating intersection of
                      technology, culture, and ancient wisdom. These
                      applications go beyond conventional approaches, catering
                      to a diverse range of beliefs and preferences in the
                      property market. As technology continues to evolve, the
                      synergy between AI and cultural considerations promises a
                      more customized and enriching experience for individuals
                      navigating the real estate landscape. Embracing these
                      innovative solutions not only showcases the adaptability
                      of the real estate industry but also opens up new
                      dimensions in providing unique and personalized services
                      to property buyers and investors.
                    </>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[11%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_volume.svg"
                        alt="volume"
                      />
                      <div className="flex flex-col items-center justify-start w-[71%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-start w-auto"
                          style={{
                            backgroundImage:
                              "url('images/img_frame1000001658.svg')",
                          }}
                        >
                          <Text
                            className="text-gray-900 text-xs w-auto"
                            size="txtManropeSemiBold12Gray900"
                          >
                            Share this
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-8 w-8"
                      src="images/img_twitter_bluegray_100.svg"
                      alt="twitter"
                    />
                    <Img
                      className="h-8 w-8"
                      src="images/img_reddit.svg"
                      alt="reddit"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                  size="txtManropeBold24Gray900"
                >
                  Writen by
                </Text>
                <div className="flex flex-col items-center justify-between md:pr-10 sm:pr-5 pr-[568px] w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-start max-w-[836px] w-full">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_profilepicture.png"
                      alt="profilepicture"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-[165px]">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                        size="txtManropeBold24Gray900"
                      >
                        Kristin Watson
                      </Text>
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtManropeSemiBold16Gray600"
                      >
                        Co-founder and CDO
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                      <div className="bg-bluegray-100 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtManropeSemiBold16Gray600"
                      >
                        July 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1200px] mx-auto w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
              size="txtManropeExtraBold36"
            >
              Recent News
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              {new Array(3).fill({}).map((props, index) => (
                <React.Fragment key={`BlogPageColumnactive${index}`}>
                  <BlogPageColumnactive
                    className="flex flex-1 flex-col gap-6 items-start justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default BlogDetailsPage;

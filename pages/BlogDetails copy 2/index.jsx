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
              Elevating Real Estate Investment: A Deep Dive into
              Realsestate.com's Investment Platform
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
                      In an era where technology is reshaping industries, the
                      real estate sector is experiencing a groundbreaking
                      transformation with the emergence of innovative investment
                      platforms. Among these, Realsestate.com stands out as a
                      beacon, providing a comprehensive and user-centric
                      approach to real estate investment. In this blog, we delve
                      into the features and advantages of Realsestate.com's
                      investment platform, exploring how it elevates the real
                      estate investment experience for both seasoned investors
                      and newcomers to the market.
                      <br />
                      <br /> 1. User-Friendly Interface: Realsestate.com's
                      investment platform boasts a user-friendly interface that
                      simplifies the complex world of real estate investment.
                      The intuitive design ensures that users, whether
                      experienced investors or novices, can navigate the
                      platform with ease. The streamlined interface allows for
                      efficient property searches, investment tracking, and
                      seamless transaction processes.
                      <br /> 2. Data-Driven Investment Decisions: At the heart
                      of Realsestate.com's platform is a robust data analytics
                      engine that empowers investors with comprehensive
                      insights. From market trends and historical property
                      performance to predictive analytics, users can make
                      informed investment decisions based on real-time data.
                      This data-driven approach positions investors for success
                      in a dynamic real estate landscape.
                      <br /> 3. Diverse Investment Opportunities:
                      Realsestate.com goes beyond the conventional, offering a
                      diverse range of investment opportunities. From
                      residential properties to commercial spaces and emerging
                      markets, the platform caters to a spectrum of investor
                      preferences. This diversity allows users to build a
                      well-rounded and balanced real estate investment portfolio
                      tailored to their individual goals.
                      <br />
                      4. Risk Mitigation Strategies: Real estate investment
                      inherently involves risk, but Realsestate.com's platform
                      incorporates innovative risk mitigation strategies.
                      Through AI-driven risk assessments and predictive
                      modeling, investors can identify potential risks and adopt
                      proactive measures to safeguard their investments. This
                      forward-thinking approach contributes to a more secure
                      investment environment.
                      <br /> 5. Transparent Investment Processes: Transparency
                      is a cornerstone of Realsestate.com's platform. Investors
                      have access to clear and concise information about each
                      property, including financial performance, market
                      dynamics, and associated risks. This transparency fosters
                      trust and confidence, crucial elements in the
                      decision-making process for prospective investors. <br />
                      6. Integrated Financial Tools: The platform features
                      integrated financial tools that empower investors to
                      assess the financial viability of their investments. From
                      mortgage calculators to cash flow projections, these tools
                      provide a comprehensive financial overview, aiding
                      investors in planning and optimizing their real estate
                      portfolios.
                      <br /> 7. Community and Networking Opportunities:
                      Realsestate.com goes beyond being a mere transactional
                      platform; it fosters a community of investors. Through
                      forums, webinars, and networking events, users can engage
                      with like-minded investors, share insights, and stay
                      informed about industry trends. This sense of community
                      enhances the overall investment experience and provides
                      valuable opportunities for collaboration.
                      <br /> 8. Responsive Customer Support: Recognizing the
                      importance of customer support, Realsestate.com ensures a
                      responsive and knowledgeable support team. Whether users
                      have inquiries about a specific investment or need
                      assistance navigating the platform, prompt and helpful
                      customer support is readily available, contributing to a
                      positive user experience. <br />
                      <br />
                      Conclusion: Realsestate.com's investment platform
                      represents a paradigm shift in the way real estate
                      investments are approached. With a commitment to
                      user-friendliness, data-driven decision-making, and a
                      holistic approach to risk management, the platform caters
                      to the diverse needs of today's investors. By fostering
                      transparency, community engagement, and providing robust
                      financial tools, Realsestate.com has elevated the real
                      estate investment experience, making it more accessible,
                      informed, and rewarding. As the platform continues to
                      evolve, it stands as a testament to the transformative
                      potential of technology in revolutionizing the world of
                      real estate investment.
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

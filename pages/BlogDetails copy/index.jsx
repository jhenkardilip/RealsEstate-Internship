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
              Revolutionizing Real Estate Transactions: A Comprehensive Platform
              for Owners, Agents, and Buyers
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
                      The real estate industry, known for its intricacies and
                      traditional practices, is undergoing a transformative
                      shift driven by technological advancements. In this era of
                      digital innovation, a comprehensive platform that caters
                      to the needs of property owners, real estate agents, and
                      prospective buyers is revolutionizing the way transactions
                      are conducted. This blog explores the features and
                      benefits of such a platform, envisioning a seamless and
                      efficient future for real estate dealings. <br />
                      <br />
                      1. Centralized Property Management: A comprehensive real
                      estate platform serves as a centralized hub for property
                      management. Property owners can effortlessly list their
                      properties, update information, and monitor inquiries,
                      streamlining the process of showcasing and managing their
                      assets.
                      <br /> 2. Dynamic Listings and Visuals: The platform
                      incorporates dynamic property listings enriched with
                      high-quality visuals, 3D tours, and virtual walkthroughs.
                      This not only provides prospective buyers with an
                      immersive experience but also allows property owners and
                      agents to showcase their listings in the most appealing
                      manner.
                      <br /> 3. Efficient Communication Channels: Transparent
                      and efficient communication channels are essential for
                      successful real estate transactions. The platform
                      facilitates seamless communication between property
                      owners, real estate agents, and potential buyers. Features
                      such as instant messaging, notifications, and appointment
                      scheduling ensure that all stakeholders are well-informed
                      and connected.
                      <br /> 4. Smart Search and Matching Algorithms: Advanced
                      search functionalities and intelligent matching algorithms
                      empower buyers to find properties that align with their
                      preferences. By considering factors such as location,
                      budget, and specific requirements, the platform optimizes
                      the property search process, saving time for both buyers
                      and agents.
                      <br /> 5. Secure Document Management: Real estate
                      transactions involve a plethora of documents. A
                      comprehensive platform integrates secure document
                      management, allowing users to upload, sign, and exchange
                      legal documents digitally. This not only accelerates the
                      transaction process but also ensures a secure and
                      organized documentation system.
                      <br /> 6. Financial Tools and Mortgage Calculators: To aid
                      buyers in making informed decisions, the platform
                      incorporates financial tools and mortgage calculators.
                      These features provide users with valuable insights into
                      potential costs, helping them assess affordability and
                      plan their financial commitments.
                      <br />
                      7. Real-time Market Insights: Access to real-time market
                      insights is invaluable for both property owners and
                      agents. The platform can offer analytics and data
                      visualization tools, providing users with a deeper
                      understanding of market trends, pricing dynamics, and
                      competitive landscapes.
                      <br /> 8. Online Transaction Processing: A comprehensive
                      platform facilitates online transaction processing,
                      allowing buyers to make secure payments and property
                      transactions seamlessly. This not only expedites the
                      closing process but also enhances the overall convenience
                      for all parties involved.
                      <br /> 9. Customer Support and Assistance: Responsive
                      customer support features ensure that users have
                      assistance when needed. Whether it's technical support,
                      inquiries about listings, or guidance through the
                      transaction process, a user-friendly platform fosters
                      positive interactions and customer satisfaction. <br />
                      <br />
                      Conclusion: The advent of a comprehensive platform for
                      real estate transactions signifies a paradigm shift in the
                      industry. By seamlessly integrating features for property
                      owners, real estate agents, and buyers, such a platform
                      enhances efficiency, transparency, and accessibility in
                      real estate dealings. As technology continues to advance,
                      the vision of a streamlined, digital ecosystem for real
                      estate transactions is becoming a reality, promising a
                      future where buying, selling, and managing properties is
                      as simple as a few clicks. Embracing this comprehensive
                      approach not only meets the evolving needs of the real
                      estate market but also sets the stage for a more dynamic
                      and user-centric industry.
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

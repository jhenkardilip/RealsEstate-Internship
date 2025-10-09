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
              Data-Driven Insights: Property Valuation and Investment Ideas on
              Realsestate.com
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
                      In the dynamic world of real estate investment, the power
                      of data-driven insights cannot be overstated. As the
                      digital landscape evolves, platforms like Realsestate.com
                      are harnessing the potential of data to provide investors
                      with a wealth of information for informed decision-making.
                      This blog takes a deep dive into how Realsestate.com
                      leverages data-driven insights, particularly in property
                      valuation and investment ideas, shaping the future of real
                      estate investment strategies.
                      <br />
                      <br /> 1. Precision in Property Valuation:
                      Realsestate.com's commitment to data-driven insights
                      begins with precise property valuation. By leveraging
                      advanced algorithms and real-time market data, the
                      platform provides investors with accurate and up-to-date
                      property valuations. This ensures that investors have a
                      realistic understanding of a property's worth, a crucial
                      factor in making well-informed investment decisions.
                      <br /> 2. Market Trends and Dynamics: Beyond static
                      valuations, Realsestate.com incorporates dynamic market
                      trends and property dynamics into its data analytics.
                      Investors gain insights into how a particular property has
                      performed historically, current market trends, and
                      predictions for the future. This forward-looking approach
                      empowers investors to adapt their strategies based on the
                      evolving dynamics of the real estate market.
                      <br /> 3. Comparative Market Analysis (CMA):
                      Realsestate.com excels in providing investors with
                      Comparative Market Analysis (CMA) reports. These reports
                      offer a comprehensive overview of similar properties in
                      the vicinity, allowing investors to benchmark and assess
                      the competitiveness of their chosen investment. The CMA
                      feature is invaluable for investors seeking a comparative
                      perspective before finalizing their investment decisions.
                      <br /> 4. Risk Assessment and Mitigation: Data-driven
                      insights on Realsestate.com extend to risk assessment and
                      mitigation strategies. By analyzing historical data and
                      potential risk factors, investors can identify and
                      mitigate risks associated with a particular property. This
                      proactive approach aligns with Realsestate.com's
                      commitment to providing users with a secure and informed
                      investment environment.
                      <br /> 5. Personalized Investment Recommendations:
                      Realsestate.com's data analytics doesn't stop at property
                      valuations; it extends to personalized investment
                      recommendations. By understanding user preferences, risk
                      tolerance, and investment goals, the platform tailors
                      recommendations that align with each investor's unique
                      profile. This personalized touch adds a layer of
                      customization to the investment journey, ensuring that
                      investors receive ideas tailored to their specific needs.
                      <br /> 6. Interactive Data Visualizations: Recognizing the
                      importance of visualizing complex data, Realsestate.com
                      incorporates interactive data visualizations. These visual
                      tools allow investors to explore market trends, property
                      performance metrics, and investment opportunities in a
                      user-friendly and intuitive manner. The interactive
                      dashboards facilitate a deeper understanding of data,
                      making it more accessible to a broad range of investors.
                      <br /> 7. Historical Performance Metrics: For investors
                      seeking a historical perspective, Realsestate.com provides
                      comprehensive performance metrics for each property. From
                      historical appreciation rates to rental income trends,
                      investors can delve into the property's past performance,
                      aiding them in making projections for the future. These
                      historical metrics contribute to a more holistic
                      evaluation of a property's investment potential.
                      <br />
                      <br /> Conclusion: Realsestate.com's data-driven approach
                      to property valuation and investment insights represents a
                      significant leap forward in the real estate investment
                      landscape. By leveraging advanced analytics, real-time
                      data, and personalized recommendations, the platform
                      empowers investors to navigate the complexities of real
                      estate with confidence. The integration of data-driven
                      insights not only enhances the accuracy of property
                      valuations but also provides a holistic and dynamic view
                      of the market, enabling investors to make well-informed
                      decisions that align with their unique investment goals.
                      As technology continues to evolve, Realsestate.com stands
                      at the forefront of revolutionizing real estate investment
                      through the power of data-driven insights.
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

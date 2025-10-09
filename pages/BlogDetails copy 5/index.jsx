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
              Gamification in Real Estate: Ranks, Badges, and Achievements for
              Agents on Realsestate.com
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
                      In the fast-paced and competitive realm of real estate,
                      motivation and engagement are key factors that drive
                      success. Recognizing this, Realsestate.com has introduced
                      a gamification element to its platform, adding an
                      innovative layer to the real estate experience. This blog
                      explores the gamification features on Realsestate.com,
                      focusing on how ranks, badges, and achievements are
                      transforming the way real estate agents approach their
                      work.
                      <br />
                      <br /> 1. Elevating Agent Motivation: Gamification taps
                      into the intrinsic human desire for recognition and
                      accomplishment. On Realsestate.com, real estate agents are
                      motivated to achieve higher ranks, unlock badges, and earn
                      achievements. This not only fosters a sense of
                      accomplishment but also fuels a competitive spirit,
                      encouraging agents to excel in their roles and stand out
                      among their peers.
                      <br /> 2. Introducing Ranks for Performance Recognition:
                      Realsestate.com's gamification strategy introduces a
                      ranking system that recognizes agents based on their
                      performance metrics. Agents can progress through different
                      ranks, signifying their expertise, achievements, and
                      contributions. The rank progression not only serves as a
                      badge of honor but also positions agents as leaders within
                      the Realsestate.com community.
                      <br /> 3. Unlocking Badges for Milestones: Badges, much
                      like in traditional gaming, symbolize milestones and
                      accomplishments. Realsestate.com employs a badge system
                      that agents can unlock by reaching specific goals,
                      completing transactions, or demonstrating exceptional
                      skills. These badges not only serve as a visual
                      representation of an agent's achievements but also
                      contribute to a dynamic and visually engaging profile.
                      <br /> 4. Achievements as a Measure of Excellence:
                      Achievements on Realsestate.com are a testament to an
                      agent's dedication and excellence. Whether it's closing a
                      certain number of deals within a timeframe, receiving
                      positive client feedback, or participating in community
                      events, achievements showcase an agent's commitment to
                      professionalism and client satisfaction. <br />
                      5. Fostering Healthy Competition: Gamification introduces
                      an element of friendly competition among real estate
                      agents on Realsestate.com. As agents strive to climb the
                      ranks, unlock badges, and earn achievements, a sense of
                      camaraderie and competition emerges. This not only
                      energizes the community but also inspires agents to
                      continually improve their skills and performance. <br />
                      6. Enhancing Community Engagement: The gamification
                      features on Realsestate.com contribute to a vibrant and
                      engaged community. Agents can share their achievements,
                      showcase their badges, and celebrate milestones with their
                      peers. This collaborative environment not only fosters a
                      sense of community but also provides a platform for agents
                      to learn from each other and share best practices. <br />
                      7. Recognizing and Rewarding Excellence: Gamification
                      serves as a mechanism for recognizing and rewarding
                      excellence within the Realsestate.com community. Agents
                      who consistently perform well, achieve higher ranks, and
                      unlock significant badges are acknowledged for their
                      contributions. This recognition not only boosts morale but
                      also positions agents as leaders in the eyes of clients
                      and colleagues.
                      <br />
                      <br />
                      Conclusion: Realsestate.com's innovative approach to
                      gamification in the real estate industry is transforming
                      the way agents approach their roles. By introducing ranks,
                      badges, and achievements, the platform is not only
                      motivating agents to excel but also fostering a sense of
                      community and healthy competition. As real estate
                      professionals embrace this gamified experience, they are
                      not just navigating the intricacies of the market but are
                      also elevating their own performance, pushing the
                      boundaries of what's achievable, and turning the real
                      estate journey into a dynamic and rewarding game of
                      success.
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

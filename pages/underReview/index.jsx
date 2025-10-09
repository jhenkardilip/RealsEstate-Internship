import LandingPageHeader from "components/LandingPageHeader1";
import LandingPageFooter from "components/LandingPageFooter";

const UnderReview = () => {
  return (
    <div className="flex flex-col">
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
      <div className="h-screen flex justify-center items-center my-auto mx-auto">
        <p className="text-4xl font-semibold">Under Review</p>
      </div>
      <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
  );
};

export default UnderReview;

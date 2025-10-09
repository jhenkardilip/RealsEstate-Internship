import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import LandingPagePage from "pages/LandingPage";
import RealEstateForm from "components/form";

const License = React.lazy(() => import("pages/License"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const Error = React.lazy(() => import("pages/Error"));
const BlogDetails = React.lazy(() => import("pages/BlogDetails"));
const BlogDetails0 = React.lazy(() => import("pages/BlogDetails copy"));
const BlogDetails1 = React.lazy(() => import("pages/BlogDetails copy 2"));
const BlogDetails2 = React.lazy(() => import("pages/BlogDetails copy 3"));
const BlogDetails3 = React.lazy(() => import("pages/BlogDetails copy 4"));
const BlogDetails4 = React.lazy(() => import("pages/BlogDetails copy 5"));
const BlogPage = React.lazy(() => import("pages/BlogPage"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const AgentProfile = React.lazy(() => import("pages/AgentProfile"));
const AgentList = React.lazy(() => import("pages/AgentList"));
const PropertyDetails = React.lazy(() => import("pages/PropertyDetails"));
const ListingMapView = React.lazy(() => import("pages/ListingMapView"));
const Listing = React.lazy(() => import("pages/Listing"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const LogIn = React.lazy(() => import("pages/Login/index"));

const AccountProfile=React.lazy(() => import("pages/Login/AccountProfile"));
const HomePage = React.lazy(() => import("components/HomePage"));
const PostProperty = React.lazy(() => import("components/form"));
const ResetPassword = React.lazy(() => import("modals/ResetPassword"));
const VastuPage = React.lazy(() => import("pages/VastuAI"));
const Auction = React.lazy(() => import("pages/Auction"));
const PricingPage1 = React.lazy(() => import("pages/PricingPages/PricingPanel"));
const PricingPage2 = React.lazy(() => import("pages/PricingPages/PricingPanel1"));
const PricingPage3 = React.lazy(() => import("pages/PricingPages/PricingPanel2"));
const PricingPage4 = React.lazy(() => import("pages/PricingPages/PricingPanel3"));
const PricingPage5 = React.lazy(() => import("pages/PricingPages/PricingPanel4"));
const PricingPage6 = React.lazy(() => import("pages/PricingPages/PricingPanel5"));
const BrokerProfile = React.lazy(() => import("components/BrokerProfile"));
const EnterOTP = React.lazy(() => import("components/OTPPage"));
const PropertyForm = React.lazy(() => import("components/form"));
const UnderReview = React.lazy(() => import("pages/underReview"));
const AgentsReview = React.lazy(() => import("pages/AgentsReview"));
const InvestmentPlatform = React.lazy(() => import("pages/InvestmentPlatform"));
const FormBusiness1 = React.lazy(() => import("components/FormBusiness1"));
const FormBusiness = React.lazy(() => import("components/FormBusiness"));
const FormInvestor = React.lazy(() => import("components/formInvestor"));
const FormFranchise = React.lazy(() => import("components/formFranchise"));

const AgentPricing = React.lazy(() => import("pages/AgentPricing"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />         
          <Route path="/account" element={<AccountProfile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listingmapview" element={<ListingMapView />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/agentlist" element={<AgentList />} />
          <Route path="/agentprofile" element={<AgentProfile />} />

          <Route path="/agentpricing" element={<AgentPricing />} />

          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/blogdetails0" element={<BlogDetails0 />} />
          <Route path="/blogdetails1" element={<BlogDetails1 />} />
          <Route path="/blogdetails2" element={<BlogDetails2 />} />
          <Route path="/blogdetails3" element={<BlogDetails3 />} />
          <Route path="/blogdetails4" element={<BlogDetails4 />} />
          <Route path="/error" element={<Error />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/license" element={<License />} />
          <Route path="/landingpage" element={<LandingPagePage />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/PostProperty" element={<PostProperty />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/VastuPage" element={<VastuPage />} />
          <Route path="/pp1" element={<PricingPage1 />} />
          <Route path="/pp2" element={<PricingPage2 />} />
          <Route path="/pp3" element={<PricingPage3 />} />
          <Route path="/pp4" element={<PricingPage4 />} />
          <Route path="/pp5" element={<PricingPage5 />} />
          <Route path="/pp6" element={<PricingPage6 />} />
          <Route path="/Enterotp" element={<EnterOTP />} />
          <Route path="/Brokerprofile" element={<BrokerProfile />} />
          <Route path="/post-property" element={<RealEstateForm />} />
          <Route path="/underReview" element={<UnderReview />} />
          <Route path="/AgentsReview" element={<AgentsReview />} />
          <Route path="/InvestmentPlatform" element={<InvestmentPlatform />} />
          <Route path="/Business-profile1" element={<FormBusiness1 />} />
          <Route path="/Business-profile" element={<FormBusiness />} />
          <Route path="/FormInvestor" element={<FormInvestor />} />
          <Route path="/FormFranchise" element={<FormFranchise />} />
          <Route path="/Auction" element={<Auction />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
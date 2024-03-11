import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Commingsoon from "@/components/commingsoon/commingsoon";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "NOOBIKIDS DIGITAL",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description=""
      />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Commingsoon/>
    </>
  );
};

export default AboutPage;

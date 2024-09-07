import React from "react";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import AboutUs from "../components/aboutUs";
import Service from "../components/service";
import Solution from "../components/solution";
import Work from "../components/work";
import Team from "../components/team";
import Testimonials from "../components/testimonials";
import Blog from "../components/blog";
import CTA from "../components/cta";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <AboutUs />
        <Service />
        <Solution />
        <Work />
        <Team />
        <Testimonials />
      </div>

      <div class="bottom-circle">
        <Blog />

        <CTA />
        <Footer />
      </div>
    </div>
  );
}

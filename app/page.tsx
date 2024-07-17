import Banner from "@/components/banner/banner";
import Ads from "@/components/home-section/ads";
import Chose from "@/components/home-section/chose";
import DigitalDomin from "@/components/home-section/digitaldomin";
import Review from "@/components/home-section/review";
import Service from "@/components/home-section/service";
import Testimonials from "@/components/home-section/testimonials";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-pink-950 via-blue-950 to-black">
      <Banner />
      <Ads />
      {/* <Service /> */}
      <DigitalDomin />
      <Chose />
      <Testimonials />
      <Review />
    </main>
  );
}

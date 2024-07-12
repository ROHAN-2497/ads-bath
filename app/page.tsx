import Banner from "@/components/banner/banner";
import Ads from "@/components/home-section/ads";
import Chose from "@/components/home-section/chose";
import DigitalDomin from "@/components/home-section/digitaldomin";
import Service from "@/components/home-section/service";

export default function Home() {
  return (
    <main className="bg-black">
      <Banner />
      <Ads />
      {/* <Service /> */}
      <DigitalDomin />
      <Chose />
    </main>
  );
}

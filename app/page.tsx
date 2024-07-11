import Banner from "@/components/banner/banner";
import Ads from "@/components/home-section/ads";
import Service from "@/components/home-section/service";

export default function Home() {
  return (
    <main className="bg-black">
      <Banner />
      <Ads />
      <Service />
    </main>
  );
}

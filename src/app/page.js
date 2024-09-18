import Image from "next/image";
import Carousel from "./components/Homepage/Carousel";
import AllIntegrations from "./components/Homepage/AllIntegrations";

export default function Home() {
  return (
    <div>
      <AllIntegrations></AllIntegrations>
      <Carousel></Carousel>
    </div>
  );
}

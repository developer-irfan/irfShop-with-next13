import Header from "@/components/HomePageComp/Header";
import Products from "@/components/HomePageComp/Products/Products";
import OurServices from "@/components/HomePageComp/ServicesComp/OurServices";
import Testimonials from "@/components/HomePageComp/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <OurServices />
      <Products />
      <Testimonials />
    </>
  );
}

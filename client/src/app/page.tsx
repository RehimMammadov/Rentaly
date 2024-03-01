import { CarBrands } from "@/components/Brands/page";
import { Choose } from "@/components/Choose/page";
import { Header } from "@/components/Header/page";
import { Navbar } from "@/layouts/Navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CarBrands />
      <Choose />
    </>
  );
}

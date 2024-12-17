import Announce from "./components/Announcement";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Fonts from "./components/Fonts"
import Products from "./products/page";
import Top_sell from "./products/sale";

export default function Home() {
  return (
    <div>
      <Announce />
      <Header />
      <Hero />
      <Fonts />
      <Products />
      <Top_sell />
    </div>
  );
}

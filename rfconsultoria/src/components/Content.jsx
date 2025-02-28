import Description from "./Description";
import Hero from "./Hero";
import Services from "./Services";

export default function Content() {
  return (
    <div className="container">
      <Hero />
      <Description />
      <Services />
    </div>
  );
}

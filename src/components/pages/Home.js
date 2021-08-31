import HeroText from "../core/HeroText";
import HeroTextCTA from "../core/HeroTextCTA";
import HeroImage from "../core/HeroImage";
import CompanyList from "../sections/CompanyList";
import HalfSection from "../sections/HalfSection";
const Home = () => {
  return (
    <div className="w-full border-b mt-20">
      <HeroText h1={"Redefining the Contractor Industry"} />
      <HeroImage image={"/assets/sw-home-hero-possible.jpg"} />
      <HeroText
        p={
          "Contractors have gotten a bad rap over the years — much of it deserved. But we’re on a mission to change that by radically improving every aspect of the contractor-homeowner experience, from initial phone call to final handshake and beyond."
        }
      />
      <CompanyList />
      <HalfSection
        flipped={true}
        title="We believe
more is possible."
        description="For years, homeowners accepted mediocre service from the contractors they hired. Missed appointments. Hidden charges. Messes left behind. It was just how things were done. But there was one company that had become quietly successful over the decades by insisting that every interaction between contractor and homeowner be remarkable. That small midwestern family business eventually grew to become a national advocate for much-needed industry change by upholding the simple notion that more is possible."
        image={"/assets/sw-home-morepossible.jpg"}
        cta="Learn More"
        ctaLink="/about"
      />
      <HalfSection
        flipped={false}
        title="A company
that’s built to last."
        description="Supportworks has been Certified Evergreen by the Tugboat Institute, an entrepreneurial think tank dedicated to supporting Evergreen companies. This accolade signifies that they believe we have the culture, wisdom and vision to redefine the contracting industry not only for this generation but also for generations to come."
        image={"/assets/sw-home-evergreen.jpg"}
        cta="Learn More"
        ctaLink="/about"
      />
      <HeroTextCTA
        title="More is possible for your business."
        cta="Partner with us"
        ctaLink="/contact"
      />
    </div>
  );
};

export default Home;

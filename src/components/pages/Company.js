import HeroText from "../core/HeroText";
import HeroTextCentered from "../core/HeroTextCentered";
import HalfSectionAboutCompany from "../sections/HalfSectionAboutCompany";
import HalfSection from "../sections/HalfSection";
const Company = () => {
  return (
    <div className="w-full border-b mt-20">
      <HeroText h1={"Radical Thinking. Since 1975"} />
      <HalfSectionAboutCompany
        flipped={true}
        image={"/assets/sw-about-Whatwedo2.png"}
      />
      <HeroTextCentered
        h1={"Who We Serve"}
        p={
          "There are three groups without whom we would not exist and to whom our work is dedicated: Homeowners, Contractors and Employees. They are the three legs of a stool that would collapse if any one leg were given less focus than the other two."
        }
      />
      <HalfSection
        flipped={false}
        title="Homeowners"
        description="Over the decades, homeowners have come to believe that mediocre service is acceptable. We think that’s ridiculous. And we believe that the contractor-homeowner experience can and should be more. So, we envision a world where every single “touch” from the contractor not only exceeds expectations but also creates new expectations for how a homeowner should be treated."
        image={"/assets/sw-about-Homeowners.jpg"}
      />
      <HalfSection
        flipped={true}
        title="Contractors"
        description="Our existence is rooted in the dream of starting a contracting business and building it to become a successful legacy to be passed to future generations. But in our vision, contractors don’t have to go at it alone. They have friends, mentors and partners who treat them like family and walk alongside them to help make this dream a reality."
        image={"/assets/sw-about-contractors.jpg"}
      />
      <HalfSection
        flipped={false}
        title="Employees"
        description="We strive to bring out the best in our employees and help them see a better version of themselves. Because, by creating an environment where employees feel a passion for and fulfillment from their work, we know they’ll go home to happier families. And those families will create better neighborhoods and stronger communities."
        image={"/assets/sw-about-employees.jpg"}
      />
    </div>
  );
};

export default Company;

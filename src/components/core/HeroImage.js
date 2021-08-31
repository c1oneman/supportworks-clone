const HeroImage = ({ image }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <img alt="HeroImage" src={image} className="w-full"></img>
    </div>
  );
};

export default HeroImage;

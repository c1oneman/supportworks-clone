const WhatThisMeans = () => {
  return (
    <div
      className={`sm:max-w-6xl mx-8 sm:px-6 lg:px-8 sm:mx-auto flex flex-wrap mt-16`}
    >
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 flex flex-col sm:pb-48">
          <div className="flex flex-col sm:mx-24">
            <img
              className="w-1/2"
              alt="evergreen icon"
              src="/assets/sw-evergreen-Employeetree.png"
            ></img>
            <h1 className="font-bold mt-8 text-2xl">
              What this means for our employess
            </h1>
            <p className="text-gray-600 text-lg my-4">
              Supportworks has the culture, financial strength and long-term
              vision to weather economic storms and industry disruptions for the
              next century and beyond. In other words, there's a good chance
              your grandchildren could end up working here.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 sm:pt-48 mt-4">
          <div className="flex flex-col sm:mx-24">
            <img
              className="w-1/2"
              alt="evergreen icon 2"
              src="/assets/sw-evergreen-contractortree.png"
            ></img>
            <h1 className="font-bold mt-8 text-2xl">
              What this means for our contractors
            </h1>
            <p className="text-gray-600 text-lg my-4">
              Supportworks isn't here to inflate its value and sell out to the
              highest bidder. We're in it for the long-haul, as we work
              tirelessly towards ensuring the lasting success of our network and
              our partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatThisMeans;

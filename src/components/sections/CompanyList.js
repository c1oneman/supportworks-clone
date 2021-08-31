import CompanyDetail from "../core/CompanyDetail";
const CompanyList = () => {
  return (
    <div className="max-w-6xl sm:px-6 lg:px-8 mx-auto">
      <div class="text-left px-2 sm:px-0">
        <h1 class="text-3xl w-full sm:w-full tracking-tight font-bold text-gray-900 sm:text-5xl">
          <span class="block xl:inline">Our Companies</span>
          <div class="flex flex-wrap py-14 items-stretch">
            <CompanyDetail
              description="Providing industry-leading products, training and more to an international network of foundation and concrete repair dealers."
              color="regal-blue"
              imageSrc="/assets/foundation-supportworks.jpg"
              logo="/assets/fs-stacked.svg"
              logoScale="w-5/6"
            />
            <CompanyDetail
              description="Transforming America’s cluttered garages via an expanding group of franchisees dedicated to helping homeowners open up the possibilities."
              imageSrc="/assets/hello-garage.jpg"
              color="hello-yellow"
              logo="/assets/hello-garage.svg"
              logoScale="w-4/6"
            />
            <CompanyDetail
              description="Developing next-generation software that drastically improves the contractor-homeowner experience."
              color="happy-blue"
              imageSrc="/assets/solutionview.jpg"
              logo="/assets/SolutionView-logo.svg"
              logoScale="w-5/6"
            />
          </div>
        </h1>
      </div>
    </div>
  );
};

export default CompanyList;

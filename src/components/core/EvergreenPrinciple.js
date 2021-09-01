const EvergreenPrinciple = ({ h1, p, id }) => {
  return (
    <div className="max-w-6xl sm:px-6 lg:px-8 mb-12 sm:mb-24 mx-4">
      <div class="w-full flex justify-center">
        <div className="w-1/5 flex items-start justify-center">
          <div className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center">
            <p>{id}</p>
          </div>
        </div>
        <div className="w-4/5">
          <h1 className="text-green-800 text-3xl font-bold">{h1}</h1>
          <p className="text-gray-600 text-lg my-4">{p}</p>
        </div>
      </div>
    </div>
  );
};

export default EvergreenPrinciple;

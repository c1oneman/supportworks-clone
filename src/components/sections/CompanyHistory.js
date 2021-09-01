import {} from "react-router-dom";
import HistoryItem from "../core/HistoryItem";
const CompanyHistory = () => {
  return (
    <div
      className={`sm:max-w-6xl mx-auto flex bg-white sm:shadow-xl rounded-md sm:border`}
    >
      <div className="sm:p-12">
        <HistoryItem
          icon="/assets/historyIcons/1975-ai-01.svg"
          year="1975"
          description="Thrasher Basement Water Control is founded by Greg Thrasher on the simple notion of offering a better experience for homeowners looking to fix leaky basements"
        />
        <HistoryItem
          icon="/assets/historyIcons/1995.svg"
          year="1995"
          description="Greg Thrasher helps develop a better foundation piering system"
        />
        <HistoryItem
          icon="/assets/historyIcons/2008.svg"
          year="2008"
          description=" Foundation Supportworks is founded by Greg Thrasher, his son Dave and a small group of people dedicated to redefining an entire industry"
        />
        <HistoryItem
          icon="/assets/historyIcons/2012.svg"
          year="2012"
          description="PolyLevel is developed to provide a superior, high-tech solution to the common problem of sinking and broken concrete, and the concrete division of Foundation Supportworks is born"
        />
        <HistoryItem
          icon="/assets/historyIcons/2016.svg"
          year="2016"
          description="Supportworks worldwide headquarters finishes construction in Papillion, NE"
        />
        <HistoryItem
          icon="/assets/historyIcons/2019.svg"
          year="2019"
          description="SolutionView is founded as a software company built for contractors by contractors"
        />
        <HistoryItem
          icon="/assets/historyIcons/2020_HG.svg"
          year="2020"
          description="Hello Garage acquires its first franchisee"
        />
        <HistoryItem
          icon="/assets/historyIcons/2020_Evergreen.svg"
          year="2020"
          description="Supportworks is Certified Evergreen by the Tugboat Institute"
        />
      </div>
    </div>
  );
};

export default CompanyHistory;

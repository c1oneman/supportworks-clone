import { ReactSVG } from "react-svg";
export const HistoryItem = ({ icon, year, description }) => {
  return (
    <div className="w-full flex">
      <div className="w-36 border-r border-b flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <ReactSVG className="w-1/2" src={icon} alt="icon" />
        </div>
      </div>
      <div className="w-10/12 flex border-b px-12 py-8">
        <p>
          <strong>{year}- </strong> {description}
        </p>
      </div>
    </div>
  );
};
export default HistoryItem;

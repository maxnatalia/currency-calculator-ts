import { formatDate } from "./formatDate";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const { currentDate } = useCurrentDate();

  return (
    <div className="clock">
      <p className="clock__paragraph">
        Today's date:{" "}
        <span className="clock__span">{formatDate(currentDate)}</span>
      </p>
    </div>
  );
};

export default Clock;

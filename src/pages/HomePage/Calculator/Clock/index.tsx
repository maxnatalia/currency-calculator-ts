import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const { currentDate } = useCurrentDate();

  const formatDate = (date: Date) => {
    return date.toLocaleString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

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

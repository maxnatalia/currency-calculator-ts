import { useState, useEffect } from "react";

interface CurrentDateHook {
  currentDate: Date;
}

export const useCurrentDate = (): CurrentDateHook => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { currentDate: date };
};

import { useEffect } from "react";
import { useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString(undefined, { hour12: false });

  return <div className="basis-[70px]">{formattedTime}</div>;
}

export default Clock;

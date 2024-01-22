import { useEffect, useState } from "react";

function CurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <div>
      {currentDate.getMonth() + 1}/{currentDate.getDate()}/
      {currentDate.getFullYear()}
    </div>
  );
}

export default CurrentDate;

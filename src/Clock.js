import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // returning a cleanup function
    return function cleanup(){
      clearInterval(timeID)
    }
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;

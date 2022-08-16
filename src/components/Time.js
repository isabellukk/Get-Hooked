import { useState, useEffect } from 'react';

function Time() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    let timer = setInterval(refreshClock, 1000);
    function oldTime() {
      clearInterval(timer);
    }
  });
  return (
    <div className="time">
      <h4>{date.toLocaleTimeString()}</h4>
    </div>
  );
}

export default Time;

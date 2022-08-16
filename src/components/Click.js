import { useState } from 'react';
function Click() {
  const [count, setCount] = useState(0);

  return (
    <div className="click">
      <div className="container">
        <div className="card">
          <div className="click-card">
            <h4>How high can you go?</h4>
            <div className="button">
              <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
          </div>
        </div>

        <div className="card-count">
          <div className="card-container">
            <h1>{count}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Click;

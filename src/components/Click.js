import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function Click() {
  const [count, setCount] = useState(0);

  return (
    <div className="click">
      <div className="container">
        <div className="card">
          <div className="click-card">
            <h4>How high can you go?</h4>
            <div className="">
              <button onClick={() => setCount(count + 1)}>
                <div className="button-up">
                  <FaArrowUp />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="card-count">
          <div className="card-container">
            <h4>{count}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Click;

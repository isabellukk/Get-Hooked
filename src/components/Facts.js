import { useState } from 'react';

function Facts() {
  const rapidAPI = process.env.REACT_APP_RAPID_KEY;
  console.log(rapidAPI);
  const [data, setData] = useState([]);
  const axios = require('axios');

  const [fact, setFact] = useState('Click the button for a Chuck Norris fact');

  const request = () => {
    const url =
      'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';

    const options = {
      method: 'GET',
      url: url,
      headers: {
        accept: 'application/json',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '047f3a959dmsh7ffd04cb7ee0e83p10800cjsn0692d48d2518',
      },
    };

    axios
      .request(options)
      .then((response) => {
        let result = response.data.value;
        setFact(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="facts">
        <h5>GET YA FACTS HERE</h5>
        <div className="container">
          <h6>{fact}</h6>
        </div>
        <div className="button-facts">
          <button
            onClick={() => {
              setFact(request());
            }}
          >
            FACTS ON FACTS
          </button>
        </div>
      </div>
    </>
  );
}

export default Facts;

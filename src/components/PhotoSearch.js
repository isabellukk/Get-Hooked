import axios from 'axios';
import { useState } from 'react';

function PhotoSearch() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    const url =
      'https://api.unsplash.com/search/photos?page=1&query=' +
      search +
      '&client_id=' +
      clientId;

    axios.get(url).then((response) => {
      setResult(response.data.results);
      console.log(response.data.results);
    });
  };

  const keySubmit = (event) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <div className="card">
      <div className="container">
        <div className="row">
          <h5>Search for a photo</h5>
        </div>
        <div>
          <input
            onChange={handleChange}
            onKeyDown={keySubmit}
            type="text"
            placeholder="Type text here"
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        <div className="unsplash-results">
          {result.map((info, index) => {
            return (
              <div key={(info, index)}>
                <img src={info.urls.thumb} alt="images"></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PhotoSearch;

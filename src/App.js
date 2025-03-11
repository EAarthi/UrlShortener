  import React, { useState } from 'react';

  function App() {
    const [longURL, setLongURL] = useState('');
    const [shortURL, setShortURL] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();

      const response = await fetch("https://41ha830bid.execute-api.ap-south-1.amazonaws.com/v1/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ longURL })
      });

      const data = await response.json();
      setShortURL(data.shortURL);
    };

    return (
      <div style={{ padding: 40 }}>
        <h1>🔗 URL Shortener</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
            placeholder="Paste long URL"
            required
            style={{ width: 300, padding: 10 }}
          />
          <button type="submit" style={{ marginLeft: 10, padding: 10 }}>Shorten</button>
        </form>
        {shortURL && (
          <p>
            Short URL: <a href={shortURL} target="_blank" rel="noreferrer">{shortURL}</a>
          </p>
        )}
      </div>
    );
  }

  export default App;

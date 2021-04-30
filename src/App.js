import { useEffect, useState } from 'react';

function App() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/config.json')
      .then((response) => response.json())
      .then((jsonConfig) => setConfig(jsonConfig));
  }, []);

  if (config === null) {
    return (
      <div className="App">
        Loading
      </div>
    );
  }

  return (
    <div className="App">
      {config.url}
    </div>
  );
}

export default App;

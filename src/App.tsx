import { Analytics, AnalyticsBrowser} from '@segment/analytics-next';
import { useEffect, useState } from "react";

function App() {
  const [analytics, setAnalytics] = useState<Analytics | undefined>(undefined);
  const [writeKey] = useState("writeKey");

  useEffect(() => {
    const loadAnalytics = async () => {
      let [response] = await AnalyticsBrowser.load({ writeKey });
      setAnalytics(response);
    };
    loadAnalytics();
  }, [writeKey]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          onClick={(e) => {
            e.preventDefault();
            analytics?.track("Hello world");
          }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Track
        </a>
      </header>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import { JsonRpcProvider } from 'json-rpc-provider';
import viteLogo from '/vite.svg';
import './App.css';

const provider = new JsonRpcProvider('https://fullnode.mainnet.sui.io:443');

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    provider
      .getAllBalances('0x7fd3c634331c0a0ed115e3d14a79b7e48250bdf6c04493b36f9e02818c0898cc')
      .then(console.log);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

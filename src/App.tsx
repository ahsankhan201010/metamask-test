import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [accountAddress, setAccountAddress] = useState();
  const connectWallet = async () => {
    if (window.ethereum && window.ethereum.request) {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccountAddress(account[0]);
    } else {
      console.log("install meta mask");
    }
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.request) {
      window.ethereum
        .request({
          method: "eth_accounts",
        })
        .then((account) => {
          if (account.length > 0) {
            setAccountAddress(account[0]);
          }
        });
    }
  }, []);

  return (
    <div className="App">
      <div className="wallet">
        {!accountAddress && <button onClick={connectWallet}>click</button>}
        {accountAddress && <h1>Account Address: {accountAddress}</h1>}
      </div>
    </div>
  );
}

export default App;

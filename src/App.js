import { useEffect, useState } from "react";

function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([])
  useEffect(() => {
    (
      fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
    )
  },[])

  return (
   <div>
     <h1>Coin Tracker()</h1>
    {loading ? <strong>Loading...</strong> : null}

   </div>
  );
}

export default App;

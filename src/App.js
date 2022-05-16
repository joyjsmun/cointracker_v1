import { useEffect, useState } from "react";

function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([])
  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
      .then(response => response.json())
      .then(data => setCoins(data))
      setLoading(false)
  },[])

  const coinList = coins.map(coin => <li key={coin.id}>{coin.name} : ${coin.quotes.USD.price}</li>)

  return (
   <div>
     <h1>Coin Tracker({loading? null : `${coins.length}`})</h1>
    {loading ? <strong>Loading...</strong> : coinList}
   </div>
  );
}

export default App;

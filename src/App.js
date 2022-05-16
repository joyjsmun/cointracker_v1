import { useEffect, useState } from "react";

function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([])
  const [amount,setAmount] = useState("")
  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
      .then(response => response.json())
      .then(data => setCoins(data))
      setLoading(false)
  },[])

  const handleDollars = (event) => {
    setAmount("$ ",event.target.value)
  }

  const coinList = coins.map(coin =>
     <option key={coin.id}>{coin.name} : ${coin.quotes.USD.price}</option>
  )

  return (
   <div>
     <h1>Coin Tracker({loading? null : `${coins.length}`})</h1>
     <input onChange={handleDollars} type="text" placeholder="How much you have?"/>
    {loading ? <strong>Loading...</strong> : <select>
      {coinList}
      <hr />
      </select>}
   </div>
  );
}

export default App;

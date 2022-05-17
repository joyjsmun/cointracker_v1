import { useEffect, useState } from "react";
import styled,{keyframes} from "styled-components";


const Wrapper = styled.div`
  &:hover{
    background-color: pink;
  }
`


const sizeAnimation = keyframes`
  from{
    color: ${(props) => props.bgColor};

  }
  to{
    font-size: 40px;
    color:red;
  }
`

const Title = styled.h3`
  animation: ${sizeAnimation} 2s linear infinite
`

function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([])
  const [selectedCoin,setSelectCoin] = useState("")
  const [amount,setAmount] = useState("")
  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
      .then(response => response.json())
      .then(data => setCoins(data))
      setLoading(false)
  },[])

  const handleDollars = (event) => {
    setAmount(event.target.value)
  }
  //figure out printing coin~~~
  const handleCoin = () => {
   console.log(document.getElementById("coinList").value)
  }


  return (
   <Wrapper>
     <Title as="h1" bgColor="yellow">Coin Tracker({loading? null : `${coins.length}`})</Title>
     <input onChange={handleDollars} type="number" placeholder="How much you have?"/>
    {loading ? <strong>Loading...</strong> : <select id="coinList">
    {coins.map(coin => <option onChange={handleCoin} key={coin.id} value={coin.name}>{coin.name} : ${coin.quotes.USD.price}</option>)}
      </select>}
      <hr/>
     <h3>${amount}</h3> <h3></h3>
   </Wrapper>
  );
}

export default App;

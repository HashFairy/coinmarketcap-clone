import { Autorenew } from '@material-ui/icons';
import React from 'react';
import {useState, useEffect} from 'react';
import '../Styles/Coinrank.css'





function Coinrank() {
const [ coins, setCoins] = useState([]);

    useEffect(()=>{
    fetch('http://localhost:8000/market')
       .then (res =>{
           return res.json();
       })
       .then(data=> {
           setCoins(data)
       });
    },[]); 


    return (
        <div>
             <div>
                 <p className="HeaderTitle">Top 50 Cryptocurrencies by Market Capitalization</p>
                <table className="Coinheader">
                   <thead>
                       <tr>
                           <th className="rank"  >#</th>
                           <th className="Name">Name</th>
                           <th className="CurrentPrice">Price</th>
                           <th className="Marketcap" >Marketcap</th>
                           <th className="Volume">Volume(24h)</th>
                           <th className="Circulatingsupply">Circulating Supply </th>
                       </tr>
                   </thead>
               
                   <tbody >
                 {coins.map(coin=>(
                     <tr key={coin.id}>
                        <td >{coin.market_cap_rank}</td>
                        <td><img className="coin-logo"src={coin.image}/></td>
                        <td>{coin.name}</td> 
                        <td className="symbol">{coin.symbol}</td> 
                        <td>${coin.current_price}</td>
                        <td>{coin.market_cap}</td>
                        <td >{coin.total_volume}</td>
                        <td>{coin.circulating_supply}</td>
                        <td>{coin.symbol}</td>

                     </tr>
                 ))}
   
                </tbody>
                  </table>
           </div>
        </div>
    )
}

export default Coinrank

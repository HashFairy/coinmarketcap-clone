import cors from 'cors';
import morgan from 'morgan';
import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(morgan('tiny'));
app.use(cors());

app.get('/market',async (req,res)=>{
    const URL= ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=GBP&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    await fetch(URL)
    .then(response => response.json())
    .then(json =>{
        res.json(json);
    })

});

function notFound(req, res, next){
    res.status(404);
    const error = new Error('Not Found');
    next(error);
}

function errorHandler(error, req, res, next){
    res.status(res.statuscode || 500);
    res.json({
        message: error.message
    })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT,() =>{
    console.log(`Listening on Port, ${PORT}`)
});
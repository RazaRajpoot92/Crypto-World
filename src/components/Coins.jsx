import React, { useEffect, useState } from 'react'
import { server } from '../index'
import axios from "axios"
import { Container, HStack} from "@chakra-ui/react"
import Loader from './Loader'
import ErroComponent from './ErroComponent'
import CoinCard from './CoinCard'
const Coins = () => {

    const [coin, setCoin] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(()=>{
        const fetchAllCoins = async()=>{

            try {
            const {data} = await axios.get(`${server}/coins/markets?vs_currency=usd`)

            setCoin(data)
            setLoading(false)


           }
           catch (error) {
            setErr(true)
            setLoading(false)

           }
        }

        fetchAllCoins();
    },[])


    if(err) return <ErroComponent message={"Error while fetching data, please reload after sometime."} />


  return (
    <Container  maxW={"container.xl"}>
        {loading? <Loader />:<>
        <HStack justifyContent={"center"} wrap={"wrap"}>

        {
            coin.map(i=>(

                <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                img={i.image}
                price={i.current_price}
                symbol={i.symbol} />
            ))
        }

        </HStack>
        </>}
    </Container>
  )
}

export default Coins;
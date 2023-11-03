import React, { useEffect, useState } from 'react'
import { server } from '../index'
import axios from "axios"
import { Container, HStack} from "@chakra-ui/react"
import Loader from './Loader'
import ExchangeCard from './ExchangeCard'
import ErroComponent from './ErroComponent'
const Exchanges = () => {

    const [exchanges, setExchanges] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(()=>{
        const fetchAllExchanges = async()=>{
           try {
            const {data} = await axios.get(`${server}/exchanges`)

            setExchanges(data)
            setLoading(false)

           }
           catch(error) {
            setLoading(false)
            setErr(true)


           }
        }

        fetchAllExchanges();

    },[])


    if(err) return <ErroComponent message={"Error while fetching data"} />


  return (
    <Container  maxW={"container.xl"}>
        {loading? <Loader />:<>
        <HStack justifyContent={"center"} wrap={"wrap"}>

        {
            exchanges.map(i=>(

                <ExchangeCard
                id={i.id}
                key={i.id}
                name={i.name}
                img={i.image}
                url={i.url}
                rank={i.trust_score_rank} />
            ))
        }

        </HStack>
        </>}
    </Container>
  )
}

export default Exchanges

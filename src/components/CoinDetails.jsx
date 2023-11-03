import React,{useState,useEffect} from "react";
import {Badge, Box, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack} from "@chakra-ui/react"
import Loader from "./Loader";
import {useParams} from "react-router-dom"
import axios from "axios";
import { server } from "..";
import ErroComponent from "./ErroComponent";

const CoinDetails = ()=>{

    const [coin, setCoin] = useState({})
    const [loading, setLoading] = useState(true)
    const [err,setErr] = useState(false)
    const [currency,setCurrency] = useState("usd")
    const params = useParams()

    const currencySymbol = currency === "pkr"? "Rs ": currency ==="eur"?"€":"$"

    useEffect(()=>{
        const fetchAllExchanges = async()=>{
           try {
            const {data} = await axios.get(`${server}/coins/${params.id}`)

            setCoin(data)
            
            setLoading(false)

           }
           catch(error) {
            setLoading(false)
            setErr(true)


           }
        }

        fetchAllExchanges();

    },[params.id])

    if(err) return <ErroComponent message={"Error while fetching data"} />


    return(
        <Container maxW={"container.xl"}>
            {
                loading?(<Loader />):(
                    <>
                    {/* <Box w={"full"} borderWidth={1}>
                        lkj

                    </Box>


                    {} */}

                    <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                        <HStack spacing={"4"}>
                            <Radio value={"pkr"} >PKR</Radio>
                            <Radio value={"usd"} >USD</Radio>
                            <Radio value={"eur"} >EURO</Radio>
                        </HStack>
                    </RadioGroup>

                    <VStack spacing={"4"} alignItems={"flex-start"}>

                        <Text alignSelf={"center"} opacity={0.6}>

                            Last updated on {Date(coin.market_data.last_updated).split("G")[0]}

                        </Text>

                        <Image w={"16"} h={"16"} objectFit={"contain"} src={coin.image.large} />

                        <Stat>
                            <StatLabel>{coin.name}</StatLabel>
                            <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>


                            <StatHelpText>

                            <StatArrow
                            type={coin.market_data.price_change_percentage_24h > 0? "increase":"decrease"}
                                    />
                                {coin.market_data.price_change_percentage_24h}

                            </StatHelpText>

                        </Stat>

                        <Badge fontSize={"2xl"}
                        bgColor={"blackAlpha.900"}
                        color={"white"}
                        >
                            {`#${coin.market_cap_rank}`}
                        </Badge>


                    <CustomBar
                    high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                    low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} />


                      <Box w={"full"} p={"4"}>
                        <Item title={"Max Supply"} value={coin.market_data.max_supply} />
                        <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
                        <Item title={"Market Cap"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
                        <Item title={"All Time High"} value={`${currencySymbol}${coin.market_data?.ath[currency]}`} />
                        <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data?.atl[currency]}`} />

                      </Box>

                    </VStack>


                    </>
                )
            }

        </Container>

    );
}

const Item = ({title,value})=>(
        <HStack justifyContent={"space-between"} w={"full"} my={"4"} >
            <Text fontFamily={"Bebas Neue"} letterSpacing={'wider'}>{title}</Text>
            <Text>{value}</Text>
        </HStack>
)

const CustomBar = ({low,high})=>{
    return(
        <VStack w={"full"}>
            <Progress value={50} colorScheme={"teal"} w={"full"} />
            <HStack justifyContent={"space-between"} w={"full"}>
                <Badge children={low} colorScheme={"red"}/>
                <Text>24H Range</Text>
                <Badge children={high} colorScheme={"green"}/>

            </HStack>

        </VStack>
    );
}

export default CoinDetails;
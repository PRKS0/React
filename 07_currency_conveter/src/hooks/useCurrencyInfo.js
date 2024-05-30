import {useState, useEffect} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect( ()=>{
        fetch(`https://api.github.com/users/${currency}`)
        .then((res)=>{return res.json()})
        .then( (res)=>{ setData(res[currency]) } )
    }, [currency] )
    return data
}

export default useCurrencyInfo
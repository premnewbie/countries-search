import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import "./CountriesSearch.css";

const CountriesSearch = () => {
    const [apiData,setApiData] = useState([]);
    const [filterApiData,setFilterApiData] =  useState();


    const fetchUrl = async() => {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        return response;
    }

    const filterCountry = (newData) =>{ 
        let filteredData;
        if(newData){
            filteredData =  apiData.filter((data) => {
                const nameLower = data.name.common.toLowerCase();
                return nameLower.includes(newData.toLowerCase());
            })
            console.log("filteredData ",filteredData);
            setFilterApiData(filteredData);
        }else{
            setFilterApiData();
        }
    }

    useEffect(()=>{
        fetchUrl()
        .then(res => {
            setApiData(res.data);
        })
        .catch(err => console.log(err));
    },[]);

    return (     
        <div >
            <input  type="text" placeholder="Search for countries" onInput={(e)=>filterCountry(e.target.value)} />
            <div id="countries-flags">
                {!filterApiData && apiData?.map((card)=> (
                    <CountryCard cardData={card} key={card.name.common} />
                ))}
                {filterApiData && filterApiData.map((card)=> (
                    <CountryCard cardData={card} key={card.name.common} />
                ))}
            </div>
        </div>
     );
}
 
export default CountriesSearch;
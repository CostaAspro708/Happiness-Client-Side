import { useState, useEffect } from "react";

  function getYear(year) {
    const url = 'http://131.181.190.87:3000/rankings?year='+year;
    return fetch(url)
    .then((res) => res.json())
    .then((res) =>
        // get just the title and url from each article
        res.map((res) => ({
            rank: res.rank,
            country: res.country,
            score: res.score,
            year: res.year,
        })),
    )
}

export function getYearReg(year) {
    const url = 'http://131.181.190.87:3000/factors/'+year;
    let token = localStorage.getItem("token");
    return fetch(url, {
        headers: {accept: "application/json", Authorization: "Bearer " + token},
    })
    .then((res) => res.json())
    .then((res) =>
        // get just the title and url from each article reg
        res.map((res) => ({
            rank: res.rank,
            country: res.country,
            score: res.score,
            economy: res.economy,
            family: res.family,
            health: res.health,
            freedom: res.freedom,
            generosity: res.generosity,
            trust: res.trust,
        })),
    )
}

function getCountryRank(Country) {
    const url = 'http://131.181.190.87:3000/rankings?country='+Country;
    return fetch(url)
    .then((res) => res.json())
    .then((res) =>
        // get just the title and url from each article
        res.map((res) => ({
            year: res.year,
            score: res.score,
            rank: res.rank,
        })),
    )
}

function getCountryList() {
    const url = 'http://131.181.190.87:3000/countries';
    return fetch(url)
    .then((res) => res.json())
}


export function useCountries(year, country){
    
    const [loading, setLoading] = useState(true);
    const [countires, setCountries] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(year == null){
                getCountryRank(country).then((countires) => {
                setCountries(countires);
                setLoading(false);
                }).catch((e) => {
                    setError(e);
                    setLoading(false);
                })
        }else{
                getYear(year).then((countires) => {
                setCountries(countires);
                setLoading(false);
                }).catch((e) => {
                    setError(e);
                    setLoading(false);
                })
        }
        
        
    }, []);


    return {
        loading,
        countires,
        error,
    }
}

export function useCountriesReg(year, country){
    
    const [loading, setLoading] = useState(true);
    const [countires, setCountries] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(year == null){
                getCountryRank(country).then((countires) => {
                setCountries(countires);
                setLoading(false);
                }).catch((e) => {
                    setError(e);
                    setLoading(false);
                })
        }else{
                getYearReg(year).then((countires) => {
                setCountries(countires);
                setLoading(false);
                }).catch((e) => {
                    setError(e);
                    setLoading(false);
                })
        }
        
        
    }, []);


    return {
        loading,
        countires,
        error,
    }
}

export function useCountriesList(){
    const [loading, setLoading] = useState(true);
    const [countires, setCountries] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
                getCountryList().then((countires) => {
                setCountries(countires);
                setLoading(false);
                }).catch((e) => {
                    setError(e);
                    setLoading(false);
                })
    }, []);

    return {
        loading,
        countires,
        error,
    }

}


import { useState, useEffect } from "react";

export function getHeadlines() {
    const url = 'http://131.181.190.87:3000/rankings?year=2020';
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

export function useNewsArticles(){
    const [loading, setLoading] = useState(true);
    const [headlines, setHeadlines] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        getHeadlines().then((headlines) => {
        setHeadlines(headlines);
        setLoading(false);
        }).catch((e) => {
            setError(e);
            setLoading(false);
        })
        
    }, []);


    return {
        loading,
        headlines,
        error,
    }
}


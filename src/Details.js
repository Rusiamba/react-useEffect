import {useEffect, useState} from "react";

function Details({id}) {
    const [isLoadingDetails, setLoadingaDetails] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {
        if(typeof id === "number") {
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
                .then(response => response.json())
                .then(result => {
                    setItem(result)
                    setLoadingaDetails(false)

                })
        }
    }, [id])

    return (
        <>
            {isLoadingDetails
                ? <div>Loading...</div>
                : <div className="details">
                    <img src={item.avatar}/>
                    <div className="details__name">{item.name}</div>
                    <div className="details__city">City: {item.details.city}</div>
                    <div className="details__company">Company: {item.details.company}</div>
                    <div className="details__position">Position: {item.details.position}</div>
                </div>}
        </>)
}

export default Details;

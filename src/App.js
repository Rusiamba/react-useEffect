import './App.css';
import List from "./List";
import Details from "./Details";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([]);
    const [isLoadingData, setLoadingaData] = useState(true);
    const [id, setId] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
            .then(response => response.json())
            .then(result => {
                setLoadingaData(false)
                setData(result)
            })
    }, [])

    const openCard = (id) => {
        setId(id)
    }
    return (
        <div className="App">
            {isLoadingData
                ? <div>Loading...</div>
                : <List openCard={openCard} data={data}/>}
                <Details id={id}/>
        </div>
    );
}

export default App;

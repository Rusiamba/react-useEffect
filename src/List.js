import Item from "./Item";

function List({openCard, data}) {
    return (
        <div className="list">
            {data.map(e => <Item key={e.id} openCard={openCard} id={e.id} name={e.name}/>)}
        </div>
    );
}

export default List;

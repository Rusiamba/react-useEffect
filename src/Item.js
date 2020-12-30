function Item({openCard, id, name}) {
    return (
        <div className="item" onClick={() => openCard(id)}>
            <div className="name">{name}</div>
        </div>
    );
}

export default Item;

// import {Fragment} from "react";

function ListGroup() {

    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    //
    // items = [];

    return (
        // Ask react to add a fragment
        <>
            <h1>List</h1>
            {/*If left condition is true, the whole line is true */}
            {/*else if false, the whole line is false*/}
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {/*map each item to a list item*/}
                {items.map((item,index) => <li className="list-group-item" key={item} onClick={(event) => console.log(event)}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;
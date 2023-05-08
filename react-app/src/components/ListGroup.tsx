// import {Fragment} from "react";
// import {MouseEvent} from "react";

import {useState} from "react";

interface Props{
    items: string[];
    heading: string;

    // Paramter item with type string
    // returns void
    onSelectItem: (item: string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {



    // hook
    // tells react it has data or state that can change over time
    const [selectedIndex,setSelectedIndex] = useState(-1);

    // Event handler
    // const handleClick = (event: MouseEvent) => console.log(event);
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
                {items.map((item,index) => <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => {setSelectedIndex(index); onSelectItem(item); }}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;
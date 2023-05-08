/*
ts for plain typescript files
tsx for react components
*/

/* PascalCasing */
function Message() {
    // JSX: Javascript XML
    // Will get compiled down to javascript
    const name = "Dilah"
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>
}

export default Message;
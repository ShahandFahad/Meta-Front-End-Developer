function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0",
        backgroundColor : "#FF00FF"
    }
    const wallet = {
        border : "1px solid red",
        padding : "15px",
        borderRadius : "10px"
    }
    return (
    <div>
        <div style={bag}>
            {props.children}
        </div>
        <div style={wallet}>
            {props.kids}
        </div>
    </div>
    )
}
export default Bag;
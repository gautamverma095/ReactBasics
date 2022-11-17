const Todolist = (props) => {
    return (
        <>
        <div style={{display:"flex"}}>
    
        <li>{props.item}</li>
        <button onClick={() => {
            props.func(props.id)
        }}>Delete</button>
                
        </div>
        </>
    )
}
export default Todolist
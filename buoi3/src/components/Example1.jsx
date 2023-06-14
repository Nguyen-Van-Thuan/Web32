



const Example1 = () => {

    //C1: Dinh nghia 1 function handleClick
    // const handleClick = () => {
    //     alert("Click me !");
    // }

    return(
        // <button onClick={handleClick}>Click me!</button>

        // C2: khong can dinh nghia Fn
        <button onClick={()=> alert("1")}>Click me</button> 
    )
}

export default Example1

const Example2 = () => {
    const handleClick = (event) => {
        alert("Xin chao" + event)
    }

    return (
        <>
            <h1>Xu ly su kien co tham so truyen vao</h1>
            <button onClick={() => handleClick("Lop Web32")}>Click me</button>
        </>
    )
}
export default Example2

const Example3 = () => {
    // Co tham so mac dinh la 1 object
    const handleClick = (event) => {
        console.log(event.target, 'event')
    }

    // Co 1 tham so mac dinh, 1 tham so khac
    const handleClickBuy = (event, phone) => {
        console.log(event.target);
        console.log(phone);
    }

    return (
        <>
            <div>Xu ly su kien trong React.Js co san 1 tham so</div>
            <button onClick={handleClick}>Click me</button>
            <button onClick={event => handleClickBuy(event, "Dien thoai")}>Buy Now</button>
        </>
    )
}

export default Example3
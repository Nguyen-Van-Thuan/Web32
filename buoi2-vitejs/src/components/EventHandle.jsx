
const EventHandle = () => {

    const handleClick = () => {
        alert("123");
    }

  return (
    <button onClick={handleClick}>Click Me!</button>
  )
}

export default EventHandle
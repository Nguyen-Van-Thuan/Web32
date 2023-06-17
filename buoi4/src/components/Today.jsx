import { useContext } from "react"
import MyContext from "../context/MyContext"

const Today = () => {
    const today = useContext(MyContext)
  return (
    <div>Hom nay la thu {today}</div>
  )
}

export default Today
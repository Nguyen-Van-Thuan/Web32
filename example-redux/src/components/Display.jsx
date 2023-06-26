import { Button } from "react-bootstrap"
import '../asstes/styles.css'
import { useDispatch, useSelector } from "react-redux"
import { Giam, Tang } from "../actions/CountActions"

const Display = () => {
    // useSelector: Lay gia tri state trong kho
    const count = useSelector(state => state.count)

    // Cap nhat gia tri: useDispath() - gui di 1 action
    const dispath = useDispatch();

    const handleGiam = () => {
        dispath(Giam()) //gui di 1 hanh dong de cho reducer biet la giam
    }

    const handleTang = () => {
        dispath(Tang()) // gui di 1 hanh dong de cho reducer biet la tang
    }
    return (
        <div className="wrap-counter">
            <h1>App Counter</h1>
            <Button
                variant="danger"
                onClick={handleGiam}
            >
                Giam -
            </Button>

            {count}

            <Button
                variant="primary"
                onClick={handleTang}
            >
                Tang +
            </Button>

        </div>
    )
}

export default Display
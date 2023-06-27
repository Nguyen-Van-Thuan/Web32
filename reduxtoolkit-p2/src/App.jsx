import { useDispatch, useSelector } from 'react-redux'
import { actionGiam, actionTang } from './slice/caculatorSlice'

function App() {
  // Lay trang thai tu kho cua minh (Store)
  const counter = useSelector(state => state.caculator.count)


  // Gui 1 hanh dong len reducer
  const dispatch = useDispatch()

  const hanldeTang = () => {
    dispatch(actionTang(1))
  }

  const handleGiam = () => {
    dispatch(actionGiam(1))
  }

  return (
    <div className="container">
      <h1>Ung dung So Dem</h1>

      <button
        onClick={hanldeTang}
      >
        Tang +
      </button>


      <span>{counter}</span>
      <button
        onClick={handleGiam}
      >
        Giam -
      </button>
    </div>
  )
}

export default App

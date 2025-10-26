import {useState, useMemo} from 'react'
import TestProps from "./TestProps.jsx";
import ClassComponent from "./ClassComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  const object = useMemo(() => ({id: 1, name: 'asd'}), [])
  console.log(count)

  const [error, setError] = useState()

  if (error) {
    throw new Error('Критическая ошибка')
  }
  return (
    <>
      <button onClick={() => setError(true)}>Вызвать ошибку</button>
      <TestProps object={object} />
      {!count && <ClassComponent asd={'props'}/>}
      <button onClick={() => setCount(prev => prev + 1)}>Qwert</button>
    </>
  )
}

export default App

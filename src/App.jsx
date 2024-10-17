
import './App.css'
import Counter from './Counter'
import Friend from './Friend'
import Friends from './Friends'
import Team from './team'
import Users from './Users'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 =() =>{
    alert('Button 2 clicked')
  }

  const handleClick3 = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('Third button clicked')}}>Third</button>
      <button onClick={() => handleClick3(3)}>Four</button>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

interface HeaderProps {
  title: string;
  isLight?: boolean
}

function Header({title}: HeaderProps): JSX.Element {
  return <header><h2>{title}</h2></header>
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header title='TypeScript React' />
      <h1>Hello</h1>
     
    </div>
  )
}

export default App

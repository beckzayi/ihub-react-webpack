import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button';

function App() {
  return (
    <div>
      <Button />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
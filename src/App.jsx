import { useState } from 'react'
import './App.css'

function App() {
  
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [ password, setPassword] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

  

    if(userName === 'user' && password === 'password'){
      setMessage('Welcome, user!')
    }
    else{
      setMessage('Invalid username or password')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>UserName:</label>
        <input type='text' 
        value={userName}
        id="username"
        required
        onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='password'>Password:</label>
        <input type='password' 
        id="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type='submit'>Submit</button>
      </form>

      {message && <p>{message} </p>}
    </div>
  )
}

export default App

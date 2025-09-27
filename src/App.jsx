import { useState } from 'react'
import './App.css'

function App() {
  
   const [error, setError] = useState("");        
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [ password, setPassword] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    setError(""); 
    setIsSubmitted(false); 


    if(!userName || !password){
      setError("Both fields are required");
      return;
    }

    if(userName === 'user' && password === 'password'){
       setIsSubmitted(true);
    }
    else{
      setError('Invalid username or password')
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
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

      
      {isSubmitted && <p>Welcome, user!</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default App

import { useState } from 'react'

export default function Index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authFailed, setAuthFailed] = useState('');

  const handleClick = () => {
    fetch('/api/admin/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (!response.success) setAuthFailed('nok');
        else setAuthFailed('ok');
      });
  }

  return (
    <>
      <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
      <span>{authFailed}</span>
    </>
  )
}
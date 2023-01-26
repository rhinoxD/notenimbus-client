import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${process.env.REACT_APP_LOCAL_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
    const data = await res.json()
    console.log(data)
    if (data.success) {
      // save auth token and redirect
      localStorage.setItem('auth-token', data.token)
      navigate('/')
    } else {
      console.log('Invalid credentials')
    }
  }
  return (
    <form onSubmit={handleSubmit} method='post'>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='email'
          name='email'
          aria-describedby='emailHelp'
          value={credentials.email}
          onChange={onChange}
        />
        <div id='emailHelp' className='form-text'>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='password'
          name='password'
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}

export default Login

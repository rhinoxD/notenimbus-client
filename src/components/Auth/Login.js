import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ showAlert }) => {
  let navigate = useNavigate()

  const [credentials, setCredentials] = useState({ email: '', password: '' })
  
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  let url
  if (process.env.NODE_ENV !== 'development') {
    url = process.env.REACT_APP_URL
  } else {
    url = process.env.REACT_APP_LOCAL_URL
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`${url}/auth/login`, {
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

    if (data.success) {
      // save auth token and redirect
      localStorage.setItem('auth-token', data.token)

      navigate('/')

      showAlert('Logged in successfully!', 'info')
    } else {
      showAlert('Invalid Credentials.', 'danger')
    }
  }

  return (
    <form onSubmit={handleSubmit} method='post'>
      <div className='mb-3 mt-4'>
        <h1>Login</h1>
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
          required
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
          minLength={8}
          required
        />
      </div>
      
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}

export default Login

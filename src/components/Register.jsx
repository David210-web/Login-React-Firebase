import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, useNavigate,Link } from 'react-router-dom'
import Alert from '../components/Alert'

function Register() {
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: " ",
    password: "",
  })

  const handleEvent = ({ target: { name, value } }) => setUser({ ...user, [name]: value })

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      navigate('/')

    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='w-full max-w-xs m-auto'>
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-center font-bold text-2xl'>Registrate</h2>
        <div className="mb-4">
          <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
          <input type="email" name="email" placeholder='YourCompay@email.com' onChange={handleEvent} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
          <input type="password" name="password" onChange={handleEvent} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Ingresar</button>
        <p className='my-4 text-sm flex justify-between px-3'>¿Ya tienes una cuenta? <Link to='/login'>Inicia sesion</Link></p>

      </form>
    </div>
  )
}

export default Register
import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'

function Login() {
  const { login, loginWithGoogle,resetPassword } = useAuth()
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
      await login(user.email, user.password)
      navigate('/')

    } catch (error) {
      setError(error.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')

    } catch (error) {
      setError(error.message)
    }
  }

  const handleResetPassword = async()=>{
    if(!user.email) setError("Porfavor, ingrese su correo")
    try {
      await resetPassword(user.email)
      setError('Te hemos un enviado un link a tu correo para recuperar tu contraseña')
    } catch (error) {
      setError(error)
    }
  }


  return (
    <div className='w-full max-w-xs m-auto'>
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-center font-bold text-2xl'>Iniciar sesion</h2>
        <div className="mb-4">
          <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
          <input type="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="email" placeholder='YourCompay@email.com' onChange={handleEvent} />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
          <input type="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="password" onChange={handleEvent} />
        </div>
        <div className="flex items-center justify-between">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Ingresar</button>
          <a href="#!" className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' onClick={handleResetPassword}>Recuperar contraseña</a>
        </div>

      </form>
      <p className='my-4 text-sm flex justify-between px-4'>¿No tienes una cuenta? <Link to='/register'>Registrate</Link></p>
      <button onClick={handleGoogleLogin} className='bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full'>Google Login</button>
    </div>
  )
}

export default Login
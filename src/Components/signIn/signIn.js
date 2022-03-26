import { React, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const SignIn = (props) => {
  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const [checkPass, setCheckPass] = useState('')
  const [isAuth, setIsAuth] = useState(true)
  const [urlPage, setUrlPage] = useState('')
  //const [id, setId] = useState('')

  var history = useHistory();
    const Forgot=()=>{
        history.push("/forgotPass");
    }

  useEffect(() => {
    axios.get('https://soc-server-web.herokuapp.com/user/check2/' + email).then((res) => {
      // eslint-disable-next-line

      setUrlPage(`/home`)
      //setId(res.data._id)
    })
    //window.alert(id)
  }, [email])

  useEffect(() => {
    axios.get('https://soc-server-web.herokuapp.com/user/check/' + email + '/' + passw).then((res) => {
      setCheckPass(res.data)

      //window.alert(res.data)
    })
  }, [passw, email])


  const Submit = (e) => {
    //window.alert(checkPass)
    if (checkPass != 'incorrect' && checkPass!='') {
      window.alert(checkPass)
      localStorage.setItem("token", checkPass );
      setIsAuth(false)
      e.preventDefault()
    } else {
      window.alert('email and password did not match')
      e.preventDefault()
    }
   
  }
  if (!isAuth) {
    window.location.reload();
    return <Redirect to={urlPage} />
  }
  return (
    <div className='col-10 my-5'>
      <h1 className='text-light mb-4 mt-3 text-center'>SIGN IN</h1>
      <form onSubmit={Submit}>
        <div className='d-flex flex-row align-items-center mb-3'>
          <i className='fas fa-user fa-lg me-3 fa-fw' />
          <div className='form-outline flex-fill mb-0'>
            <input
              required
              autoComplete={false}
              type='email'
              id='form3Example1c'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className='form-label text-light' htmlFor='form3Example1c'>
              Email
            </label>
          </div>
        </div>
        <div className='d-flex flex-row align-items-center mb-4'>
          <i className='fas fa-user fa-lg me-3 fa-fw' />
          <div className='form-outline flex-fill mb-0'>
            <input
              required
              autoComplete={false}
              type='password'
              id='form3Example1c'
              className='form-control'
              value={passw}
              onChange={(e) => setPassw(e.target.value)}
            />
            <label className='form-label text-light' htmlFor='form3Example1c'>
              password
            </label>
          </div>
        </div>

        <div className='d-flex justify-content-center  mx-4 mb-1 mb-lg-4'>
          <button
            type='submit'
            className='btn btn-primary border-warning btn-lg '
          >
            LOGIN
          </button>
        </div>
      </form>
      <a href="#" className="text-light mx-2" onClick={Forgot}>forgot password</a>
    </div>
  )
}

export default SignIn

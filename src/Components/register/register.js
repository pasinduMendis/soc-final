import './register.css'

import { React, useState } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com'
import { useHistory } from 'react-router'
//import emailjs from 'emailjs-com'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const [passwConf, setPasswConf] = useState('')
  const [confirm, setConfirm] = useState(true)
  const [veriCode, setVeriCode] = useState('')
  const [code, setCode] = useState('code')
  const history = useHistory()
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length

  const verification = (a) => {
    if (!a) {
      return (
        <div className='col-lg-10 justify-content-center reg_form mt-5'>
          <h1 className='text-light mb-4 mt-3 text-center'>USER REGISTER</h1>
          <form className='mx-1 mx-md-4' onSubmit={Submit}>
            <div className='d-flex flex-row align-items-center mb-4'>
              
              <div className='form-outline flex-fill mb-0'>
                <p className='text-warning'>
                  your verification code was sent to {email}
                </p>
                <input
                  required
                  type='text'
                  id='form3Example1c'
                  className='form-control'
                  value={veriCode}
                  onChange={(e) => setVeriCode(e.target.value)}
                />
                <label
                  className='form-label text-light'
                  htmlFor='form3Example1c'
                >
                  verification code
                </label>
              </div>
            </div>
            <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
              <button
                type='submit'
                className='btn btn-success border-warning btn-lg'
              >
                Register
              </button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className='col-lg-12 justify-content-center reg_form mt-4 '>
          <h1 className='text-light mb-4 mt-3 text-center'>USER REGISTER</h1>
          <form className='mx-auto mx-md-4' onSubmit={Submit}>
            <div className='d-flex justify-content-center mb-1'>
              
              <div className='form-outline flex-fill'>
                <input
                  required
                  type='text'
                  id='form3Example1c'
                  className='form-control '
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  className='form-label text-light'
                  htmlFor='form3Example1c'
                >
                  Your Name
                </label>
              </div>
            </div>
            <div className='d-flex flex-row align-items-center mb-1'>
              
              <div className='form-outline flex-fill mb-0'>
                <input
                  required
                  type='email'
                  id='form3Example3c'
                  className='form-control '
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  className='form-label text-light'
                  htmlFor='form3Example3c'
                >
                  Your Email
                </label>
              </div>
            </div>
            <div className='d-flex flex-row align-items-center mb-1'>
             
              <div className='form-outline flex-fill mb-0'>
                <input
                  required
                  type='password'
                  id='form3Example4c'
                  className='form-control '
                  value={passw}
                  onChange={(e) => setPassw(e.target.value)}
                />
                <label
                  className='form-label text-light'
                  htmlFor='form3Example4c'
                >
                  Password
                </label>
              </div>
            </div>
            <div className='d-flex flex-row align-items-center mb-1'>
              
              <div className='form-outline flex-fill mb-0'>
                <input
                  type='password'
                  id='form3Example4cd'
                  className='form-control'
                  value={passwConf}
                  onChange={(e) => setPasswConf(e.target.value)}
                />
                <label
                  className='form-label text-light'
                  htmlFor='form3Example4cd'
                >
                  Confirm your password
                </label>
              </div>
            </div>

            <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
              <button
                type='submit'
                className='btn btn-success border-warning btn-lg'
              >
                Register
              </button>
            </div>
          </form>
        </div>
      )
    }
  }
  const Submit = (e) => {
    if (passw === passwConf) {
      if (confirm) {
        for (var i = 0; i < 8; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          )
        }
        setCode(result)
        const templateParams = {
          name: name,
          email: email,
          code: result,
        }

        emailjs
          .send(
            'service_5gdbxao',
            'template_60zah1u',
            templateParams,
            'user_3aJ4YY3XogjKr7CvISx80'
          )
          .then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text)
            },
            (err) => {
              console.log('FAILED...', err)
            }
          )
      }
      setConfirm(false)

      //window.alert(code)
      if (code === veriCode) {
        const obj = {
          name: name,
          email: email,
          password: passw,
          //admin_id: this.state.admin_id,
        }

        axios.post('https://soc-server-web.herokuapp.com/user/add', obj).then((res) => {
          window.alert(res.data)
        })
        setConfirm(true)
      } else {
        window.alert('please enter correct verification code')
        e.preventDefault()
      }
    } else {
      window.alert('confirm password did not match')
      e.preventDefault()
    }
  }

  return <div className='col-sm-10'>{verification(confirm)}</div>
}

export default Register

import { useEffect, useState } from "react"
import axios from 'axios'
import emailjs from 'emailjs-com'
import { useHistory } from 'react-router'

const ForgotPass = (props) => {
    const history = useHistory()
    const[email,setEmail]=useState('')
    const[newPass,setNewPass]=useState('')
    const[confPass,setconfPass]=useState('')
    const [confirm, setConfirm] = useState(true)
    const [veriCode, setVeriCode] = useState('')
    const[userEmail,setUserEmail]=useState('')
  const [code, setCode] = useState('code')
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length

  useEffect(()=>{
    axios.get('https://soc-server-web.herokuapp.com/user/check2/' + email).then((res) => {
        res.data.email?setUserEmail(res.data.email):setUserEmail('')
      })
  },[email])
  
  const CloseFuc=()=>{
    history.push("/login");
}

    const Submit = async (e) => {

          if(userEmail){
            
        if (newPass === confPass) {
          if (confirm) {
            for (var i = 0; i < 8; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              )
            }
            setCode(result)
            const templateParams = {
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
                password:newPass,
            }
    
            axios.put('https://soc-server-web.herokuapp.com/user/update/'+userEmail, obj).then((res) => {
              window.alert(res.data)
            })

            history.push('/login')
          } else {
            window.alert('please enter correct verification code')
            e.preventDefault()
          }
        } else {
          window.alert('confirm password did not match')
          e.preventDefault()
        }
    }else{
        window.alert('this email did not exist in database')
    }
      }


      const verification = (a) => {
        if (!a) {
          return (
            <div className='row justify-content-around reg_form mt-5'>
                <div className='col-8'>
              <h1 className='text-dark mb-4 mt-3 text-center'>FORGOT PASSWORD</h1>
              <form className='mx-1 mx-md-4' onSubmit={Submit}>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <i className='fas fa-user fa-lg me-3 fa-fw' />
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
                      className='form-label text-dark'
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
                    Submit
                  </button>
                  <button
                    className='btn btn-danger border-warning btn-lg mx-3'
                    onClick={CloseFuc}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
            </div>
          )
        }else{
            return (
                <div className='row justify-content-around reg_form mt-5'>
                <div className='col-8'>
              <h1 className='text-dark mb-4 mt-3 text-center'>FORGOT PASSWORD</h1>
              <form className='mx-1 mx-md-4' onSubmit={Submit}>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <i className='fas fa-user fa-lg me-3 fa-fw' />
                  <div className='form-outline flex-fill mb-0'>
                    <input
                      required
                      type='email'
                      id='form3Example1c'
                      className='form-control'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      className='form-label text-dark'
                      htmlFor='form3Example1c'
                    >
                      your email
                    </label>
                  </div>
                </div>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <i className='fas fa-user fa-lg me-3 fa-fw' />
                  <div className='form-outline flex-fill mb-0'>
                    <input
                      required
                      type='password'
                      id='form3Example1c'
                      className='form-control'
                      value={newPass}
                      onChange={(e) => setNewPass(e.target.value)}
                    />
                    <label
                      className='form-label text-dark'
                      htmlFor='form3Example1c'
                    >
                      new password
                    </label>
                  </div>
                </div>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <i className='fas fa-user fa-lg me-3 fa-fw' />
                  <div className='form-outline flex-fill mb-0'>
                    <input
                      required
                      type='password'
                      id='form3Example1c'
                      className='form-control'
                      value={confPass}
                      onChange={(e) => setconfPass(e.target.value)}
                    />
                    <label
                      className='form-label text-dark'
                      htmlFor='form3Example1c'
                    >
                      confirm password
                    </label>
                  </div>
                </div>
                <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                  <button
                    type='submit'
                    className='btn btn-success border-warning btn-lg'
                  >
                    Submit
                  </button>
                  <button
                    className='btn btn-danger border-warning btn-lg mx-3'
                    onClick={CloseFuc}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
            </div>
            )
        }
    }

    return (
        <div className='mb-5 pb-5'>
            {verification(confirm)}
        </div>
    )
}

export default ForgotPass

import './main.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import SignIn from '../signIn/signIn'
import Register from '../register/register.js'
import ReactPlayer from 'react-player/youtube'
import { useState } from 'react'
const Main = (props) => {
  const [value, setValue] = useState(0)
  const [ses, setSes] = useState('')

  const display = () => {
    if (value === 0) {
      //need change to 0
      return (
        <ReactPlayer
          url='https://youtu.be/fHgkUc5Kevo'
          width='100%'
          height='100%'
          playing={true}
          loop={true}
          stopOnUnmount={false}
        />
      )
    } else if (value === 1) {
      return <SignIn/>
    } else if (value === 2) {
      return <Register />
    }
  }

  return (
    <div className='mainPage row'>
      <div className='row mainTopBar mx-3 col-12 d-flex justify-content-center mb-md-0'>
        <div className='col-12 col-md-6'>
        <img src="/logo.png"alt="" className='mt-4 mx-auto mx-lg-0 d-block ' />
        </div>
        <div
          className='col-8 mt-3 mt-md-1 mx-md-1 col-md-3 col-lg-2 my-lg-3 btn btn-lg btnSign'
          onClick={() => {
            setValue(1)
          }}
        >
          Sign in
        </div>
        <div
          className='col-8 mt-2 mt-md-1 mx-md-1 col-md-3 col-lg-2 my-lg-3 btn btn-lg btnSign'
          onClick={() => {
            setValue(2)
          }}
        >
          Sign up
        </div>
      </div>

      <div className='mx-auto px-lg-5 row d-flex justify-content-center mb-2 mb-md-auto col-12'>
        <div className=' col-lg-5 col-md-8 d-flex justify-content-center  d-none d-lg-block'>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
          >
            <div className='carImge '>
              <img
                src='https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg'
                alt=''
              />
            </div>
            <div className='carImge'>
              <img
                src='https://www.filmibeat.com/ph-big/2021/04/karnan-movie-posters_16179793076.jpg'
                alt=''
              />
            </div>
            <div className='carImge'>
              <img
                src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg'
                alt=''
              />
            </div>
          </Carousel>
        </div>
        <div className='col-lg-6 col-10 mx-auto mainContents d-block justify-content-center'>

          {display()}

          {value != 0? <div onClick={()=>setValue(0)} className='btn btn-sm btn-danger col-12 h-auto d-block d-lg-none'>close</div>:<></>}
        </div>
      </div>
    </div>
  )
}

export default Main

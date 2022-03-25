import React from 'react'
import FailedSignIn from './failedSignIn'

const protect = ({ children, adminOnly }) => {
    var token=localStorage.getItem("token")
    console.log(token)
    if (token==undefined || token==null || token==="") {
        return (
          <FailedSignIn/>
        );
      }
    
      return (
        <>
          <main>{children}</main>
        </>
      );
}

export default protect
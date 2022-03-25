import React from 'react'
import { useHistory } from 'react-router-dom'

const FailedSignIn = () => {
    var history = useHistory();
    const signIn=()=>{
        history.push("/login");
    }
    return (
        <section className="single-page-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h2 className="ctl-pro-sig text-center ctl-hdr-mar-bot">
                  Access denied
                </h2>
                
                <h2 style={{ textAlign: "center" }}>Opps!</h2>
                <p style={{ textAlign: "center" }}>
                  Please logged in to access this page
                </p>
                <div
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  You must be signed in to view this page
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default FailedSignIn
import React from 'react'

export default function Register() {
    let submit=(e)=>{
        
    }
    return (
        <form className="m-5">
            <h1>Registeration</h1>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                Admin Role
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                User Role
                </label>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="pass" className="form-label">Password</label>
                <input type="password" className="form-control" id="pass" />
            </div>
            <div className="mb-3">
                <label htmlFor="cpass" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cpass" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
  )
}

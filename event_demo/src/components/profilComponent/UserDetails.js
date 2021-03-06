import React from 'react'
import {Link} from 'react-router-dom'
 const UserDetails = () => {
    return (
        <form className="form" action="##" method="post" id="registrationForm">
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="first_name"><h4>First name</h4></label>
            <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="last_name"><h4>Last name</h4></label>
            <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="phone"><h4>Phone</h4></label>
            <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="mobile"><h4>Mobile</h4></label>
            <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="email"><h4>Email</h4></label>
            <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="email"><h4>Location</h4></label>
            <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="password"><h4>Password</h4></label>
            <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="password2"><h4>Verify</h4></label>
            <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <br />
            <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign" /> Save</button>
            <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat" /> Reset</button>
          </div>
        </div>
      </form>
    )
}

export default UserDetails

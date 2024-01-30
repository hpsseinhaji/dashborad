
import React from "react"

export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">صفحه ورود</h3>
          <div className="form-group mt-3">
            <label>نام کاربری</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="نام کاربری"
            />
          </div>
          <div className="form-group mt-3">
            <label>کلمه عبور</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="کلمه عبور"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              ورود
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
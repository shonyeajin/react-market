import React, { Component } from "react";
import "./App.css";

class Login extends Component {
  render() {
    return (
      //   <div>
      //     <h1>Login Page</h1>
      //     <p>
      //       <input type="text" placeholder="ID"></input>
      //     </p>
      //     <p>
      //       <input type="text" placeholder="Password"></input>
      //     </p>
      //     <input type="submit"></input>
      //     <h5 onClick>회원가입</h5>
      //   </div>
      <article>
        <h1>Login Page</h1>
        <form
          action="login_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
          }}
        >
          <p>
            <input type="text" placeholder="ID"></input>
          </p>
          <p>
            <input type="text" placeholder="Password"></input>
          </p>
          <input type="submit"></input>
          <h5
            onClick={function (e) {
              alert("회원가입");
            }}
          >
            회원가입
          </h5>
        </form>
      </article>
    );
  }
}

export default Login;

import React, { useState } from 'react';
import './Login.css'



function Login() {
  
  
    return (
      <div className="Login">
        <form >
        <h1>Авторизация</h1>
          <label>
            Email:
            <input
              type="email"
              value=''
              
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value=''
              
            />
          </label>
          <br />
           <p className="error"></p>
          <button type="submit">Войти</button>
          <p className="forgot-password">
            <a href="#">Забыли пароль?</a>
          </p>
        </form>
        
        
        
      </div>
    );
  }

export default Login;
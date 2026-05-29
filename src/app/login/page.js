"use client"

import React, { useState } from 'react'

function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();


    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Akkaunt topilmadi!");
      return;
    }


    if (
      name === savedUser.name &&
      password === savedUser.password
    ) {
      alert("Xush kelibsiz!");
      window.location.href = "/hero";
    } else {
      alert("ism yoki parol xato!");
    }
  }

  return (
    <div className='container'>

      <div className='formDiv'>
        <h1>Tizimga kirish</h1>

        <form onSubmit={handleLogin} className='form'>

          <input
            type='text'
            className='input'
            placeholder='ismingizni kiriting'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type='password'
            className='input'
            placeholder='parolingizni kiriting'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type='submit' className='btn'>
            Kirish
          </button>

        </form>

        <p className='accountNot'>
          Akkauntingiz yoqmi?
          <a href='/register'> Royxatdan oting</a>
        </p>

      </div>

    </div>
  )
}

export default Login

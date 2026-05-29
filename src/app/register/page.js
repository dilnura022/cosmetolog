"use client"

import React, { useState } from 'react'

function Register() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();


    localStorage.setItem("user", JSON.stringify({
      name,
      password
    }));

    alert("Akkaunt yaratildi!");

    window.location.href = "/";
  }

  return (
    <div className="container">

      <div className="registerBox">
        <h2>Ro‘yxatdan o‘tish</h2>

        <form className="register" onSubmit={handleRegister}>

          <input
            className="text"
            type="text"
            placeholder="ismingizni kiriting"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="text"
            type="password"
            placeholder="parol kiriting"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            className="text"
            type="password"
            placeholder="parolni qayta kiriting"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className='button'>
            Akkaunt yaratish
          </button>

        </form>
      </div>

    </div>
  )
}

export default Register
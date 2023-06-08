import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
}

export default Login;

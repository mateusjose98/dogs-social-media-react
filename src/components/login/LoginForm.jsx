import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../form/Input';
import Button from '../form/Button';
import { useForm } from '../../hooks/useForm';

function LoginForm() {
  const { username } = useForm();
  const { password } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => {
          console.log(res.status);
          return res.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  };
  return (
    <section>
      <h1>LoginForm</h1>
      <form action="#" onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Usuario"
          type="text"
          {...username}
        ></Input>
        <Input
          name="password"
          label="Senha"
          type="password"
          {...password}
        ></Input>

        <Button>Entrar</Button>
      </form>
      <Link to={'/login/criar'}>Cadastro</Link>
    </section>
  );
}

export default LoginForm;

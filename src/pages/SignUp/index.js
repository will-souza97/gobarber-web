import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome de Usuario Obrigatoria'),
  email: Yup.string()
    .email('Insira um E-mail Válido')
    .required('E-mail Obrigatorio'),
  password: Yup.string()
    .min(6, 'A Senha deve conter no Minimo 6 Caracteres')
    .required('Senha Obrigatoria'),
});

function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu E-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha Secreta"
        />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já Tenho uma Conta</Link>
      </Form>
    </>
  );
}

export default SignUp;

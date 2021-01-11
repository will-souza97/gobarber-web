import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input type="text" name="name" placeholder="Seu Nome Completo" />
        <Input type="email" name="email" placeholder="Seu Endereço de E-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua Senha Atual"
        />
        <Input type="password" name="password" placeholder="Sua Nova Senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua Nova Senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Logout
      </button>
    </Container>
  );
}

export default Profile;

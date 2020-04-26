import React from 'react';
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignUp;

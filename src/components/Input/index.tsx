import React, { InputHTMLAttributes, ComponentType } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<{ size: string }>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    <Icon />
    <input {...rest} />
  </Container>
);

export default Input;

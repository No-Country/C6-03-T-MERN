import { useContext } from "react";
import styled from "styled-components";
import { BoxContainer, Input, MutedLink, FormContainer, SubmitButton, Marginer, BoldLink, AccountContext } from "../"


export const LoginForm = () => {

const { switchToSignup } = useContext(AccountContext);

const handleClick = ( event ) => {
  event.preventDefault();
  console.log('handle clic');
}

  return (
    <BoxContainer>
      <FormContainer onSubmit={ handleClick }>
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña" />
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">¿Olvidó su contraseña?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" > Entrar </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink>
        ¿No tiene una cuenta? <BoldLink onClick={ switchToSignup }>Registrarse</BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  )
}

import { useContext } from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, Marginer, BoldLink, AccountContext } from "../"



export const LoginForm = () => {

const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">¿Olvidó su contraseña?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" > Entrar </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink>
        ¿No tiene una cuenta? <BoldLink onClick={ switchToSignup }>Registrarse</BoldLink>
        </MutedLink>
    </BoxContainer>
  )
}

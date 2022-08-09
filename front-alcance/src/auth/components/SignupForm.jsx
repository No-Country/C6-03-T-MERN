import { useContext } from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, Marginer, BoldLink, AccountContext } from "../"




export const SignupForm = () => {

  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña" />
        <Input type="password" placeholder="Confirmar contraseña" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">¿Olvidó su contraseña?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" > Entrar </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink>
        ¿Ya tiene una cuenta? <BoldLink onClick={ switchToSignin } >Ingresar</BoldLink>
        </MutedLink>
    </BoxContainer>
  )
}

import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { BoxContainer, Input, MutedLink, FormContainer, SubmitButton, Marginer, BoldLink, AccountContext } from "../"
import { useAuthStore, useForm } from "../../hooks";

const loginFormFields = {
  loginEmail:    '',
  loginPassword: '',
}

export const LoginForm = () => {

  const { startLogin, errorMessage } = useAuthStore();

  const { loginEmail, loginPassword, onInputChange:onLoginChange } = useForm( loginFormFields );

  const { switchToSignup } = useContext(AccountContext);

  const handleClick = async( event ) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });

  }

  useEffect(() => {
    if( errorMessage !== undefined ) {
      Swal.fire('Error en la auntenticación', errorMessage, 'error' );
    }
  }, [errorMessage])


  return (
    <BoxContainer>
      <FormContainer onSubmit={ handleClick }>
        <Input
          type="email"
          placeholder="Correo electrónico"
          name="loginEmail"
          value={ loginEmail }
          onChange={ onLoginChange }
        />
        <Input
          type="password"
          placeholder="Contraseña"
          name="loginPassword"
          value={ loginPassword }
          onChange={ onLoginChange }
        />
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

import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, Marginer, BoldLink, AccountContext } from "../"
import { useAuthStore, useForm } from "../../hooks";

const registerFormFields = {
  registerName:      '',
  registerEmail:     '',
  registerPassword:  '',
  registerPassword2: '',
}



export const SignupForm = () => {

  const { switchToSignin } = useContext(AccountContext);

  const { startRegister, errorMessage } = useAuthStore();

  const { registerName, registerPassword, registerPassword2, registerEmail, onInputChange:onRegisterChange} = useForm( registerFormFields );

  const handleRegister = ( event ) => {
    event.preventDefault();
    if ( registerPassword !== registerPassword2 ) {
      Swal.fire('Error en el registro', 'Contraseñas no son iguales', 'error');
      return;
    }
    if ( registerPassword.length < 6) {
      Swal.fire('Error en el registro', 'La contraseña debe tener al menos 6 caracteres', 'error');
    }

    startRegister({ name: registerName, email: registerEmail, password: registerPassword })
  }

  useEffect(() => {
    if( errorMessage !== undefined ) {
      Swal.fire('Error en la auntenticación', errorMessage, 'error' );
    }
  }, [errorMessage])

  return (
    <BoxContainer>
      <FormContainer onSubmit={ handleRegister }>
        <Input
          type="text"
          placeholder="Nombre completo"
          name="registerName"
          value={ registerName }
          onChange={ onRegisterChange }
        />
        <Input
          type="email"
          placeholder="Correo electrónico"
          name="registerEmail"
          value={ registerEmail }
          onChange={ onRegisterChange }
        />
        <Input
          type="password"
          placeholder="Contraseña"
          name="registerPassword"
          value={ registerPassword }
          onChange={ onRegisterChange }
        />
        <Input
          type="password"
          placeholder="Confirmar contraseña"
          name="registerPassword2"
          value={ registerPassword2 }
          onChange={ onRegisterChange }
        />

        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" >Crear</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink>
          ¿Ya tiene una cuenta? <BoldLink onClick={ switchToSignin } >Ingresar</BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  )
}

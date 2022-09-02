import { useState, useEffect, useRef } from 'react'
import * as s from './Kanban.styles.js'
import { KanbanTask } from './KanbanTask.jsx'
import axios from 'axios'
import { getEnvVariables } from '../../../helpers'
const { VITE_API_URL } = getEnvVariables()
import { useFormik } from 'formik'
import * as yup from 'yup'

export const Kanban = () => {
  const posX = 47
  const [isLoading, setIsLoading] = useState(true)
  const [userList, setUserList] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)
  const [kanbanMessages, setKanbanMessages] = useState([
    {
      id: 1,
      title: 'Hacer el Login',
      description:
        'Hola como estan hola como estan Hola como estan hola como estan Hola como estan hola como estan',
      state: 'Pendiente',
      username: 'Juan Cruz'
    },
    {
      id: 2,
      title: 'Hacer el Register',
      description:
        'Hola como estan hola como estan Hola como estan hola como estan Hola como estan hola como estan',
      state: 'En Proceso',
      username: 'German'
    },
    {
      id: 3,
      title: 'Crear los Modelos',
      description:
        'Hola como estan hola como estan Hola como estan hola como estan Hola como estan hola como estan',
      state: 'Finalizado',
      username: 'Diego'
    },
    {
      id: 4,
      title: 'Crear el Logo',
      description:
        'Hola como estan hola como estan Hola como estan hola como estan Hola como estan hola como estan',
      state: 'Pendiente',
      username: 'Enuel'
    }
  ])

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await axios.get(VITE_API_URL + '/users/list')
        // console.log('Usuarios: ' + JSON.stringify(response.data.data))
        setUserList(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    callApi()
  }, [])

  const initialValues = {
    title: "",
    description: "",
    state: "",
    user: "",
    difficulty: "",
    duration: 1,
  };

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .min(
        3,
        ({ min }) =>
          `El titulo debe tener al menos ${min} caracteres!`
      )
      .required('El titulo no debe estar vacio'),
    description: yup
      .string()
      .min(
        3,
        ({ min }) =>
          `La description debe tener al menos ${min} caracteres!`
      )
      .required('La descripcion no debe estar vacia'),
    state: yup
      .string()
      .required('Por favor, selecciona un estado de la tarea')
      .oneOf(["Pendiente", "En Proceso", "Finalizado"]),
    user: yup
      .string()
      .required('Por favor, seleccion un usuario')
      .oneOf(userList.map((data) => data.name)),
    difficulty: yup
      .string()
      .required('Por favor, selecciona una dificultad')
      .oneOf(["Facil", "Intermedio", "Dificil"]),    
     duration: yup
      .number()
      .integer()
      .min(1, "La duracion debe ser mayor a 1 hora")
      .required('La duracion debe ser mayor a 1')
  })

  const onSubmit = (e) => { 
       setKanbanMessages((oldKabanMessages) => [
         ...oldKabanMessages,
         {
           title: values.title.trim(),
           description: values.description.trim(),
           state: values.state,
           username: values.user
         }
       ])
       resetForm();    
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = formik;

  const handleUpdateState = (id) => {
    const message = kanbanMessages.filter((km) => km.id === id)
    console.log(message[0].id)
    const otherMessage = kanbanMessages.filter((km) => km.id !== id)
    const test = [...otherMessage]
    let newState = 'Pendiente'
    if (message[0].state === 'Pendiente') newState = 'En Proceso'
    if (message[0].state === 'En Proceso') newState = 'Finalizado'
    if (message[0].state === 'Finalizado') newState = 'Pendiente'
    test.push({
      id: message[0].id,
      title: message[0].title,
      description: message[0].description,
      state: newState,
      username: message[0].username
     })
    // console.log(test)
    setKanbanMessages(test)
  }

  return (
    <>
      {isExpanded === false && (
        <s.KanbanCircle onClick={() => setIsExpanded(true)}>
          Kanban
        </s.KanbanCircle>
      )}
      {isExpanded && (
        <>
          <s.KanbanBox
            right={'0.5rem'}
            bottom="4rem"
            width="20rem"
            shadow="true"
          >
            <s.KanbanFormContainer>
              <form onSubmit={handleSubmit} style={{ height: 'auto' }}>
                <div> Nueva Tarea: </div>
                <input
                  type="text"
                  name="title"
                  placeholder=" Titulo..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {errors.title && touched.title && (
                <s.ErrorMsg>{errors.title}</s.ErrorMsg>
                )}  
                <textarea
                  rows="10"
                  cols="40"
                  style={{ height: '10rem' }}
                  name="description"
                  placeholder=" Descripcion..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                {errors.description && touched.description && (
                <s.ErrorMsg>{errors.description}</s.ErrorMsg>
                )}  
                <select 
                  name="state"
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  value={values.state}  
                >
                  <option value="" disabled selected hidden>
                    Estado
                  </option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="En Proceso">En Proceso</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
                {errors.state && touched.state && (
                <s.ErrorMsg>{errors.state}</s.ErrorMsg>
                )}
                <select
                name="user"
                onChange={handleChange}
                onBlur={handleBlur} 
                value={values.user}               
                >
                  <option value="" disabled selected hidden>
                    Usuario
                  </option>
                  {!isLoading && Array.isArray(userList) &&
                    userList.map((data, index) => (
                      <option key={index} value={data.name}>{data.name}/{data.email}</option>
                    ))}
                  {!isLoading && !Array.isArray(userList) &&
                  <>
                    <option value="Diego">Diego</option>
                    <option value="Enuel">Enuel</option>
                    <option value="German">German</option>
                    <option value="German">German</option>
                  </>
                  }
                </select>
                {errors.user && touched.user && (
                <s.ErrorMsg>{errors.user}</s.ErrorMsg>
                )}
                <select
                name="difficulty"
                onChange={handleChange}
                onBlur={handleBlur} 
                value={values.difficulty}
                >
                  <option value="" disabled selected hidden>
                    Dificultad
                  </option>
                  <option value="Facil">Facil</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Dificil">Dificil</option>
                </select>
                {errors.difficulty && touched.difficulty && (
                <s.ErrorMsg>{errors.difficulty}</s.ErrorMsg>
                )}
                <label> Duracion en horas: </label>
                <input
                  name="duration"
                  type="number"
                  placeholder=" Duracion..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.duration}
                ></input>
                {errors.duration && touched.duration && (
                <s.ErrorMsg>{errors.duration}</s.ErrorMsg>
                )}
                <button type="submit" style={{ alignSelf: 'flex-end' }}>
                  Enviar
                </button>
              </form>
            </s.KanbanFormContainer>
          </s.KanbanBox>

          <s.KanbanBox
            right={posX + 'rem'}
            bottom="4rem"
            width="12.5rem"
            shadow="yes"
          >
            <s.KanbanBoxHeader>
              Tareas Finalizadas
              <s.KanbanBoxToggle onClick={() => setIsExpanded(false)}>
                X
              </s.KanbanBoxToggle>
            </s.KanbanBoxHeader>
            <s.KanbanBoxBody heigth="400">
              <s.KanbanLogs>
                {kanbanMessages.map((item, index) => {
                  if (item.state === 'Finalizado')
                    return (
                      <KanbanTask
                        key={index}
                        item={item}
                        handleUpdateState={handleUpdateState}
                      />
                    )
                })}
              </s.KanbanLogs>
            </s.KanbanBoxBody>
          </s.KanbanBox>
          <s.KanbanBox
            right={posX - 13 + 'rem'}
            bottom="4rem"
            width="12.5rem"
            shadow="yes"
          >
            <s.KanbanBoxHeader>Tareas En Proceso</s.KanbanBoxHeader>
            <s.KanbanBoxBody heigth="400">
              <s.KanbanLogs>
                {kanbanMessages.map(
                  (item, index) =>
                    item.state === 'En Proceso' && (
                      <KanbanTask
                        key={index}
                        item={item}
                        handleUpdateState={handleUpdateState}
                      />
                    )
                )}
              </s.KanbanLogs>
            </s.KanbanBoxBody>
          </s.KanbanBox>
          <s.KanbanBox
            right={posX - 26 + 'rem'}
            bottom="4rem"
            width="12.5rem"
            shadow="yes"
          >
            <s.KanbanBoxHeader>Tareas Pendientes</s.KanbanBoxHeader>
            <s.KanbanBoxBody heigth="400">
              <s.KanbanLogs>
                {kanbanMessages.map((item, index) => {
                  if (item.state === 'Pendiente')
                    return (
                      <KanbanTask
                        key={index}
                        item={item}
                        handleUpdateState={handleUpdateState}
                      />
                    )
                })}
              </s.KanbanLogs>
            </s.KanbanBoxBody>
          </s.KanbanBox>
        </>
      )}
    </>
  )
}

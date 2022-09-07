import { useDispatch, useSelector } from 'react-redux'
import { alcanceApi } from '../api'
import { onGetUsersList } from '../store'

export const useChatStore = () => {
  const { usersList } = useSelector((state) => state.chat)
  const dispatch = useDispatch()

  const setUsersList = (list) => {
    dispatch(onGetUsersList(list))
  }

  return {
    //* Propiedades
    usersList,
    //* Métodos
    setUsersList
  }
}

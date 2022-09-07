import { useDispatch, useSelector } from 'react-redux'
import { alcanceApi } from '../api'
import { onSetUsersList, onSetIsChatExpanded } from '../store'

export const useChatStore = () => {
  const { usersList, isChatExpanded } = useSelector((state) => state.chat)
  const dispatch = useDispatch()

  const setUsersList = (list) => {
    dispatch(onSetUsersList(list))
  }

  const setIsChatExpanded = (flag) => 
  {
    dispatch(onSetIsChatExpanded(flag))
  }

  return {
    //* Propiedades
    usersList,
    isChatExpanded,
    //* Métodos
    setUsersList,
    setIsChatExpanded,
  }
}

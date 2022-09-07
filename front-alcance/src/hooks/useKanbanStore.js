import { useDispatch, useSelector } from 'react-redux'
import { alcanceApi } from '../api'
import { onSetTasksList, onSetIsKanbanExpanded } from '../store'

export const useKanbanStore = () => {
  const { tasksList, isKanbanExpanded } = useSelector((state) => state.kanban)
  const dispatch = useDispatch() 

  const setTasksList = (list) => {
    dispatch(onSetTasksList(list))
  }

  const setIsKanbanExpanded = (flag) => {
    dispatch(onSetIsKanbanExpanded(flag))
  }

  return {
    //* Propiedades
    tasksList,
    isKanbanExpanded,
    //* Métodos
    setIsKanbanExpanded,
    setTasksList
  }
}

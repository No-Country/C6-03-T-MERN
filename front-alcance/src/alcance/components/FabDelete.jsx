
import styled from "styled-components"
import { useCalendarStore } from "../../hooks";

const FabDeleteStyle = styled.button`
  border-radius: 100%;
  font-size: 30px;
  position: fixed;
  left: 25px;
  width: 70px;
  height: 70px;
`;

export const FabDelete = () => {

  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () => {
    startDeletingEvent();
  }

  return (
    <FabDeleteStyle
      className="btn btn-danger"
      onClick={ handleDelete }
      style={{
        display: hasEventSelected ? '' : 'none'
      }}
      >
        <i className="fas fa-trash-alt"></i>
    </FabDeleteStyle>
  )
}

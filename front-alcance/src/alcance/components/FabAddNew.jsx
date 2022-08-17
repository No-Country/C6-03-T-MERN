import { addHours } from "date-fns";
import styled from "styled-components"
import { useCalendarStore, useUiStore } from "../../hooks";

const FabAddNewStyled = styled.button`
  border-radius: 100%;
  font-size: 30px;
  position: fixed;
  right: 25px;
  width: 70px;
  height: 70px;
`;

export const FabAddNew = () => {

  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours( new Date(), 24 ),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Enuel'
      }
    });
    openDateModal();
  }

  return (
    <FabAddNewStyled
      className="btn btn-primary"
      onClick={ handleClickNew }
      >
        <i className="fas fa-plus"></i>
    </FabAddNewStyled>
  )
}

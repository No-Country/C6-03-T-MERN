import styled from 'styled-components'
import { motion } from 'framer-motion'


export const KanbanContainer = styled.div`
  display: flex;
  margin: 1rem;
`

export const KanbanBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;  
  background: white;  
  width: 100%;    
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: ${(props) => (props.shadow ? '-1px -1px 5px 0px #ccc' : 'none')}; 
  max-height: 45rem; 
  overflow-y: hidden;
`
export const KanbanBoxHeader = styled.div`
  background: #5a5eb9;  
  min-width: 12.5rem;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 1rem;  
`
export const KanbanBoxBody = styled.div`    
  border: 1px solid #ccc;
  border-radius: 5px; 
  background: #efefef;     
`
export const KanbanBoxBody100 = styled.div`    
  border: 1px solid #ccc;
  border-radius: 5px; 
  background: #efefef; 
  min-width: 100%;
`

export const KanbanBoxToggle = styled.div`
  display: flex;  
  justify-content  : flex-end ;
  width: 1rem;
`
export const KanbanFormContainer = styled.div`    
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #888;  
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;  
  background: #efefef;  
  max-height: 45rem;  
  margin-bottom: 1rem;
  
  &::placeholder {
    color: #888;
  }
  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 95%;                
  }  

  input, select, div, textarea {            
    margin-bottom: 0.5rem;
    padding-left: 1rem;    
    width: 100%;
    font-size: 0.9rem;
    border: 0;
    border-radius: 0.3rem;       
  }
  button {    
    width: auto;
    max-width: 5rem;
    align-self: flex-end;
    border: 1px solid gray;
    border-radius: 0.3rem;
    margin-right: 0.1rem;
    margin-bottom: 0.5rem;
  }
`

export const KanbanCircle = styled.div`
  position: fixed;  
  right: 30%;
  top: 0px;
  background: #0d6efd;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: white;  
  cursor: pointer;
  z-index: 1;
  &:hover {
    background: #004efd;
  }
  /* box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6),
    0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); */ 
`

export const KanbanLogs = styled.div`
  display: flex;
  flex-direction: column;  
  flex-wrap: nowrap;  
  overflow-y: hidden;
  overflow-x: hidden;  
  width: 100%;
`

export const Log = styled.div`          
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6);
  background-color: ${'#dcf8c6'};
  align-self: "center";   
  padding: 0.5rem;   
`
export const Author = styled.div`
font-size: 0.7rem;
color: #5865c3;
`
export const Title = styled.div`
font-size: 1rem;
color: #5865c3;
`
export const Text = styled.div`
width: auto;
`

export const UserListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;  
  height: 415px;
  overflow-y: hidden;  
`

export const ErrorMsg = styled.div`
  color: red;
  font-size: 1rem;
`



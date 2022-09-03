import styled from 'styled-components'
import { motion } from 'framer-motion'

export const KanbanBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;  
  background: white;  
  width: 100%;    
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: ${(props) => (props.shadow ? '-1px -1px 5px 0px #ccc' : 'none')};  
  max-height: 50vh;
`
export const KanbanBoxHeader = styled.div`
  background: #5a5eb9;  
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
  text-align: center;
  font-size: 1rem;
  padding-top: 0.5rem;
`
export const KanbanBoxBody = styled.div`    
  border: 1px solid #ccc;
  border-radius: 5px; 
  background: #efefef;
  overflow-y: scroll;
`
export const KanbanBoxToggle = styled.div`
  float: right;
  margin-right: 15px;
  cursor: pointer;
`
export const KanbanFormContainer = styled.div`    
  padding: 0.5rem;  
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #888;  
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;  
  background: #efefef;  
  max-height: auto;
  &::placeholder {
    color: #888;
  }
  form {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;        
  }  

  input, select, div, textarea {    
    margin: 0;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    width: 100%;
    font-size: 0.9rem;
    border: 0;
    border-radius: 5px;       
  }
  button {    
    width: auto;
    max-width: 5rem;
    align-self: flex-end;
    border: 1px solid gray;
    border-radius: 10px;
    margin-right: 3px;
  }
`

export const KanbanCircle = styled.div`
  position: fixed;  
  right: 180px;
  background: #0d6efd;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: white;
  padding-left: .3rem;
  padding-top: 1.4rem;
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
  padding: 0.8rem;  
  overflow-y: scroll;
  overflow-x: hidden;    
`

export const Log = styled.div`
  margin: 5px 10px;
  padding: 10px;
  color: black;
  font-size: 0.8rem;  
  position: relative;
  border-radius: 5px;  
  width: 95%;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6);
  background-color: ${'#dcf8c6'};
  align-self: "center";    
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
`

export const UserListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-top: 5px;
  height: 415px;
  overflow-y: hidden;  
`

export const UserList = styled.div`
  ul {
    list-style: none;
    padding-left: 1rem;
  }
`

export const ErrorMsg = styled.div`
  color: red;
  font-size: 1rem;
`



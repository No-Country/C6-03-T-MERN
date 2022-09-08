import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ChatBox = styled.div`
  display: block;
  background: #efefef;
  position: fixed;
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  width: ${(props) => props.width};
  max-width: 85vw;
  max-height: 100vh;
  border-radius: 5px;
  box-shadow: ${(props) => (props.shadow ? '-1px -1px 5px 0px #ccc' : 'none')};
  z-index: 1000;
`
export const ChatBoxHeader = styled.div`
  background: #5a5eb9;
  height: 2.5rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
  text-align: center;
  font-size: 1rem;
  padding-top: 0.5rem;
  input {
    border: 1px solid #ccc;
    border-color: white;
    border-radius: 10px;
    padding-left: 0.7rem;
    font-size: 0.7rem;
    color: white;
    background-color: #5a5eb9;
  }
`
export const ChatBoxBody = styled.div`
  position: relative;
  height: 370px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  /* overflow: hidden; */

  &:after {
    content: '';
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgOCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjE3NiIgY3k9IjEyIiByPSI0Ii8+PHBhdGggZD0iTTIwLjUuNWwyMyAxMW0tMjkgODRsLTMuNzkgMTAuMzc3TTI3LjAzNyAxMzEuNGw1Ljg5OCAyLjIwMy0zLjQ2IDUuOTQ3IDYuMDcyIDIuMzkyLTMuOTMzIDUuNzU4bTEyOC43MzMgMzUuMzdsLjY5My05LjMxNiAxMC4yOTIuMDUyLjQxNi05LjIyMiA5LjI3NC4zMzJNLjUgNDguNXM2LjEzMSA2LjQxMyA2Ljg0NyAxNC44MDVjLjcxNSA4LjM5My0yLjUyIDE0LjgwNi0yLjUyIDE0LjgwNk0xMjQuNTU1IDkwcy03LjQ0NCAwLTEzLjY3IDYuMTkyYy02LjIyNyA2LjE5Mi00LjgzOCAxMi4wMTItNC44MzggMTIuMDEybTIuMjQgNjguNjI2cy00LjAyNi05LjAyNS0xOC4xNDUtOS4wMjUtMTguMTQ1IDUuNy0xOC4xNDUgNS43IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTg1LjcxNiAzNi4xNDZsNS4yNDMtOS41MjFoMTEuMDkzbDUuNDE2IDkuNTIxLTUuNDEgOS4xODVIOTAuOTUzbC01LjIzNy05LjE4NXptNjMuOTA5IDE1LjQ3OWgxMC43NXYxMC43NWgtMTAuNzV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjcxLjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjE3MC41IiBjeT0iOTUuNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iODEuNSIgY3k9IjEzNC41IiByPSIxLjUiLz48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMy41IiBjeT0iMjMuNSIgcj0iMS41Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkzIDcxaDN2M2gtM3ptMzMgODRoM3YzaC0zem0tODUgMThoM3YzaC0zeiIvPjxwYXRoIGQ9Ik0zOS4zODQgNTEuMTIybDUuNzU4LTQuNDU0IDYuNDUzIDQuMjA1LTIuMjk0IDcuMzYzaC03Ljc5bC0yLjEyNy03LjExNHpNMTMwLjE5NSA0LjAzbDEzLjgzIDUuMDYyLTEwLjA5IDcuMDQ4LTMuNzQtMTIuMTF6bS04MyA5NWwxNC44MyA1LjQyOS0xMC44MiA3LjU1Ny00LjAxLTEyLjk4N3pNNS4yMTMgMTYxLjQ5NWwxMS4zMjggMjAuODk3TDIuMjY1IDE4MGwyLjk0OC0xOC41MDV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxwYXRoIGQ9Ik0xNDkuMDUgMTI3LjQ2OHMtLjUxIDIuMTgzLjk5NSAzLjM2NmMxLjU2IDEuMjI2IDguNjQyLTEuODk1IDMuOTY3LTcuNzg1LTIuMzY3LTIuNDc3LTYuNS0zLjIyNi05LjMzIDAtNS4yMDggNS45MzYgMCAxNy41MSAxMS42MSAxMy43MyAxMi40NTgtNi4yNTcgNS42MzMtMjEuNjU2LTUuMDczLTIyLjY1NC02LjYwMi0uNjA2LTE0LjA0MyAxLjc1Ni0xNi4xNTcgMTAuMjY4LTEuNzE4IDYuOTIgMS41ODQgMTcuMzg3IDEyLjQ1IDIwLjQ3NiAxMC44NjYgMy4wOSAxOS4zMzEtNC4zMSAxOS4zMzEtNC4zMSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4=');
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;    
    position: absolute;
    z-index: -1;
  }
`
export const ChatBoxToggle = styled.div`
  float: right;
  margin-right: 15px;
  cursor: pointer;
`
export const ChatFormContainer = styled.div`
  background: #f4f7f9;
  width: 100%;
  position: relative;
  padding: 0.5rem;
  border: none;
  resize: none;
  outline: none;
  border: 1px solid #ccc;
  color: #888;
  border-top: none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: hidden;

  &::placeholder {
    color: #888;
  }
  form {
    margin-bottom: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  input {
    margin: 0;
    margin-right: 0.5rem;
    padding-left: 1rem;
    width: 80%;
    font-size: 0.9rem;
    border: 0;
    border-radius: 10px;    
  }
  button {
    width: 20%;
    border: 1px solid gray;
    border-radius: 10px;
    margin-right: 3px;
  }
`
export const ChatLogs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 15px;
  height: 370px;
  overflow-y: scroll;
`

export const ChatLog = styled.div`
  margin: 2px 10px;
  padding: 10px;
  color: black;
  font-size: 0.8rem;  
  position: relative;
  border-radius: 5px;  
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6);
  background-color: ${(props) =>
    props.author === 'You' ? 'white' : '#dcf8c6'};
  align-self: ${(props) =>
    props.author === 'You' ? 'self-start' : 'self-end'};

    &:before {      
    content: "e";   
    display: ${(props) => (props.author === 'You' ? 'block' : 'none')};
    position: absolute; 
    top: 0px;
    left: -11px;
    width: 0px;
    height: 0px;
    z-index: 1;    
    border-bottom: 15px solid transparent;  
    border-top: 0px solid transparent; 
    border-right: 15px solid #FFFFFF; 
    font-size: 0px;
    line-height:0px;
    }

    &:after {      
    content: "e";   
    display: ${(props) => (props.author !== 'You' ? 'block' : 'none')};
    position: absolute; 
    top: 0px;    
    right: -11px;
    width: 0px;
    height: 0px;
    z-index: 1;    
    border-bottom: 15px solid transparent;  /* izquierda flecha */
    border-top: 0px solid transparent; /* derecha flecha */
    border-left: 15px solid #dcf8c6; /* base flecha y color*/
    font-size: 0px;
    line-height:0px;    
    }
`
export const ChatMessageAuthor = styled.div`
font-size: 0.7rem;
color: #5865c3;
`
export const ChatMessageText = styled.div`
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
  font-size: 0.8rem;
`

export const UserList = styled.div`
  ul {
    list-style: none;
    padding-left: 1rem;
  }
`


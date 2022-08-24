import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Users from "./components/Users";

export default function App() {
  function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/api/v1/projects/list")
        .then((res) => res.json())
        .then((data) => setProjects(data));
    }, []);
  }

  const [infoUser, setInfoUser] = useState([]);
  useEffect(() => {
    setInfoUser({
      name: "user1",
      email: "user@gmail.com",
      country: "Argentina",
      projectsId: [1234, 12345, 123123],
    });
  }, []);

  return (
    <>
      <Users />
    </>
  );
}

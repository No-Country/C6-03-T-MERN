## C6-03-T-MERN

### :briefcase: Aplicacion Web que brinda herramientas para trabajar en equipo :briefcase:

### User stories:

- **Como Usuario**:

  - "Como Usuario, quiero poder loguearme con mi usuario y contraseña, para poder acceder a todos mis grupos de trabajo”
  - "Como Usuario, quiero poder visualizar todos mis equipos de trabajo, para poder ingresar a los mismos, borrarlos o cargar un nuevo equipo”
  - "Como Usuario, quiero poder contar con todas las herramientas necesarias para la organizacion de trabajo en una sola vista (tablero de tareas y calendario), para poder visualizar todo lo indispensable en un solo lugar”
  - "Como Usuario, quiero poder contar con un canal de comunicacion directo con los integrantes del grupo, para poder comunicar cualquier situacion de forma simple y apida"
  - "Como Usuario, quiero poder dejar asentado cualquier tipo de informacion relevante para todo el equipo"
  - "Como Usuario, quiero poder asignarle una valor a los tickets de tarea para estimar el esfuerzo que se necesitara para desarrollarlos"
  - "Como Usuario, quiero conocer que tickets de tarea sobrepasaron su tiempo estimado de desarrollo y que otras estan cerca de alcanzarlo"
  - "Como Usuario, quiero poder ver los estados de conexion del resto de los integrantes del equipo".

- **Como Administrador**:

  - "Como Administrador, quiero poder registrar con usuario y contraseña a los desarrolladores de la empresa para generarles una cuenta"
  - "Como Administrador, quiero poder crear tickets de tarea de forma simple y completa, para individualizar las tareas entre los distintos roles de los desarrolladores"
  - "Como Administrador, quiero que los desarrolladores cuenten con una herramienta que les contabilice el tiempo de trabajo, para llevar un mejor control del tiempo destinado al proyecto por cada uno de los desarrolladores"
  - "Como Administrador, quiero poder contar con una division de facil acceso a las distintas areas de trabajo dentro de mi equipo"

## Rutas api

### users

#### get

- para traer una array con los proyectos del id
  - localhost:3000/api/v1/users/63037f6637d8a6be2222f981/p
- para traer todos los usuarios
  - localhost:3000/api/v1/users/list
- para traer un solo usuarios
  - localhost:3000/api/v1/users/:id

#### post

- para login del usuario (entrar a la pagina)
  - localhost:3000/api/v1/users/
- para el registro del usuario
  - localhost:3000/api/v1/users/register

#### put

- para agregar un proyecto a un usuario
  - localhost:3000/api/v1/users/:id

#### delete

- para eliminar de un proyecto a un usuario
  - localhost:3000/api/v1/users/:id

### Task

#### get

- para traer una array con todas las tareas
  - localhost:3000/api/v1/tasks
- para traer una sola tarea
  - localhost:3000/api/v1/tasks/:id

#### post

- para crear una tarea
  - localhost:3000/api/v1/tasks/

#### put

- para agregar una tasks
  - localhost:3000/api/v1/tasks/:id

#### delete

- para eliminar una tasks
  - localhost:3000/api/v1/tasks/:id

### Projects

#### get

- para traer una array con todas los proyectos
  - localhost:3000/api/v1/projects/list
- para traer un solo proyecto
  - localhost:3000/api/v1/projects/:id

#### post

- para crear un proyecto
  - localhost:3000/api/v1/projects/create
- para crear un kanmab
  - localhost:3000/api/v1/projects/:id

#### put

- para agregar usuarios al proyecto
  - localhost:3000/api/v1/projects/:id

#### delete

- para eliminar las tareas del kanban?
  - localhost:3000/api/v1/projects/:id

### kanban

#### get

- para traer una array con todos los kanban
  - localhost:3000/api/v1/kanban/list
- para traer un solo kanban
  - localhost:3000/api/v1/kanban/:id

#### post

- para crear un kanban
  - localhost:3000/api/v1/kanban/

#### put

- para agregar un titulo y categoria
  - localhost:3000/api/v1/kanban/:id

#### delete

- para eliminar el kanban
  - localhost:3000/api/v1/kanban/:id

## Integrantes:

- Enuel Monzón O:
  - Skills: React, MySQL, Express, CSS, Node
  - Función actual: Front End
- Diego Nicita:
  - Skills: React, MySQL, Express, CSS, Node, C#
  - Funcion actual: Back End
- German Himmelfroundpointener:
  - Skills: MongoDB, Javascript, HTML5, CSS3, Bootstrap, Node
  - Funcion actual: Back End
- Juan Cruz Ises:
  - Skills: React , MySQL, Express, HTML5, CSS3, Node
  - Funcion actual: Back End

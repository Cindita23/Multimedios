contenidoMenu.innerHTML += `
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-expand-xl navbar-expand-md">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarTooglerDemo01" aria-controls="navbarTooglerDemo01" aria-expanded="false"
    aria-label="Toogle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="ms-4">
    <a class="navbar-brand" href="index.html" title="Ir a página Principal">
        <img src="img/logo.png" alt="Logo" width="95px" height="85px">
    </a>
    </div>

    <div class="collapse navbar-collapse" id="navbarTooglerDemo01">
    <ul class="navbar-nav">
        <li class="nav-item ms-4">
            <a class="nav-link fw-bold aumentarLetra" href="index.html">Inicio</a>
        </li>

        <li class="nav-item ms-4">
            <a class="nav-link fw-bold aumentarLetra" target="_blanck" href="https://paginas-web-cr.com/ApiPHP/">API</a>
        </li>

        <li class="nav-item dropdown ms-4">
        <a class="nav-link dropdown-toggle fw-bold aumentarLetra" href="#" data-bs-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">Cursos</a>
        <div class="dropdown-menu bg-dark">
            <a class="dropdown-item text-white" href="crearCurso.html">Agregar Curso</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-white" href="listarCurso.html">Lista Cursos</a>
        </div>
        </li>

        <li class="nav-item dropdown ms-4">
        <a class="nav-link dropdown-toggle fw-bold aumentarLetra" href="#" data-bs-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">Grupos</a>
        <div class="dropdown-menu bg-dark">
            <a class="dropdown-item text-white" href="crearGrupo.html">Agregar Grupo</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-white" href="listarGrupo.html">Lista Grupos</a>
        </div>
        </li>

        <li class="nav-item dropdown ms-4">
        <a class="nav-link dropdown-toggle fw-bold aumentarLetra" href="#" data-bs-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">Estudiantes</a>
        <div class="dropdown-menu bg-dark">
            <a class="dropdown-item text-white" href="crearEstudiante.html">Agregar Estudiante</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-white" href="listarEstudiantes.html">Lista Estudiantes</a>
        </div>
        </li>

        <li class="nav-item dropdown ms-4">
        <a class="nav-link dropdown-toggle fw-bold aumentarLetra" href="#" data-bs-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">Profesores</a>
        <div class="dropdown-menu bg-dark">
            <a class="dropdown-item text-white" href="crearProfesor.html">Agregar Profesor</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-white" href="listarProfesores.html">Lista Profesores</a>
        </div>
        </li>
    </ul>
    </div>
    </nav>

`
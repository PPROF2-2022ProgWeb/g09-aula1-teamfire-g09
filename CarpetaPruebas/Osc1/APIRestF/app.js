const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

//Parametros
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teamfire11'
});
//conexion BD
conexion.connect(function(errors) {
    if (errors) {
        throw errors;
    } else {
        console.log('Conexion exitosa DB');
    }
});
//Leer Todos Registros
app.get("/api/registros", (req, res) => {
    conexion.query('SELECT r.id_usuario, r.usuario, r.email, a.nombre, a.apellido, a.telefono, a.fechadenacimiento AS fechaNacimiento, p.pais, c.ciudad, r.created_at AS Fecha_Registro, r.update_at AS Actu_Registro, a.update_at AS Actu_Datos from registro AS r INNER JOIN registroavanzado AS a ON r.id_usuario=a.id_usuario INNER JOIN  pais AS p ON a.id_pais=p.id_pais INNER JOIN  ciudad AS c ON a.id_ciudad=c.id_ciudad', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});
//Leer Todos Registros Simples (Cuando no completa el segundo registro, no deja registrarse como entidad, solo leer, si tiene 0 en "registrocompleto")
app.get("/api/registrossimples", (req, res) => {
    conexion.query('select * from registro', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});
//Usuarios Registrados como Entidad
app.get("/api/entidad/:id", (req, res) => {
    conexion.query('select * from tiporegistro WHERE id_usuario =?', (req.params.id), (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});
//2222Leer Todas las empresas
app.get("/api/empresas", (req, res) => {
    conexion.query('select e.id_empresa, e.id_usuario, r.usuario AS nombreUsuario, e.nombre AS nombreEmpresa , e.rubro, e.actividades, p.pais, c.ciudad, r.email from raempresa AS e INNER JOIN registro AS r ON e.id_usuario=r.id_usuario INNER JOIN  pais AS p ON e.id_pais=p.id_pais INNER JOIN  ciudad AS c ON e.id_ciudad=c.id_ciudad', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});
//Leer Todos los Estudiantes
app.get("/api/estudiantes", (req, res) => {
    conexion.query('select e.id_estudiante, e.id_usuario, r.usuario AS nombreUsuario, e.estudio AS estudios , e.institucion, g.id_grupoleng As grupoDeLenguajes , p.pais, c.ciudad from raestudiante AS e INNER JOIN registro AS r ON e.id_usuario=r.id_usuario INNER JOIN pais AS p ON e.id_pais=p.id_pais INNER JOIN  ciudad AS c ON e.id_ciudad=c.id_ciudad INNER JOIN grupolenguajesprog AS g ON e.id_lenguajes=g.id_grupoleng', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});
//11Leer Todos los Programadores
app.get("/api/programadores", (req, res) => {
    conexion.query('SELECT p.id_programador, p.id_usuario, r.usuario,r.email, g.id_lenguaje AS GrupoDeLenguajes, p.conocimientos FROM raprogramador AS p INNER JOIN registro AS r ON p.id_usuario=r.id_usuario INNER JOIN grupolenguajesprog AS g ON p.id_lenguajes=g.id_grupoleng', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});

//Leer Lenguajes Conocidos de un usuario
app.get("/api/lenguajes/:id", (req, res) => {
    conexion.query('SELECT g.id_usuario, l.lenguaje FROM grupolenguajesprog AS g INNER JOIN lenguajes AS l ON g.id_lenguaje=l.id_lenguaje WHERE id_usuario =?', (req.params.id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Leer Todas las Instituciones
app.get("/api/instituciones", (req, res) => {
    conexion.query('SELECT i.id_institucion, i.id_usuario, r.usuario, i.tipo, i.disiplinas, i.pais, i.ciudad, i.calle, e.entidad FROM rainstitucion AS i INNER JOIN registro AS r ON i.id_usuario=r.id_usuario INNER JOIN entidades AS e ON i.id_entidad=e.id_entidad', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Leer Todas las Charlas-Eventos
app.get("/api/eventos", (req, res) => {
    conexion.query('SELECT * FROM charlas_eventos AS c ', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Eliminar Charlas-Eventos
app.delete("/api/evento/:id", (req, res) => {
    let id = req.params.id;
    let sql = 'DELETE FROM charlas_eventos WHERE id_charla_evento=?';
    conexion.query(sql, id, (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//1Leer inscriptos en un Evento
app.get("/api/inscriptos_evento/:id", (req, res) => {
    conexion.query('SELECT c.id_charla_evento, r.id_usuario, c.id_institucion, c.nombre, c.tipo, c.descripcion, c.fecha, c.cupos, c.id_pais, c.id_ciudad,c.cupos, c.cuposdisponibles FROM charlas_eventos AS c INNER JOIN rainstitucion AS r ON c.id_institucion=r.id_institucion WHERE id_usuario=?', (req.params.id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Eliminar inscriptos en un Evento
app.delete("/api/inscripto_evento/:id", (req, res) => {
    let id = req.params.id;
    let sql = 'DELETE FROM inscriptoseventos WHERE id_inscripcion=?';
    conexion.query(sql, id, (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//1Leer una empresa----
app.get("/api/empresa/:id", (req, res) => {
    conexion.query('SELECT * FROM raempresa WHERE id_empresa =?', (req.params.id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Leer Todas las Ofertas Laborales
app.get("/api/ofertaslaborales", (req, res) => {
    conexion.query('SELECT * FROM ofertaslaborales', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//1Leer una ofertaslaborales de un usuario
app.get("/api/ofertaslaborales/:id", (req, res) => {
    conexion.query('SELECT * FROM ofertaslaborales WHERE id_usuario =?', (req.params.id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//111111111    Insertar Oferta labotal   1111111111111
app.post("/api/ofertaslaborales/:id", (req, res) => {
    let id_usuario = Number(req.params.id);
    let puesto = req.body.puesto;
    let descripcion = req.body.descripcion;
    let sueldo = req.body.sueldo;
    let modocontratacion = req.body.modocontratacion;
    let id_pais = req.body.id_pais;
    let id_ciudad = req.body.id_ciudad;
    let id_participante = req.body.id_participante;

    let sql = "INSERT INTO ofertaslaborales SET puesto =?, descripcion = ?, sueldo =? , modocontratacion=?,id_pais =?, id_ciudad = ?, id_participante=?, id_usuario = ?";
    conexion.query(sql, [puesto, descripcion, sueldo, modocontratacion, id_pais, id_ciudad, id_participante, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//Leer Todas las Participantes Empleo
app.get("/api/participantesempleo/:id", (req, res) => {
    conexion.query('SELECT * FROM participantesempleo WHERE id_participante =?', (req.params.id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//111111111    Insertar participanteEmpleo   1111111111111
app.post("/api/participantesempleo/:id", (req, res) => {
    let id_usuario = Number(req.params.id);
    let id_estado = req.body.id_estado;

    let sql = "INSERT INTO participantesempleo set id_estado =?, id_usuario = ?";
    conexion.query(sql, [id_estado, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//Leer Todas las Ofertas Laborales
app.get("/api/proyectos", (req, res) => {
    conexion.query('SELECT * FROM proyectos', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//111111111    Insertar Proyecto de Usuario   1111111111111
app.post("/api/proyecto/:id", (req, res) => {
    let id_usuario = Number(req.params.id);
    let nombre_proyecto = req.body.nombre_proyecto;
    let descripcion = req.body.descripcion;
    let observaciones = req.body.observaciones;
    let id_participante = req.body.id_participante;
    let retribucion = req.body.retribucion;
    let sql = "INSERT INTO proyectos SET nombre_proyecto = ?, descripcion = ?, observaciones = ?, id_participante = ?, retribucion = ?, id_usuario = ?";
    conexion.query(sql, [nombre_proyecto, descripcion, observaciones, id_participante, retribucion, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//Insertar participantes de protectos
app.post("/api/participantesproyectos/:id", (req, res) => {

    let id_usuario = Number(req.params.id);
    let id_estado = req.body.id_estado;
    let id_progreso = req.body.id_progreso;

    let sql = "INSERT INTO participantes SET id_estado = ?, id_progreso = ?, id_usuario = ?";
    conexion.query(sql, [id_estado, id_progreso, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//Leer Todas participantes de proyectos
app.get("/api/participantesproyectos/:id", (req, res) => {
    conexion.query('SELECT * FROM participantes where id_participante =?', (req.params.id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Leer Todas las progresos de proyectos
app.get("/api/participantesprogreso/:id", (req, res) => {
    conexion.query('SELECT * FROM progresos where id_progreso =?', (req.params.id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Insertar participantes progresos
app.post("/api/participantesprogreso/:id", (req, res) => {

    let id_usuario = Number(req.params.id);
    let id_proyecto = req.body.id_estado;
    let id_sequimiento = req.body.id_progreso;

    let sql = "INSERT INTO progresos SET id_proyecto = ?, id_sequimiento = ?, id_usuario = ?";
    conexion.query(sql, [id_proyecto, id_sequimiento, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//Leer Todas los Sequimientos de proyectos
app.get("/api/sequimientoproyecto/:id", (req, res) => {
    conexion.query('SELECT * FROM sequimientos where id_sequimiento =?', (req.params.id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Insertar participantes progresos
app.post("/api/sequimientoproyecto/:id", (req, res) => {
    let id_usuario = Number(req.params.id);
    let solcicitud = req.body.solcicitud;
    let especificacion = req.body.especificacion;
    let fecha = req.body.fecha;
    let fechafinalizacion = req.body.fechafinalizacion;
    let linkdearchivo = req.body.linkdearchivo;
    let observacion = req.body.observacion;

    let sql = "INSERT INTO sequimientos SET solcicitud =?, especificacion =?, fecha =?, fechafinalizacion =?, linkdearchivo =?, observacion =?, id_usuario = ?"
    conexion.query(sql, [solcicitud, especificacion, fecha, fechafinalizacion, linkdearchivo, observacion, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//Leer Todas las Productos
app.get("/api/productos", (req, res) => {
    conexion.query('SELECT * FROM productos', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Leer Todas las ventas
app.get("/api/ventas", (req, res) => {
    conexion.query('SELECT * FROM ventas', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Leer Todas las servicios
app.get("/api/servicios", (req, res) => {
    conexion.query('SELECT * FROM servicios', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Leer Todas las servicio_precio_periodo
app.get("/api/servicio_precio_periodo", (req, res) => {
    conexion.query('SELECT * FROM servicio_precio_periodo', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//Leer Todas los producto unico
app.get("/api/producto/:id", (req, res) => {
    conexion.query('SELECT * FROM productos where id_producto =?', (req.params.id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//1Leer una ciudad  ----
app.get("/api/ciudad", (req, res) => {
    conexion.query('SELECT * FROM ciudad', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//1Insertar Ciudad
app.post("/api/ciudad", (req, res) => {
    let ciudad = req.body.ciudad;
    let sql = "INSERT INTO ciudad SET ciudad=?";
    conexion.query(sql, [ciudad], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//1Leer una pais----
app.get("/api/pais", (req, res) => {
    conexion.query('SELECT * FROM pais', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//1Insertar Pais
app.post("/api/pais", (req, res) => {
    let pais = req.body.pais;
    let sql = "INSERT INTO pais SET pais=?";
    conexion.query(sql, [pais], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//1Leer una Estado----
app.get("/api/estado", (req, res) => {
    conexion.query('SELECT * FROM estado', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//1Insertar Estado
app.post("/api/estado", (req, res) => {
    let estado = req.body.estado;
    let sql = "INSERT INTO estado SET estado=?";
    conexion.query(sql, [estado], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//1Leer una Entidades----
app.get("/api/entidades", (req, res) => {
    conexion.query('SELECT * FROM entidades', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//1Insertar Entidades
app.post("/api/entidades", (req, res) => {
    let entidad = req.body.entidad;
    let sql = "INSERT INTO entidades SET entidad=?";
    conexion.query(sql, [entidad], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//1Leer una CV_DATOS---
app.get("/api/cv_datos/:id", (req, res) => {
    conexion.query('SELECT * FROM cv_datos WHERE id_usuario =?', (req.params.id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//1Leer Registros Avanzados--
app.get("/api/registrosavanzados", (req, res) => {
    conexion.query('SELECT * FROM registroavanzado', (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});
//1Insertar Registro
app.post("/api/registro", (req, res) => {
    let usuario = req.body.usuario;
    let contrasena = req.body.contrasena;
    let email = req.body.email;
    let sql = "INSERT INTO registro SET usuario=?, contrasena=?, email=?";
    conexion.query(sql, [usuario, contrasena, email], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});

//1Actualizar Registro
app.put("/api/registro/:id", (req, res) => {
    let id_usuario = Number(req.params.id);
    let usuario = req.body.usuario;
    let contrasena = req.body.contrasena;
    let email = req.body.email;
    let sql = "UPDATE registro SET usuario=?, contrasena=?, email=? WHERE id_usuario=?";
    conexion.query(sql, [usuario, contrasena, email, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//111111111    Insertar Registro Avanzado---   1111111111111
app.post("/api/registroavanzados/:id", (req, res) => {
    let id_usuario = Number(req.params.id);
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let telefono = req.body.telefono;
    let fechadenacimiento = req.body.fechadenacimiento;
    let id_pais = req.body.id_pais;
    let id_ciudad = req.body.id_ciudad;
    let sql = "INSERT INTO registroavanzado SET nombre = ?, apellido = ?, telefono = ?, fechadenacimiento = ?, id_pais =?, id_ciudad = ?, id_usuario = ?";
    conexion.query(sql, [nombre, apellido, telefono, fechadenacimiento, id_pais, id_ciudad, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//111111111    Actualizacion Registro Avanzado---   1111111111111
app.put("/api/registroavanzado/:id", (req, res) => {
    let id_usuario = Number(req.params.id);
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let telefono = req.body.telefono;
    let fechadenacimiento = req.body.fechadenacimiento;
    let id_pais = req.body.id_pais;
    let id_ciudad = req.body.id_ciudad;
    let sql = "UPDATE registroavanzado SET nombre = ?, apellido = ?, telefono = ?, fechadenacimiento = ?, id_pais =?, id_ciudad = ? WHERE id_usuario = ?";
    conexion.query(sql, [nombre, apellido, telefono, fechadenacimiento, id_pais, id_ciudad, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});

//111111111    Insertar Registro Entidad Estudiante---   1111111111111
app.post("/api/raestudiante/:id", (req, res) => {
    let id_usuario = Number(req.params.id);
    let id_entidad = req.body.id_entidad;
    let id_lenguajes = req.body.id_lenguajes;
    let estudio = req.body.estudio;
    let institucion = req.body.institucion;
    let id_pais = req.body.id_pais;
    let id_ciudad = req.body.id_ciudad;
    let sql = "INSERT INTO raestudiante SET id_entidad = ?, id_lenguajes = ?, estudio = ?, institucion = ?, id_pais =?, id_ciudad = ?, id_usuario = ?";
    conexion.query(sql, [id_entidad, id_lenguajes, estudio, institucion, id_pais, id_ciudad, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//111111111    Insertar Registro Entidad Empresa---   1111111111111
app.post("/api/raempresa/:id", (req, res) => {
    //
    let id_usuario = Number(req.params.id);
    let id_entidad = req.body.id_entidad;
    let nombre = req.body.nombre;
    let rubro = req.body.rubro;
    let actividades = req.body.actividades;
    let id_pais = req.body.id_pais;
    let id_ciudad = req.body.id_ciudad;
    let sql = "INSERT INTO raempresa SET id_entidad = ?, nombre = ?, rubro = ?, actividades = ?, id_pais =?, id_ciudad = ?, id_usuario = ?";
    conexion.query(sql, [id_entidad, nombre, rubro, actividades, id_pais, id_ciudad, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//111111111    Insertar Registro Entidad Institucion---   1111111111111
app.post("/api/rainstitucion/:id", (req, res) => {
    //
    let id_usuario = Number(req.params.id);
    let id_entidad = req.body.id_entidad;
    let tipo = req.body.tipo;
    let disiplinas = req.body.disiplinas;
    let calle = req.body.calle;
    let id_pais = req.body.id_pais;
    let id_ciudad = req.body.id_ciudad;
    let sql = "INSERT INTO rainstitucion SET id_entidad = ?, tipo = ?, disiplinas = ?, calle = ?, id_pais =?, id_ciudad = ?, id_usuario = ?";
    conexion.query(sql, [id_entidad, tipo, disiplinas, calle, id_pais, id_ciudad, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//111111111    Insertar Registro Entidad Programador---   1111111111111
app.post("/api/raprogramador/:id", (req, res) => {
    //
    let id_usuario = Number(req.params.id);
    let id_entidad = req.body.id_entidad;
    let id_lenguajes = req.body.id_lenguajes;
    let conocimientos = req.body.conocimientos;

    let sql = "INSERT INTO raprogramador SET id_entidad = ?,id_lenguajes = ?, conocimientos = ?, id_usuario = ?";
    conexion.query(sql, [id_entidad, id_lenguajes, conocimientos, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//111111111    Insertar Registro de Productos   1111111111111
app.post("/api/producto", (req, res) => {
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let stock = req.body.stock;
    let imagen = req.body.imagen;
    let sql = "INSERT INTO productos SET nombre=?, descripcion=?, precio=?, stock=?, imagen=?";
    conexion.query(sql, [nombre, descripcion, precio, stock, imagen], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//Update:Actualizar
app.put("/api/producto/:id", (req, res) => {
    let id_producto = Number(req.params.id);
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let stock = req.body.stock;
    let sql = "UPDATE productos SET nombre =?, descripcion = ?, precio = ?, stock = ? WHERE id_producto = ?";
    conexion.query(sql, [nombre, descripcion, precio, stock, id_producto], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//111111111    Actualizar Registro Entidad Programador---   1111111111111
app.put("/api/raprogramador/:id", (req, res) => {
    //
    let id_usuario = Number(req.params.id);
    let conocimientos = req.body.conocimientos;
    let sql = "UPDATE raprogramador SET conocimientos = ? WHERE id_usuario = ?";
    conexion.query(sql, [conocimientos, id_usuario], function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
//Delete:Eliminar
app.delete("/api/producto/:id", (req, res) => {
    let id = req.params.id;
    let sql = "DELETE FROM productos WHERE id_producto=?";
    conexion.query(sql, id, function(error, result) {
        if (error) {
            throw error;
        } else {
            res.send(result);
        }
    });
});
/*
app.get('/', function(req, res) {
    res.send('Hello World');
});*/

const puerto = process.env.port || 3900;
app.listen(puerto, function() {
    console.log("Server started on port:" + puerto);
});
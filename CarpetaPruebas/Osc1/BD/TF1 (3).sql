CREATE TABLE `registro` (
  `id_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `usuario` varchar(255),
  `contrasena` varchar(255),
  `email` varchar(255),
  `created_at` datetime,
  `update_at` datetime
);

CREATE TABLE `registroavanzado` (
  `id_usuario` int,
  `nombre` varchar(255),
  `apellido` varchar(255),
  `telefono` varchar(255),
  `fechadenacimiento` date,
  `pais` int,
  `ciudad` int,
  `created_at` datetime,
  `update_at` datetime
);

CREATE TABLE `pais` (
  `id_pais` int PRIMARY KEY AUTO_INCREMENT,
  `pais` varchar(255)
);

CREATE TABLE `ciudad` (
  `id_ciudad` int PRIMARY KEY AUTO_INCREMENT,
  `ciudad` varchar(255)
);

CREATE TABLE `entidades` (
  `id_entidad` int PRIMARY KEY AUTO_INCREMENT,
  `entidad` varchar(255)
);

CREATE TABLE `raempresa` (
  `id_empresa` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `id_entidad` int,
  `nombre` varchar(255),
  `pais` int,
  `ciudad` int,
  `rubro` varchar(255),
  `actividades` varchar(255),
  `created_at` datetime,
  `update_at` datetime
);

CREATE TABLE `raestudiante` (
  `id_estudiante` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `id_entidad` int,
  `id_lenguaje` int,
  `estudio` varchar(255),
  `institucion` varchar(255),
  `pais` int,
  `ciudad` int
);

CREATE TABLE `raprogramador` (
  `id_programador` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `id_entidad` int,
  `id_lenguaje` int,
  `conocimientos` varchar(255)
);

CREATE TABLE `grupolenguajesprog` (
  `id_grupoleng` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `id_lenguaje` int
);

CREATE TABLE `lenguajes` (
  `id_lenguaje` int PRIMARY KEY AUTO_INCREMENT,
  `lenguaje` varchar(255)
);

CREATE TABLE `rainstitucion` (
  `id_institucion` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `id_entidad` int,
  `tipo` varchar(255),
  `disiplinas` varchar(255),
  `pais` int,
  `ciudad` int,
  `calle` varchar(255)
);

CREATE TABLE `charlas_eventos` (
  `id_charla_evento` int PRIMARY KEY AUTO_INCREMENT,
  `id_institucion` int,
  `tipo` varchar(255),
  `descripcion` varchar(255),
  `fecha` varchar(255),
  `cupos` int,
  `pais` int,
  `ciudad` int,
  `cuposdisponibles` int,
  `id_inscriptos` int
);

CREATE TABLE `inscriptos` (
  `id_inscripcion` int PRIMARY KEY AUTO_INCREMENT,
  `id_charla_evento` int,
  `id_usuario` int
);

CREATE TABLE `cv_datos` (
  `id_cv` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `link_cv` varchar(255)
);

CREATE TABLE `proyectos` (
  `id_proyecto` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `nombre_proyecto` varchar(255),
  `descripcion` varchar(255),
  `observaciones` varchar(255),
  `id_participante` int,
  `retribucion` int
);

CREATE TABLE `participantes` (
  `id_participante` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `estado` int,
  `id_progreso` int
);

CREATE TABLE `progresos` (
  `id_progreso` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `id_proyecto` int,
  `solcicitud` varchar(255),
  `especificacion` varchar(255),
  `fecha` varchar(255),
  `fechafinalizacion` varchar(255),
  `linkdearchivo` varchar(255),
  `observacion` varchar(255)
);

CREATE TABLE `ofertaslaborales` (
  `id_oferta` int PRIMARY KEY AUTO_INCREMENT,
  `id_empresa` int,
  `id_usuario` int,
  `puesto` varchar(255),
  `descripcion` varchar(255),
  `sueldo` varchar(255),
  `modocontratacion` varchar(255),
  `pais` int,
  `ciudad` int
);

CREATE TABLE `ventas` (
  `id_venta` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `id_producto` int,
  `id_servicio` int,
  `cantidad` varchar(255),
  `direccionentrega` varchar(255),
  `estado` varchar(255),
  `descripcionestado` varchar(255)
);

CREATE TABLE `productos` (
  `id_producto` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `precio` int,
  `stock` int,
  `imagen` varchar(255)
);

CREATE TABLE `servicios` (
  `id_servicio` int PRIMARY KEY AUTO_INCREMENT,
  `tiposervicio` varchar(255),
  `precioperiodo` int,
  `descripcion` varchar(255),
  `imagen` varchar(255),
  `id_precio_perido` int
);

CREATE TABLE `servicio_precio_periodo` (
  `id_precio_perido` int PRIMARY KEY AUTO_INCREMENT,
  `precio` int,
  `periodo` varchar(255),
  `descuento` varchar(255)
);

ALTER TABLE `registroavanzado` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `registroavanzado` ADD FOREIGN KEY (`pais`) REFERENCES `pais` (`id_pais`);

ALTER TABLE `registroavanzado` ADD FOREIGN KEY (`ciudad`) REFERENCES `ciudad` (`id_ciudad`);

ALTER TABLE `raempresa` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `raempresa` ADD FOREIGN KEY (`id_entidad`) REFERENCES `entidades` (`id_entidad`);

ALTER TABLE `raempresa` ADD FOREIGN KEY (`pais`) REFERENCES `pais` (`id_pais`);

ALTER TABLE `raempresa` ADD FOREIGN KEY (`ciudad`) REFERENCES `ciudad` (`id_ciudad`);

ALTER TABLE `raestudiante` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `raestudiante` ADD FOREIGN KEY (`id_entidad`) REFERENCES `entidades` (`id_entidad`);

ALTER TABLE `raestudiante` ADD FOREIGN KEY (`id_lenguaje`) REFERENCES `lenguajes` (`id_lenguaje`);

ALTER TABLE `raestudiante` ADD FOREIGN KEY (`pais`) REFERENCES `pais` (`id_pais`);

ALTER TABLE `raestudiante` ADD FOREIGN KEY (`ciudad`) REFERENCES `ciudad` (`id_ciudad`);

ALTER TABLE `raprogramador` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `raprogramador` ADD FOREIGN KEY (`id_entidad`) REFERENCES `entidades` (`id_entidad`);

ALTER TABLE `raprogramador` ADD FOREIGN KEY (`id_lenguaje`) REFERENCES `lenguajes` (`id_lenguaje`);

ALTER TABLE `grupolenguajesprog` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `rainstitucion` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `rainstitucion` ADD FOREIGN KEY (`id_entidad`) REFERENCES `entidades` (`id_entidad`);

ALTER TABLE `rainstitucion` ADD FOREIGN KEY (`pais`) REFERENCES `pais` (`id_pais`);

ALTER TABLE `rainstitucion` ADD FOREIGN KEY (`ciudad`) REFERENCES `ciudad` (`id_ciudad`);

ALTER TABLE `charlas_eventos` ADD FOREIGN KEY (`id_institucion`) REFERENCES `rainstitucion` (`id_institucion`);

ALTER TABLE `charlas_eventos` ADD FOREIGN KEY (`pais`) REFERENCES `pais` (`id_pais`);

ALTER TABLE `charlas_eventos` ADD FOREIGN KEY (`ciudad`) REFERENCES `ciudad` (`id_ciudad`);

ALTER TABLE `inscriptos` ADD FOREIGN KEY (`id_charla_evento`) REFERENCES `charlas_eventos` (`id_charla_evento`);

ALTER TABLE `inscriptos` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `cv_datos` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `proyectos` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `proyectos` ADD FOREIGN KEY (`id_participante`) REFERENCES `participantes` (`id_participante`);

ALTER TABLE `participantes` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `participantes` ADD FOREIGN KEY (`id_progreso`) REFERENCES `progresos` (`id_progreso`);

ALTER TABLE `progresos` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `progresos` ADD FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id_proyecto`);

ALTER TABLE `ofertaslaborales` ADD FOREIGN KEY (`id_empresa`) REFERENCES `raempresa` (`id_empresa`);

ALTER TABLE `ofertaslaborales` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `ventas` ADD FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id_usuario`);

ALTER TABLE `ventas` ADD FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);

ALTER TABLE `ventas` ADD FOREIGN KEY (`id_servicio`) REFERENCES `servicios` (`id_servicio`);

ALTER TABLE `servicios` ADD FOREIGN KEY (`id_precio_perido`) REFERENCES `servicio_precio_periodo` (`id_precio_perido`);

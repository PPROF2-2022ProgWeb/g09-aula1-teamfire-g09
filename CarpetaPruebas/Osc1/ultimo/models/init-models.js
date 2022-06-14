var DataTypes = require("sequelize").DataTypes;
var _charlas_eventos = require("./charlas_eventos");
var _ciudad = require("./ciudad");
var _cv_datos = require("./cv_datos");
var _entidades = require("./entidades");
var _grupolenguajesprog = require("./grupolenguajesprog");
var _inscriptos = require("./inscriptos");
var _lenguajes = require("./lenguajes");
var _ofertaslaborales = require("./ofertaslaborales");
var _pais = require("./pais");
var _participantes = require("./participantes");
var _productos = require("./productos");
var _progresos = require("./progresos");
var _proyectos = require("./proyectos");
var _raempresa = require("./raempresa");
var _raestudiante = require("./raestudiante");
var _rainstitucion = require("./rainstitucion");
var _raprogramador = require("./raprogramador");
var _registro = require("./registro");
var _registroavanzado = require("./registroavanzado");
var _sequimientos = require("./sequimientos");
var _servicio_precio_periodo = require("./servicio_precio_periodo");
var _servicios = require("./servicios");
var _ventas = require("./ventas");

function initModels(sequelize) {
  var charlas_eventos = _charlas_eventos(sequelize, DataTypes);
  var ciudad = _ciudad(sequelize, DataTypes);
  var cv_datos = _cv_datos(sequelize, DataTypes);
  var entidades = _entidades(sequelize, DataTypes);
  var grupolenguajesprog = _grupolenguajesprog(sequelize, DataTypes);
  var inscriptos = _inscriptos(sequelize, DataTypes);
  var lenguajes = _lenguajes(sequelize, DataTypes);
  var ofertaslaborales = _ofertaslaborales(sequelize, DataTypes);
  var pais = _pais(sequelize, DataTypes);
  var participantes = _participantes(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);
  var progresos = _progresos(sequelize, DataTypes);
  var proyectos = _proyectos(sequelize, DataTypes);
  var raempresa = _raempresa(sequelize, DataTypes);
  var raestudiante = _raestudiante(sequelize, DataTypes);
  var rainstitucion = _rainstitucion(sequelize, DataTypes);
  var raprogramador = _raprogramador(sequelize, DataTypes);
  var registro = _registro(sequelize, DataTypes);
  var registroavanzado = _registroavanzado(sequelize, DataTypes);
  var sequimientos = _sequimientos(sequelize, DataTypes);
  var servicio_precio_periodo = _servicio_precio_periodo(sequelize, DataTypes);
  var servicios = _servicios(sequelize, DataTypes);
  var ventas = _ventas(sequelize, DataTypes);

  inscriptos.belongsTo(charlas_eventos, { as: "id_charla_evento_charlas_evento", foreignKey: "id_charla_evento"});
  charlas_eventos.hasMany(inscriptos, { as: "inscriptos", foreignKey: "id_charla_evento"});
  charlas_eventos.belongsTo(ciudad, { as: "ciudad_ciudad", foreignKey: "ciudad"});
  ciudad.hasMany(charlas_eventos, { as: "charlas_eventos", foreignKey: "ciudad"});
  raempresa.belongsTo(ciudad, { as: "ciudad_ciudad", foreignKey: "ciudad"});
  ciudad.hasMany(raempresa, { as: "raempresas", foreignKey: "ciudad"});
  raestudiante.belongsTo(ciudad, { as: "ciudad_ciudad", foreignKey: "ciudad"});
  ciudad.hasMany(raestudiante, { as: "raestudiantes", foreignKey: "ciudad"});
  rainstitucion.belongsTo(ciudad, { as: "ciudad_ciudad", foreignKey: "ciudad"});
  ciudad.hasMany(rainstitucion, { as: "rainstitucions", foreignKey: "ciudad"});
  registroavanzado.belongsTo(ciudad, { as: "ciudad_ciudad", foreignKey: "ciudad"});
  ciudad.hasMany(registroavanzado, { as: "registroavanzados", foreignKey: "ciudad"});
  raempresa.belongsTo(entidades, { as: "id_entidad_entidade", foreignKey: "id_entidad"});
  entidades.hasMany(raempresa, { as: "raempresas", foreignKey: "id_entidad"});
  raestudiante.belongsTo(entidades, { as: "id_entidad_entidade", foreignKey: "id_entidad"});
  entidades.hasMany(raestudiante, { as: "raestudiantes", foreignKey: "id_entidad"});
  rainstitucion.belongsTo(entidades, { as: "id_entidad_entidade", foreignKey: "id_entidad"});
  entidades.hasMany(rainstitucion, { as: "rainstitucions", foreignKey: "id_entidad"});
  raprogramador.belongsTo(entidades, { as: "id_entidad_entidade", foreignKey: "id_entidad"});
  entidades.hasMany(raprogramador, { as: "raprogramadors", foreignKey: "id_entidad"});
  raestudiante.belongsTo(grupolenguajesprog, { as: "id_lenguajes_grupolenguajesprog", foreignKey: "id_lenguajes"});
  grupolenguajesprog.hasMany(raestudiante, { as: "raestudiantes", foreignKey: "id_lenguajes"});
  raprogramador.belongsTo(grupolenguajesprog, { as: "id_lenguajes_grupolenguajesprog", foreignKey: "id_lenguajes"});
  grupolenguajesprog.hasMany(raprogramador, { as: "raprogramadors", foreignKey: "id_lenguajes"});
  grupolenguajesprog.belongsTo(lenguajes, { as: "id_lenguaje_lenguaje", foreignKey: "id_lenguaje"});
  lenguajes.hasMany(grupolenguajesprog, { as: "grupolenguajesprogs", foreignKey: "id_lenguaje"});
  charlas_eventos.belongsTo(pais, { as: "pais_pai", foreignKey: "pais"});
  pais.hasMany(charlas_eventos, { as: "charlas_eventos", foreignKey: "pais"});
  raempresa.belongsTo(pais, { as: "pais_pai", foreignKey: "pais"});
  pais.hasMany(raempresa, { as: "raempresas", foreignKey: "pais"});
  raestudiante.belongsTo(pais, { as: "pais_pai", foreignKey: "pais"});
  pais.hasMany(raestudiante, { as: "raestudiantes", foreignKey: "pais"});
  rainstitucion.belongsTo(pais, { as: "pais_pai", foreignKey: "pais"});
  pais.hasMany(rainstitucion, { as: "rainstitucions", foreignKey: "pais"});
  registroavanzado.belongsTo(pais, { as: "pais_pai", foreignKey: "pais"});
  pais.hasMany(registroavanzado, { as: "registroavanzados", foreignKey: "pais"});
  proyectos.belongsTo(participantes, { as: "id_participante_participante", foreignKey: "id_participante"});
  participantes.hasMany(proyectos, { as: "proyectos", foreignKey: "id_participante"});
  ventas.belongsTo(productos, { as: "id_producto_producto", foreignKey: "id_producto"});
  productos.hasMany(ventas, { as: "venta", foreignKey: "id_producto"});
  participantes.belongsTo(progresos, { as: "id_progreso_progreso", foreignKey: "id_progreso"});
  progresos.hasMany(participantes, { as: "participantes", foreignKey: "id_progreso"});
  progresos.belongsTo(proyectos, { as: "id_proyecto_proyecto", foreignKey: "id_proyecto"});
  proyectos.hasMany(progresos, { as: "progresos", foreignKey: "id_proyecto"});
  ofertaslaborales.belongsTo(raempresa, { as: "id_empresa_raempresa", foreignKey: "id_empresa"});
  raempresa.hasMany(ofertaslaborales, { as: "ofertaslaborales", foreignKey: "id_empresa"});
  charlas_eventos.belongsTo(rainstitucion, { as: "id_institucion_rainstitucion", foreignKey: "id_institucion"});
  rainstitucion.hasMany(charlas_eventos, { as: "charlas_eventos", foreignKey: "id_institucion"});
  cv_datos.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(cv_datos, { as: "cv_datos", foreignKey: "id_usuario"});
  grupolenguajesprog.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(grupolenguajesprog, { as: "grupolenguajesprogs", foreignKey: "id_usuario"});
  inscriptos.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(inscriptos, { as: "inscriptos", foreignKey: "id_usuario"});
  ofertaslaborales.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(ofertaslaborales, { as: "ofertaslaborales", foreignKey: "id_usuario"});
  participantes.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(participantes, { as: "participantes", foreignKey: "id_usuario"});
  progresos.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(progresos, { as: "progresos", foreignKey: "id_usuario"});
  proyectos.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(proyectos, { as: "proyectos", foreignKey: "id_usuario"});
  raempresa.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(raempresa, { as: "raempresas", foreignKey: "id_usuario"});
  raestudiante.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(raestudiante, { as: "raestudiantes", foreignKey: "id_usuario"});
  rainstitucion.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(rainstitucion, { as: "rainstitucions", foreignKey: "id_usuario"});
  raprogramador.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(raprogramador, { as: "raprogramadors", foreignKey: "id_usuario"});
  registroavanzado.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(registroavanzado, { as: "registroavanzados", foreignKey: "id_usuario"});
  ventas.belongsTo(registro, { as: "id_usuario_registro", foreignKey: "id_usuario"});
  registro.hasMany(ventas, { as: "venta", foreignKey: "id_usuario"});
  progresos.belongsTo(sequimientos, { as: "id_sequimiento_sequimiento", foreignKey: "id_sequimiento"});
  sequimientos.hasMany(progresos, { as: "progresos", foreignKey: "id_sequimiento"});
  servicios.belongsTo(servicio_precio_periodo, { as: "id_precio_perido_servicio_precio_periodo", foreignKey: "id_precio_perido"});
  servicio_precio_periodo.hasMany(servicios, { as: "servicios", foreignKey: "id_precio_perido"});
  ventas.belongsTo(servicios, { as: "id_servicio_servicio", foreignKey: "id_servicio"});
  servicios.hasMany(ventas, { as: "venta", foreignKey: "id_servicio"});

  return {
    charlas_eventos,
    ciudad,
    cv_datos,
    entidades,
    grupolenguajesprog,
    inscriptos,
    lenguajes,
    ofertaslaborales,
    pais,
    participantes,
    productos,
    progresos,
    proyectos,
    raempresa,
    raestudiante,
    rainstitucion,
    raprogramador,
    registro,
    registroavanzado,
    sequimientos,
    servicio_precio_periodo,
    servicios,
    ventas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

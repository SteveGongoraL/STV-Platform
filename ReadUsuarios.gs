function readUsers() {
  const dataUsuarios = sheetRespuestas.getDataRange().getDisplayValues();
  dataUsuarios.shift();

  if(dataUsuarios.length === 0){
    return "No hay registros para mostrar"
  }
  console.log(dataUsuarios);
  return dataUsuarios;
}

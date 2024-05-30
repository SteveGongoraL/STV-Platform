function borrarUsuario(id) {
  /* sheetRespuestas.deleteRow(4); */
  const fila = buscarFila(id);
  sheetRespuestas.deleteRow(fila);

  return "Reporte eliminado con exito";
}

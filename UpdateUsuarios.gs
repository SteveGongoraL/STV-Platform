function editarUsuario(form) {
  const valCheck = form.problemas;
  const datos1 = form['problemas']; // Usando la clave correcta 'problemas'
  const valProblema = [];

  if (!datos1) {
    datos1 = valCheck;
  }

  // Verifica si datos1 es un arreglo antes de proceder
  if (Array.isArray(datos1)) {
    // Recorrer y clasificar los datos
    datos1.forEach(dato => {
      if (dato === 'Problemas de Hardware' || dato === 'Problemas de Software' || dato === 'Problemas de Red' || dato === 'Problemas de Cuenta' || dato === 'Problemas de Impresion' || dato === 'Problemas de Seguridad') {
        valProblema.push(dato);
      }
    });
  } else {
    // Manejo de error si datos1 no es un arreglo
    console.error('Datos no son un arreglo:', datos1);
  }

  /* Creando las constantes para poder pasarlas a la parte que subira los cambios al spreadsheet */
  const idProyecto = form.idRegistro;
  const correo = form.correoRegistro;
  const solicitante = form.solicitanteRegistro;
  const area = form.areaRegistro;
  const problemaTipo = valProblema.join(', ')
  const descripcion = form.descripcionRegistro;
  const urgencia = form.urgenciaRegistro;

  /* Aqui se preparan los datos para poder actualizar el spreadsheet */
  const fila = buscarFila(idProyecto);
  sheetRespuestas.getRange(fila,3,1,sheetRespuestas.getLastColumn()-2).setValues([[
    correo,solicitante,area,problemaTipo,descripcion,urgencia
  ]]);


  /* Enviar correo */
    var asunto = `Se actualizo el ticket: ${idProyecto}`;

    // email_plano es para cuando el correo del receptor no soporta HTML.
    var email_plano = `
		  Hola ${correo}, te avisamos que tu ticket fue actualizado. A continuación te mostramos las actualizaciones para que estes enterado del proceso.\n\n
      Nombre del solicitante: ${solicitante} \nÁrea del incidente: ${area} \nTipo de problema: ${problemaTipo} \nDescripción del proyecto: ${descripcion} \nUrgencia del incidente: ${urgencia}\n\n
      Agradecemos que hagas el reporte, con tu ayuda mejorara nuestro lugar de trabajo.\n\n
      Saludos,
	  `;
    
    var msjCorreo = `Hola ${correo}, te avisamos que tu ticket fue actualizado. A continuación te mostramos las actualizaciones para que estés enterado del proceso.`;

    var email_html = getEmailHtml(msjCorreo, solicitante, area, problemaTipo, descripcion, urgencia);

    var optsAvanzadas = {name: "STV - Ticket Soporte", htmlBody: email_html};
    MailApp.sendEmail(correo, asunto, email_plano, optsAvanzadas);

  return "Ticket editado con exito";
}


function buscarFila(id = 'STV-0001'){
  const ids = sheetRespuestas.getRange(3, 2, sheetRespuestas.getLastRow() - 1, 1).getValues().map(id => id[0]).filter(id => id !== '#N/A');
  const row = ids.indexOf(id)+3;
  console.log("FILA: "+row);
  return row;
}

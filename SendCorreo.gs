function notificarOnFormSubmit(e) {
  // Definimos las variables con el elemento que le queremos asignar basandonos en las respuestas que nos da el formulario y en base 0.
  var emailProyecto = e.values[1];
  var solicitante = e.values[2];
  var area = e.values[3];
  var problemaTipo = e.values[4];
  var descripcion = e.values[5];
  var urgencia = e.values[6];

  var registro = agregarFolioRegistro();
  var asunto = `Ticket número ${registro}`;

  var email_plano = `
    Hola ${emailProyecto}, te avisamos que tu reporte fue recibido con éxito.\n\n
    Tu numero de reporte es: ${registro}. Este número te ayudará a identificar tu reporte de manera única en nuestra plataforma.\n\n Agradecemos tu tiempo invertido para realizar este reporte.
	`;

  var msjCorreo = `Hola ${emailProyecto}, te avisamos que tu reporte fue recibido. A continuación te mostramos un resumen de tu reporte.`;

  var email_html = getEmailHtml(msjCorreo, solicitante, area, problemaTipo, descripcion, urgencia);

  var optsAvanzadas = {name: "STV - Ticket Soporte", htmlBody: email_html};
  MailApp.sendEmail(emailProyecto, asunto, email_plano, optsAvanzadas);
}


function agregarFolioRegistro() {
  var hoja = SpreadsheetApp.getActiveSheet();
  // Obtiene el último renglón con datos
  var renglon = hoja.getLastRow();
  var registro = renglon - 1;
  // Genera el folio potencial
  var folioRegistro = `STV-${Utilities.formatString("%04d", registro)}`;
    
  // Verifica si el folio generado ya existe en la hoja
  var foliosExistente = hoja.getRange(2, 2, renglon - 1, 1).getValues().flat(); // Obtiene los folios existentes
  if (foliosExistente.includes(folioRegistro)) {
      // Si el folio ya existe, se genera un nuevo folio único
      do {
          registro++;
          folioRegistro = `STV-${Utilities.formatString("%04d", registro)}`;
      } while (foliosExistente.includes(folioRegistro));
  }
    
  hoja.getRange(renglon, 2).setValue(folioRegistro);
  return folioRegistro;
}
function doGet(){
  const html = HtmlService.createTemplateFromFile('Main'); //Crear la plantilla.
  const output = html.evaluate(); //Para ver que no exista error en el html.
  return output;
}

function include(fileName){
  return HtmlService.createHtmlOutputFromFile(fileName).getContent(); //Para poder insertar archivos en nuestro Main.
}

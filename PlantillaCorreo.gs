function getEmailHtml(msjCorreo, solicitante, area, problemaTipo, descripcion, urgencia) {
  return `
    <table role="presentation" style="width: 100%; height: 100%; border-collapse: collapse; padding: 0; margin: 0;">
      <tr>
        <td style="padding: 0; margin: 0;">
          <table role="presentation" style="width: 100%; height: 100%; border-collapse: collapse; background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9)), url('https://github.com/SteveGongoraL/STV-Platform/assets/55302658/09d3b185-077f-4353-b2ef-6d1f68b0025b'); background-size: cover; background-position: center;">
            <tr>
              <td style="display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 0; margin: 0;">
                <table role="presentation" style="text-align: center; background-color: #ffffffb7; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); width: 65%; margin: auto;">
                  <tr>
                    <td>
                      <h1 style="font-family: Trebuchet MS, sans-serif; color: #a93f6f; font-size: xx-large; text-align: center; letter-spacing: 4px; margin-bottom: 30px;">STV Platform</h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="text-align: justify; font-size: large; padding: 0 25px;">${msjCorreo}</p>
                      <p style="text-align: justify; font-size: large; padding: 0 25px;"><b>Nombre del solicitante:</b> ${solicitante}</p>
                      <p style="text-align: justify; font-size: large; padding: 0 25px;"><b>Área del incidente:</b> ${area}</p>
                      <p style="text-align: justify; font-size: large; padding: 0 25px;"><b>Tipo de problema:</b> ${problemaTipo}</p>
                      <p style="text-align: justify; font-size: large; padding: 0 25px;"><b>Descripción del proyecto:</b> ${descripcion}</p>
                      <p style="text-align: justify; font-size: large; padding: 0 25px;"><b>Urgencia del incidente:</b> ${urgencia}</p>
                      <p style="text-align: justify; font-size: large; padding: 0 25px;">Agradecemos que hagas el reporte, con tu ayuda mejorará nuestro lugar de trabajo. Saludos,</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

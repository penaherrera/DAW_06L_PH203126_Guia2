//Declaración de variables
var voto;
var opcion = true;
var cont1 = cont2 = cont3 = 0;
var total;
var per1, per2, per3;
//Mostrar las instrucciones para responder
document.write("<div class=\"container\">");
document.write("<div class=\"row\">");
document.write("<h1 class=\"text-center\">");
document.write("Encuesta para determinar cuántas personas están a favor de la portabilidadnumérica de teléfonos");
document.write("celulares.");
document.write("</h1>");
document.write("</div>");
document.write("<div class=\"row\">");
document.write("<ul class=\"list-group list-group-flush\">");
document.write("<li class=\"list-group-item fw-bold\">Digite \"1\" si esta a favor</li>");
document.write("<li class=\"list-group-item fw-bold\">Digite \"2\" si esta encontra</li>");
document.write("<li class=\"list-group-item fw-bold\">Digite \"3\" si se abstiene deopinar</li>");
document.write("</ul>");
document.write("</div>");
document.write("</div>");
//Ciclo repetitivo infinito donde se captura voto por voto
//en tanto no se de por terminada el ingreso de respuesta de la encuesta
while (opcion == true) {
 voto = parseInt(prompt('¿Cuál es su voto?', ''));
 switch (voto) {
 case 1:
 cont1++;
 break;
 case 2:
 cont2++;
 break;
 case 3:
 cont3++;
 break;
 default:
 alert('¡Voto no válido!');
 }
 //Se pregunta si se desea terminar la encuesta o continuar
 opcion = confirm('¿Desea continuar s/n?');
}
//Obtener el total de respuestas de la encuesta
total = cont1 + cont2 + cont3;
//Obtener el porcentajes de la primera respuesta
per1 = Math.round((cont1 / total) * Math.pow(10, 2)) / Math.pow(10, 2);
//Obtener el porcentajes de la segunda respuesta
per2 = Math.round((cont2 / total) * Math.pow(10, 2)) / Math.pow(10, 2);
//Obtener el porcentajes de la tercera respuesta
per3 = Math.round((cont3 / total) * Math.pow(10, 2)) / Math.pow(10, 2);
//Mostrar los resultados de la encuesta
with (document) {
 write("<div class=\"container\">");
 write("<div class=\"row\">");
 write("<table class=\"table table-primary table-striped table-hover\">");
 write("<thead>");
 write("<tr>");
 write("<th>Resultado de los votos</th>");
 write("<th>Votos obtenidos</th>");
 write("<th>Porcentaje</th>");
 write("</tr>");
 write("</thead>");
 write("<tbody>");
 write("<tr>");
 write("<td>Votos a favor </td>");
 write("<td>" + cont1 + "</td>");
 write("<td>" + per1 * 100 + " %</td>");
 write("</tr>");
 write("<tr>");
 write("<td>Votos en contra </td>");
 write("<td>" + cont2 + "</td>");
 write("<td>" + per2 * 100 + " %</td>");
 write("</tr>");
 write("<tr>");
 write("<td>Se abstienen de opinar </td>");
 write("<td>" + cont3 + "</td>");
 write("<td>" + per3 * 100 + " %</td>");
 write("</tr>");
 write("</tbody>");
 write("<tfoot>");
 write("<tr>");
 write("<th>Totales</th>");
 write("<th>" + parseInt(cont1 + cont2 + cont3) + "</th>");
 write("<th>" + (parseFloat(per1 + per2 + per3)) * 100 + " %</th>");
 write("</tr>");
 write("</tfoot>");
 write("</table>");
 write("</div>");
 write("</div>");
}
 
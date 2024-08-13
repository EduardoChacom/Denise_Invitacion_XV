function confirmarAsistencia() {
    var mensaje = "Confirmo mi asistencia y la de mi familia!";
    var numero = "523121076616"; // Tu número de teléfono con el código de país
    var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    
    // Abrir WhatsApp con el mensaje predefinido
    window.open(url, '_blank');

    // Deshabilitar el botón después de ser presionado
    document.getElementById("confirmButton").disabled = true;
}

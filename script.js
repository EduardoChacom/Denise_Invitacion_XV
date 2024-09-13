function confirmarAsistencia() {
    var mensaje = "Confirmo mi asistencia!";
    var numero = "523123090826"; // Tu número de teléfono con el código de país
    var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    
    // Abrir WhatsApp con el mensaje predefinido
    window.open(url, '_blank');

    // Deshabilitar el botón después de ser presionado
    document.getElementById("confirmButton").disabled = true;
}

$(document).ready(function () {

    $("#enviarcorreo").click(function () {
        alert("El correo fue enviado");
    })


    $(".card-title").click(function () {
        $(".card-text").toggle();
    });



    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
})



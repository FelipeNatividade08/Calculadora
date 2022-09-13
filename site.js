function Soma() {
    let valor1 = $('#CampoTela1').val();
    let valor2 = $('#valor2').val();
    $.ajax({
        url: "/Calculadora/Soma",
        data: {
            valor1: valor1,
            valor2: valor2
        },

    }).done(function (response) {
        $('#total').val(response);
    });
}

function Subtrai() {
    let valor1 = $('#CampoTela1').val();
    let valor2 = $('#valor2').val();
    $.ajax({
        url: "/Calculadora/Subtrai",
        data: {
            valor1: valor1,
            valor2: valor2
        },

    }).done(function (response) {
        $('#total').val(response);
    })
}
function Divide() {
    let valor1 = $('#CampoTela1').val();
    let valor2 = $('#valor2').val();
    $.ajax({
        url: "/Calculadora/Divide",
        data: {
            valor1: valor1,
            valor2: valor2
        },

    }).done(function (response) {
        $('#total').val(response);
    })
}
function Multiplica() {
    let valor1 = $('#CampoTela1').val();
    let valor2 = $('#valor2').val();
    $.ajax({
        url: "/Calculadora/Multiplica",
        data: {
            valor1: valor1,
            valor2: valor2
        },

    }).done(function (response) {
        $('#total').val(response);
    })
}
$(document).ready(() => {

    let game = new Game();

    $('.deal-instructions').hide();
    $('#deal-button').hide();
    $('.gameplay').hide();
    $('#start-button').on('click', () => {

        $('.deal-instructions').show();
        $('#deal-button').show();
        $('#start-button').hide();

    });

    $('#deal-button').on('click', () => {

        $("#deal-button").prop('disabled', true);
        $('.gameplay').show();

        game.play();

    });

    $('#hit-button').on('click', () => {

        game.hit();

    });

    $('#stand-button').on('click', () => {

        game.stand();

    });

    $('#reset-button').on('click', () => {

        game.reset();

        $('.deal-instructions').hide();
        $('#deal-button').hide();
        $('.gameplay').hide();
        $('#start-button').show();
    });

})
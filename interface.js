$(document).ready(() => {

    let game = new Game();

    $('.gameplay').hide();

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

        $('#deal-button').show();
        $('.gameplay').hide();
    });

})
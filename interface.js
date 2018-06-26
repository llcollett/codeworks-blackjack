
$(document).ready(() => {

    $('#cards').hide();
    $('#deal-instructions').hide();
    $('#reset').hide();
    $('#start').on('click', () => {
        $('#cards').show();
        $('#deal-instructions').show();
        $('#reset').show();
    })

    $('#cards').on('click', () => {
        //Game.deal();
    })

    $('#reset').on('click', () => {
        $('#cards').hide();
        $('#deal-instructions').hide();
        $('#reset').hide();
    })

})
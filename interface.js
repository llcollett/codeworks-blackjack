
$(document).ready(() => {

    $('#cards').hide();
    $('#deal-instructions').hide();
    $('#start').on('click', () => {
        $('#cards').toggle();
        $('#deal-instructions').show();
    })

    $('#cards').on('click', () => {
        //Game.deal();
    })

})
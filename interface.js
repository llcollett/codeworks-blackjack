
$(document).ready(() => {

    $('#cards').hide();
    $('#deal-instructions').hide();
    $('#start').on('click', () => {
        $('#cards').toggle();
    })

    $('#cards').on('click', () => {
        //Game.deal();
    })

})
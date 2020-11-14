
//check if document ready
$(function () {

    $(".roller").hide();
    //Declaring variables for each die to count number of times rolled and displayed:
    let d4Counter = 0;
    let d6Counter = 0;
    let d8Counter = 0;
    let d10Counter = 0;
    let d12Counter = 0;
    let d20Counter = 0;

    //first event listener: rolls dice and displays the results to the page
    $('.roll').on('click', function () {

        //on click a random number within the min/max number for that die will be selected using Math.floor and Math.random

        const d4 = Math.floor(Math.random() * 4) + 1;
        const d6 = Math.floor(Math.random() * 6) + 1;
        const d8 = Math.floor(Math.random() * 8) + 1;
        const d10 = Math.floor(Math.random() * 10) + 1;
        const d12 = Math.floor(Math.random() * 12) + 1;
        const d20 = Math.floor(Math.random() * 20) + 1;

        //display results on li's under their respective ul's
        //limit results to ten or twenty li's
        switch (this.id) {
            case 'd4':
                if (d4Counter < 10) {
                    d4Counter++
                    $('.d4_rolls').append(`<li class="dice_roll"><p>${d4}</p></li>`);
                } else {
                    break;
                }
                break;

            case 'd6':
                if (d6Counter < 10) {
                    d6Counter++
                    $('.d6_rolls').append(`<li class="dice_roll"><p>${d6}</p></li>`);
                } else {
                    break;
                }
                break;

            case 'd8':
                if (d8Counter < 10) {
                    d8Counter++
                    $('.d8_rolls').append(`<li class="dice_roll"><p>${d8}</p></li>`);
                } else {
                    break;
                }
                break;

            case 'd10':
                if (d10Counter < 10) {
                    d10Counter++
                    $('.d10_rolls').append(`<li class="dice_roll"><p>${d10}</p></li>`);
                } else {
                    break;
                }
                break;

            case 'd12':
                if (d12Counter < 10) {
                    d12Counter++
                    $('.d12_rolls').append(`<li class="dice_roll"><p>${d12}</p></li>`);
                } else {
                    break;
                }
                break;

            case 'd20':
                if (d20Counter < 10) {
                    d20Counter++
                    $('.d20_rolls').append(`<li class="dice_roll"><p>${d20}</p></li>`);
                } else {
                    break;
                }
                break;
        }
    })

    //second event listener: clears results and resets the roll counters to 0
    $('#clear').on('click', function () {
        $('.dice_roll').empty();
        d4Counter = 0;
        d6Counter = 0;
        d8Counter = 0;
        d10Counter = 0;
        d12Counter = 0;
        d20Counter = 0;
    });

    $('a').on('click', function () {
        $(".roller").show();
        $("html").animate({
            scrollTop: $(".roller").offset().top
        }, 800);
    })
})
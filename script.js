//check if document ready
//initialize app
//on click/submit(might make this a form), a random number within the min/max number for that die will be selected probably using Math.floor and Math.random
//display results on li's under they're respective ul's
//limit results to ten or twenty li's
//make sure to have an empty() on the clear rolls button
$('.roll').click(function(){

    const d4 = Math.floor(Math.random() * 4) + 1;
    const d6 = Math.floor(Math.random() * 6) + 1;
    const d8 = Math.floor(Math.random() * 8) + 1;
    const d10 = Math.floor(Math.random() * 10) + 1;
    const d12 = Math.floor(Math.random() * 12) + 1;
    const d20 = Math.floor(Math.random() * 20) + 1;

    switch (this.id) {
        case 'd4':
            $('.d4_rolls').append(`<li><p>${d4}</p></li>`);
            break;
        case 'd6':
            $('.d6_rolls').append(`<li><p>${d6}</p></li>`);
            break;
        case 'd8':
            $('.d8_rolls').append(`<li><p>${d8}</p></li>`);
            break;
        case 'd10':
            $('.d10_rolls').append(`<li><p>${d10}</p></li>`);
            break;
        case 'd12':
            $('.d12_rolls').append(`<li><p>${d12}</p></li>`);
            break;
        case 'd20':
            $('.d20_rolls').append(`<li><p>${d20}</p></li>`);
            break;
    }
    // $('#d20_rolls').append(`<li><p>${d20}</p></li>`);
    // $('#d12_rolls').append(`<li><p>${d12}</p></li>`);
    // $('#d10_rolls').append(`<li><p>${d10}</p></li>`);
    // $('#d8_rolls').append(`<li><p>${d8}</p></li>`);
    // $('#d6_rolls').append(`<li><p>${d6}</p></li>`);
    // $('#d4_rolls').append(`<li><p>${d4}</p></li>`);
})


$('#clear').on('click', function(){
    $('li').empty();
});



$(function() {

})
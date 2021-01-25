$(document).ready(function() {
    $('#btnThemeWhite').click(function whiteTheme() {

        $('body').css('background-color', 'white')
        $('#navbar ul').css('background-color', 'white')
        $('#navbar li a').css('color', 'rgba(55, 55, 55, 0.741)')
        $('#navbar h2').css('color', 'rgba(55, 55, 55, 0.926)')
        $('li').css('color', 'black')
        $('form h2').css('color', 'black')
        $('button').css('color', 'black')
        $('#btnTheme').html('White Theme')

    })

    $('#btnThemeDark').click(function darkTheme() {

        $('body').css('background-color', 'black')
        $('#navbar ul').css('background-color', 'black')
        $('#navbar li a').css('color', 'white')
        $('#navbar h2').css('color', 'white')
        $('li').css('color', 'white')
        $('form h2').css('color', 'white')
        $('button').css('color', 'white')
        $('#btnTheme').html('Dark Theme')

    })




                
    /*
    $('body').css('background-color', 'white')
    $('#navbar ul').css('background-color', 'white')
    $('#navbar li a').css('color', 'back')
    $('#navbar h2').css('color', 'black')
    $('li').css('color', 'black')
    $('form h2').css('color', 'black')
    $('button').css('color', 'black')
    $('#btnTheme').html('White Theme')

    $('body').css('background-color', 'black')
    $('#navbar ul').css('background-color', 'black')
    $('#navbar li a').css('color', 'white')
    $('#navbar h2').css('color', 'white')
    $('li').css('color', 'white')
    $('form h2').css('color', 'white')
    $('button').css('color', 'white')
    $('#btnTheme').html('Dark Theme')
    */

})

$(function() {

    // Toggle dropdowns
    $('.dropdown__btn').on('click', function (event) {
        $(this).find('.dropdown__menu').show('fade');
        $('.dropdown__btn').not(this).find('.dropdown__menu').hide('fade');
    });

    // Hide dropdowns on click outside
    $(document).mouseup(function (e) {
        var container = $(".dropdown__menu");

        if (!container.is(e.target)
            && container.has(e.target).length === 0)
        {
            container.hide('fade');
        }
    });

    // Hamburger menu
    $(document).ready(function(){
        $('.btn_burger').click(function(){
            $(this).toggleClass('open');
            $('.navigation').toggleClass('shown');
        });
    });

});

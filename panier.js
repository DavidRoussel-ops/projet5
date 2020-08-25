let panier = localStorage;
localStorage.setItem('teddies', 'arnold');
panier.localStorage.getItem('teddies');
JSON.parse(panier.localStorage.getItem('teddies'));

//petite fonctionalité de l'icone panier

let timeout;

$('#cart').on({
    mouseenter: function () {
        $('#cart-dropdown').show();
    },
    mouseleave: function () {
        timeout = setTimeout(function () {
            $('#cart-dropdown').hide()
        }, 200)
    }
});

$('#cart-dropdown').on({
    mouseenter: function () {
        clearTimeout(timeout);
    },
    mouseleave: function () {
        $('#cart-dropdown').hide();
    }
});
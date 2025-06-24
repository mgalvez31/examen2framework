// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
    id: 'com.adidas.app',
    root: '#Adidas',
    theme: 'md',
    view: {
        pushState: true
    },
    cache: false,
    cacheDuration: 0,
    modalTitle: 'Adidas App',
    panel: {
        swipe: true, 
    },
    routes: [
        {
            path: '/home/',
            url: 'index.html',
            name: 'home'
        },
        {
            path: '/zapatos/',
            url: 'zapatos.html',
            name: 'zapatos'
        },
        
        {
            path: '/login/',
            url: 'login.html',
            name: 'login'
        }
    ],
    dialog: {
        title: 'Adidas App',
        buttonOk: 'Aceptar'
    },
    popup: {
        closeOnEscape: true,
        backdrop: false
    },
    sheet: {
        closeOnEscape: true
    },
    popover: {
        closeOnEscape: true
    },
    actions: {
        closeOnEscape: true
    }
});

$$('.panel-open').on('click', function (e) {
    app.panel.open('left');
});


$$(document).on('click', '#btnLogin', function (e) {
    e.preventDefault();

    var $valid = $$('#form-login')[0].checkValidity();
    if ($valid) {
        $$('#form-login').trigger('reset');
        app.loginScreen.close('#modal-login');
        app.dialog.alert(' Welcome to Adidas App!');
    }
});


$$(document).on('click', '#btnCheckout', function (e) {
    e.preventDefault();

    app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
        var notification = app.notification.create({
            icon: '<i class="material-icons">check</i>',
            title: 'confirmed order',
            text: "Your order has been received correctly.",
            closeTimeout: 3000,
        });
        notification.open();
    });
});
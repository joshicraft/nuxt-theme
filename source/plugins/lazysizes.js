require('lazysizes');
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.lazyClass = 'lazy';

//add simple support for background images:
document.addEventListener('lazybeforeunveil', function(e){
    var bg = e.target.getAttribute('data-image');
    if(bg){
        e.target.style.backgroundImage = 'url(' + bg + ')';
        e.target.style.backgroundSize = 'cover';
        e.target.style.backgroundPosition = 'center';
    }
});


window.lazySizes.init();

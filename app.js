document.addEventListener('DOMContentLoaded', function () {
    console.log('hello');

    const root = document.querySelector('.root');
    const sections = document.querySelectorAll('.section');

    document.addEventListener('mousewheel', function (e) {
        console.log(e.wheelDelta);

    })


})
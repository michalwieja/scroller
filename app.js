document.addEventListener('DOMContentLoaded', function () {
    console.log('hello');

    const root = document.querySelector('.root');
    const sections = document.querySelectorAll('.section');

    let currentIndex = 0;
    let isActive = false;

    document.addEventListener('mousewheel', function (e) {

        if (isActive) return;
        isActive = true;

        setTimeout(function () {
            isActive = false;
        }, 500);

        const direction = e.wheelDelta < 0 ? 1 : -1;

        if (direction === 1) {
            currentIndex++;
            currentIndex > sections.length - 1 ? currentIndex = sections.length - 1 : false;

        } else {
            currentIndex--;
            currentIndex < 0 ? currentIndex = 0 : false;
        }
        console.log(direction);
        console.log(currentIndex);
        console.log(sections[currentIndex]);

        sections[currentIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

    })
})
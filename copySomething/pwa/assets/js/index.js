window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pad');

    if('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('serviceWorker.js');
            console.log('Service Worker Registered');
        } catch (e) {
            console.log('Service Worker Registration Failed');

        }
    }

    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            console.log(pad.className, sounds[index].src);
        });
    });

});

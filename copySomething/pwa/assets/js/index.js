window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pad');

    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            console.log(pad.className, sounds[index].src);
        });
    });

});

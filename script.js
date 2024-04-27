document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.sound-button');
    const audioPlayer = document.getElementById('audio-player');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const soundPath = this.getAttribute('data-sound');
            if (soundPath) {
                playSound(soundPath);
            } else {
                console.error('Error: Sound path not specified.');
            }
        });
    });

    function playSound(soundPath) {
        try {
            audioPlayer.src = soundPath;
            audioPlayer.play().then(function() {
                console.log('Sound played successfully.');
            }).catch(function(error) {
                console.error('Error playing audio:', error.message);
            });
        } catch (error) {
            console.error('Error playing audio:', error.message);
        }
    }
});

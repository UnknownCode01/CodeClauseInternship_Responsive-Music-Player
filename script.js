document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const songTitle = document.getElementById('songTitle');

    const songs = [
        'Achyutam Keshavam Krishna.mp3',
        'Hamare Prabhu.mp3',
        'Narayan Narayan Hari Hari.mp3',
        'Shree Hari Stotram.mp3'
        // Add more songs as needed
    ];

    let currentSongIndex = 0;

    function loadSong() {
        audioPlayer.src = 'Songs/'+songs[currentSongIndex];
        songTitle.textContent = `Now Playing: ${songs[currentSongIndex]}`;
    }

    function playPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    }

    function playNext() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong();
        audioPlayer.play();
    }

    function playPrev() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong();
        audioPlayer.play();
    }

    playPauseBtn.addEventListener('click', playPause);
    nextBtn.addEventListener('click', playNext);
    prevBtn.addEventListener('click', playPrev);

    // Load the first song
    loadSong();
});

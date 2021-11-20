function musicPhoto() {
    const artists =
        ['Juice Wrld', 'Lil Uzi Vert', 'A Boogie wit da Hoodie', 'Drake'];

    // Pick a random artist.
    const ranArtist = artists[Math.floor(Math.random() * artists.length)];

    // Add it to the page.
    const ranArtistContainer = document.getElementById('artists-container');
    ranArtistContainer.innerText = ranArtist;








}
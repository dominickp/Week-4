define(['jquery', 'Song'], function($, Song) {
    describe('Song', function(){
        describe('song titles', function() {
            it('should start with an uppercase letter', function () {
                var song_title = 'Hello';
                var song = new Song(song_title);
                expect(song.title.charAt(0)).toBe(song_title.charAt(0).toUpperCase());
            });
        });
    });
});
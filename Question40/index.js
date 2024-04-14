function Make_Album(Artist_name, Album_Title, track) {
    var Album = {
        Artist: Artist_name,
        Title: Album_Title,
    };
    if (track !== undefined) {
        Album.track = track;
    }
    return Album;
}
var Album1 = Make_Album("Bilal", "Pirates of cerebian", 2);
var Album2 = Make_Album("Hammad", "Gold", 10);
var Album3 = Make_Album("Hijab_Girl", "Revenge");
console.log(Album1);
console.log(Album2);
console.log(Album3);

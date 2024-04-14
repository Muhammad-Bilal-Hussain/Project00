function Make_Album(Artist_name:string, Album_Title:string, track?:number){
    let Album : {Artist:string, Title:string, track?: number} = {
        Artist:Artist_name,
        Title:Album_Title,
    };
    if(track !== undefined){
        Album.track = track
    }
    return Album;
}
let Album1 = Make_Album("Bilal","Pirates of cerebian",2);
let Album2 = Make_Album("Hammad","Gold",10);
let Album3 = Make_Album("Hijab_Girl","Revenge");

console.log(Album1);
console.log(Album2);
console.log(Album3);
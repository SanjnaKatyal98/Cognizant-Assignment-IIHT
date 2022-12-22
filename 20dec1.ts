export {};

// 1. create an interface Artist -- with id name bio
interface Artist{
    id: Number;
    name: String;
    bio: String;
}

// 2.create objects of Artist and store it in an array
let artists:Artist[]=[];

let artist1, artist2, artist3 :Artist;

artist1={
    id:1,
    name:'manvi',
    bio:'dog lover'
};
artist2={
    id:2,
    name:'manvi2',
    bio:'dog lover 2'
};
artist3={
    id:3,
    name:'manvi3',
    bio:'dog lover 3'
};
artists.push(artist1);
artists.push(artist2);
artists.push(artist3);

// 3. create class Work --with  a map of  key --artist and   and value as  string  array details of the work done
class ArtistWork{
    artistMap: Map<Artist, String[]>;
    
    constructor(){
        this.artistMap = new Map<Artist, String[]>;
    }

    addArtist(a: Artist, work:String[]){
        let temp=0;
        this.artistMap.forEach((value: String[], key: Artist) => {
            if(key.id === a.id){
                let newWork = [...value,...work];
                console.log(newWork);
                newWork = newWork.flat(1);
                console.log(newWork);
                this.artistMap.set(key, newWork);
                temp=1;
                return;
            }
        });
        if(!temp){
            this.artistMap.set(a, work);
        }
    }

    print(){
        this.artistMap.forEach((value: String[], key: Artist) => {
            console.log(key, value);
        });
    }
}

let obj:ArtistWork;
obj = new ArtistWork();
obj.addArtist(artist1, ["dog_paintng1", "nature1"]);
obj.addArtist(artist2, ["dog_paintng2", "nature2"]);
obj.addArtist(artist3, ["dog_paintng3", "nature3"]);

obj.print();

obj.addArtist(artist3, ["new painting"]);

obj.print();
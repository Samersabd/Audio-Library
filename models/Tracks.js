const tracks=[];

module.exports =class Track{
    constructor(name, singer, category, album){
        this.name=name;
        this.singer=singer;
        this.category=category;
        this.album=album;
    }
    save(){
        tracks.push(this);
    }
    static fetchAll(){
        return tracks;
    }

}
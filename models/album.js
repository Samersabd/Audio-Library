const albums=[];

module.exports =class Album{
    constructor(name, description, showNbTracks, createdAt, updatedAt, lastSongAddedAt){
        this.name=name;
        this.description=description;
        this.showNbTracks=showNbTracks;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt;
        this.lastSongAddedAt=lastSongAddedAt;
    }
    save(){
        albums.push(this);
    }
    static fetchAll(){
        return albums;
    }

}
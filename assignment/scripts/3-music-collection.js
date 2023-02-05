console.log('***** Music Collection *****')
let collection = [
    {title: "Unplugged",
    artist: "Eric Clapton",
    yearPublished: 1992
}
]

function addToCollection(titleOfAlbum,artistOfAlbum,yearPublishedOfAlbum){
    let newAlbum = {
    "title": titleOfAlbum,
    "artist": artistOfAlbum,
    "yearPublished": yearPublishedOfAlbum
    }
    collection.push(newAlbum)
}

console.log(collection)
addToCollection('Popestar','Ghost',2016)
console.log(collection)

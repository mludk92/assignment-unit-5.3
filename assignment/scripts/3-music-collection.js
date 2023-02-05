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
addToCollection('Nightmare','Avenged Sevenfold',2010)
addToCollection('Black Rain','Ozzy Osbourne',2007)
addToCollection('The Resistance','Muse',2009)
addToCollection('Keep It Going','Mad Caddies',2007)
addToCollection('Center:Level:Roar','Young Blood Brass Band',2003)
console.table(collection)
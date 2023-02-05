console.log('***** Music Collection *****')
let collection = []

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
addToCollection('Unplugged','Eric Clapton',1992)
console.log(collection)



// - Console.log the number of items in the array.
// - Loop over the array and console.log each album's
//  information formatted like: `TITLE by ARTIST,
//   published in YEAR`.
function showCollection(arrayOfObjects){
    console.log(arrayOfObjects.lenght)
    for(let i in arrayOfObjects){
     console.log(`${arrayOfObjects[i].title} by ${arrayOfObjects[i].artist}, published in ${arrayOfObjects[i].yearPublished}.`)
    }
}

console.log(collection.length)
console.log(collection[0].title)
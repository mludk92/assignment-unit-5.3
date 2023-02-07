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

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects 
//   with a matching artist to the array.
//   - Return the array with the matching results. 
//   If no results are found, return an empty array.
/**
 * 
 * @param {string} nameOfArtist 
 * @returns 
 */
function findByArtist(nameOfArtist){
    let results = []
    for(let i in collection){
        if (nameOfArtist == collection[i].artist){
            results.push(collection[i])
        }
   }
   return results
}
// how can i do this without specifing the Artist as a string?
findByArtist('Ghost')

/**
 * - Create a function called `search`. This function should:
  - Take an input parameter for a search criteria object.
  Create your solution based on a search object that has
   these properties:
  ```
  { artist: 'Ray Charles', year: 1957 }
  ```
  - The returned output from `search` should meet these 
  requirements:
    - Return a new array of all items in the `collection`
     matching *all* of the search criteria.
    - If no results are found, return an empty array.
    - If there is no search object or an empty search 
    object provided as input, then return all albums 
    in the `collection`.
 */

function search(objectToSearch,artist,year){
    let searchResults = []
    for(let i in objectToSearch){
        if(objectToSearch[i].artist== artist && 
            objectToSearch[i].yearPublished== year){
                searchResults.push(objectToSearch[i])
            }
        if(artist=== null && 
            year=== null){
                return objectToSearch
            }
    }
    return searchResults
}
console.log(search(collection,'Ghost',2016))
console.log(search(collection,'Ray Charles',1957))
console.log(search(collection,null,null))
//unfortuantly not enough time to finish these this time. 
/**
 * was thinking to build a search field which using 
 * docmument.quearyselector.value to get the search parameters
 * and then compair to collection. But i was having no luck with this
 * method, i could never pull the value from the input. 
 */


//параметры для обычного запроса на API
export const exerciseOptions = {
   method: 'GET',
   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
   headers: {
      'X-RapidAPI-Key': 'bcea07917dmshb04883a2ca69c22p1c6b77jsnd696834b9264',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
   },
}

//параметры для видеозапроса на youtube API
export const youtubeOptions = {
   method: 'GET',

   headers: {
      'X-RapidAPI-Key': 'bcea07917dmshb04883a2ca69c22p1c6b77jsnd696834b9264',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
   },
}

export const fetchData = async (url, options) => {
   const response = await fetch(url, options)
   const data = await response.json()
   return data
}

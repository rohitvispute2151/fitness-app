/* eslint-disable no-undef */

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '359ab8a087msh0f61ebde1878c0fp152f58jsn765b7c5918af',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_EXERCISE_API_KEY,
        'X-RapidAPI-Host':  process.env.REACT_APP_EXERCISE_API_KEY
    }
};
export const fetchData = async (url,options) => {
    const response = await fetch(url,options)
    const data = await response.json()
    return data
}
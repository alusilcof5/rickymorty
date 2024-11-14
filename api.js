const url = "https://rickandmortyapi.com/api/character"
export const getData = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
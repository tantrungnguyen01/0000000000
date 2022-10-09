export const API_URL = 'https://6326e9d0ba4a9c47532ce235.mockapi.io/'


export async function GET_DATA(url, queryParams = null) {
    const datajson = await fetch(url);

    const data = await datajson.json();

    return data;

}
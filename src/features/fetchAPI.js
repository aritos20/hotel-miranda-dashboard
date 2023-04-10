import fetch from "cross-fetch";

const api_url = process.env.REACT_APP_API_URL;
const token = JSON.parse(localStorage.getItem("login"));


export const fetchAPI = async (actualRoute, verbHttp) => {
    try {
        const response = await fetch(`${api_url}/${actualRoute}`, {
            method: verbHttp,
            mode: 'cors',
            headers: {Authorization: `Bearer ${token.token}`}
        });
        const dataApi = await response.json();
        return [...dataApi.data];
    } catch(e) {
        console.log(e)
    }
}
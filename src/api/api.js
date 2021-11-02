import axios from "axios";
export const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export const search = async (url, setData) => {

    const response = await api.get(url)
    setData(response.data)
}
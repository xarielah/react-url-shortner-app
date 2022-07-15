import axios from "axios";

export async function fetchData(url: string) {
    const api = process.env.REACT_APP_API_BASE!
    const reqURL = `${api}/shorten?url=${url}`
    return await axios.get(reqURL).then(res => res.data.result)
}
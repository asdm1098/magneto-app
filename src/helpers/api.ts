import axios from "axios";


const AppApiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

export const fetchGetTexts = () => AppApiInstance
    .get('texts')
    .then((res)=> res.data)
    .catch((err: any) => {
        throw err.response.data
    });

export const fetchAddText = (text: string) => AppApiInstance
    .post('texts',{
        text
    })
    .then((res) => res.data)
    .catch((err: any) => {
        throw err.response.data;
    });
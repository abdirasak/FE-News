import axios from "axios";

const newsUrl = axios.create({ baseURL: "https://aa-news-api.herokuapp.com/api", })

export const getTopics = () => {
    return newsUrl.get("/topics").then(({data}) => {
        console.log(data)
        return data.topics
    })
}

export const getArticles = (topic) => {
     if(topic){
         return newsUrl.get(`/articles?topic=${topic}`).then(({data}) => {
             console.log(data)
        return data.articles
         
    })
    } else{
        return newsUrl.get(`/articles`).then(({data}) => {
        return data.articles
    })
 }}

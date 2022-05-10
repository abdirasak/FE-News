import axios from "axios";


const newsUrl = axios.create({ baseURL: "https://aa-news-api.herokuapp.com/api", })

export const getTopics = () => {
    return newsUrl.get("/topics").then(({data}) => {
        
        return data.topics
    })
}

export const getArticles = (topic) => {
     if(topic){
         return newsUrl.get(`/articles?topic=${topic}`).then(({data}) => {
        return data.articles
         
    })
    } else{
        return newsUrl.get(`/articles`).then(({data}) => {
        return data.articles
    })
 }}

 export const getArticleById = (article_id) => {
   
        return newsUrl.get(`/articles/${article_id}`).then(({data}) => {
       return data.article
});
}
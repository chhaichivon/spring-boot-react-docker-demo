import axios from 'axios';
import * as API from './api';
import * as HEADER from './header';

export function getArticlesApi(action) {
    const page = action.page !== undefined ?  action.page : 1;
    const limit = action.limit !== undefined ? action.limit :30;
    const API_URL = API.API_ARTICLES+"?page="+page+"&size="+limit;
    return axios({
            method: "get",
            url: API_URL,
            headers: HEADER.config,
        }).then(function (response) {
            console.log('getArticlesApi response data ', response.data);
            return response.data;
        }).catch(function (error) {
            console.log('getArticlesApi response error ', error);
        })
}

export function getArticleApi(action) {
    const API_URL = API.API_ARTICLES+"/"+action.articleId;
    return axios({
            method: "get",
            url: API_URL,
            headers: HEADER.config,
        }).then(function (response) {
            console.log('getArticleApi response data ', response.data);
            return response.data;
        }).catch(function (error) {
            console.log('getArticleApi response error ', error);
        })
}

export function saveArticleApi(action) {
    const API_URL = API.API_ARTICLES;
    return axios.post({
            method: "post",
            url: API_URL,
            data: action,
            headers: HEADER.config,
        }).then(function (response) {
            console.log('saveArticleApi response data ', response.data);
            return response.data;
        }).catch(function (error) {
            console.log('saveArticleApi response error ', error);
        })
}

export function updateArticleApi(action) {
    const API_URL = API.API_ARTICLES+"/"+action.articleId;
    return axios({
            method: "put",
            url: API_URL,
            data: action.article,
            headers: HEADER.config,
        }).then(function (response) {
            console.log('updateArticleApi response data ', response.data);
            return response.data;
        }).catch(function (error) {
            console.log('updateArticleApi response error ', error);
        })
}

export function deleteArticleApi(action) {
    const API_URL = API.API_ARTICLES+"/"+action.articleId;
    return axios({
            method: "delete",
            url: API_URL,
            headers: HEADER.config,
        }).then(function (response) {
            console.log('deleteArticleApi response data ', response.data);
            return response.data;
        }).catch(function (error) {
            console.log('deleteArticleApi response error ', error);
        })
}
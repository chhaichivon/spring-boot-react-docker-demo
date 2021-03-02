import {call, put} from 'redux-saga/effects';
import * as articleType  from "./../type/ArticleType";
import {getArticlesApi, getArticleApi,saveArticleApi,updateArticleApi,deleteArticleApi} from "../api/ArticleApi";

export function* getArticlesSaga(action) {
    const response = yield call(getArticlesApi, action);
    if(response !== undefined){
        yield put({type: articleType.GET_ARTICLES_SUCCESS, articles:response});
    }else{
        yield put({type: articleType.GET_ARTICLES_FAILURE, articles:response});
    }
}

export function* getArticleSaga(action) {
    const response = yield call(getArticleApi, action);
    if(response !== undefined){
        yield put({type: articleType.GET_ARTICLE_SUCCESS, article: response});
    }else{
        yield put({type: articleType.GET_ARTICLE_FAILURE, article: response});
    }
}

export function* saveArticleSaga(action) {
    const response = yield call(saveArticleApi, action);
    if(response !== undefined){
        yield put({type: articleType.SAVE_ARTICLE_SUCCESS, article: response});
    }else{
        yield put({type: articleType.SAVE_ARTICLE_FAILURE, article: response});
    }
}

export function* updateArticleSaga(action) {
    const response = yield call(updateArticleApi, action);
    if(response !== undefined){
        yield put({type: articleType.UPDATE_ARTICLE_SUCCESS, article: response});
    }else{
        yield put({type: articleType.UPDATE_ARTICLE_FAILURE, article: response});
    }
}

export function* deleteArticleSaga(action) {
    const response = yield call(deleteArticleApi, action);
    if(response !== undefined){
        yield put({type: articleType.DELETE_ARTICLE_SUCCESS, article: response});
    }else{
        yield put({type: articleType.DELETE_ARTICLE_FAILURE, article: response});
    }
}

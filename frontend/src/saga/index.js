import {all,fork, takeLatest,takeEvery} from 'redux-saga/effects'
import * as articleType  from "./../type/ArticleType";
import {getArticlesSaga, getArticleSaga,saveArticleSaga,updateArticleSaga,deleteArticleSaga} from "./ArticleSaga";

export default function* rootSaga() {
    yield takeEvery(articleType.GET_ARTICLES, getArticlesSaga);
    yield takeEvery(articleType.GET_ARTICLE, getArticleSaga);
    yield takeEvery(articleType.SAVE_ARTICLE, saveArticleSaga);
    yield takeEvery(articleType.UPDATE_ARTICLE, updateArticleSaga);
    yield takeEvery(articleType.DELETE_ARTICLE, deleteArticleSaga);
}
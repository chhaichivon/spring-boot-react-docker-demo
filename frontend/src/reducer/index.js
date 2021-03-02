import {combineReducers} from "redux";
import {getArticlesReducer,getArticleReducer,saveArticleReducer,updateArticleReducer,deleteArticleReducer} from "./ArticleReducer";

const reducers = combineReducers({
    getArticlesReducer:getArticlesReducer,
    getArticleReducer:getArticleReducer,
    saveArticleReducer:saveArticleReducer,
    updateArticleReducer:updateArticleReducer,
    deleteArticleReducer:deleteArticleReducer
});
export default reducers;
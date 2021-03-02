import * as type from './../type/ArticleType';

const initState = {
    articles: [],
    article: null
};

export function getArticlesReducer(state = initState, action) {
    switch (action.type) {
        case type.GET_ARTICLES:
            return {
                ...state,
                loading: true
            };
        case type.GET_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: action.articles
            };
        case type.GET_ARTICLES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        default:
            return state
    }
}

export function getArticleReducer(state = initState, action) {
    switch (action.type) {
        case type.GET_ARTICLE:
            return {
                ...state,
                loading: true,
            };
        case type.GET_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                article: action.article
            };
        case type.GET_ARTICLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        default:
            return state
    }
}

export function saveArticleReducer(state = initState, action) {
    switch (action.type) {
        case type.SAVE_ARTICLE:
            return {
                ...state,
                loading: true,
            };
        case type.SAVE_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                article: action.article
            };
        case type.SAVE_ARTICLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        default:
            return state
    }
}

export function updateArticleReducer(state = initState, action) {
    switch (action.type) {
        case type.UPDATE_ARTICLE:
            return {
                ...state,
                loading: true,
            };
        case type.UPDATE_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                article: action.article
            };
        case type.UPDATE_ARTICLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        default:
            return state
    }
}

export function deleteArticleReducer(state = initState, action) {
    switch (action.type) {
        case type.DELETE_ARTICLE:
            return {
                ...state,
                loading: true,
            };
        case type.DELETE_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                article: action.article
            };
        case type.DELETE_ARTICLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        default:
            return state
    }
}
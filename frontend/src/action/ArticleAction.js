import * as type from './../type/ArticleType';

export function getArticlesAction(page, limit) {
    return {
        type:type.GET_ARTICLES,
        page,
        limit
    }
}

export function getArticleAction(articleId) {
    return {
        type: type.GET_ARTICLE,
        articleId
    }
}

export function saveArticleAction(article) {
    return {
        type: type.SAVE_ARTICLE,
        article
    }
}

export function updateArticleAction(articleId, article) {
    return {
        type: type.UPDATE_ARTICLE,
        articleId,
        article
    }
}

export function deleteArticleAction(articleId) {
    return {
        type: type.DELETE_ARTICLE,
        articleId
    }
}
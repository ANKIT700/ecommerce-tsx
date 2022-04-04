import * as actionTypes from "./actionTypes"

// export function addArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.ADD_ARTICLE,
//     article,
//   }

//   return simulateHttpRequest(action)
// }

// export function removeArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.REMOVE_ARTICLE,
//     article,
//   }
//   return simulateHttpRequest(action)
// }

// export function simulateHttpRequest(action: ArticleAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }


export const searchProducts = (search: string) => {
    debugger
    const action: ecommerceAction = {
        type: actionTypes.SEARCH_PROJECTS,
        search,
    }
    return (dispatch: dispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
    }
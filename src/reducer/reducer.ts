import * as actionTypes from "./actionTypes"

const initialState: ecommerceState = {
  ecommerce: [],
  search: "shampoo",
}

const reducer = (
    state: ecommerceState = initialState,
    action: ecommerceAction
  ): ecommerceState => {
    switch (action.type) {
case actionTypes.SEARCH_PROJECTS:
    return {
      ...state,
      search: action.search,
    }

      // case actionTypes.ADD_ARTICLE:
      //   const newArticle: IEcommerce = {
      //     ...action.ecommerce,
      //   }
      //   return {
      //     ...state,
      //     ecommerce: [...state.ecommerce, newArticle],
      //   }
      // case actionTypes.REMOVE_ARTICLE:
      //   const updatedArticles: IEcommerce[] = state.ecommerce.filter(
      //     (article: IEcommerce) => article.id !== action.ecommerce.id
      //   )
      //   return {
      //     ...state,
      //     ecommerce: updatedArticles,
      //   }
    }
    return state
  }
  
  export default reducer
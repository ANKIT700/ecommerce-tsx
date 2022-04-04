// interface IArticle {
//     id: number
//     title: string
//     body: string
//   }
  
//   type ArticleState = {
//     articles: IArticle[]
//   }
  
//   type ArticleAction = {
//     type: string
//     article: IArticle
//   }
  
//   type DispatchType = (args: ArticleAction) => ArticleAction


// Language: typescript
interface IEcommerce {
  id:number,
  name:string,
  price:number,
  quantity:number,
  image:string,
  description:string,
  category:string,
  rating:number,
  reviews:number,
  shipping:boolean,
  available:boolean,
  tags:string[],
  date:string,
  comments:string[],
  related:IEcommerce[],

}

type ecommerceState = {
  ecommerce:IEcommerce[]
  search:string
}
type ecommerceAction = {
  type:string,
  ecommerce?:IEcommerce,
  search:string,
}
type dispatchType = (args:ecommerceAction) => ecommerceAction
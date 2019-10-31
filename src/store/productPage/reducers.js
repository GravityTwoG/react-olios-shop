import { PRODUCT_PAGE_GET_REQUESTED_PRODUCT, PRODUCT_PAGE_GET_REQUESTED_RECOMENDED} from './actions';

const initialState = {
    product: {},
    productId: '',
    categoryIcon: '',
    recomendedProducts: []
}

export const productPageReducer = (state = initialState, action) => {
  switch(action.type) {
    case PRODUCT_PAGE_GET_REQUESTED_PRODUCT:
      return {
        ...state,
        product: action.payload
      }

    case PRODUCT_PAGE_GET_REQUESTED_RECOMENDED:
      return {
        ...state,
        recomendedProducts: action.payload
      }
    default:
      return state;
  }
}
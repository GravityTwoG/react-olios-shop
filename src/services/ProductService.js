import { firebase } from '@firebase/app';
import '@firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCl5EEFPJsY3ZT2BPlLapt54cpeyNo2rmk",
  authDomain: "olios-shop-52e1e.firebaseapp.com",
  databaseURL: "https://olios-shop-52e1e.firebaseio.com",
  projectId: "olios-shop-52e1e",
  storageBucket: "olios-shop-52e1e.appspot.com",
  messagingSenderId: "476219359100",
  appId: "1:476219359100:web:620aa7226461a159876ef9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

class ProductsService {
  getProducts = async () => {
    const response = await database.ref('/products').once('value');

    return await response.val();
  }

  getProduct = async (productId) => {
    const response = await database.ref('/products/' + productId).once('value');

    return await response.val();
  }

  getProductsByCategory = async (category) => {
    category = category.toLowerCase()
    const response = await database.ref('products')
      .orderByChild('category')
      .equalTo(category)
      .once('value');

      console.log();
    return response.val();
  }

  getSearchedProducts = async (searchWord) => {
    searchWord = searchWord.toLowerCase();
    const response = await database.ref('products')
      .orderByChild('name')
      .startAt(searchWord)
      .endAt(searchWord+"\uf8ff")
      .once('value');

    return response.val();
  }
}

export default ProductsService;

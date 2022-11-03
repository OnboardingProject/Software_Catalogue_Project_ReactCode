import axios from 'axios'
class AppService {
    getCategories = async () => {
        try {
            const response = await axios.get('http://localhost:8098/category/category');
            return response.data;
        } catch (e) {
            return "error";
        }
    }
    postCategories = async (val) => {
        return await axios.post('http://localhost:8098/category/category', val);

        // try {
        //     const response = await axios.post('http://localhost:8098/category/category', val);
        //     return response.data;
        // } catch (e) {
        //     return "error";
        // }

    }
    getProducts = async () => {
        return  await axios.get('http://localhost:8098/category/product');
       // try {
       //     const response = await axios.get('http://localhost:8098/category/product/getAllProductszzz');
       //     return response.data;
       // } catch (e) {
       //     return e;
       // }
   }

   postProducts = async (val) => {
       try {
           const response = await axios.post( 'http://localhost:8098/category/product', val);
           return response.data;
       } catch (e) {
           return "error";
       }

   }

}
export default new AppService
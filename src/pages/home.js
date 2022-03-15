import Header from "../components/home/header";
import TopCollection from "../components/home/topCollection";
import FeaturedProducts from "../components/home/featuredProducts";
import ProductQuickView from "../components/global/productQuickView";
import StoreFeatures from "../components/home/storeFeatures";
import ShoppingCart from "../components/global/shoppingCart";
 function Home () {
     return (
         <div> 
             <Header />
             <FeaturedProducts />  
             <TopCollection />
             <ProductQuickView />
             <StoreFeatures />
             <ShoppingCart />
         </div>
     )
 }

 export default Home;
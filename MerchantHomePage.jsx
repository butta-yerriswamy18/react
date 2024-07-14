import { Route, Routes } from "react-router-dom"
import ProductNavBar from "./ProductNavBar"
import ProductDashBoard from "./ProductDashBoard"
import ProductUpdate from "./ProductUpdate"
import AddProducts from "./AddProducts"
import ProductByBrand from "./ProductByBrand"
import ProductByCategory from "./ProductByCategory"

const MerchantHomePage=()=>{
    return(
        <div className="merchanthomepage">
           <ProductNavBar/>
           <Routes>
                <Route path="/" element={<ProductDashBoard/>}/>
                <Route path="/addproduct" element={<AddProducts/>}/>
                <Route path="/updateproducts/:id" element={<ProductUpdate/>}/>
                <Route path="/products-by-brand" element={<ProductByBrand/>}/>
                <Route path="/products-by-category" element={<ProductByCategory/>}/>
           </Routes>
        </div>
    )
}
export default MerchantHomePage
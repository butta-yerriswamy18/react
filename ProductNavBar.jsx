import { Link } from "react-router-dom";
import "../style/productNavBar.css"
const ProductNavBar = () => {
    return ( 
        <div className="productnavbar">
            <div className="logo">
                <h1>Shop <span>It</span></h1>
            </div>
            <div className="options">
                <Link to="/merchanthomepage/addproduct">Add Product</Link>
                {/* <Link to="/updateproducts">Update Product</Link> */}
                <Link to="/merchanthomepage/viewProduct">View Product</Link>
                <Link to="/merchanthomepage/products-by-brand">Brand</Link>
                <Link to="/merchanthomepage/products-by-category">Category</Link>
                <Link to="/">Logout</Link>
            </div>
        </div>
     );
}
export default ProductNavBar;
import Navbar from "Components/Navbar";
import ProductCard from "Components/ProductCard";

function Catalog() {
    return (
        <>
            <Navbar/>
            <div className="container my-4">
                <ProductCard/>
            </div>
        </>
        
    );
};

export default Catalog;
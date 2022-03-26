import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import axios from 'axios';
import ProductPrice from 'Components/ProductPrice';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';
import './styles.css';

function ProductDetails () {

    const [product, setProduct] = useState<Product>();
    

    useEffect(() => {
        axios.get(BASE_URL + "/products/3")
        .then(response => {
           setProduct(response.data);
        });
    }, [])
   



    return(
        <div className="product-details-container">
            <div className="base-card product-details-card">
                <div className="go-back-container">
                    <ArrowIcon/>
                    <Link to="/products">
                        <h2>VOLTAR</h2>
                    </Link>    
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src={product?.imgUrl} 
                            alt={ product?.name} />
                        </div>
                        <div className="name-price-container">
                            <h1>{ product?.name}</h1>
                            {product && <ProductPrice price={product?.price}/>}
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Descrição do Produto</h2>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;

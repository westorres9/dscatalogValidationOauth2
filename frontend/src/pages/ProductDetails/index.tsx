import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'Components/ProductPrice';
import { Link } from 'react-router-dom';
import './styles.css';

function ProductDetails () {

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
                            <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="" />
                        </div>
                        <div className="name-price-container">
                            <h1>Computador i7</h1>
                            <ProductPrice price={2345.67}/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Descrição do Produto</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, debitis.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;

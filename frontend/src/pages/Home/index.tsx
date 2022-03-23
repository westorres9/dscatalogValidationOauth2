import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'Components/ButtonIcon';
import Navbar from "Components/Navbar";
import './styles.css';

function Home() {
    return (
        <>
            <Navbar/>
            <div className="home-container">
                <div className="home-card">
                    <div className="home-content-container">
                        <h1>Conheça o melhor catálogo de produtos</h1>
                        <p>Ajudaremos voce a encontrar os melhores produtos disponíveis no mercado</p>
                        <ButtonIcon/>
                    </div>
                    <div className="home-image-container">
                        <MainImage/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;
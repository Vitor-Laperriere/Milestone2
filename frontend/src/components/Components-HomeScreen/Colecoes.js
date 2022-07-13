import './Colecoes.css';
import Badge from "react-bootstrap/Badge";
import {Link} from "react-router-dom";

function Colecoes(){
    return(
        <>
        <div className="colecoes">
            <Link to={'/homemcollection'} className="colecao" >
                <h2>HOMEM</h2>
                <img src="./images/man.webp"
                    title="Men Collection"
                    alt="Coeleção Verão"
                    width="250"
                    height="250" />
            </Link>
            <Link to={'/mulhercollection'} className="colecao">
                <h2>MULHER</h2>
                <img src="./images/women.jpg.opdownload"
                    title="Women Collection"
                    alt="Coeleção ROCK"
                    width="250"
                    height="250"/>
            </Link>

            <Link to={'/smarwatchcollection'} className="colecao">
                <h2>SMARTWATCH</h2>
                <img src="./images/smart.webp"
                    title="SmartWatch Collection"
                    alt="Coeleção SNOW"
                    width="250"
                    height="250"/>
            </Link>
        </div>
        </>
    );
}

export default Colecoes;
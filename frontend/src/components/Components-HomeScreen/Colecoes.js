import './Colecoes.css';

function Colecoes(){
    return(
        <>
        <div className="colecoes">
            <div className="colecao">
                <h2>MEN</h2>
                <img src="./images/man.webp"
                    title="Men Collection"
                    alt="Coeleção Verão"
                    width="250"
                    height="250" />
            </div>

            <div className="colecao">
                <h2>WOMEN</h2>
                <img src="./images/women.jpg.opdownload"
                    title="Women Collection"
                    alt="Coeleção ROCK"
                    width="250"
                    height="250"/>
            </div>

            <div className="colecao">
                <h2>SMARTWATCH</h2>
                <img src="./images/smart.webp"
                    title="SmartWatch Collection"
                    alt="Coeleção SNOW"
                    width="250"
                    height="250"/>
            </div>
        </div>
        </>
    );
}

export default Colecoes;
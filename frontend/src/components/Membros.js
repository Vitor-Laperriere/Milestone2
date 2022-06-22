import './Membros.css'

function Membros(){
    return(
      <section id="aboutus">
       <div id="descricao">
            <p>Projeto de um e-commerce realizado para a disciplina Introdução ao desenvolvimento WEB, com o objetivo de aplicar o que foi visto durante as aulas.</p>
            <p>Nosso Grupo de Desenvolvedores da USP de São Carlos:</p>
        </div>

    <div id="membros">
        <div className="foto">
            <h6>João Matos</h6>
            <img src="./images/fotos_membros/eu.jpg" title="membro1" alt="joao" className="FotoMembro"/>
        </div>

        <div className="foto">
            <h6>Pedro Jardim</h6>
            <img src="./images/fotos_membros/bigode.jpg" title="membro2" alt="pedroj" className="FotoMembro"/>
            
        </div>

        <div className="foto">
            <h6>Pedro Batista</h6>
            <img src="./images/fotos_membros/praia.jpg" title="membro3" alt="pedrob" className="FotoMembro"/>
            
        </div>

        <div className="foto">
            <h6>Vitor Laperriere</h6>
            <img src="./images/fotos_membros/gato.jpg" title="membro4" alt="vitor" className="FotoMembro"/>
            
        </div>

        </div>
    </section> 
    );
}

export default Membros;
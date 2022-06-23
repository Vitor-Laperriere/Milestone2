import './Ajuda.css'

function Ajuda(){
    return(
        <section >
            <h4>Preencha o formulário detalhando seu problema e entraremos em contato assim que possível.</h4>
                
            <div id="forms">
                <div id="borda">
                Nome: <br></br>
                <input type="text" name="Nome" /> <br></br>
                Email para Contato: <br></br>
                <input type="email" name="Email para Contato" /> <br></br>
                <select>
                    <option>Motivo do Contato</option>
                    <option>Problema com Pagamento</option>
                    <option>Produto com Defeito</option>
                    <option>Entrega Atrasada</option>
                    <option>Outro</option>
                </select> <br></br>
                Detalhes do Problema: <br></br>
                <input type="text" name="Detalhes do Problema" id="problema"/>

                </div>
            </div>
            
            <div id="submit">
                <button >Enviar</button>
            </div>
            
        </section>
    );
}

export default Ajuda;
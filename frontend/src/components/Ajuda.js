import Form from   'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import './Ajuda.css'

function Ajuda(){
    return(
        <section >
            <h4>Preencha o formulário detalhando seu problema e entraremos em contato assim que possível.</h4>
                
            <div id="forms">
                <div id="borda">
                    
                    <Form>
                        <Form.Group controlId='nome' >
                            <Form.Label >Nome</Form.Label>
                            <Form.Control
                                required
                            />
                        </Form.Group>
                        
                        <Form.Group controlId='email' >
                            <Form.Label >Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                            />
                        </Form.Group>
                    </Form>
                    <br/>
                    <select>
                        <option>Motivo do Contato</option>
                        <option>Problema com Pagamento</option>
                        <option>Produto com Defeito</option>
                        <option>Entrega Atrasada</option>
                        <option>Outro</option>
                    </select> <br/>
                    Detalhes do Problema: <br/>
                    <input type="text" name="Detalhes do Problema" id="problema"/>
                </div>
            </div>
            
            <div id="submit">
                <Button type="submit">Enviar</Button>
            </div>
            
        </section>
    );
}

export default Ajuda;
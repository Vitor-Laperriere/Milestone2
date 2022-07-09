import { Link, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from './utils';

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      console.log(data);
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);


  return (
    <div className="dados">
      <div className="small-container">
        <Helmet>
          <title>Entrar</title>
        </Helmet>
        <div class="padrao">
          <h1 className="my-3">Entrar</h1>
        </div>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="email" >
            <Form.Label id="padrinho">Email</Form.Label>
            <Form.Control
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />        </Form.Group>
          <Form.Group  className="mb-3" controlId="password">
            <Form.Label id="padrinho">Senha</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="mb-6">
            <Button type="subit">Entrar</Button>
          </div>
          <div className="mb-6" id="padrinho">
            Cliente novo?{' '}
            <Link to={`/signup?redirect=${redirect}`} > Crie uma conta</Link>
          </div>
        </Form>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}
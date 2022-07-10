import React, { useContext, useEffect, useState } from 'react';

import { Helmet }  from 'react-helmet-async';
import Form from   'react-bootstrap/Form'
import Button from   'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store'
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAdressScreen() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch} = useContext(Store);
    const {
        userInfo,
        cart: { shippingAddress },
    } = state;

    const [fullName, setFullName] = useState(shippingAddress.fullName || '');
    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');

    useEffect(() => {
        if(!userInfo) {
            navigate('/signin?redirect=/ShippingAddressScreen');
        }
    }, [userInfo, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: {
                fullName,
                address,
                city,postalCode,
                country,
            },
        });
        localStorage.setItem(
            'shippingAdress',
            JSON.stringify({
                fullName,
                address,
                city,
                postalCode,
                country,
            })
        );
        navigate('/payment');
    }

    return <div> 
        <Helmet>
            <title>Endereço de entrega</title>
        </Helmet>

        <CheckoutSteps step1 step2/>
        <div id='ShipEnd'>
            <div className='small-container'>
                <div class="padrao">
                    <h1 className='my-3'>Endereço de entrega</h1>
                </div>
                <Form onSubmit={submitHandler}>
                    <Form.Group className='mb-3' controlId='fullName' >
                        <Form.Label id="padrinho" >Nome completo</Form.Label>
                        <Form.Control
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='address' >
                        <Form.Label id="padrinho" >Endereço</Form.Label>
                        <Form.Control
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='city' >
                        <Form.Label id="padrinho" >Cidade</Form.Label>
                        <Form.Control
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='postalCode' >
                        <Form.Label id="padrinho" >CEP</Form.Label>
                        <Form.Control
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='country' >
                        <Form.Label id="padrinho" >País</Form.Label>
                        <Form.Control
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="mb-6">
                        <Button variant="primary" type="submit">
                            Continuar
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
 
    </div>

}

import React, { useState, useEffect } from 'react';
import { CContainer, CRow, CCol, CButton, CFormInput, CForm } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../pages/css/style.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from './services/init-firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    function handleLogin(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    useEffect(() => {
        if(user) {
            navigate('/home');
        }
        if(error) {
            alert("Erro: " + error.message);
        }
    }, [user, error, navigate]);
    return (
        <CContainer className="container-center">
            <CRow className='container-middle'>
                <CCol xs className='row2'>
                    <CForm className="row-form">
                        <div><h3>Login</h3></div>
                        <CFormInput type="text" size="sm" placeholder="Login" aria-label="lg input example" className='input' onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <CFormInput type="password" size="sm" placeholder="Senha" aria-label="lg input example" className='input' onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <CButton color="secondary" shape="rounded-0" className="button1" href='/Home' onClick={handleLogin}>Acessar</CButton>
                        <CButton color="secondary" shape="rounded-0" className="button2" href='/cadastro'>Cadastrar</CButton>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default Login;
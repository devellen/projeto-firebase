import React, { useState, useEffect } from 'react';
import { CContainer, CRow, CCol, CButton, CForm, CFormInput } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../pages/css/style.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from './services/init-firebase';
import { useNavigate } from 'react-router-dom';

const CadastroUsuario = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    function handleRegister(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
        if (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Erro: O e-mail já está cadastrado.");
            } else {
                alert("Erro: " + error.message);
            }
        }
    }, [user, error, navigate]);

    return (
        <CContainer className="container-center">
            <CRow className="container-middle">
                <CCol xs className="row2">
                    <CForm className="row-form">
                        <div><h3>Cadastro de Usuário</h3></div>

                        <CFormInput type="email" size="sm" placeholder="Email" className="input" onChange={(e) => setEmail(e.target.value)} value={email} />

                        <CFormInput type="password" size="sm" placeholder="Senha" className="input" onChange={(e) => setPassword(e.target.value)} value={password} />

                        <CButton color="secondary" shape="rounded-0" className="button1" onClick={handleRegister}>Cadastrar</CButton>
                        <CButton color="secondary" shape="rounded-0" className="button2" href="/">Voltar</CButton>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default CadastroUsuario;
import { CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../pages/css/style.css'
import { getAuth, signOut } from "firebase/auth";

const Home = () => {
    return (
        <div className='home'>
            <h1>Página inicial</h1>
            <CButton color="secondary" shape="rounded-0"
                onClick={() => {
                    const auth = getAuth();
                    signOut(auth)
                        .then(() => {
                            localStorage.removeItem("user");
                            window.location.href = "/";
                        })
                        .catch((error) => {
                            alert(error.message);
                        });
                }}>Sair</CButton>
        </div>
    )
}

export default Home;
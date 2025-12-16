import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import { useLoading } from '../contexts/LoadingContext'
import { getUserByName } from "../services/users.service";

import { Form } from "../components/Form";
import { ErrorMessage } from '../components/Error'
import { Sppiner } from '../components/Spinner'
import logo from '../assets/logo.png'

export function Content() {
    const [error, setError] = useState("");
    const { isLoading, setLoadingState } = useLoading()
    const navigate = useNavigate();

    const handleSubmit = async (userName: string) => {
        const nameForm = userName.trim();
            if (nameForm == ""){
                setError("Preencha o campo antes de enviar!")
                return;
            }
        
        try {
            setLoadingState(true)
            setError("");
            const response = await getUserByName(userName)
            const userLogin = response.data.login;
            navigate(`/users/${userLogin}`);
        } catch (err) {
            setError("Não conseguimos identificar sua conta");
            setLoadingState(false)
        }
    }

    return (
        <main className="min-h-screen grid lg:grid-cols-2">
            <div className="bg-[#05478A] flex items-center hidden lg:flex justify-center">
                <img src={logo} alt="logo" className="w-[307px]" />
            </div>

            {isLoading ? (
                <div className='my-10 flex justify-center items-center'>
                    <Sppiner />
                </div>
            ): (
                <div className="flex flex-col justify-center items-center px-20">
                {error && <ErrorMessage message={error} onClose={() => {
                    setError("")
                }} />
                }

                <header>
                    <h1 className="text-4xl font-bold text-[#303030] mb-10 ">Entrar</h1>
                </header>
                <section>
                    <div>
                        <Form onSubmit={handleSubmit} />
                    </div>
                </section>
            </div>
            )}

            
        </main>
    )
}
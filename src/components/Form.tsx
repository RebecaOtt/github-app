import { useState } from 'react'

interface FormProps {
    onSubmit: (username: string) => void;
}


export function Form ({onSubmit} : FormProps){
    const [userName, setUserName] = useState("");

    function handleSubmit(e:React.FormEvent) {
        e.preventDefault();
        onSubmit(userName);
    }


    return(
        <form className="flex flex-col w-80 mx-auto" onSubmit={handleSubmit}>
            <label className="mb-1" htmlFor="user"> Usuário </label>
            
            <input className="border border-gray-400 rounded-[4px] text-gray-700 outline-none p-2" 
            type="text" 
            name="user"
            id="user"
            placeholder="Digite aqui seu usuário do Github"
            value={userName}
            onChange={(e =>{
                setUserName(e.target.value)
            }
            )}
            />

            <input className="bg-[#05478A] text-white p-2 mt-10 rounded-[4px] w-full text-center cursor-pointer" 
            type="submit" 
            value="Entrar" 
            />
        </form>
    )
}
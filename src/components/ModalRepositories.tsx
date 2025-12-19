import { type Repos } from '../interfaces/Type'
import { Header } from './Header';

interface ModalRepositoriesType {
    repository: Repos;
    reposNumber: number;
    onCloseModal: () => void;
}

export function ModalRepositories({ onCloseModal, repository, reposNumber }: ModalRepositoriesType) {
    return (
        <div className='fixed inset-0 bg-gray-100 flex items-center justify-center z-50'>
            <Header />
            <div className='bg-white rounded-md shadow-2xl w-full md:max-w-2xl lg:max-w-6xl p-6 pb-15'>
                <h1 className='text-brown-title text-2xl font-bold ml-5 pt-2'>Especificações</h1>
                <div className="bg-white rounded-xl shadow-xl p-5 mx-auto md:max-w-2/3 lg:max-w-lg"
                >
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-brown text-sm m-5'>Repositorio {reposNumber}</p>
                        <button className='mr-4 text-medium-gray cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1' onClick={onCloseModal}> ⨉ </button>
                    </div>
                    <hr className='border-gray-400' />

                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div className='bg-gray-100 rounded-md text-sm p-3 w-4/5 mt-5'>
                            <span className='text-medium-gray block'>Link</span>
                            <a className='text-dark-blue underline' href={repository.html_url}> {repository.html_url}</a>
                        </div>

                        <div className='bg-gray-100 rounded-md text-sm p-3 w-4/5'>
                            <span className='text-medium-gray'>Privacidade</span>
                            <p className='text-dark-blue whitespace-nowrap overflow-hidden text-ellipsis'>{repository.visibility}</p>
                        </div>

                        <div className='bg-gray-100 rounded-md text-sm p-3 w-4/5'>
                            <span className='text-medium-gray'>Linguagem</span>
                            <p className='text-dark-blue whitespace-nowrap overflow-hidden text-ellipsis'>{repository.language}</p>
                        </div>

                        <div className='bg-gray-100 rounded-md text-sm p-3 w-4/5 mb-4'>
                            <span className='text-medium-gray'>Descrição</span>
                            <p className='text-dark-blue'>{repository.description || 'Sem descrição'}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
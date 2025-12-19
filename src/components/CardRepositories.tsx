import { type Repos } from '../interfaces/Type'

interface RepositoriesCard{
    repository: Repos;
    reposNumber: number;
    onCardClick: () => void;
}

export function CardRepositories ({repository, reposNumber, onCardClick}: RepositoriesCard){
    return(
        <div role="button" className=" bg-white rounded-xl shadow-lg
        hover:shadow-xl cursor-pointer overflow-hidden mb-15 pb-10"
        onClick={onCardClick}
        >
            <p className='font-bold text-brown text-sm m-5'>Repositorio {reposNumber}</p>
            <hr className='border-blue-400 border-1'/>
            
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='bg-gray-100 rounded-md text-sm p-3 w-4/5 mt-5'>
                    <span className='text-medium-gray'>Nome</span>
                    <p className='text-dark-blue'>{repository.name}</p>
                </div>

                <div className='bg-gray-100 rounded-md text-sm p-3 w-4/5'>
                    <span className='text-medium-gray'>Descrição</span>
                    <p className='text-dark-blue whitespace-nowrap overflow-hidden text-ellipsis'>{repository.description || 'Sem descrição'}</p>
                </div>
            </div>
            
        </div>

    )
}
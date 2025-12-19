import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

import { getUserByName, getReposByUrl } from '../services/users.service'
import { useLoading } from '../contexts/LoadingContext'

import { CardProfile } from '../components/CardProfile'
import { CardRepositories } from '../components/CardRepositories'
import { Sppiner } from "../components/Spinner";
import { Select } from "../components/Select";
import { ModalRepositories } from "../components/ModalRepositories";
import { Header } from "../components/Header";
import type { Repos, User } from '../interfaces/Type';

export function UserData() {
    const { userId } = useParams();
    const [user, setUser] = useState<User>();
    const [reposList, setReposList] = useState<Repos[]>([]);
    const  { isLoading, setLoadingState }  = useLoading()

    const [ modalOpen, setModalOpen] = useState<boolean>( false );
    const [ clickRepos, setClickRepos ] = useState<Repos>();
    const [ clickReposNumber, setClickReposNumber] = useState<Number>()

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);
    const totalPages = Math.ceil(reposList.length / itemsPerView);
    const start = currentPage * itemsPerView; 
    const amountRepos = reposList.slice(start, start + itemsPerView);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(p => p + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(p => p - 1);
        }
    };

    const handleReposClick = (repository: Repos, reposNumber: number) => {
        setClickRepos (repository);
        setModalOpen(true);
        setClickReposNumber(reposNumber);
    }

    useEffect(() => {
        const updateItemsPerView = () => {
            const width = window.innerWidth;

            if (width >= 1020) { 
                setItemsPerView(3); 
            } else{
                setItemsPerView(2);
            } 
        };
        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    useEffect(() => {
        async function loadUser() {
            try {
                if (!userId) return;
                setLoadingState(true)
                const response = await getUserByName(userId);
                setUser(response.data);
                setLoadingState(false)
            } catch (err) {
                throw new Error(err as string);
            }
        } loadUser();
    }, [userId]);

    useEffect(() => {
        async function loadReposList() {
            try {
                if (!userId) return;
                setLoadingState(true)
                const response = await getReposByUrl(userId)
                setReposList(response.data)
                setLoadingState(false)
            } catch (err) {
                throw new Error(err as string);
            }
        } loadReposList()
    }, [userId])

    return (
        <div className='max-sm:px-4 py-14 px-30 bg-gray-100 min-h-screen mt-6 '>
            <Header/>
            <main className='bg-white rounded-md shadow-2xl'>
                {isLoading ? (
                    <div className='my-10 flex justify-center items-center'>
                        <Sppiner />
                    </div>
                ) : (
                    <>
                        <h1 className='text-brown-title text-2xl font-bold ml-10 pt-10'>Informações do Perfil</h1>
                        {user && <CardProfile user={user!} />}

                        <h1 className='text-brown-title text-2xl font-bold ml-10'>Repositórios</h1>
                            {reposList.length > itemsPerView && (
                                <div className='mx-4 md:mx-6 lg:mx-15'>
                                    <Select
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onNext={handleNext}
                                    onPrev={handlePrev}
                                    />
                                </div>
                            )}

                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 mx-15'>
                            {amountRepos.map((repos, index) => (
                                <CardRepositories key={repos.id} repository={repos} reposNumber={start + index + 1} 
                                onCardClick={() => handleReposClick(repos, start + index + 1)}
                                />
                            ))}
                        </div>

                        {modalOpen && clickRepos &&(
                            <ModalRepositories
                            repository={clickRepos}
                            onCloseModal={() => setModalOpen(false)}
                            reposNumber={ clickReposNumber as number}
                            />
                        )}

                    </>
                )}
                
            </main>
        </div>
    )
}
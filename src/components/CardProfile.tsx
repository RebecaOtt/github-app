import type { User } from '../interfaces/Type';

interface CardProfileProps {
    user: User;
}

export function CardProfile({ user }: CardProfileProps) {
    return (
        <div className="border border-gray-300 rounded-2xl 
        flex flex-col md:flex-row md:items-center lg:w-[50%] m-4 md:m-10
        m-10">
            <div className="p-0 m-0">
                <img 
                    src={user.avatar_url} 
                    alt={user.name} 
                    className="w-25 h-25 rounded-2xl object-cover m-4"
                />
            </div>
            
            <div className="flex flex-col ml-6">
                <span className="text-gray-500 text-xs mb-1">Nome</span>
                <p className="mb-2 text-xs"><b>{user.name}</b></p>

                <span className="text-gray-500 text-xs mb-1">Bio</span>
                <p className="text-gray-800 text-xs mr-2">{user.bio}</p>
            </div>
            
        </div>
    )
}

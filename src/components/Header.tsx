import logo from '../assets/logoPageUserData.png'

export function Header(){
    return(
        <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 h-15">
                <div className="w-full px-10 py-4 flex items-center">
                    <img src={logo} alt="logo" className="h-5 ml-20" />
                </div>
            </header>
    )
}
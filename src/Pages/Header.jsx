import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <>
            <nav className="bg-blue-600 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <span className="text-white text-xl font-bold">Learn React Query</span>
                    <div className="space-x-4">
                        <Link to="/"  className="text-white hover:text-blue-200">Home</Link>
                        <Link to="/trad" className="text-white hover:text-blue-200">Fetch Old</Link>
                        <Link to="/rq" className="text-white hover:text-blue-200">Fetch RQ</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
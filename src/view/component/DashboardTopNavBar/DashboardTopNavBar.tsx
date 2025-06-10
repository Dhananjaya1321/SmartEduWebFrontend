import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/UserContext";

export const DashboardTopNavBar = () => {
   /* const navigate = useNavigate();
    const { setUser } = useUserContext();

    const handleLogoutClick = () => {
        setUser(null);
        navigate("/");
    };

    const handleBackToHomeClick = () => {
        navigate("/");
    };
*/
    return (
        <nav className='bg-white w-screen h-[75px] top-0 left-0 right-[20px] fixed shadow z-40
        flex flex-row justify-between gap-1 items-center'>
            <div className="flex flex-row items-center justify-center gap-2 mr-8">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    // onClick={handleBackToHomeClick}
                >
                    Back to Home
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    // onClick={handleLogoutClick}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

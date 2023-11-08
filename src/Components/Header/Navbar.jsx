import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navItems = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
               "mr-4 text-sm " + (isPending ? "pending" : isActive ? "text-pink-400" : "text-white")
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/availablefoods"
            className={({ isActive, isPending }) =>
                "mr-4 text-sm " + (isPending ? "pending" : isActive ? "text-pink-400" : "text-white")
            }
        >
            Available Foods
        </NavLink>
        <NavLink
            to="/addfood"
            className={({ isActive, isPending }) =>
                "mr-4 text-sm " + (isPending ? "pending" : isActive ? "text-pink-400" : "text-white")
            }
        >
            Add Food
        </NavLink>
        <NavLink
            to="/managemyfoods"
            className={({ isActive, isPending }) =>
                "mr-4 text-sm " + (isPending ? "pending" : isActive ? "text-pink-400" : "text-white")
            }
        >
            Manage My Foods
        </NavLink>
        <NavLink
            to="/myfoodrequest"
            className={({ isActive, isPending }) =>
                "mr-4 text-sm " + (isPending ? "pending" : isActive ? "text-pink-400" : "text-white")
            }
        >
            My Food Request
        </NavLink>
        <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                "mr-4 text-sm " + (isPending ? "pending" : isActive ? "text-pink-400" : "text-white")
            }
        >
            Login
        </NavLink>
    </>
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full" src="./logo.png" alt="" />
                    <p className="text-5xl text-white font-bold ml-4">Food Blust</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>


    );
};

export default Navbar;
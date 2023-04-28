import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { space } from 'postcss/lib/list';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOUt = () =>{
        logOut()
        .then(() => {

        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link to='/order' className='btn btn-ghost normal-case text-xl'>Orders</Link>
                {
                    user ? <><span>{user.email}</span><button onClick={handleLogOUt} className="btn btn-xs">Sign out</button></> : <Link to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;
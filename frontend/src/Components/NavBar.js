import react from 'react';
import '../NavBar.css'

const NavBar = () => {
        
        return (
            <nav class="navbar">

                <li><a href="/">Home</a></li>
                <li><a href="/admin/login">Admin Login</a></li>
                <li><a href="/donor/login">Donor Login</a></li>
                <li><a href="/donor/signup">Donor Signup</a></li>
                <li><a href="/admin/signup">Admin Signup</a></li>
                
            </nav>    
        )
}

export default NavBar
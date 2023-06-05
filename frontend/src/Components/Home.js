import react from 'react';

const Home = () => {

    const handleLoginAdmin = () => {
        window.location.href = '/admin/login'
    }

    const handleSignupAsDonor = () => {
        window.location.href = '/donor/signup'
    }

    const handleSignupAsAdmin = () => {
        window.location.href = '/admin/signup'
    }

    return(
        <div>
            <h1>Welcome!</h1>
            <button onClick={handleLoginAdmin}>Login as Admin</button>
            <button onClick={handleSignupAsDonor}>Register as Donor</button>
            <button onClick={handleSignupAsAdmin}>Register as Admin</button>

        </div>
    )
}

export default Home
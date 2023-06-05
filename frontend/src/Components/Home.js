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

    const handleLoginAsDonor = () => {
        window.location.href = '/donor/login'
    }

    return(
        <div>
            <h1>Welcome!</h1>
            <div className="button-container">
            <button onClick={handleLoginAdmin}>Login as Admin</button>
            <button onClick={handleSignupAsDonor}>Register as Donor</button>
            <button onClick={handleSignupAsAdmin}>Register as Admin</button>
            <button onClick={handleLoginAsDonor}>Login as Donor</button>
            </div>
        </div>
    )
}

export default Home
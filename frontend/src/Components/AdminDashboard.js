import react from 'react';

const AdminDashboard = () => {

    const handleUpdate = () => {
        window.location.href = '/admin/update'
    }


    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={handleUpdate}>Update a Donor Account</button>
        </div>
    )
}

export default AdminDashboard
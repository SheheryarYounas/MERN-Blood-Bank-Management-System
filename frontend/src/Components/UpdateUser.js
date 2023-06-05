import React from 'react';
import { useState, useEffect } from 'react';

const UpdateUser = () => {
    const [donors, setDonors] = useState([]);
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        fetchDonors();
    }, [])

    const fetchDonors = async () => {
        const token = localStorage.getItem('token')
        try {
            const response = await fetch('http://localhost:4000/admin/retrieveAllDonors', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }

            })

            

            if (response.status === 200)
            {
                const data = await response.json();
                console.log(data.donors)
                setDonors(data.donors)
            }

            else if (response.status === 403)
            {
                alert("You are not authorized to perform this action")
                window.location.href = '/login'
            }

            else
            {
                alert("Error occurred while retrieving donors")
            }

        }

        catch (error) {
            console.log("Error occurred while retrieving donors")
        }
    }

    const handleSearch = donors.filter((donor) => {
        return donor.name.toLowerCase().includes(searchItem.toLowerCase())
    })

    const handleBack = () => {
        window.location.href = '/admin/dashboard'
    }

    const updateUser = (email) => {
        console.log("This is the email: " + email)
    }



    return(
        <div>
            <h1>Update User</h1>
            <input type="text" placeholder="Search Donor by Name" value={searchItem} onChange={(event) => setSearchItem(event.target.value)} />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CNIC</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Blood Group</th>
                        <th>Action to Perform</th>

                    </tr>
                </thead>

                <tbody>
                    {handleSearch.map((donor) => {
                        return(
                            <tr>
                                <td>{donor.name}</td>
                                <td>{donor.CNIC}</td>
                                <td>{donor.phoneNumber}</td>
                                <td>{donor.email}</td>
                                <td>{donor.city}</td>
                                <td>{donor.bloodGroup}</td>
                                <td><button onClick={() => updateUser(donor.email)}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <button onClick={handleBack}>Back</button>
        </div>
    )


}

export default UpdateUser;
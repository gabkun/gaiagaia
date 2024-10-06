import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManageClients() {
    const [clients, setClients] = useState([]);
    const [editedClient, setEditedClient] = useState({
        id: '',
        compname: '',
        mobile: '',
        password: '',
        birthday: '',
        image: ''
    });
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/account/getclients')
            .then(res => setClients(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (clientId) => {
        axios.delete(`http://localhost:3001/account/deleteclient/${clientId}`)
            .then(res => {
                if (res.status === 200) {
                    setClients(prevClients => prevClients.filter(client => client.id !== clientId));
                } else {
                    console.error('Failed to delete client');
                }
            })
            .catch(err => console.log(err));
    };

    const handleEdit = (client) => {
        setEditedClient(client);
        setShowEditForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedClient(prevClient => ({
            ...prevClient,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const formData = new FormData();
        Object.keys(editedClient).forEach(key => formData.append(key, editedClient[key]));

        axios.put(`http://localhost:3001/account/updateclient/${editedClient.id}`, formData)
            .then(res => {
                if (res.status === 200) {
                    axios.get('http://localhost:3001/account/getclients')
                        .then(res => {
                            setClients(res.data);
                            setShowEditForm(false);
                            setEditedClient({
                                id: '',
                                compname: '',
                                mobile: '',
                                password: '',
                                birthday: '',
                                image: ''
                            });
                        })
                        .catch(err => console.log(err));
                } else {
                    console.error('Failed to update client');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="flex h-screen bg-primary justify-center items-center m-8">
            <div className="w-3/4 bg-white rounded p-6">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Company Name</th>
                            <th className="px-4 py-2">Mobile</th>
                            <th className="px-4 py-2">Birthday</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="border px-4 py-2">{client.compname}</td>
                                <td className="border px-4 py-2">{client.mobile}</td>
                                <td className="border px-4 py-2">{client.birthday}</td>
                                <td className="border px-4 py-2">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleEdit(client)}>
                                        Update
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded" onClick={() => handleDelete(client.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {showEditForm && (
                    <div className="mt-4">
                        <h2 className="text-xl font-bold mb-2">Edit Client</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Add input fields for editing client data */}
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Update
                                </button>
                                <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setShowEditForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ManageClients;
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { fetchUser } from '../functions/fetchUser';

export default function Profile() {
    const token = localStorage.getItem("login");
    const decoded = jwtDecode(token);
    const userId = decoded.sub;

    function handleLogout() {
        localStorage.removeItem("login");
        window.location.href = "/";
    }

    let name = fetchUser(userId, "name");
    let firstname = name?.firstname;
    let lastname = name?.lastname;
    let email = fetchUser(userId, "email");
    let username = fetchUser(userId, "username");
    let address = fetchUser(userId, "address");
    let city = address?.city;
    let street = address?.street;
    let number = address?.number;
    let zipcode = address?.zipcode;
    let phone = fetchUser(userId, "phone");

    const [section, setSection] = useState("info");
    const renderContent = () => {
        switch (section) {
            case "info":
                return <UserInfo />;
            case "address":
                return <UserAdress />;
            case "phone":
                return <UserPhone />;
            case "logout":
                return <Logout />;
            default:
                return <UserInfo />;
        }
    };

    const UserInfo = () => {
        return (
            <div>
                <h2 className="text-2xl font-bold mb-4">User Info</h2>
                <p>First name: {firstname} </p>
                <p>Last name: {lastname} </p>
                <p>Email: {email} </p>
                <p>Username: {username} </p>
            </div>
        )
    }
    
    const UserAdress = () => {
        return (
            <div>
                <h2 className="text-2xl font-bold mb-4">User Address</h2>
                <p>Street: {street}, {number} </p>
                <p>City: {city} </p>
                <p>Zip: {zipcode} </p>
            </div>
        )
    }
    
    const UserPhone = () => {
        return (
            <div>
                <h2 className="text-2xl font-bold mb-4">User Phone</h2>
                <p>Phone: {phone} </p>
            </div>
        )
    }

    const Logout = () => {
        return (
            <div>
                <h2 className="text-2xl font-bold mb-4">Logout</h2>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" >Logout</button>
            </div>
        )
    }

    return (
        <div>
            <h1 className="font-fantasy text-5xl m-4">Profile</h1>
            <div className="flex h-screen">
                <nav className="w-64 bg-gray-100 p-4 ml-4 shadow-md rounded flex flex-col">
                    <button onClick={() => setSection("info")} className="mb-2 p-2 bg-teal-500 text-white rounded hover:bg-teal-600">Info</button>
                    <button onClick={() => setSection("address")} className="mb-2 p-2 bg-teal-500 text-white rounded hover:bg-teal-600">Address</button>
                    <button onClick={() => setSection("phone")} className="mb-2 p-2 bg-teal-500 text-white rounded hover:bg-teal-600">Phone</button>
                    <button onClick={() => setSection("logout")} className="mb-2 p-2 bg-teal-500 text-white rounded hover:bg-teal-600">Logout</button>
                </nav>
                <div className="bg-gray-100 p-4 ml-4 mr-4 shadow-md w-screen rounded">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}


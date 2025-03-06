import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mail, Phone, User, ShoppingCart, List, Package, Image as ImageIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
const Profile = () => {
  const {loggedUser} = useAuth();
  console.log(loggedUser)
  const [isEditing, setIsEditing] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  useEffect(() => {
    setProfilePic(loggedUser.profilePic);
    setName(loggedUser.name);
    setEmail(loggedUser.email);
    setPhone(loggedUser.phone);
  }, []);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  async function handleSave () {
    loggedUser.profilePic = profilePic;
    loggedUser.email = email;
    loggedUser.name = name;
    loggedUser.phone = phone; 
    try{
      const res = await fetch(`http://localhost:3000/users/${loggedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loggedUser),
      });
      const data = await res.json();
      console.log("data = "+data);
      // alert("Updated successfully");
      setIsEditing(false);

    }catch(err){ 
      alert("Failed to update")
    }
    
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <Card className="w-full h-full bg-white shadow-md rounded-2xl">
        <CardContent>
        <h1 className="text-2xl font-bold text-black-600 mb-6">Profile Details</h1>
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col w-full max-w-md bg-green-50 p-4 rounded-2xl">
          <div className="flex items-center justify-center mb-4">
  <div className="relative w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
    {profilePic && profilePic !== '' ? (
      <img
      src={profilePic.startsWith('data:image') ? profilePic : `http://localhost:3000/${profilePic}`}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    ) : (
      <ImageIcon className="w-10 h-10 text-gray-500" />
    )}
    
    {isEditing && (
      <>
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                setProfilePic(reader.result);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
          Change Photo
        </div>
      </>
    )}
  </div>
</div>
              <div className="flex items-center gap-1 mb-2">
                <User className="w-10 h-8 text-green-600" />
                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  <h2 className="text-2xl font-semibold">{name}</h2>
                )}
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                <Mail className="w-11 h-5 text-gray-600" />
                {isEditing ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  <p>{email}</p>
                )}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Phone className="w-10 h-5 text-gray-600" />
                {isEditing ? (
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border p-1 rounded w-full "
                  />
                ) : (
                  <p>{phone}</p>
                )}
              </div>
              {isEditing ? (
                <Button
                  onClick={handleSave}
                  className="mt-15 w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Save
                </Button>
              ) : (
                <Button
                  onClick={handleEdit}
                  className="mt-30 w-full bg-green-600 hover:bg-green-600 text-white"
                >
                  Edit Profile
                </Button>
              )}
            </div>

            <div className="flex flex-col w-full h-full bg-white p-4 rounded-2xl mb-6">
  <h1 className="text-2xl font-bold text-black mb-6">My Orders</h1>
  <div className="border border-green-500 p-8 shadow-md border-3 rounded-lg">
    <p className="text-gray-500">You haven't placed any orders yet.</p>
    <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
      Start Shopping
    </Button>
  </div>
</div>

<div className="flex flex-col gap-4 w-full min-h-[calc(5vh-5px)] overflow-y-auto">
  <Card className="flex items-center justify-center w-full flex-grow p-8 shadow-md border-4 border-green-500">
    <div className="flex items-center space-x-4">
      <ShoppingCart className="text-green-500 text-3xl" />
      <span className="text-2xl font-semibold">Manage Product Listings</span>
    </div>
  </Card>
</div>

  <Card className="flex items-center justify-center w-full flex-grow p-8 shadow-md border-4 border-green-500">
    <div className="flex items-center space-x-4">
      <List className="text-green-500 text-3xl" />
      <span className="text-2xl font-semibold">Review Customer Orders</span>
    </div>
  </Card>

  <Card className="flex items-center justify-center w-full flex-grow p-8 shadow-md border-4 border-green-500">
    <div className="flex items-center space-x-4">
      <Package className="text-green-500 text-3xl" />
      <span className="text-2xl font-semibold">Update Stock and Inventory</span>
    </div>
  </Card>

  <Card className="flex items-center justify-center w-full flex-grow p-8 shadow-md border-4 border-green-500">
    <div className="flex items-center space-x-4">
      <User className="text-green-500 text-3xl" />
      <span className="text-2xl font-semibold">View Sales Analytics</span>
    </div>
  </Card>
</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
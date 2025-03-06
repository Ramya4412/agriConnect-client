import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mail, Phone, User, ShoppingCart, List, Package } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
const Profile = () => {
  const {loggedUser} = useAuth();
  console.log(loggedUser)
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  useEffect(() => {
    setName(loggedUser.name);
    setEmail(loggedUser.email);
    setPhone(loggedUser.phone);
  }, []);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  async function handleSave () {
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
      <Card className="w-full max-w-4xl bg-white shadow-md rounded-2xl">
        <CardContent>
        <h1 className="text-2xl font-bold text-black-600 mb-6">Profile Details</h1>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col w-full max-w-md bg-green-50 p-4 rounded-2xl">
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
                  className="mt-30 w-full bg-green-600 hover:bg-green-700 text-white"
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

            <div className="flex flex-col w-full max-w-md bg-white p-4 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">My Orders</h3>
              <div className="border border-gray-200 p-4 rounded-lg">
                <p className="text-gray-500">You haven't placed any orders yet.</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                  Start Shopping
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 flex items-center gap-4">
              <ShoppingCart className="w-6 h-6 text-green-600" />
              <p>Manage Product Listings</p>
            </Card>
            <Card className="p-4 flex items-center gap-4">
              <List className="w-6 h-6 text-green-600" />
              <p>Review Customer Orders</p>
            </Card>
            <Card className="p-4 flex items-center gap-4">
              <Package className="w-6 h-6 text-green-600" />
              <p>Update Stock and Inventory</p>
            </Card>
            <Card className="p-4 flex items-center gap-4">
              <User className="w-6 h-6 text-green-600" />
              <p>View Sales Analytics</p>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
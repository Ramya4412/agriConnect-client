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

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <Card className="w-full max-w-4xl bg-white shadow-md rounded-2xl">
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col w-full lg:w-1/3 bg-green-50 p-4 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <User className="w-8 h-8 text-green-600" />
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
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-600" />
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
              <div className="flex items-center gap-2 mt-2">
                <Phone className="w-5 h-5 text-gray-600" />
                {isEditing ? (
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  <p>{phone}</p>
                )}
              </div>
              {isEditing ? (
                <Button
                  onClick={handleSave}
                  className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Save
                </Button>
              ) : (
                <Button
                  onClick={handleEdit}
                  className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Edit Profile
                </Button>
              )}
            </div>

            <div className="flex flex-col w-full lg:w-2/3 bg-white p-4 rounded-2xl">
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
            <Card className="p-4 flex items-center gap-4">
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
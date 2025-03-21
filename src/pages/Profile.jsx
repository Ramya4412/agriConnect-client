import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mail, Phone, User, ShoppingCart, List, Package, Image as ImageIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { loggedUser } = useAuth();
  console.log(loggedUser);
  
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

  async function handleSave() {
    loggedUser.profilePic = profilePic;
    loggedUser.email = email;
    loggedUser.name = name;
    loggedUser.phone = phone;
    
    try {
      const res = await fetch(`http://localhost:3000/users/${loggedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loggedUser),
      });

      const data = await res.json();
      console.log("data = ", data);
      setIsEditing(false);
    } catch (err) {
      alert("Failed to update");
    }
  }

  return (
    <div className="profile-container">
      <Card className="profile-card">
        <CardContent>
          <h1 className="profile-title">Profile Details</h1>
          <div className="profile-content">
            <div className="profile-info">
              <div className="profile-picture">
                {profilePic ? (
                  <img 
                    src={profilePic.startsWith('data:image') ? profilePic : `http://localhost:3000/${profilePic}`}
                    alt="Profile"
                    className="profile-image"
                  />
                ) : (
                  <ImageIcon className="image-icon" />
                )}

                {isEditing && (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      className="file-input"
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
                    <div className="change-photo">Change Photo</div>
                  </>
                )}
              </div>
            </div>

            <div className="profile-field">
              <User className="icon" />
              {isEditing ? (
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input-field" />
              ) : (
                <h2 className="profile-name">{name}</h2>
              )}
            </div>

            <div className="profile-field">
              <Mail className="icon" />
              {isEditing ? (
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
              ) : (
                <p>{email}</p>
              )}
            </div>

            <div className="profile-field">
              <Phone className="icon" />
              {isEditing ? (
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field" />
              ) : (
                <p>{phone}</p>
              )}
            </div>

            {isEditing ? (
              <Button onClick={handleSave} className="save-btn">Save</Button>
            ) : (
              <Button onClick={handleEdit} className="edit-btn">Edit Profile</Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="order-card">
        <CardContent>
          <h2 className="order-heading">My Orders</h2>
          <p>You haven't placed any orders yet.</p>
          <Button className="shopping-btn">
  <Link to="/Market" style={{ textDecoration: 'none', color: 'white' }}>
    Start Shopping
  </Link>
</Button>
        </CardContent>
      </Card>

      <div className="manage-section">
        <Card className="manage-card">
          <ShoppingCart className="manage-icon" />
          <span>Manage Product Listings</span>
        </Card>

        <Card className="manage-card">
          <List className="manage-icon" />
          <span>Review Customer Orders</span>
        </Card>

        <Card className="manage-card">
          <Package className="manage-icon" />
          <span>Update Stock and Inventory</span>
        </Card>

        <Card className="manage-card">
          <User className="manage-icon" />
          <span>View Sales Analytics</span>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

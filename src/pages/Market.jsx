import { useState } from 'react';
import { Home, Leaf, ShoppingCart, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Organic Apples', price: '₹100/kg', image: '/apple.jpg', category: 'Fruits' },
  { id: 2, name: 'Fresh Tomatoes', price: '₹300/kg', image: '/Tomoto.jpg', category: 'Vegetables' },
  { id: 3, name: 'Wheat Flour', price: '₹250/kg', image: '/WheatFlour.jpg', category: 'Grains' },
  { id: 4, name: 'Dairy Milk', price: '₹400/L', image: '/DairyMilk.jpg', category: 'Dairy' },
  { id: 5, name: 'Carrots', price: '₹150/kg', image: '/Carrots.jpg', category: 'Vegetables' },
  { id: 6, name: 'Potatoes', price: '₹150/kg', image: '/Potatoes.jpg', category: 'Vegetables' },
  { id: 7, name: 'Green Peppers', price: '₹350/kg', image: '/GreenPeppers.jpg', category: 'Vegetables' },
  { id: 8, name: 'Strawberries', price: '₹600/kg', image: '/Strawberries.jpg', category: 'Fruits' },
  { id: 9, name: 'Honey', price: '₹700/jar', image: '/Honey.jpg', category: 'Dairy' },
  { id: 10, name: 'Coriander', price: '₹100/kg', image: '/Coriander.jpg', category: 'Vegetables' },
  { id: 11, name: 'Onions', price: '₹300/kg', image: '/Onions.jpg', category: 'Vegetables' },
  { id: 12, name: 'Ladies Finger', price: '₹100/kg', image: '/LadiesFinger.jpg', category: 'Vegetables' },
  { id: 13, name: 'Drum Stick', price: '₹300/kg', image: '/DrumStick.jpg', category: 'Vegetables' },
  { id: 14, name: 'Ginger', price: '₹50/kg', image: '/Ginger.jpg', category: 'Vegetables' },
  { id: 15, name: 'Beetroot', price: '₹350/kg', image: '/Beetroot.jpg', category: 'Vegetables' },
  { id: 16, name: 'Cabbage', price: '₹200/kg', image: '/Cabbage.jpg', category: 'Vegetables' },
  { id: 17, name: 'Cauliflower', price: '₹150/kg', image: '/Cauliflower.jpg', category: 'Vegetables' },
  { id: 18, name: 'Raddish', price: '₹100/kg', image: '/Raddish.jpg', category: 'Vegetables' },
  { id: 19, name: 'Mango', price: '₹500/kg', image: '/Mango.jpg', category: 'Fruits' },
  { id: 20, name: 'Pomegranate', price: '₹120/kg', image: '/Pomegranate.jpg', category: 'Fruits' },
  { id: 21, name: 'Watermelon', price: '₹200/kg', image: '/Watermelon.jpg', category: 'Fruits' },
  { id: 22, name: 'Pear', price: '₹300/kg', image: '/Pear.jpg', category: 'Fruits' },
  { id: 23, name: 'Kiwi', price: '₹1000/kg', image: '/Kiwi.jpg', category: 'Fruits' },
  { id: 24, name: 'Cherry', price: '₹250/kg', image: '/Cherry.jpg', category: 'Fruits' },
  { id: 25, name: 'Black Grapes', price: '₹320/kg', image: '/BlackGrapes.jpg', category: 'Fruits' },
  { id: 26, name: 'Green Grapes', price: '₹350/kg', image: '/GreenGrapes.jpg', category: 'Fruits' },
  { id: 27, name: 'Green Apple', price: '₹400/kg', image: '/GreenApple.jpg', category: 'Fruits' },
  { id: 28, name: 'Pine Apple', price: '₹100/kg', image: '/PineApple.jpg', category: 'Fruits' },
  { id: 29, name: 'Banana', price: '₹100/kg', image: '/Banana.jpg', category: 'Fruits' },
  { id: 30, name: 'Spinach', price: '₹150/kg', image: '/Spinach.jpg', category: 'Vegetables' },
  { id: 31, name: 'Black Pepper', price: '₹500/kg', image: '/BlackPepper.jpg', category: 'Spices and Condiments' },
  { id: 32, name: 'Turmeric Powder', price: '₹200/kg', image: '/TurmericPowder.jpg', category: 'Spices and Condiments' },
  { id: 33, name: 'Orange Juice', price: '₹120/L', image: '/OrangeJuice.jpg', category: 'Juices and Beverages' },
  { id: 34, name: 'Lemonade', price: '₹80/L', image: '/Lemonade.jpg', category: 'Juices and Beverages' },
];

export default function Dashboard() {
  const [cart, setCart] = useState({});
  const [ratings, setRatings] = useState({});
  const [notifications, setNotifications] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const setRating = (id, rating) => {
    setRatings((prev) => ({ ...prev, [id]: rating }));
  };

  const toggleNotifications = () => {
    setNotifications((prev) => !prev);
  };

  const categories = ['All', 'Fruits', 'Vegetables', 'Grains', 'Dairy', 'Spices and Condiments', 'Juices and Beverages'];
  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products Dashboard</h1>
          <Button onClick={toggleNotifications} className={notifications ? 'bg-green-500 text-white' : 'bg-black text-white'}>
            {notifications ? 'Disable' : 'Enable'} Notifications
          </Button>
        </header>
        <div className="flex gap-4 mb-4">
          {categories.map((category) => (
            <Button key={category} onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? 'bg-green-500 text-white' : 'bg-black text-white'}>
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="p-4 text-center flex flex-col items-center justify-center h-full"
            >
              <div className="flex flex-col items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-32 h-32 object-contain mb-4 rounded-lg"
                />
                <CardContent className="flex flex-col items-center justify-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-xl font-bold">{product.price}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 cursor-pointer ${i < (ratings[product.id] || 0) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`}
                        onClick={() => setRating(product.id, i + 1)}
                      />
                    ))}
                  </div>
                  <Button 
                    className={`mt-2 ${cart[product.id] ? 'bg-black text-white' : 'bg-green-500 text-white'}`} 
                    onClick={() => toggleCart(product.id)}
                  >
                    {cart[product.id] ? 'Remove from Cart' : 'Add to Cart'}
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

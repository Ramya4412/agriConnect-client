import { Home, Leaf, ShoppingCart, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: 'Organic Apples', price: '₹100/kg', image: '/apple.jpg' },
  { id: 2, name: 'Fresh Tomatoes', price: '₹300/kg', image: '/Tomoto.jpg' },
  { id: 3, name: 'Wheat Flour', price: '₹250/kg', image: '/WheatFlour.jpg' },
  { id: 4, name: 'Dairy Milk', price: '₹400/L', image: '/DairyMilk.jpg' },
  { id: 5, name: 'Carrots', price: '₹150/kg', image: '/Carrots.jpg' },
  { id: 6, name: 'Potatoes', price: '₹150/kg', image: '/Potatoes.jpg' },
  { id: 7, name: 'Green Peppers', price: '₹350/kg', image: '/GreenPeppers.jpg' },
  { id: 8, name: 'Strawberries', price: '₹600/kg', image: '/Strawberries.jpg' },
  { id: 9, name: 'Honey', price: '₹700/jar', image: '/Honey.jpg' },
  { id: 10, name: 'Coriander', price: '₹100/kg', image: '/Coriander.jpg' },
  { id: 11, name: 'Onions', price: '₹300/kg', image: '/Onions.jpg' },
  { id: 12, name: 'Ladies Finger', price: '₹100/kg', image: '/LadiesFinger.jpg' },
  { id: 13, name: 'Drum Stick', price: '₹300/kg', image: '/DrumStick.jpg' },
  { id: 14, name: 'Ginger', price: '₹50/kg', image: '/Ginger.jpg' },
  { id: 15, name: 'Beetroot', price: '₹350/kg', image: '/Beetroot.jpg' },
  { id: 16, name: 'Cabbage', price: '₹200/kg', image: '/Cabbage.jpg' },
  { id: 17, name: 'Cauliflower', price: '₹150/kg', image: '/Cauliflower.jpg' },
  { id: 18, name: 'Raddish', price: '₹100/kg', image: '/Raddish.jpg' },
  { id: 19, name: 'Mango', price: '₹500/kg', image: '/Mango.jpg' },
  { id: 20, name: 'Pomegranate', price: '₹120/kg', image: '/Pomegranate.jpg' },
  { id: 21, name: 'Watermelon', price: '₹200/kg', image: '/Watermelon.jpg' },
  { id: 22, name: 'Pear', price: '₹300/kg', image: '/Pear.jpg' },
  { id: 23, name: 'Kiwi', price: '₹1000/kg', image: '/Kiwi.jpg' },
  { id: 24, name: 'Cherry', price: '₹250/kg', image: '/Cherry.jpg' },
  { id: 25, name: 'Black Grapes', price: '₹320/kg', image: '/BlackGrapes.jpg' },
  { id: 26, name: 'Green Grapes', price: '₹350/kg', image: '/GreenGrapes.jpg' },
  { id: 27, name: 'Green Apple', price: '₹400/kg', image: '/GreenApple.jpg' },
  { id: 28, name: 'Pine Apple', price: '₹100/kg', image: '/PineApple.jpg' },
  { id: 29, name: 'Banana', price: '₹100/kg', image: '/Banana.jpg' },
  { id: 30, name: 'Spinach', price: '₹150/kg', image: '/Spinach.jpg' },
];

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products Dashboard</h1>
          <Button>Notifications</Button>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
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
                  <Button className="mt-2">Add to Cart</Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

import { useState } from 'react';
import { Star } from 'lucide-react';
import './Market.css';

const products = [
  { id: 1, name: 'Organic Apples', price: '₹100/kg', image: '/apple.jpg', category: 'Fruits' },
  { id: 2, name: 'Fresh Tomatoes', price: '₹300/kg', image: '/Tomoto.jpg', category: 'Vegetables' },
  { id: 3, name: 'Wheat Flour', price: '₹250/kg', image: '/WheatFlour.jpg', category: 'Grains and Pulses' },
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
  { id: 31, name: 'Green Gram', price: '₹120/kg', image: '/GreenGram.jpeg', category: 'Grains and Pulses' },
  { id: 32, name: 'Lentils', price: '₹170/kg', image: '/Lentils.jpeg', category: 'Grains and Pulses' },
  { id: 33, name: 'Chana Dal', price: '₹140/kg', image: '/ChanaDal.jpeg', category: 'Grains and Pulses' },
  { id: 34, name: 'Green Peas', price: '₹150/kg', image: '/Greenpeas.jpeg', category: 'Grains and Pulses' },
  { id: 35, name: 'Urad Dal', price: '₹150/kg', image: '/UradDal.jpeg', category: 'Grains and Pulses' },
  { id: 36, name: 'Beans', price: '₹150/kg', image: '/Beans.jpeg', category: 'Grains and Pulses' },
  { id: 37, name: 'Split chickpeas', price: '₹150/kg', image: '/Splitchickpeas.jpeg', category: 'Grains and Pulses' },
  { id: 38, name: 'Black Gram', price: '₹150/kg', image: '/BlackGram.jpeg', category: 'Grains and Pulses' },
  { id: 39, name: 'Black Beans', price: '₹150/kg', image: '/BlackBeans.jpeg', category: 'Grains and Pulses' },
  { id: 40, name: 'Kulti Dal', price: '₹150/kg', image: '/KultiDal.jpeg', category: 'Grains and Pulses' },
  { id: 41, name: 'Ghee', price: '₹150/kg', image: '/Ghee.jpeg', category: 'Dairy Products' },
  { id: 42, name: 'Butter', price: '₹150/kg', image: '/Butter.jpeg', category: 'Dairy Products' },
  { id: 43, name: 'Paneer', price: '₹150/kg', image: '/Paneer.jpeg', category: 'Dairy Products' },
  { id: 44, name: 'Butter Milk', price: '₹150/kg', image: '/ButterMilk.jpeg', category: 'Dairy Products' },
  { id: 45, name: 'Custard', price: '₹150/kg', image: '/Custard.jpeg', category: 'Dairy Products' },
  { id: 46, name: 'Curd', price: '₹150/kg', image: '/Curd.jpeg', category: 'Dairy Products' },
  { id: 47, name: 'Condensed Milk', price: '₹150/kg', image: '/CondensedMilk.jpeg', category: 'Dairy Products' },
  { id: 48, name: 'Cheese', price: '₹150/kg', image: '/Cheese.jpeg', category: 'Dairy Products' },
  { id: 49, name: 'Milk Powder', price: '₹150/kg', image: '/MilkPowder.jpeg', category: 'Dairy Products' },
  { id: 50, name: 'Yogurt', price: '₹150/kg', image: '/Yogurt.jpeg', category: 'Dairy Products' },
  { id: 51, name: 'Fresh Cream', price: '₹150/kg', image: '/FreshCream.jpeg', category: 'Dairy Products' },
  { id: 52, name: 'Cardamom', price: '₹150/kg', image: '/Cardamom.jpg', category: 'Dairy Products' },
  { id: 53, name: 'Cumin', price: '₹150/kg', image: '/Cumin.jpeg', category: 'Spices and Condiments' },
  { id: 54, name: 'Bay Leaf', price: '₹150/kg', image: '/BayLeaf.jpeg', category: 'Spices and Condiments' },
  { id: 55, name: 'Clove', price: '₹150/kg', image: '/Clove.jpg', category: 'Spices and Condiments' },
  { id: 56, name: 'Mustard', price: '₹150/kg', image: '/Mustard.jpg', category: 'Spices and Condiments' },
  { id: 57, name: 'Fennel', price: '₹150/kg', image: '/Fennelseeds.jpg', category: 'Spices and Condiments' },
  { id: 58, name: 'Garam Masala', price: '₹150/kg', image: '/Garammasala.jpg', category: 'Spices and Condiments' },
  { id: 59, name: 'Pepper Corns', price: '₹150/kg', image: '/Peppercorns.jpeg', category: 'Spices and Condiments' },
  { id: 60, name: 'Paprika', price: '₹150/kg', image: '/Paprika.jpeg', category: 'Spices and Condiments' },
  { id: 61, name: 'Fenugreek', price: '₹150/kg', image: '/Fenugreek.jpeg', category: 'Spices and Condiments' },
  { id: 62, name: 'Garlic', price: '₹150/kg', image: '/Garlic.jpeg', category: 'Spices and Condiments' },
  { id: 63, name: 'Anise', price: '₹150/kg', image: '/Anise.jpeg', category: 'Spices and Codiments' },
  { id: 64, name: 'Amchoor', price: '₹150/kg', image: '/Amchoor.jpeg', category: 'Spices and Condiments' },
  
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

  const categories = ['All', 'Fruits', 'Vegetables', 'Grains and Pulses', 'Dairy Products', 'Spices and Condiments', 'Juices and Beverages'];
  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Products Dashboard</h1>
        <button onClick={toggleNotifications} className={notifications ? 'btn-active' : 'btn'}>
          {notifications ? 'Disable' : 'Enable'} Notifications
        </button>
      </header>
      <div className="categories">
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? 'btn-active' : 'btn'}>
            {category}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={i < (ratings[product.id] || 0) ? 'star-filled' : 'star'}
                  onClick={() => setRating(product.id, i + 1)}
                />
              ))}
            </div>
            <button 
              className={cart[product.id] ? 'btn-remove' : 'btn-add'} 
              onClick={() => toggleCart(product.id)}
            >
              {cart[product.id] ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}





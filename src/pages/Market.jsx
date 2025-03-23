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
  { id: 14, name: 'Broccoli', price: '₹50/kg', image: '/Broccolli.jpg', category: 'Vegetables' },
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
  { id: 65, name: 'Sun-kist', price: '₹450/L', image: '/Sun-kist.jpg', category:'Juices and Beverages'},
  { id: 66, name: 'Berry bliss', price: '₹300/L', image: '/Berry bliss.jpg', category:'Juices and Beverages'},
  { id: 67, name: 'Tropical hormony', price: '₹400/L', image: '/Tropical hormony.jpg', category:'Juices and Beverages'},
  { id: 68, name: 'Golden Glow', price: '₹350/L', image: '/Golden Glow.jpg', category:'Juices and Beverages'},
  { id: 69, name: 'Pomogranate power', price: '₹250/L', image: '/pomogranate power.jpg', category:'Juices and Beverages'},
  { id: 70, name: 'Herbal infuse', price: '₹200/L', image: '/herbal infuse.jpg', category:'Juices and Beverages'},
  { id: 71, name: 'Golden Root Tonic', price: '₹200/L', image: '/Golden Root Tonic.jpg', category:'Juices and Beverages'},
  { id: 72, name: 'Revive Brew', price: '₹250/L', image: '/Revive Brew.jpg', category:'Juices and Beverages'},
  { id: 73, name: 'Zen Bloom', price: '₹250/L', image: '/Zen Bloom.jpg', category:'Juices and Beverages'},
  { id: 74, name: 'Calm Elixir', price: '₹200/L', image: '/Calm Elixir.jpg', category:'Juices and Beverages'},
  { id: 75, name: 'Golden termeric latte', price: '₹200/L', image: '/Golden termeric latte.jpg', category:'Juices and Beverages'},
  { id: 76, name: 'Lemon Honey Detox Water', price: '₹200/L', image: '/Lemon Honey Detox Water.jpg', category:'Juices and Beverages'},
  { id: 77, name: 'Matcha Green Tea', price: '₹200/L', image: '/Matcha Green Tea.jpg', category:'Juices and Beverages'},
  { id: 78, name: 'Coconut Kefir', price: '₹200/L', image: '/Coconut Kefir.jpg', category:'Juices and Beverages'},
  { id: 79, name: 'Kombucha', price: '₹200/L', image: '/Kombucha.jpg', category:'Juices and Beverages'},
  { id: 80, name: 'Cinnamon Spiced Apple Cider', price: '₹200/L', image: '/Cinnamon Spiced Apple Cider.jpg', category:'Juices and Beverages'},
  { id: 81, name: 'Ginger Lemongrass Tonic', price: '₹200/L', image: '/Ginger Lemongrass Tonic.jpg', category:'Juices and Beverages'},
  { id: 82, name: 'Hibiscus Iced Tea', price: '₹200/L', image: '/Hibiscus Iced Tea.jpg', category:'Juices and Beverages'},
  { id: 83, name: 'Moringa Superfood Drink', price: '₹200/L', image: '/Moringa Superfood Drink.jpg', category:'Juices and Beverages'},
  { id: 84, name: 'Pear & Celery Detox Juice', price: '₹200/L', image: '/Pear & Celery Detox Juice.jpg', category:'Juices and Beverages'},
  { id: 85, name: 'Strawberry Basil Refresher', price: '₹200/L', image: '/Strawberry Basil Refresher.jpg', category:'Juices and Beverages'},
  { id: 86, name: 'Lavendar honey iced tea', price: '₹200/L', image: '/Lavendar honey iced tea.jpg', category:'Juices and Beverages'},
  { id: 87, name: 'Oatmeal Honey Drink', price: '₹200/L', image: '/Oatmeal Honey Drink.jpg', category:'Juices and Beverages'},
  { id: 88, name: 'Fig & Date Energy Juice', price: '₹200/L', image: '/Fig & Date Energy Juice.jpg', category:'Juices and Beverages'},
  { id: 89, name: 'Blue Berry', price: '₹200/L', image: '/Blue Berry.jpg', category:'Fruits'},
  { id: 90, name: 'Papaya', price: '₹200/L', image: '/Papaya.jpg', category:'Fruits'},
  { id: 91, name: 'Oranges', price: '₹200/L', image: '/Orange.jpg', category:'Fruits'},
  { id: 92, name: 'Fig', price: '₹200/L', image: '/Fig.jpg', category:'Fruits'},
  { id: 93, name: 'Dates', price: '₹200/L', image: '/Dates.jpg', category:'Fruits'},
  { id: 94, name: 'Apricot', price: '₹200/L', image: '/Apricot.jpg', category:'Fruits'},
  { id: 95, name: 'Peach', price: '₹200/L', image: '/Peach.jpg', category:'Fruits'},
  { id: 96, name: 'Guava', price: '₹200/L', image: '/Guava.jpg', category:'Fruits'},
  { id: 97, name: 'Plum', price: '₹200/L', image: '/Plum.jpg', category:'Fruits'},
  { id: 100, name: 'Avocado', price: '₹200/L', image: '/Avocado.jpg', category:'Fruits'},
  { id: 101, name: 'Lychee', price: '₹200/L', image: '/Lychee.jpg', category:'Fruits'},
  { id: 102, name: 'Dragon Fruit', price: '₹200/L', image: '/Dragon Fruit.jpg', category:'Fruits'},
  { id: 103, name: 'Mulberry', price: '₹200/L', image: '/Mulberry.jpg', category:'Fruits'},
  { id: 104, name: 'Jackfruit', price: '₹200/L', image: '/Jackfruit.jpg', category:'Fruits'},
  { id: 105, name: 'Gooseberry', price: '₹200/L', image: '/Gooseberry.jpg', category:'Fruits'},
  { id: 106, name: 'Olive', price: '₹200/L', image: '/Olive.jpg', category:'Fruits'},
  { id: 107, name: 'Tangerines', price: '₹200/L', image: '/Tangerines.jpg', category:'Fruits'},
  { id: 108, name: 'Raspberry', price: '₹200/L', image: '/Raspberry.jpg', category:'Fruits'},
  { id: 109, name: 'Persimmon', price: '₹200/L', image: '/Persimmon.jpg', category:'Fruits'},
  { id: 110, name: 'Sapodilla', price: '₹200/L', image: '/Sapodilla.jpg', category:'Fruits'},
  { id: 111, name: 'Muskmelon', price: '₹200/L', image: '/Muskmelon.jpg', category:'Fruits'},
  { id: 112, name: 'Lime', price: '₹200/L', image: '/Lime.jpg', category:'Fruits'},
  { id: 113, name: 'Star Fruit', price: '₹200/L', image: '/Star Fruit.jpg', category:'Fruits'},
  { id: 114, name: 'Eggplant', price: '₹300/kg', image: '/Eggplant.jpg', category: 'Vegetables' },
  { id: 115, name: 'Celery', price: '₹50/kg', image: '/celery.jpg', category: 'Vegetables' },
  { id: 116, name: 'Bell Peppers', price: '₹350/kg', image: '/Bell peppers.jpg', category: 'Vegetables' },
  { id: 117, name: 'Bitter gourd', price: '₹200/kg', image: '/Bitter gourd.jpg', category: 'Vegetables' },
  { id: 118, name: 'Lettuce', price: '₹150/kg', image: '/Lettuce.jpg', category: 'Vegetables' },
  { id: 119, name: 'Pumpkin', price: '₹100/kg', image: '/Pumpkin.jpg', category: 'Vegetables' },
  { id: 120, name: 'Bottle Gourd', price: '₹100/kg', image: '/Bottle Gourd.jpg', category: 'Vegetables' },
  { id: 121, name: 'Ridge Gourd', price: '₹100/kg', image: '/Ridge Gourd.jpg', category: 'Vegetables' },
  { id: 122, name: 'Ivy Gourd', price: '₹100/kg', image: '/Ivy Gourd.jpg', category: 'Vegetables' },
  { id: 123, name: 'Cucumber', price: '₹100/kg', image: '/Cucumber.jpg', category: 'Vegetables' },
  { id: 124, name: 'Cluster Beans', price: '₹100/kg', image: '/Cluster Beans.jpg', category: 'Vegetables' },
  { id: 126, name: 'Raw Banana ', price: '₹100/kg', image: '/Raw Banana.jpg', category: 'Vegetables' },
  { id: 127, name: 'Curry Leaves ', price: '₹100/kg', image: '/Curry Leaves.jpg', category: 'Vegetables' },
  { id: 128, name: 'Turnip ', price: '₹100/kg', image: '/Turnip.jpg', category: 'Vegetables' },
  { id: 129, name: 'Yam ', price: '₹100/kg', image: '/Yam.jpg', category: 'Vegetables' },
  { id: 130, name: 'Mushroom ', price: '₹100/kg', image: '/Mushroom.jpg', category: 'Vegetables' },
  { id: 131, name: 'Chayote (Chow Chow) ', price: '₹100/kg', image: '/Chayote.jpg', category: 'Vegetables' },
  { id: 132, name: 'Fennel', price: '₹100/kg', image: '/Fennel.jpg', category: 'Vegetables' },
  { id: 133, name: 'Colocasia Leaves', price: '₹100/kg', image: '/Colocasia Leaves.jpg', category: 'Vegetables' },
  { id: 134, name: 'Winged Bean', price: '₹100/kg', image: '/Winged Bean.jpg', category: 'Vegetables' },
  { id: 135, name: 'Rice', price: '₹120/kg', image: '/Rice.jpeg', category: 'Grains and Pulses' },
  { id: 136, name: 'Rajma', price: '₹170/kg', image: '/Rajma.jpeg', category: 'Grains and Pulses' },
  { id: 137, name: 'Oats', price: '₹140/kg', image: '/Oats.jpg', category: 'Grains and Pulses' },
  { id: 138, name: 'Raagi', price: '₹150/kg', image: '/Ragi.jpeg', category: 'Grains and Pulses' },
  { id: 139, name: 'Millet', price: '₹150/kg', image: '/Millet.jpg', category: 'Grains and Pulses' },
  { id: 140, name: 'Bengal Gram', price: '₹150/kg', image: '/Bengal Gram.jpg', category: 'Grains and Pulses' },
  { id: 141, name: 'Soybeans', price: '₹150/kg', image: '/Soybeans.jpg', category: 'Grains and Pulses' },
  { id: 142, name: 'Lima Beans', price: '₹150/kg', image: '/Lima Beans.jpg', category: 'Grains and Pulses' },
  { id: 143, name: 'Adzuki Beans', price: '₹150/kg', image: '/Adzuki Beans.jpg', category: 'Grains and Pulses' },
  { id: 144, name: 'Mungo Beans', price: '₹150/kg', image: '/Mungo Beans.jpg', category: 'Grains and Pulses' },
  { id: 145, name: 'Hyacinth Bean', price: '₹150/kg', image: '/Hyacinth Bean.jpg', category: 'Grains and Pulses' },
  { id: 146, name: 'Brown Lentils', price: '₹150/kg', image: '/Brown Lentils.jpg', category: 'Grains and Pulses' },
  { id: 147, name: 'Moth Beans', price: '₹150/kg', image: '/Moth Beans.jpg', category: 'Grains and Pulses' },
  { id: 148, name: 'Pigeon Pea', price: '₹150/kg', image: '/Pigeon Pea.jpg', category: 'Grains and Pulses' },
  { id: 149, name: 'Shrikhand', price: '₹150/kg', image: '/Shrikhand.jpg', category: 'Dairy Products' },
  { id: 150, name: 'Mishti Doi', price: '₹150/kg', image: '/Mishti Doi.jpg', category: 'Dairy Products' },
  { id: 151, name: 'Mozzarella Cheese', price: '₹150/kg', image: '/Mozzarella Cheese.jpg', category: 'Dairy Products' },
  { id: 152, name: 'Chenna', price: '₹150/kg', image: '/Chenna.jpg', category: 'Dairy Products' },
  { id: 153, name: 'Mawa', price: '₹150/kg', image: '/Mawa.jpg', category: 'Dairy Products' },
  { id: 154, name: 'Malai', price: '₹150/kg', image: '/Malai.jpg', category: 'Dairy Products' },
  { id: 155, name: 'Turmeric', price: '₹150/kg', image: '/Turmeric.jpg', category: 'Spices and Condiments' },
  { id: 156, name: 'Coriander Seeds', price: '₹150/kg', image: '/Coriander Seeds.jpg', category: 'Spices and Condiments' },
  { id: 157, name: 'Black Pepper', price: '₹150/kg', image: '/Black Pepper.jpg', category: 'Spices and Condiments' },
  { id: 158, name: 'Mace', price: '₹150/kg', image: '/Mace.jpg', category: 'Spices and Codiments' },
  { id: 159, name: 'Sesame Seeds', price: '₹150/kg', image: '/Sesame Seeds.jpg', category: 'Spices and Condiments' },
  { id: 160, name: 'Carom Seeds', price: '₹150/kg', image: '/Carom Seeds.jpg', category: 'Spices and Condiments' },
  { id: 161, name: 'Black Salt ', price: '₹150/kg', image: '/Black Salt.jpg', category: 'Spices and Condiments' },
  { id: 162, name: 'Tamarind', price: '₹150/kg', image: '/Tamarind.jpg', category: 'Spices and Condiments' },
  { id: 163, name: 'Rose Petals (Gulkand & Dry Petals for flavoring)', price: '₹150/kg', image: '/Rose Petals (Gulkand & Dry Petals for flavoring).jpg', category: 'Spices and Condiments' },
  { id: 164, name: 'Dry Mint', price: '₹150/kg', image: '/Dry Mint.jpg', category: 'Spices and Condiments' },
  { id: 165, name: 'Rock Salt', price: '₹150/kg', image: '/Rock Salt.jpg', category: 'Spices and Condiments' },
  { id: 166, name: 'Nutmeg', price: '₹150/kg', image: '/Nutmeg.jpg', category: 'Spices and Condiments' },
  { id: 167, name: 'Star Anise', price: '₹150/kg', image: '/Star Anise.jpg', category: 'Spices and Condiments' },
  { id: 168, name: 'Cinnamon', price: '₹150/kg', image: '/cinnamon.jpg', category: 'Spices and Condiments' },



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

  const categories = ['All', 'Fruits', 'Vegetables', 'Grains and Pulses', 'Dairy Products','Spices and Condiments','Juices and Beverages'];
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
                  fill={i < (ratings[product.id] || 0) ? 'gold' : 'none'}
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
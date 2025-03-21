import "./KeyFeatures.css";

export default function KeyFeatures() {
  const features = [
    {
      title: 'User Roles and Authentication',
      description: 'Farmers/Producers and Consumers can register, login, and manage their profiles.',
      logo: 'https://itnow.net/wp-content/uploads/2020/02/MFA.jpg' 
    },
    {
      title: 'Product Listings',
      description: 'Dynamic catalog displaying fresh produce with high-quality images.',
      logo: 'https://tse4.mm.bing.net/th?id=OIP.IKevK9y5pvncFfT1cy0dAwAAAA&pid=Api&P=0&h=180'
    },
    {
      title: 'Geo-Based Marketplace',
      description: 'Location-aware search for finding nearby farmers.',
      logo: 'https://th.bing.com/th/id/OIP.rXIwhcLgblwxgJSY9jiirAHaE8?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      title: 'Real-Time Inventory Management',
      description: 'Farmers can update stock dynamically.',
      logo: 'https://th.bing.com/th/id/OIP.jHiiutsJy6X_QMDYoXDvVwHaD4?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      title: 'Shopping Cart and Orders',
      description: 'Customizable cart and real-time order tracking.',
      logo: 'https://th.bing.com/th/id/OIP.y2I-_5Gk1ejE6mW9LWoaNAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      title: 'Subscriptions and Pre-Orders',
      description: 'Subscription models and pre-orders for seasonal produce.',
      logo: 'https://th.bing.com/th?q=Pre-Order+Now+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'
    },
    {
      title: 'Community Features',
      description: 'Consumer reviews and Q&A with farmers.',
      logo: 'https://th.bing.com/th/id/OIP.EYxczq7sO3wtPpwXfQCB8QHaE7?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      title: 'Analytics and Insights',
      description: 'Sales reports and customer preferences analytics.',
      logo: 'https://th.bing.com/th/id/OIP.Fh_dnu_AC5xamckD9JY2QAHaEp?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      title: 'Secure Payment System',
      description: 'Multiple payment methods and payment protection.',
      logo: 'https://th.bing.com/th?q=Secure+Payment+Guaranteed+Clip+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'
    },
    {
      title: 'Delivery and Logistics',
      description: 'Local delivery network and pickup locations.',
      logo: 'https://farmyields.io/wp-content/uploads/2022/06/Frame-1000001896-min.png'
    }
  ];

  return (
    <section className="key-features">
      <h2 className="key-features-title">Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card feature-card-large">
            <div className="feature-logo-container">
              <img src={feature.logo} alt={`${feature.title} Logo`} className="feature-logo" />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

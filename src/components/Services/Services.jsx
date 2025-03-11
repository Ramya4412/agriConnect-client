export default function Services() {
  return (
    <section id="services" className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
      <h2 className="text-3xl font-bold text-black-800 mb-50">Our Services</h2> {/* Increased margin-bottom (mb-16) for more gap */}
      <div className="h-5"></div>
      <div className="flex flex-col items-center gap-12"> {/* Increased gap between cards */}
        {/* First Service */}
        <div className="flex flex-col items-center text-center gap-4">
          <h3 className="text-xl font-bold text-gray-800">Precision Farming</h3>
          <p className="text-gray-600">Using data-driven insights for better yield.</p>
          <div className="bg-white rounded-lg shadow-lg p-4 w-80">
            <img 
              src="https://www.fieldbee.com/wp-content/uploads/2021/12/5.jpg" 
              alt="Precision Farming" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Second Service */}
        <div className="flex flex-col items-center text-center gap-4">
          <h3 className="text-xl font-bold text-gray-800">Agri-Tech Solutions</h3>
          <p className="text-gray-600">Smart devices to monitor crop health.</p>
          <div className="bg-white rounded-lg shadow-lg p-4 w-80">
            <img 
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/agri_tech.jpeg" 
              alt="Agri-Tech Solutions" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

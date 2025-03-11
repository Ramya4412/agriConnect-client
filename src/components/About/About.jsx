export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center bg-gray-200 p-5 rounded-xl">
      <h2 className="text-3xl font-bold text-black-800 mb-10">About Us</h2>
      <div className="h-5"></div>
      <p className="text-gray-600 mb-4 text-center max-w-md">
        We provide smart farming solutions to enhance productivity and sustainability.
      </p>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-80">
        <img 
          src="https://cosmosmagazine.com/wp-content/uploads/2020/02/180606-agriculture-full.jpg" 
          alt="Farming Image" 
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

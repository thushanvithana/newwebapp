import React from "react";

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden text-white text-center py-20 flex-grow">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://videos.pexels.com/video-files/7579973/7579973-hd_1280_720_50fps.mp4"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 container mx-auto px-4 py-12">
                    <h1 className="text-6xl font-extrabold mb-4 animate-fade-in-up">Welcome to Clinical Trials Section</h1>
                    <p className="text-lg mb-6 max-w-3xl mx-auto animate-fade-in-down">
                        Empowering patients and professionals with advanced tools for diabetes management and retinopathy prediction.
                    </p>
                    <div className="flex justify-center animate-scale-up">
                        <a href="#features" className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-300">Discover More</a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4">Survey Form</h3>
                            <p className="text-gray-600 mb-4">
                                Easily log your medical data including blood pressure, glucose levels, and more through our user-friendly survey form.
                            </p>
                            <a href="/survey" className="text-indigo-600 hover:text-indigo-800 hover:underline">Start Survey</a>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4">Retinopathy Prediction</h3>
                            <p className="text-gray-600 mb-4">
                                Use our advanced prediction tool to assess the risk of retinopathy based on your medical information.
                            </p>
                            <a href="/predict" className="text-indigo-600 hover:text-indigo-800 hover:underline">Make a Prediction</a>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4">Insights & Reports</h3>
                            <p className="text-gray-600 mb-4">
                                Access detailed insights and reports based on your survey data and predictions to track your health progress.
                            </p>
                            <a href="#reports" className="text-indigo-600 hover:text-indigo-800 hover:underline">Explore Reports</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white text-center py-6">
                <p className="text-sm">&copy; 2024 Clinical Trials. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-indigo-500">Privacy Policy</a>
                    <a href="#" className="hover:text-indigo-500">Terms of Service</a>
                    <a href="#" className="hover:text-indigo-500">Contact Us</a>
                </div>
            </footer>

            {/* CSS for animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scale-up {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
                .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
                .animate-scale-up { animation: scale-up 1.2s ease-out; }
            `}</style>
        </div>
    );
};

export default Home;

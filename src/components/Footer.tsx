
function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12 w-full" >
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, sed mollitia libero cupiditate exercitationem ea aliquid commodi id excepturi! Incidunt voluptatum quae id?
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">Courses</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="mb-4">123 Main St, Anytown USA</p>
                    <p className="mb-4">Phone: 555-555-5555</p>
                    <p>Email: lG4q1@example.com</p>
                </div>
            </div>
            <p className="text-center mt-8">&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
    )
}

export default Footer

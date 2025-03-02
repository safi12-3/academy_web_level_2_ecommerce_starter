import React from "react";
import Title from "../components/UI/title";
import { Mail, Phone, MapPin } from "lucide-react"; 


const Contact = () => {
  return (
    <>
      <div className="mt-10">
        <Title text={"Contact Us"} />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 p-6">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>


            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">support@shophub.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-600">123 Shop Street, City, Country</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">Business Hours</h2>
          <p className="mt-3">

            <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM

            <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00
            PM

          </p>
          <p>
            <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM
          </p>
          <p>
            <span className="font-medium">Sunday:</span> Closed
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;

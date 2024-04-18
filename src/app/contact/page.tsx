"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams"

function page() {
    return (
        <div className="min-h-screen dark:text-white dark:bg-black bg-gray-900 py-12 pt-36 relative">
            
            <h1 className=" text-5xl text-center font-bold text-white relative z-10">Contact Us</h1>
            <p className="text-center font-normal text-white relative z-10 mt-4 w-[40%] mx-auto">Fill out the form below and we'll get back to you as soon as possible. don't hesitate to reach out if you have any questions. don't hesitate to reach out if you have any questions.</p>
            <form action="" className="w-[40%] mx-auto mt-8 relative z-10 " >
                <div className="flex flex-col">
                    <input type="text" id="name" className=" border-gray-300 rounded p-2 mt-2 bg-black text-white" placeholder="Your Email Address"/>
                    <textarea name="" id=""  placeholder="Your Message" className="border-gray-300 rounded p-2 mt-2 bg-black text-white"></textarea>
                </div>
            <button className="bg-teal-600 text-white rounded p-2 mt-4 relative z-10">Send Message</button>
            </form>
            <BackgroundBeams className="bg-gray-900"/>
        </div>
    )
}

export default page

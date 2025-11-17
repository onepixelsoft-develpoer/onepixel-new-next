// pages/index.js
import { useState } from 'react';

export default function CareerSection() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10">
      <div className="w-full pt-10 px-40">
        <h1 className="text-2xl font-semibold text-center mb-6">We’re Hiring! Your skills are valued</h1>
        <p className="text-center mb-6 text-gray-500">Choose your area of interest and create something people love to use every day</p>
        

        <div className='flex justify-between gap-10'>
          <div className="space-y-4 basis-1/2">
            {['Graphic Designer', 'Web Developer', 'Video Editor', 'Digital Marketing Expert'].map((title, index) => (
              <div key={index} className="border p-4 rounded-md cursor-pointer" onClick={() => handleToggle(index)}>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">{title}</span>
                  <span className="text-xl">{expanded === index ? '-' : '+'}</span>
                </div>
                {expanded === index && (
                  <div className="mt-4 text-sm text-gray-600">
                    {/* Add job description or additional details */}
                    <p>This is a detailed description for the {title} role. More info can go here.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className=" gap-6 basis-1/2">
            <div>
              <h2 className="text-xl font-semibold mb-4">Fill The Following Form</h2>
              <form>
                <div className="space-y-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Your Name*</label>
                    <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Your Email*</label>
                    <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Your Mobile*</label>
                    <input type="tel" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">City*</label>
                    <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Job Title*</label>
                    <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Current Company*</label>
                    <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Current Experience*</label>
                    <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Expected CTC*</label>
                    <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Upload your CV</label>
                    <input type="file" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                  </div>
                </div>

                <button type="submit" className="mt-6 w-full bg-[#7C2222] cursor-pointer text-white py-2 rounded-lg">
                  Submit Details
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

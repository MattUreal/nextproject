
import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Offerings = () => {
    const jobs = [
        { id: 1, title: 'Software Engineer', location: 'Remote', description: 'Develop and maintain web applications.' },
        { id: 2, title: 'Product Manager', location: 'New York, NY', description: 'Lead product development and strategy.' },
        { id: 3, title: 'HR Specialist', location: 'San Francisco, CA', description: 'Manage recruitment and employee relations.' },
        { id: 4, title: 'Software Engineer', location: 'Remote', description: 'Develop and maintain web applications.' },
        { id: 5, title: 'Software Engineer', location: 'Remote', description: 'Develop and maintain web applications.' },
        { id: 6, title: 'Product Manager', location: 'New York, NY', description: 'Lead product development and strategy.' },
        { id: 7, title: 'HR Specialist', location: 'San Francisco, CA', description: 'Manage recruitment and employee relations.' },
        { id: 8, title: 'Software Engineer', location: 'Remote', description: 'Develop and maintain web applications.' },

      ];
  return (
    <div >
         {/* Navigation Bar */}
      <Navbar />
      <div className="p-8 text-center">
         {/* List of Jobs */}
          <section className="mt-4">
          <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-16">
            {jobs.map((job) => (
              <li key={job.id} className="border p-4 rounded shadow">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.location}</p>
                <p className="mt-2">{job.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
         
        {/*Footer */}
        <Footer/>
    </div>
  )
}

export default Offerings
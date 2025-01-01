
import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Offerings = () => {
    const jobs = [
        { id: 1, title: 'Software Engineer', location: 'Remote', description: 'Develop and maintain web applications.' },
        { id: 2, title: 'Product Manager', location: 'New York, NY', description: 'Lead product development and strategy.' },
        { id: 3, title: 'HR Specialist', location: 'San Francisco, CA', description: 'Manage recruitment and employee relations.' },
      ];
  return (
    <div >
         {/* Navigation Bar */}
      <Navbar />
      <div className="p-8 text-center">
         {/* List of Jobs */}
          <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
          <ul className="space-y-4">
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
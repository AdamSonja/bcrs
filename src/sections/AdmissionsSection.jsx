import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Download } from 'lucide-react';

const AdmissionsSection = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.studentName && formData.parentName && formData.email && formData.phone && formData.grade) {
      alert(`Admissions inquiry received!\n\nStudent: ${formData.studentName}\nParent: ${formData.parentName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nGrade: ${formData.grade}\n\nWe will contact you soon!`);
      setSubmitted(true);
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert('Please fill in all required fields');
    }
  };

  const admissionSteps = [
    {
      step: '1',
      title: 'Inquiry',
      desc: 'Submit your inquiry through our online form or contact office'
    },
    {
      step: '2',
      title: 'Application',
      desc: 'Complete the application form and submit required documents'
    },
    {
      step: '3',
      title: 'Assessment',
      desc: 'Attend the entrance examination and interview'
    },
    {
      step: '4',
      title: 'Admission',
      desc: 'Receive admission offer and complete enrollment'
    }
  ];

  return (
    <section id="admissions" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Admissions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Begin your journey at Believers Church Residential School
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-center">
            Admission Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {admissionSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <div className="mt-6 text-center bg-gray-50 p-4 rounded-lg flex-1 w-full">
                    <h4 className="font-bold text-blue-900 mb-2 text-lg">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 right-0 w-16 h-0.5 bg-gradient-to-r from-blue-900 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form and Info Grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12">
          {/* Application Form */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Quick Inquiry Form</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                <CheckCircle size={20} />
                Thank you! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  placeholder="Student Name *"
                  className="p-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="Parent Name *"
                  className="p-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email *"
                  className="p-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone *"
                  className="p-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  required
                />
              </div>

              <select
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                required
              >
                <option value="">Select Grade/Class *</option>
                <option value="nursery">Nursery</option>
                <option value="kg">Kindergarten</option>
                <option value="1-5">Grade 1-5</option>
                <option value="6-8">Grade 6-8</option>
                <option value="9-10">Grade 9-10</option>
                <option value="11-12">Grade 11-12</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message (Optional)"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-2 focus:ring-blue-100 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition duration-300 flex items-center justify-center gap-2"
              >
                Submit Inquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Information */}
          <div className="space-y-6">
            {/* Requirements */}
            <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-900">
              <h4 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-green-500" />
                Admission Requirements
              </h4>
              <ul className="space-y-3">
                {[
                  'Duly filled application form',
                  'Birth certificate copy',
                  'Previous academic records',
                  'Medical fitness certificate',
                  'Entrance examination',
                  'Personal interview with parents'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-blue-900 mb-6">Important Documents</h4>
              <div className="space-y-3">
                {[
                  'Admission Prospectus',
                  'Application Form',
                  'Fee Structure',
                  'School Handbook'
                ].map((doc, idx) => (
                  <button
                    key={idx}
                    onClick={() => alert(`Downloading: ${doc}`)}
                    className="w-full flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition border border-yellow-200"
                  >
                    <Download size={18} className="text-yellow-500" />
                    <span className="text-blue-900 font-medium">{doc}</span>
                    <ArrowRight size={16} className="ml-auto text-gray-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6">Contact Admissions Office</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-blue-100 text-sm mb-1">Email</p>
                  <p className="font-semibold">admissions@believersschool.edu</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm mb-1">Phone</p>
                  <p className="font-semibold">+91 (0) XXXX XXXX XX</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm mb-1">Office Hours</p>
                  <p className="font-semibold">Mon - Fri: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
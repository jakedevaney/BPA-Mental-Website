import React from 'react';
import { FaPhone, FaComments, FaExclamationTriangle, FaGlobe, FaMapMarkerAlt, FaClock, FaHeart } from 'react-icons/fa';
import bannerImage from '../images/banner2.svg';

const Help = () => {
  const nationalHelplines = [
    {
      name: 'National Suicide Prevention Lifeline',
      phone: '988',
      description: '24/7 free and confidential support for people in distress',
      hours: '24/7',
      languages: 'English, Spanish',
      icon: <FaPhone />
    },
    {
      name: 'Crisis Text Line',
      phone: 'Text HOME to 741741',
      description: 'Free 24/7 support for those in crisis',
      hours: '24/7',
      languages: 'English, Spanish',
      icon: <FaComments />
    },
    {
      name: 'SAMHSA National Helpline',
      phone: '1-800-662-4357',
      description: 'Treatment referral and information service',
      hours: '24/7',
      languages: 'English, Spanish',
      icon: <FaPhone />
    },
    {
      name: 'Veterans Crisis Line',
      phone: '988, Press 1',
      description: 'Support for veterans and their families',
      hours: '24/7',
      languages: 'Multiple languages',
      icon: <FaPhone />
    },
    {
      name: 'National Domestic Violence Hotline',
      phone: '1-800-799-7233',
      description: 'Support for domestic violence survivors',
      hours: '24/7',
      languages: 'Multiple languages',
      icon: <FaPhone />
    },
    {
      name: 'NAMI Helpline',
      phone: '1-800-950-6264',
      description: 'Information and support for mental health',
      hours: 'Mon-Fri 10am-10pm ET',
      languages: 'English',
      icon: <FaPhone />
    }
  ];

  const onlineResources = [
    {
      name: 'SAMHSA',
      description: 'Substance abuse and mental health services information',
      url: 'https://www.samhsa.gov/blog',
      type: 'Blog'
    },
    {
      name: 'Talkspace',
      description: 'Online therapy with licensed therapists',
      url: 'talkspace.com',
      type: 'Therapy Platform'
    },
    {
      name: 'Mental Health America',
      description: 'Mental health articles and resources',
      url: 'https://mhanational.org/blog/',
      type: 'Blog'
    },
    {
      name: 'Psychology Today',
      description: 'Find a therapist near you',
      url: 'psychologytoday.com',
      type: 'Directory'
    },
    {
      name: 'NAMI',
      description: 'Mental health blogs, education, and advocacy',
      url: 'https://www.nami.org/blogs/',
      type: 'Blog'
    },
    {
      name: 'PsychCentral',
      description: 'Mental health news and articles',
      url: 'https://psychcentral.com/blog',
      type: 'Blog'
    }
  ];

  const emergencyWarning = {
    title: 'If you are in immediate danger',
    description: 'Call 911 or go to your nearest emergency room',
    actions: [
      'Call 911 for immediate emergency assistance',
      'Go to the nearest hospital emergency room',
      'Contact the National Suicide Prevention Lifeline: 988'
    ]
  };

  return (
    <div className="bg-[#F7FAF9] min-h-screen pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="relative mb-8 py-60 bg-cover bg-center bg-no-repeat left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-b-2 border-[#AEE3CF]" 
        style={{
            backgroundImage: `url(${bannerImage})`
        }}>
          <h1 className="text-6xl font-bold text-[#F7FAF9] mb-3 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-shadow-[0_0_2px_#000,0_0_2px_#000,0_0_2px_#000,0_0_2px_#000]">Get Help Now</h1>
          <p className="text-[#AEE3CF] text-lg text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,1)] text-shadow-[0_0_2px_#000,0_0_2px_#000,0_0_2px_#000,0_0_2px_#000]">You're not alone. Help is available 24/7.</p>
        </div>

        {/* Emergency Warning */}
        <div className="mb-8 bg-red-900 bg-opacity-20 border-2 border-red-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <FaExclamationTriangle className="text-red-500 text-3xl flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-red-400 mb-3">{emergencyWarning.title}</h2>
              <p className="text-red-300 mb-4 text-lg">{emergencyWarning.description}</p>
              <ul className="space-y-2">
                {emergencyWarning.actions.map((action, index) => (
                  <li key={index} className="flex items-center gap-2 text-red-200">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* National Helplines */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaPhone className="text-[#4F8EA3] text-2xl" />
            <h2 className="text-3xl font-bold text-[#2F5D73]">National Helplines</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nationalHelplines.map((helpline, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-xl transition-all border border-[#AEE3CF]">
                <div className="flex items-start gap-4">
                  <div className="text-[#4F8EA3] text-2xl flex-shrink-0">
                    {helpline.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#2F5D73] mb-2">{helpline.name}</h3>
                    <a href={`tel:${helpline.phone.replace(/[^0-9]/g, '')}`} className="text-2xl font-bold text-[#4F8EA3] hover:text-[#2F5D73] mb-3 block">
                      {helpline.phone}
                    </a>
                    <p className="text-[#7FA97F] mb-3">{helpline.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-[#7FA97F]">
                      <div className="flex items-center gap-1">
                        <FaClock size={14} />
                        <span>{helpline.hours}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaGlobe size={14} />
                        <span>{helpline.languages}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Resources */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaGlobe className="text-[#7FA97F] text-2xl" />
            <h2 className="text-3xl font-bold text-[#2F5D73]">Online Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {onlineResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-xl transition-all border border-[#AEE3CF]">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-[#7FA97F] bg-opacity-30 text-[#2F5D73] text-xs rounded-full font-medium">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#2F5D73] mb-2">{resource.name}</h3>
                <p className="text-[#7FA97F] mb-4 text-sm">{resource.description}</p>
                <a 
                  href={`https://${resource.url}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#4F8EA3] hover:text-[#2F5D73] text-sm font-medium flex items-center gap-1"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Support */}
        <div className="bg-gradient-to-r from-[#2F5D73] to-[#4F8EA3] bg-opacity-20 rounded-lg p-8 border border-[#AEE3CF]">
          <div className="flex items-start gap-4">
            <FaHeart className="text-[#AEE3CF] text-3xl flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-[#F7FAF9] mb-3">Remember</h2>
              <ul className="space-y-2 text-[#F7FAF9]">
                <li className="flex items-start gap-2">
                  <span className="text-[#AEE3CF] mt-1">•</span>
                  <span>Seeking help is a sign of strength, not weakness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#AEE3CF] mt-1">•</span>
                  <span>Recovery is possible, and people do get better</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#AEE3CF] mt-1">•</span>
                  <span>You deserve support and don't have to face this alone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#AEE3CF] mt-1">•</span>
                  <span>Treatment and support can help you live a full and meaningful life</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
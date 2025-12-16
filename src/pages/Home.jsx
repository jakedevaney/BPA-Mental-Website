import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaHeart, FaUsers, FaHandHoldingHeart, FaComments, FaCalendarAlt, FaQuoteLeft, FaHandsHelping } from 'react-icons/fa';
import bannerImage from '../images/banner1.svg';

const Home = () => {
  const mentalHealthDisorders = [
    {
      name: 'Depression',
      icon: <FaBrain />,
      description: 'A mood disorder causing persistent feelings of sadness and loss of interest. It affects how you feel, think, and handle daily activities.',
      symptoms: ['Persistent sadness', 'Loss of interest', 'Fatigue', 'Changes in sleep', 'Difficulty concentrating'],
      prevalence: '21 million adults in the US'
    },
    {
      name: 'Anxiety Disorders',
      icon: <FaHeart />,
      description: 'Characterized by excessive worry and fear. Includes generalized anxiety, panic disorder, and social anxiety disorder.',
      symptoms: ['Excessive worry', 'Restlessness', 'Rapid heartbeat', 'Difficulty sleeping', 'Feeling on edge'],
      prevalence: '40 million adults in the US'
    },
    {
      name: 'Bipolar Disorder',
      icon: <FaBrain />,
      description: 'A disorder associated with mood swings ranging from depressive lows to manic highs that affect energy and activity levels.',
      symptoms: ['Mood swings', 'Energy changes', 'Sleep disruption', 'Impulsive behavior', 'Racing thoughts'],
      prevalence: '2.8% of US adults'
    },
    {
      name: 'PTSD',
      icon: <FaHandHoldingHeart />,
      description: 'Post-Traumatic Stress Disorder develops after experiencing or witnessing a traumatic event. Symptoms can be severe and long-lasting.',
      symptoms: ['Flashbacks', 'Nightmares', 'Severe anxiety', 'Avoidance', 'Hypervigilance'],
      prevalence: '3.6% of US adults'
    },
    {
      name: 'OCD',
      icon: <FaBrain />,
      description: 'Obsessive-Compulsive Disorder features unwanted repetitive thoughts (obsessions) and behaviors (compulsions).',
      symptoms: ['Intrusive thoughts', 'Repetitive behaviors', 'Need for order', 'Excessive cleaning', 'Checking'],
      prevalence: '1.2% of US adults'
    },
    {
      name: 'Eating Disorders',
      icon: <FaHeart />,
      description: 'Serious conditions related to persistent eating behaviors that negatively impact health, emotions, and quality of life.',
      symptoms: ['Preoccupation with food', 'Distorted body image', 'Extreme eating habits', 'Excessive exercise', 'Social withdrawal'],
      prevalence: '28.8 million Americans'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      age: 28,
      condition: 'Depression & Anxiety',
      story: 'I struggled with depression for years, feeling like I was drowning. Through therapy and the support I found in this community, I learned coping strategies that changed my life. Today, I can say I\'m genuinely happy and have the tools to manage difficult days.',
      location: 'Austin, TX'
    },
    {
      name: 'Michael R.',
      age: 35,
      condition: 'PTSD',
      story: 'As a veteran dealing with PTSD, I felt isolated and misunderstood. Finding resources here and connecting with others who understood what I was going through made all the difference. I\'m now helping other veterans find their path to healing.',
      location: 'Houston, TX'
    },
    {
      name: 'Jennifer L.',
      age: 42,
      condition: 'Bipolar Disorder',
      story: 'Living with bipolar disorder felt like being on a constant rollercoaster. Through proper treatment and peer support, I\'ve learned to manage my symptoms effectively. I haven\'t had a major episode in two years, and I\'m living my best life.',
      location: 'Dallas, TX'
    },
    {
      name: 'David K.',
      age: 24,
      condition: 'Social Anxiety',
      story: 'Social anxiety kept me from pursuing opportunities and building relationships. The anonymous forum here allowed me to practice opening up in a safe space. Now I have a great job and friends who support me. Recovery is possible!',
      location: 'San Antonio, TX'
    }
  ];

  const stats = [
    { number: '1 in 5', label: 'Adults experience mental illness annually' },
    { number: '50%', label: 'Of mental illness begins by age 14' },
    { number: '90%', label: 'Who die by suicide had a diagnosable mental health condition' },
    { number: '60%', label: 'Of adults with mental illness didn\'t receive treatment last year' }
  ];

  return (
    <div className="bg-[#F7FAF9]">
      {/* Hero Section */}
      <div className="relative py-50 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerImage})`
      }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#F7FAF9] mb-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-shadow-[0_0_2px_#000,0_0_2px_#000,0_0_2px_#000,0_0_2px_#000]">
              You Are Not Alone
            </h1>
            <p className="text-xl md:text-2xl text-[#AEE3CF] mb-8 max-w-3xl mx-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-shadow-[0_0_2px_#000,0_0_2px_#000,0_0_2px_#000,0_0_2px_#000]">
              A safe space for mental health support, resources, and healing. Your journey to wellness starts here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/counseling" className="px-8 py-4 bg-[#457d90] hover:bg-[#2F5D73] text-[#F7FAF9] rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 border border-[#AEE3CF]">
                <FaCalendarAlt />
                Schedule Counseling
              </Link>
              <Link to="/forums" className="px-8 py-4 bg-[#7FA97F] hover:bg-[#2F5D73] text-[#F7FAF9] rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 border border-[#AEE3CF]">
                <FaComments />
                Join Community
              </Link>
              <Link to="/help" className="px-8 py-4 bg-red-700 hover:bg-red-800 text-[#F7FAF9] rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 border border-[#AEE3CF]">
                <FaHandsHelping />
                Get Help Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-12 bg-[#2F5D73]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#AEE3CF] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#F7FAF9] text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mental Health Disorders Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2F5D73] mb-4">Understanding Mental Health</h2>
            <p className="text-[#7FA97F] text-lg max-w-3xl mx-auto">
              Mental health disorders are common, treatable conditions. Understanding them is the first step toward healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentalHealthDisorders.map((disorder, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow border border-[#AEE3CF]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl text-[#4F8EA3]">
                    {disorder.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2F5D73]">{disorder.name}</h3>
                </div>
                <p className="text-[#7FA97F] mb-4">{disorder.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#2F5D73] mb-2">Common Symptoms:</h4>
                  <ul className="space-y-1">
                    {disorder.symptoms.map((symptom, idx) => (
                      <li key={idx} className="text-sm text-[#7FA97F] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#4F8EA3] rounded-full"></span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#AEE3CF]">
                  <p className="text-xs text-[#7FA97F]">
                    <strong className="text-[#4F8EA3]">Prevalence:</strong> {disorder.prevalence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-4 bg-[#2F5D73]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#F7FAF9] mb-4">Stories of Hope</h2>
            <p className="text-[#AEE3CF] text-lg max-w-3xl mx-auto">
              Real stories from real people who found their path to recovery and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#4F8EA3] rounded-lg p-8 relative hover:shadow-xl transition-shadow border border-[#7FA97F]">
                <FaQuoteLeft className="text-4xl text-[#AEE3CF] opacity-20 absolute top-4 left-4" />
                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#F7FAF9] mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-[#AEE3CF]">{testimonial.age} years old • {testimonial.location}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-[#7FA97F] bg-opacity-40 text-[#F7FAF9] text-xs rounded-full">
                      {testimonial.condition}
                    </span>
                  </div>
                  <p className="text-[#F7FAF9] leading-relaxed italic">
                    "{testimonial.story}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#2F5D73] to-[#4F8EA3] rounded-lg p-12 text-center">
          <FaUsers className="text-5xl text-[#AEE3CF] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#F7FAF9] mb-4">
            Take the First Step Today
          </h2>
          <p className="text-[#AEE3CF] text-lg mb-8">
            Whether you need immediate support, want to connect with others, or schedule professional counseling, we're here for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/help" className="px-8 py-4 bg-[#F7FAF9] text-[#2F5D73] rounded-lg font-semibold hover:bg-[#AEE3CF] transition-colors">
              Crisis Resources
            </Link>
            <Link to="/forums" className="px-8 py-4 bg-transparent border-2 border-[#F7FAF9] text-[#F7FAF9] rounded-lg font-semibold hover:bg-[#F7FAF9] hover:text-[#2F5D73] transition-colors">
              Join Forums
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc, serverTimestamp, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firestore';
import { auth } from '../firebase';
import { FaCalendarAlt, FaClock, FaUserMd, FaCheckCircle } from 'react-icons/fa';
import AppointmentCard from '../components/counseling/AppointmentCard';

const Counseling = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCounselor, setSelectedCounselor] = useState('');
  const [reason, setReason] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [myAppointments, setMyAppointments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const counselors = [
    { id: 'dr-smith', name: 'Dr. Sarah Smith', specialty: 'Anxiety & Depression' },
    { id: 'dr-johnson', name: 'Dr. Michael Johnson', specialty: 'Family Therapy' },
    { id: 'dr-williams', name: 'Dr. Emily Williams', specialty: 'Trauma & PTSD' },
    { id: 'dr-brown', name: 'Dr. James Brown', specialty: 'Addiction Counseling' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'
  ];

  // Generate next 14 days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  // Fetch booked slots when date or counselor changes
  useEffect(() => {
    if (!selectedDate || !selectedCounselor) {
      setAvailableSlots(timeSlots);
      return;
    }

    const fetchBookedSlots = async () => {
      const q = query(
        collection(db, 'appointments'),
        where('date', '==', selectedDate),
        where('counselorId', '==', selectedCounselor)
      );

      const snapshot = await getDocs(q);
      const booked = snapshot.docs.map(doc => doc.data().time);
      setBookedSlots(booked);
      setAvailableSlots(timeSlots.filter(slot => !booked.includes(slot)));
    };

    fetchBookedSlots();
  }, [selectedDate, selectedCounselor]);

  // Fetch user's appointments
  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, 'appointments'),
      where('userId', '==', auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const appointments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Sort by date manually
      appointments.sort((a, b) => new Date(a.date) - new Date(b.date));
      setMyAppointments(appointments);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !selectedCounselor || !reason.trim()) return;

    setIsSubmitting(true);
    try {
      const counselor = counselors.find(c => c.id === selectedCounselor);
      
      await addDoc(collection(db, 'appointments'), {
        userId: auth.currentUser.uid,
        userName: auth.currentUser.displayName,
        counselorId: selectedCounselor,
        counselorName: counselor.name,
        date: selectedDate,
        time: selectedTime,
        reason: reason,
        status: 'scheduled',
        createdAt: serverTimestamp()
      });

      // Reset form
      setSelectedDate('');
      setSelectedTime('');
      setSelectedCounselor('');
      setReason('');
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
    setIsSubmitting(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Online Counseling</h1>
          <p className="text-gray-600">Schedule an appointment with one of our licensed counselors</p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-900 bg-opacity-20 border border-green-800 rounded-lg p-4 flex items-center gap-3">
            <FaCheckCircle className="text-green-500 text-xl" />
            <p className="text-green-300">Appointment scheduled successfully!</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-lg p-6 border-1 border-slate-700">
              <h2 className="text-xl font-semibold text-black mb-6">Schedule New Appointment</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Counselor Selection */}
                <div>
                <label className="block text-gray-600 font-medium mb-2">
                    <FaUserMd className="inline mr-2" />
                    Select Counselor
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {counselors.map((counselor) => {
                    const isSelected = selectedCounselor === counselor.id;

                    return (
                        <div
                        key={counselor.id}
                        onClick={() => setSelectedCounselor(counselor.id)}
                        className={`
                            p-4 rounded-lg border-2 cursor-pointer
                            transition-all duration-200
                            ${isSelected
                            ? 'border-blue-500 bg-blue-900 bg-opacity-20 text-white'
                            : 'border-slate-700 bg-gray-200 text-black hover:border-slate-600'
                            }
                        `}
                        >
                        <h3 className="font-medium transition-colors duration-200">
                            {counselor.name}
                        </h3>
                        <p
                            className={`
                            text-sm transition-colors duration-200
                            ${isSelected ? 'text-gray-300' : 'text-gray-400'}
                            `}
                        >
                            {counselor.specialty}
                        </p>
                        </div>
                    );
                    })}
                </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    <FaCalendarAlt className="inline mr-2" />
                    Select Date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setSelectedTime('');
                    }}
                    className="w-full px-4 py-3 bg-gray-200 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-1 border-gray-300"
                    required
                  >
                    <option value="">Choose a date...</option>
                    {getAvailableDates().map(date => (
                      <option key={date} value={date}>
                        {formatDate(date)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    <FaClock className="inline mr-2" />
                    Select Time
                  </label>
                  {!selectedDate || !selectedCounselor ? (
                    <p className="text-gray-300 text-sm">Please select a counselor and date first</p>
                  ) : availableSlots.length === 0 ? (
                    <p className="text-yellow-500 text-sm">No available slots for this date</p>
                  ) : (
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                      {availableSlots.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium border-1 border-slate-700 transition-all ${
                            selectedTime === time
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-200 text-gray-500 hover:bg-slate-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Reason for Visit
                  </label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Please describe what you'd like to discuss..."
                    className="w-full px-4 py-3 bg-gray-200 text-black placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] resize-y border-1 border-gray-300"
                    maxLength={500}
                    required
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {reason.length}/500
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedDate || !selectedTime || !selectedCounselor || !reason.trim()}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
                </button>
              </form>
            </div>
          </div>

          {/* My Appointments Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg p-6 border-1 border-slate-700">
              <h2 className="text-xl font-semibold text-black mb-4">My Appointments</h2>
              
              {myAppointments.length === 0 ? (
                <div className="text-center py-8">
                  <FaCalendarAlt className="mx-auto text-4xl text-gray-600 mb-3" />
                  <p className="text-gray-400 text-sm">No appointments scheduled</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {myAppointments.map(appointment => (
                    <AppointmentCard key={appointment.id} appointment={appointment} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
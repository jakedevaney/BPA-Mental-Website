import { FaCalendarAlt, FaClock, FaUserMd, FaTrash } from 'react-icons/fa';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firestore';
import { useState } from 'react';

const AppointmentCard = ({ appointment }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isPastAppointment = () => {
    const appointmentDate = new Date(appointment.date + 'T' + convertTo24Hour(appointment.time));
    return appointmentDate < new Date();
  };

  const convertTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    
    if (hours === '12') {
      hours = '00';
    }
    
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    
    return `${hours}:${minutes}:00`;
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to cancel this appointment?')) return;
    
    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, 'appointments', appointment.id));
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
    setIsDeleting(false);
  };

  const past = isPastAppointment();

  return (
    <div className={`rounded-lg p-4 border ${
      past 
        ? 'bg-[#7FA97F] bg-opacity-20 border-[#7FA97F] opacity-60' 
        : 'bg-[#AEE3CF] bg-opacity-20 border-[#7FA97F]'
    }`}>
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-[#2F5D73] text-sm font-bold mb-1">
            <FaUserMd size={12} />
            <span className="font-medium">{appointment.counselorName}</span>
          </div>
          <div className="flex items-center gap-2 text-[#7FA97F] text-sm mb-1">
            <FaCalendarAlt size={12} />
            <span>{formatDate(appointment.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-[#7FA97F] text-sm">
            <FaClock size={12} />
            <span>{appointment.time}</span>
          </div>
        </div>
        {!past && (
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-red-600 hover:text-red-800 transition-colors disabled:opacity-50"
            title="Cancel appointment"
          >
            <FaTrash size={14} />
          </button>
        )}
      </div>
      
      {past && (
        <div className="mt-2 text-xs text-[#7FA97F] italic">
          Past appointment
        </div>
      )}
      
      <div className="mt-2 pt-2 border-t border-[#7FA97F]">
        <p className="text-[#2F5D73] text-xs line-clamp-2">
          {appointment.reason}
        </p>
      </div>
      
      <div className="mt-2">
        <span className={`text-xs px-2 py-1 rounded ${
          past
            ? 'bg-[#7FA97F] bg-opacity-30 text-[#2F5D73]'
            : 'bg-[#7FA97F] bg-opacity-50 text-[#F7FAF9]'
        }`}>
          {past ? 'Completed' : 'Scheduled'}
        </span>
      </div>
    </div>
  );
};

export default AppointmentCard;
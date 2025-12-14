import { FaUser, FaClock } from 'react-icons/fa';

const CommentCard = ({ comment }) => {
  const formatDate = (timestamp) => {
    if (!timestamp) return 'Just now';
    
    const date = timestamp.toDate();
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-gray-300 rounded-lg p-4 hover:bg-slate-850 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center gap-2 text-sm text-black font-semibold">
          <FaUser size={12} />
          <span className="font-semibold text-black">{comment.author}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <FaClock size={10} />
          <span>{formatDate(comment.createdAt)}</span>
        </div>
      </div>
      <p className="text-gray-800 leading-relaxed">
        {comment.content}
      </p>
    </div>
  );
};

export default CommentCard;
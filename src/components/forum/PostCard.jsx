import { FaComments, FaUser, FaClock } from 'react-icons/fa';

const PostCard = ({ post, onClick }) => {
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
    <div
      onClick={onClick}
      className="bg-gray-100 hover:bg-slate-750 border-1 border-slate-700 rounded-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-slate-600"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-xl font-bold text-black mb-2 hover:text-blue-400 transition-colors">
            {post.title}
          </h3>

          {/* Preview of content */}
          <p className="text-gray-400 mb-4 line-clamp-2">
            {post.content}
          </p>

          {/* Meta information */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1 font-semibold">
              <FaUser size={12} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaClock size={12} />
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaComments size={12} />
              <span>{post.commentCount || 0} {post.commentCount === 1 ? 'comment' : 'comments'}</span>
            </div>
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
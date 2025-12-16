import { useState, useEffect } from 'react';
import { collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../../firestore';
import { auth } from '../../firebase';
import { FaTimes, FaUser, FaClock, FaPaperPlane } from 'react-icons/fa';
import CommentCard from './CommentCard';

const PostDetailModal = ({ post, onClose }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, 'comments'),
      where('postId', '==', post.id),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, [post.id]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'comments'), {
        postId: post.id,
        content: newComment,
        author: auth.currentUser.displayName,
        authorId: auth.currentUser.uid,
        createdAt: serverTimestamp()
      });

      // Update comment count
      const postRef = doc(db, 'posts', post.id);
      await updateDoc(postRef, {
        commentCount: increment(1)
      });

      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
    setIsSubmitting(false);
  };

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#F7FAF9] w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#AEE3CF]">
          <h2 className="text-2xl font-bold text-[#2F5D73] pr-8">{post.title}</h2>
          <button
            onClick={onClose}
            className="text-[#7FA97F] hover:text-[#2F5D73] transition-colors flex-shrink-0"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Post Content */}
          <div className="bg-white rounded-lg p-6 mb-6 border border-[#AEE3CF]">
            <div className="flex items-center gap-4 text-sm mb-4">
              <div className="flex items-center gap-1 font-semibold text-[#2F5D73]">
                <FaUser size={12} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1 text-[#7FA97F]">
                <FaClock size={12} />
                <span>{formatDate(post.createdAt)}</span>
              </div>
            </div>
            <p className="text-[#2F5D73] whitespace-pre-wrap leading-relaxed">
              {post.content}
            </p>
          </div>

          {/* Comments Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#2F5D73] mb-4">
              Comments ({comments.length})
            </h3>
            
            {comments.length === 0 ? (
              <div className="text-center py-8 text-[#7FA97F]">
                <p>No comments yet. Be the first to comment!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {comments.map(comment => (
                  <CommentCard key={comment.id} comment={comment} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Comment Input */}
        <div className="border-t border-[#AEE3CF] p-6 bg-white">
          <form onSubmit={handleSubmitComment} className="flex gap-3">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 px-4 py-3 bg-[#F7FAF9] text-[#2F5D73] placeholder-[#7FA97F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8EA3] border border-[#AEE3CF]"
              maxLength={1000}
            />
            <button
              type="submit"
              disabled={isSubmitting || !newComment.trim()}
              className="px-6 py-3 bg-[#4F8EA3] hover:bg-[#2F5D73] text-[#F7FAF9] rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <FaPaperPlane />
              <span className="hidden sm:inline">Post</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostDetailModal;
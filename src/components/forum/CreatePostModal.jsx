import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const CreatePostModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    const success = await onSubmit(title, content);
    setIsSubmitting(false);
    
    if (success) {
      onClose();
    }
  };

  return (
    <>
    <div className="fixed inset-0 bg-gray-200/30 z-40 backdrop-blur-sm"/>
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-100 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border-1 border-slate-700">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-300">
          <h2 className="text-2xl font-bold text-black">Create New Topic</h2>
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="text-gray-400 hover:text-black transition-colors disabled:opacity-50"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <label className="block text-gray-800 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 bg-gray-200 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-1 border-gray-300"
              maxLength={200}
              required
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {title.length}/200
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 font-medium mb-2">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts in detail..."
              className="w-full px-4 py-3 bg-gray-200 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px] resize-y border-1 border-gray-300"
              maxLength={5000}
              required
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {content.length}/5000
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !title.trim() || !content.trim()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Posting...' : 'Post Topic'}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreatePostModal;
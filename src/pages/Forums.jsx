import { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../firestore';
import { auth } from '../firebase';
import { FaPlus, FaComments } from 'react-icons/fa';
import CreatePostModal from '../components/forum/CreatePostModal';
import PostCard from '../components/forum/PostCard';
import PostDetailModal from '../components/forum/PostDetailModal';

const Forums = () => {
  const [posts, setPosts] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleCreatePost = async (title, content) => {
    try {
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        author: auth.currentUser.displayName,
        authorId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        commentCount: 0
      });
      return true; // Signal success
    } catch (error) {
      console.error('Error creating post:', error);
      return false; // Signal failure
    }
  };

  return (
    <div className="bg-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black mb-2">Community Forums</h1>
            <p className="text-gray-600">Share your thoughts and connect with others</p>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            <FaPlus />
            New Topic
          </button>
        </div>

        {/* Posts List */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <FaComments className="mx-auto text-6xl text-gray-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-400 mb-2">No topics yet</h3>
            <p className="text-gray-500 mb-6">Be the first to start a conversation!</p>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              Create First Topic
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      {isCreateModalOpen && (
        <CreatePostModal
          onClose={() => setIsCreateModalOpen(false)}
          onSubmit={handleCreatePost}
        />
      )}

      {selectedPost && (
        <PostDetailModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
};

export default Forums;
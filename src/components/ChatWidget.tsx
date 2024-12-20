import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#FEF250] text-black p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80">
          <div className="bg-[#FEF250] p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-black font-semibold">Chat with BOB</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black hover:text-opacity-80"
              >
                ×
              </button>
            </div>
          </div>
          <div className="h-80 p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              Hi! How can I help you today?
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-md"
              />
              <button className="bg-[#FEF250] text-black p-2 rounded-md hover:bg-opacity-90">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
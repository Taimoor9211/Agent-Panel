import React, { useState } from 'react';
import { Search, Menu, MoreVertical, Send, Smile, Plus, Check, SendHorizonal } from 'lucide-react';
import Image1 from '../../assets/Images/Image1.jpg';
import Image2 from "../../assets/Images/Image2.jpg";
import Image3 from "../../assets/Images/Image3.jpg";
import Image4 from "../../assets/Images/Image4.jpg";
import Image5 from "../../assets/Images/Image5.png";
import Image6 from "../../assets/Images/Image6.jpg";
import Image7 from "../../assets/Images/Image7.jpg";
import Image8 from "../../assets/Images/Image8.jpg";
import Image9 from "../../assets/Images/Image9.jpg";
import Image10 from "../../assets/Images/Image10.jpg";

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState('David Moore');
  const [activeTab, setActiveTab] = useState("Customer");

  const chatList = [
    { id: 1, name: "Jessica Drew", time: "18:30", lastMessage: "Ok, see you later", unread: 2, Image: Image1, color: "#4f46e5" },
    { id: 2, name: "David Moore", time: "18:16", lastMessage: "You: I don't remember anything 😊", unread: 0, Image: Image2, color: "#059669" },
    { id: 3, name: "Greg James", time: "18:02", lastMessage: "I got a job at SpaceX 🚀", unread: 0, Image: Image3, color: "#dc2626" },
    { id: 4, name: "Emily Dorson", time: "17:42", lastMessage: "Table for four, 5PM. Be there.", unread: 0, Image: Image4, color: "#7c3aed" },
    { id: 5, name: "Office Chat", time: "17:08", lastMessage: "Lewis: All done mate 😊", unread: 0, Image: Image5, color: "#475569" },
    { id: 6, name: "Announcements", time: "16:15", lastMessage: "Channel created", unread: 0, Image: Image6, color: "#10b981" },
    { id: 7, name: "Little Sister", time: "Wed", lastMessage: "Tell mom I will be home for tea 💜", unread: 0, Image: Image7, color: "#db2777" },
    { id: 8, name: "Art Class", time: "Tue", lastMessage: "Emily: 🎨 Editorial", unread: 0, Image: Image8, color: "#f97316" },
    { id: 9, name: "Greg James", time: "18:02", lastMessage: "I got a job at SpaceX 🚀", unread: 0, Image: Image3, color: "#dc2626" },
    { id: 10, name: "Art Class", time: "Tue", lastMessage: "Emily: 🎨 Editorial", unread: 0, Image: Image9, color: "#f97316" },
    { id: 11, name: "Art Class", time: "Tue", lastMessage: "Emily: 🎨 Editorial", unread: 0, Image: Image10, color: "#f97316" },
    { id: 12, name: "Art Class", time: "Tue", lastMessage: "Emily: 🎨 Editorial", unread: 0, Image: Image8, color: "#f97316" },
    { id: 13, name: "Greg James", time: "18:02", lastMessage: "I got a job at SpaceX 🚀", unread: 0, Image: Image2, color: "#dc2626" },
  ];

  const messages = [
    { id: 1, text: "OMG 😳 do you remember what you did last night at the work night out?", time: "18:12", isUser: false, likes: 0 },
    { id: 2, text: "no haha", time: "18:16", isUser: true },
    { id: 3, text: "i don't remember anything 😊", time: "18:16", isUser: true },
  ];

  const selectedChatData = chatList.find(chat => chat.name === selectedChat);
  const tabs = ["Customer", "Provider"];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex bg-white">
      {/* Sidebar */}
      <div className="w-80 flex flex-col border-r border-gray-200">
        {/* Header */}
        <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-200">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu size={20} className="text-gray-600" />
          </button>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 py-3">
          <div className="bg-blue-50 p-1 rounded-full flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab ? "bg-blue-500 text-white shadow" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chatList.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.name)}
              className={`px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 ${
                selectedChat === chat.name ? 'bg-blue-50 border-r-2 border-blue-500' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden">
                {chat.Image ? (
                  <img src={chat.Image} alt={chat.name} className="w-full h-full object-cover" />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: chat.color }}
                  >
                    {chat.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500 ml-2">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-medium">{chat.unread}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              {selectedChatData?.Image ? (
                <img src={selectedChatData.Image} alt={selectedChatData.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-emerald-600 flex items-center justify-center text-white font-semibold">
                  {selectedChatData?.name?.charAt(0) || 'D'}
                </div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{selectedChat}</h3>
              <p className="text-xs text-gray-500">last seen 5 mins ago</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gray-700 bg-gray-100 px-3 py-1 rounded">#JCD0001</span>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Search size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div 
          className="flex-1 overflow-y-auto p-6"
          style={{
            background: 'linear-gradient(180deg, rgba(147, 197, 253, 0.3) 0%, rgba(191, 219, 254, 0.4) 100%)'
          }}
        >
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Date Separator */}
            <div className="flex justify-center">
              <span className="bg-white/90 backdrop-blur-sm text-gray-600 text-xs px-4 py-1.5 rounded-full shadow-sm">
                Today
              </span>
            </div>

            {/* Messages */}
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-md rounded-2xl px-4 py-3 ${
                    msg.isUser ? 'bg-green-400 text-gray-900 rounded-br-sm' : 'bg-white text-gray-900 rounded-bl-sm shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    {msg.likes > 0 && !msg.isUser && (
                      <span className="text-xs bg-white/80 px-2 py-0.5 rounded-full mr-1">❤️ {msg.likes}</span>
                    )}
                    <span className={`text-xs ${msg.isUser ? 'text-gray-700' : 'text-gray-500'}`}>{msg.time}</span>
                    {msg.isUser && <Check size={14} className="text-gray-700" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="px-6 py-4 border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            <button className="p-2.5 hover:bg-gray-100 rounded-lg text-gray-500">
              <Plus size={22} />
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-lg text-gray-500">
              <Smile size={22} />
            </button>
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSendMessage}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <SendHorizonal className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
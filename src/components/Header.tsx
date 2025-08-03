import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Database, Shield, Users, Wallet } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <span>Audit Services</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>数据市场</span>
            </Link>
            <Link 
              to="/become-expert" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/become-expert') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>成为专家</span>
            </Link>
            <Link 
              to="/audit-services" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/audit-services') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>审计服务</span>
            </Link>
          </nav>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
            <Wallet className="w-4 h-4" />
            <span>连接钱包</span>
          <span>Connect Wallet</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
  )
}
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Gamepad2, Trophy, CheckSquare, Users } from 'lucide-react';

const navItems = [
  { id: 'game', path: '/game', label: 'Game', icon: Gamepad2 },
  { id: 'leaderboard', path: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { id: 'tasks', path: '/tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'friends', path: '/friends', label: 'Friends', icon: Users },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname === '/' ? '/game' : location.pathname;

  return (
    <div className="fixed bottom-4 left-0 right-0 mx-auto px-4">
      <nav className="bg-gray-800/90 backdrop-blur-lg rounded-2xl p-2 max-w-sm mx-auto shadow-lg border border-gray-700/50">
        <ul className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;
            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => navigate(item.path)}
                  className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''}`} />
                  <span className="text-xs mt-1 font-medium">{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 w-12 h-1 bg-blue-400 rounded-full transform -translate-x-1/2" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
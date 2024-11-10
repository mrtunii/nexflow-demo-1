import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from '../pages/Game';
import Leaderboard from '../pages/Leaderboard';
import Tasks from '../pages/Tasks';
import Friends from '../pages/Friends';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/game" element={<Game />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  );
};

export default AppRoutes;
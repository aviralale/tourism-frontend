// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './pages/Accounts/Account';
import Home from './pages/Home';
import Layout from './pages/layout/Layout';
import Inbox from './pages/Inbox';
import Events from './pages/Events/Events';
import EventDetails from './pages/Events/EventDetails'; // Import the EventDetails component

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path='/chats' element = {<Inbox/>}/>
        <Route path='/events' element = {<Events/>}/>
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
      </Layout>
  );
}

export default App;

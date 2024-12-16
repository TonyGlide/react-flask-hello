// Basic React structure for the Timesheet Web App

// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <div className="App">
            <header className="bg-dark text-white text-center py-3">
                <h1>Attendance and Leave Tracker</h1>
            </header>
            <main className="container mt-4">
                <Dashboard />
            </main>
        </div>
    );
}

export default App;
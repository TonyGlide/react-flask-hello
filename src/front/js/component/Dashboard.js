// src/components/Dashboard.js
import React from 'react';
import TimesheetForm from './TimesheetForm';
import TimesheetTable from './TimesheetTable';

const Dashboard = () => {
    return (
        <div>
            <h2>Employee Timesheet</h2>
            <TimesheetForm />
            <TimesheetTable />
        </div>
    );
};

export default Dashboard;
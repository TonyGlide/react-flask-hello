// src/components/TimesheetTable.js
import React from 'react';

const TimesheetTable = () => {
    // Placeholder for table data; this would be fetched or managed via state
    const timesheetData = [
        { name: 'Tony Nunez', date: '2024-12-01', leaveType: 'AL', hours: 8 },
        { name: 'Jocelyn Clemente', date: '2024-12-02', leaveType: 'SL', hours: 4 }
    ];

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Leave Type</th>
                    <th>Hours</th>
                </tr>
            </thead>
            <tbody>
                {timesheetData.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.name}</td>
                        <td>{entry.date}</td>
                        <td>{entry.leaveType}</td>
                        <td>{entry.hours}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TimesheetTable;
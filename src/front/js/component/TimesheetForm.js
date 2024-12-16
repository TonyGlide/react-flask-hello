// src/components/TimesheetForm.js
import React, { useState } from 'react';

const TimesheetForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        leaveType: '',
        hours: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add logic to send data to backend or update state
        setFormData({ name: '', date: '', leaveType: '', hours: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="leaveType">Leave Type</label>
                <select
                    className="form-control"
                    id="leaveType"
                    name="leaveType"
                    value={formData.leaveType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Leave Type</option>
                    <option value="AL">Annual Leave</option>
                    <option value="SL">Sick Leave</option>
                    <option value="HL">Holiday Leave</option>
                    <option value="CT">Comp Time</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="hours">Hours</label>
                <input
                    type="number"
                    className="form-control"
                    id="hours"
                    name="hours"
                    value={formData.hours}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default TimesheetForm;
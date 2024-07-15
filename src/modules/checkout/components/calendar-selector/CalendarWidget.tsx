'use client'
import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from "@medusajs/ui";

const CalendarWidget = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    generateAvailableDates();
  }, []);

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 28); // Generate dates for the next 4 weeks

    for (let date = new Date(today); date <= endDate; date.setDate(date.getDate() + 1)) {
      const day = date.getDay();
      if (day === 4 || day === 5 || day === 6) { // 4 = Thursday, 5 = Friday, 6 = Saturday
        dates.push(new Date(date));
      }
    }
    setAvailableDates(dates);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
    setIsOpen(false);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="relative">
      <Button
        variant="secondary"
        className="w-full flex items-center justify-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calendar size={16} />
        {selectedDate ? formatDate(selectedDate) : 'Select date (Thu-Sat only)'}
      </Button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg max-h-64 overflow-y-auto">
          <div className="grid grid-cols-1 gap-1 p-2">
            {availableDates.map((date, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full h-10 text-sm justify-start"
                onClick={() => handleDateClick(date)}
              >
                {formatDate(date)}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarWidget;
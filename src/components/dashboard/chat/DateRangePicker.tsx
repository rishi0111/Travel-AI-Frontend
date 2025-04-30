import React, { useState } from "react";

interface DateRangePickerProps {
     onApply: (startDate: Date | null, endDate: Date | null) => void;
}

const getDaysInMonth = (year: number, month: number) => {
     return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfWeek = (year: number, month: number) => {
     const day = new Date(year, month, 1).getDay();
     return day === 0 ? 6 : day - 1;
};

const isSameDay = (a: Date, b: Date) =>
     a.getFullYear() === b.getFullYear() &&
     a.getMonth() === b.getMonth() &&
     a.getDate() === b.getDate();

const isBetween = (date: Date, start: Date, end: Date) =>
     date > start && date < end;

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onApply }) => {
     const [showCalendar, setShowCalendar] = useState(false);
     const [currentMonth, setCurrentMonth] = useState(3); // April
     const [currentYear, setCurrentYear] = useState(2021);
     const [startDate, setStartDate] = useState<Date | null>(new Date(2021, 3, 7));
     const [endDate, setEndDate] = useState<Date | null>(new Date(2021, 3, 11));

     const handleDayClick = (day: number) => {
          const selectedDate = new Date(currentYear, currentMonth, day);
          if (!startDate || (startDate && endDate)) {
               setStartDate(selectedDate);
               setEndDate(null);
          } else if (selectedDate < startDate) {
               setStartDate(selectedDate);
               setEndDate(null);
          } else {
               setEndDate(selectedDate);
          }
     };

     const handleApply = () => {
          if (startDate && endDate) {
               // Calculate the number of days between dates
               const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
               const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end days
               
               // Format the dates for display
               const formatDateForMessage = (date: Date) => {
                    return date.toLocaleDateString('en-US', {
                         day: 'numeric',
                         month: 'long'
                    });
               };
               
               // Send the formatted message with calculated info
               const formattedStartDate = formatDateForMessage(startDate);
               const formattedEndDate = formatDateForMessage(endDate);
               
               // This enables the StaticChat to show the exact message pattern you requested
               onApply(startDate, endDate);
          } else {
               // Default values if dates are not selected
               onApply(null, null);
          }
          
          setShowCalendar(false);
     };

     const handleClear = () => {
          setStartDate(null);
          setEndDate(null);
     };

     const daysInMonth = getDaysInMonth(currentYear, currentMonth);
     const firstDayOfWeek = getFirstDayOfWeek(currentYear, currentMonth);

     const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
     const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
     const prevMonthDays = getDaysInMonth(prevMonthYear, prevMonth);

     const totalCells = Math.ceil((firstDayOfWeek + daysInMonth) / 7) * 7;

     const getDayStyle = (date: Date) => {
          if (startDate && isSameDay(date, startDate)) {
               return "bg-blue-600 text-white";
          }
          if (endDate && isSameDay(date, endDate)) {
               return "bg-blue-600 text-white";
          }
          if (startDate && endDate && isBetween(date, startDate, endDate)) {
               return "bg-blue-100";
          }
          return "";
     };

     return (
          <div className="relative inline-block">
               <button
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100"
                    onClick={() => setShowCalendar((prev) => !prev)}
               >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M5 1V3M11 1V3M1 7H15M3 3H13C14.1 3 15 3.9 15 5V13C15 14.1 14.1 15 13 15H3C1.9 15 1 14.1 1 13V5C1 3.9 1.9 3 3 3Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Select Dates
               </button>
               {showCalendar && (
                    <div className="absolute z-10 mt-2 pt-4 pb-0 bg-white rounded-3xl shadow-lg w-[330px]">
                         <div className="flex justify-between items-center px-6 mb-4">
                              <button
                                   className="w-8 h-8 flex items-center justify-center text-lg"
                                   onClick={() => {
                                        if (currentMonth === 0) {
                                             setCurrentMonth(11);
                                             setCurrentYear(currentYear - 1);
                                        } else {
                                             setCurrentMonth(currentMonth - 1);
                                        }
                                   }}
                              >
                                   &lt;
                              </button>
                              <span className="font-bold text-xl">
                                   {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long", year: "numeric" })}
                              </span>
                              <button
                                   className="w-8 h-8 flex items-center justify-center text-lg"
                                   onClick={() => {
                                        if (currentMonth === 11) {
                                             setCurrentMonth(0);
                                             setCurrentYear(currentYear + 1);
                                        } else {
                                             setCurrentMonth(currentMonth + 1);
                                        }
                                   }}
                              >
                                   &gt;
                              </button>
                         </div>
                         <div className="grid grid-cols-7 gap-0 text-center px-4">
                              <div className="font-medium mb-4">Mo</div>
                              <div className="font-medium mb-4">Tu</div>
                              <div className="font-medium mb-4">We</div>
                              <div className="font-medium mb-4">Th</div>
                              <div className="font-medium mb-4">Fr</div>
                              <div className="font-medium mb-4">Sa</div>
                              <div className="font-medium mb-4">Su</div>
                              
                              {Array(firstDayOfWeek)
                                   .fill(null)
                                   .map((_, i) => (
                                        <div key={`prev-${i}`} className="p-2 text-gray-300">
                                             {prevMonthDays - firstDayOfWeek + i + 1}
                                        </div>
                                   ))}
                                   
                              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                                   const date = new Date(currentYear, currentMonth, day);
                                   return (
                                        <button
                                             key={day}
                                             className={`p-2 m-0 rounded-lg w-10 h-10 ${getDayStyle(date)}`}
                                             onClick={() => handleDayClick(day)}
                                        >
                                             {day}
                                        </button>
                                   );
                              })}
                              
                              {Array(totalCells - daysInMonth - firstDayOfWeek)
                                   .fill(null)
                                   .map((_, i) => (
                                        <div key={`next-${i}`} className="p-2 text-gray-300">
                                             {i + 1}
                                        </div>
                                   ))}
                         </div>
                         
                         <div className="flex mt-4">
                              <button
                                   className="w-1/2 py-4 rounded-xl bg-blue-50 text-blue-700 font-medium"
                                   onClick={handleClear}
                              >
                                   Clear
                              </button>
                              <button
                                   className="w-1/2 py-4 rounded-xl bg-blue-600 text-white font-medium"
                                   onClick={handleApply}
                              >
                                   Apply
                              </button>
                         </div>
                    </div>
               )}
          </div>
     );
};

export default DateRangePicker;
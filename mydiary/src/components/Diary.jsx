import React, { useState } from "react";
import '../stylesheets/Diary.css'
export default function Diary({date,month,year}) {
    function isLeapYear(year) {
        return (year%4==0 && year%100!=0) || (year%400==0)
    }
    function getStartDay(year, month) {
    // JS months are 0-indexed, so January is 0
    const date = new Date(year, month - 1, 1);
    return date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    }
    let currentDay=getStartDay(year,month)
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var days_in_month
    if (isLeapYear(Number(year))) {
        days_in_month= {
            '1': 31,  // January
            '2': 29,  // February (leap year)
            '3': 31,  // March
            '4': 30,  // April
            '5': 31,  // May
            '6': 30,  // June
            '7': 31,  // July
            '8': 31,  // August
            '9': 30,  // September
            '10': 31, // October
            '11': 30, // November
            '12': 31  // December
        };
    } else {
        days_in_month= {
            '1': 31,  // January
            '2': 28,  // February (non-leap year)
            '3': 31,  // March
            '4': 30,  // April
            '5': 31,  // May
            '6': 30,  // June
            '7': 31,  // July
            '8': 31,  // August
            '9': 30,  // September
            '10': 31, // October
            '11': 30, // November
            '12': 31  // December
        };
    }
    let cells=[]
    let count=0
    while (count<7) {
        if (currentDay>=days.length) {
            currentDay=0
        }
        cells.push(<div>{days[currentDay++]}</div>)
        count++
    }
    for (let i=1;i<=days_in_month[month];i++) {
        if (i==Number(date)) {
            cells.push(<div className="highlighted">{i}</div>)
        } else {
            cells.push(<div>{i}</div>)}
    }
    return (
        <>
            <div className="diary">
                {cells}
            </div>
        </>
    )
}
"use client";

import Nav from '@/components/Nav';
import React, { useState } from 'react';

export default function Schedule() {
    const [activeCategory, setActiveCategory] = useState('courses');
    const [activeCity, setActiveCity] = useState('kharkiv');

    const categories = [
        { id: 'courses', label: 'Курсы обучения' },
        { id: 'webinars', label: 'Вебинары' }
    ];

    const cities = [
        { id: 'kharkiv', label: 'Харьков' },
        { id: 'poltava', label: 'Полтава' },
        { id: 'dnepr', label: 'Днепр' },
        { id: 'lvov', label: 'Львов' },
        { id: 'kherson', label: 'Херсон' },
        { id: 'sumy', label: 'Сумы' }
    ];

    const eventsData = [
        {
            id: 1,
            day: 26,
            month: "нояб",
            category: "courses",
            city: "kharkiv",
            title: "Эстетическая косметология",
            address: "вулиця Клочківська, 3, Харків",
            colorClass: "bg-teal"
        },
        {
            id: 2,
            day: 26,
            month: "нояб",
            category: "courses",
            city: "kharkiv",
            title: "Мезотерапия. - г. Хар",
            address: "Учебный центр",
            colorClass: "bg-light-teal"
        },
        {
            id: 3,
            day: 27,
            month: "нояб",
            category: "courses",
            city: "kharkiv",
            title: "Чистки от А до Я",
            address: "Практический курс",
            colorClass: "bg-medium-teal"
        },
        {
            id: 4,
            day: 27,
            month: "нояб",
            category: "courses",
            city: "poltava",
            title: "Контурная пластика",
            address: "Полтава, центр",
            colorClass: "bg-light-teal"
        },
        {
            id: 5,
            day: 29,
            month: "нояб",
            category: "courses",
            city: "kharkiv",
            title: "Аппаратная косметология",
            address: "вулиця Клочківська, 3",
            colorClass: "bg-teal"
        },
        {
            id: 6,
            day: 5,
            month: "нояб",
            category: "courses",
            city: "kharkiv",
            title: "Каркасная техника массажа",
            address: "Мастер-класс",
            colorClass: "bg-teal"
        },
        {
            id: 7,
            day: 5,
            month: "нояб",
            category: "courses",
            city: "kharkiv",
            title: "Ботулинотерапия - базовый",
            address: "Теория + Практика",
            colorClass: "bg-light-teal"
        },
        {
            id: 8,
            day: 12,
            month: "webinars",
            city: "kharkiv",
            title: "Онлайн Вебинар: Тренды БТА 2026",
            address: "Платформа Zoom",
            colorClass: "bg-orange"
        }
    ];

    const filteredEvents = eventsData.filter(event => {
        if (activeCategory === 'webinars') {
            return event.category === 'webinars';
        }
        return event.category === activeCategory && event.city === activeCity;
    });

    const calendarDays = [26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7];

    return (
        <div>
            <Nav/>
            <section className="schedule-section">
                <h2 className="schedule-main-title">Расписание</h2>


                <div className="filter-category-row">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`filter-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>


                {activeCategory === 'courses' && (
                    <div className="filter-city-row">
                        {cities.map((city) => (
                            <button
                                key={city.id}
                                className={`filter-city-btn ${activeCity === city.id ? 'active' : ''}`}
                                onClick={() => setActiveCity(city.id)}
                            >
                                {city.label}
                            </button>
                        ))}
                    </div>
                )}

                <div className="calendar-container-box">
                    <div className="calendar-mock-header">
                        <div className="calendar-month-nav">
                            <button className="nav-arrow">◀</button>
                            <span className="current-month-title">ноябрь 2026</span>
                            <button className="nav-arrow">▶</button>
                        </div>
                        <div className="calendar-view-modes">
                            <span>Неделя</span>
                            <span className="active-view">Месяц</span>
                            <span>Расписание</span>
                        </div>
                    </div>

                    <div className="calendar-weekdays-grid">
                        <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>
                    </div>


                    <div className="calendar-days-grid">
                        {calendarDays.map((dayNum, idx) => {

                            const dayEvents = filteredEvents.filter(e => e.day === dayNum);

                            return (
                                <div key={idx} className="calendar-day-cell">
                                    <span className="cell-day-number">
                                        {dayNum} {dayNum === 1 ? 'нояб' : ''}
                                    </span>


                                    <div className="cell-events-list">
                                        {dayEvents.map(event => (
                                            <div key={event.id} className={`event-badge ${event.colorClass}`}>
                                                <div className="event-title-text">{event.title}</div>
                                                <div className="event-address-text">{event.address}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="calendar-mock-footer">
                        <span>+ Google Календарь</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('register-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    // --- Hardcoded Event Data ---
    
    const events = [
        {
            title: "Web Performance Summit",
            date: "2025-08-16", 
            time: "10:00 AM - 2:00 PM",
            venue: "Online (Google Meet)",
            description: "Deep dive into Core Web Vitals, image optimization, and modern loading techniques to make your websites faster than ever.",
            image: "https://placehold.co/600x400/F4B400/FFFFFF?text=Web+Perf",
            link: "#"
        },
        {
            title: "Android Study Jams: Kickoff",
            date: "2025-10-12",
            time: "11:00 AM - 1:00 PM",
            venue: "AU College of Engineering, Vizag",
            description: "Join us for the kickoff of our Android Study Jams series, introducing modern Android development with Kotlin and Jetpack Compose.",
            image: "https://placehold.co/600x400/4285F4/FFFFFF?text=Android+Dev",
            link: "#"
        },
        {
            title: "Google Cloud DevFest 2025",
            date: "2025-11-08",
            time: "10:00 AM - 4:00 PM",
            venue: "VMRDA Children's Arena, Vizag",
            description: "Our biggest event of the year! A full day of talks and workshops on Google Cloud, AI, and ML from industry experts.",
            image: "https://placehold.co/600x400/34A853/FFFFFF?text=Cloud+DevFest",
            link: "#"
        },
        {
            title: "Flutter Forward Extended",
            date: "2025-12-06",
            time: "10:00 AM - 1:00 PM",
            venue: "GITAM University, Vizag",
            description: "Catch up on the latest announcements from the Flutter Forward event. Build beautiful, multi-platform applications.",
            image: "https://placehold.co/600x400/EA4335/FFFFFF?text=Flutter+Forward",
            link: "#"
        }
    ];

    
    const timeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`;
    const venueIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;

    const now = new Date('2025-09-26'); 
    now.setHours(0, 0, 0, 0);

    const displayEvents = () => {
        eventsContainer.innerHTML = '';
        events
            .sort((a, b) => new Date(b.date) - new Date(a.date)) 
            .forEach(event => {
                const eventDate = new Date(event.date);
                const isPast = eventDate < now;
                const status = isPast ? 'past' : 'upcoming';

                const card = document.createElement('div');
                card.className = `event-card ${status}`;
                card.dataset.status = status;

                const day = eventDate.getDate();
                const month = eventDate.toLocaleString('default', { month: 'short' });
                const fullDate = eventDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

                card.innerHTML = `
                    <img src="${event.image}" alt="${event.title}" class="card-banner">
                    <div class="card-content">
                        <div class="calendar-date">
                            <div class="month">${month}</div>
                            <div class="day">${day}</div>
                        </div>
                        <h2>${event.title}</h2>
                        <div class="event-detail">
                            ${venueIcon}
                            <span>${event.venue}</span>
                        </div>
                        <div class="event-detail">
                            ${timeIcon}
                            <span>${event.time}</span>
                        </div>
                        <p class="event-description">${event.description}</p>
                        <button class="card-button" ${isPast ? 'disabled' : ''}>
                            ${isPast ? 'Event Finished' : 'Register Now'}
                        </button>
                    </div>
                `;
                eventsContainer.appendChild(card);
            });
    };

  
    const filterEvents = (filter) => {
        const allCards = document.querySelectorAll('.event-card');
        allCards.forEach(card => {
            if (filter === 'all' || card.dataset.status === filter) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            filterEvents(btn.dataset.filter);
        });
    });

   
    eventsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('card-button') && !e.target.disabled) {
            modal.style.display = 'flex';
        }
    });

    const hideModal = () => {
        modal.style.display = 'none';
    };

    closeModalBtn.addEventListener('click', hideModal);
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            hideModal();
        }
    });

    
    displayEvents();
    filterEvents('upcoming');
});


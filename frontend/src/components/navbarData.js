export const navbarItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About Us",
        path: "/about-us",
        dropdown: [
            { name: "Overview", path: "/overview" },
            { name: "History", path: "/history" },
            { name: "Why study at?", path: "/whystudyat" },
            { name: "Vision & Mission", path: "/visionandmission" },
            { name: "Achievements", path: "/achievements" },
            { name: "Contact us", path: "/contact" },
            { name: "College Facts & Acts", path: "/collegefactsandacts" },
            { name: "Location", path: "/location" },
        ],
    },

    {
        name: "Academic",
        path: "/academic",
        dropdown: [
            { name: "Academic Calendar", path: "/calendar" },
            { name: "Syllabus", path: "/syllabus" },
            { name: "Text Book", path: "/textbook" },
            { name: "Class Teacher list", path: "/classteacher" },
            { name: "Class Routine", path: "/classroutine" },
            { name: "Exam Routine", path: "/examroutine" },
            { name: "Results", path: "/results" },
        ],
    },

    {
        name: "Administration",
        path: "/administration",
        dropdown: [
            { name: "Governing Body", path: "/governingbody" },
            { name: "Message of Chairman", path: "/messageofchairman" },
            { name: "Message of Principle", path: "/messageofprinciple" },
            { name: "Teacher Information", path: "/teacherinformation" },
            { name: "Staff Information", path: "/staffinformation" },
        ],
    },

    {
        name: "Admission",
        path: "/admission",
        dropdown: [
            { name: "Online Admission", path: "/onlineadmission" },
            { name: "Circular", path: "/Circular" },
            { name: "Prospectus", path: "/prospectus" },
            { name: "Admission Result", path: "/admissionresult" },
            { name: "Waiting List", path: "/waitinglist" },
            { name: "Fees Chart", path: "/feeschart" },
        ],
    },

    { name: "ePayment", path: "/epayment" },
    { name: "Notice Board", path: "/notice-board" },

    {
        name: "Campus Life",
        path: "/campus-life",
        dropdown: [
            { name: "Co-curricular", path: "/cocurricular" },
            { name: "Club & Scociety", path: "/clubandsociety" },
            { name: "Magazine", path: "/Magazine" },
            { name: "Gallery", path: "/gallery" },
            { name: "Library", path: "/library" },
        ],
    },
    {name: "Login", path: "/login" },
];

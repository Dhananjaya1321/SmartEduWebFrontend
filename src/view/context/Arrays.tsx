export const provinceDistrictMap: Record<string, string[]> = {
    "Western": ["Colombo", "Gampaha", "Kalutara"],
    "Central": ["Kandy", "Matale", "Nuwara Eliya"],
    "Southern": ["Galle", "Matara", "Hambantota"],
    "Northern": ["Jaffna", "Mannar", "Vavuniya", "Mullaitivu", "Kilinochchi"],
    "Eastern": ["Batticaloa", "Ampara", "Trincomalee"],
    "North Western": ["Kurunegala", "Puttalam"],
    "North Central": ["Anuradhapura", "Polonnaruwa"],
    "Uva": ["Badulla", "Moneragala"],
    "Sabaragamuwa": ["Ratnapura", "Kegalle"]
};
export const districtZoneMap: Record<string, string[]> = {
    "Colombo": ["Colombo", "Homagama", "Piliyandala", "Sri Jayawardanapura"],
    "Gampaha": ["Gampaha", "Kelaniya", "Minuwangoda", "Negombo"],
    "Kalutara": ["Horana", "Kalutara", "Matugama"],

    "Kandy": ["Denuwara", "Gampola", "Kandy", "Katugastota", "Teldeniya", "Wathegama"],
    "Matale": ["Galewela", "Matale", "Naula", "Wilgamuwa"],
    "Nuwara Eliya": ["Hanguranketha", "Hatton", "Kotmale", "Nuwara Eliya", "Walapane"],

    "Galle": ["Ambalangoda", "Elpitiya", "Galle", "Udugama"],
    "Matara": ["Akuressa", "Matara", "Morawaka", "Mulatiyana (Hakmana)"],
    "Hambantota": ["Hambantota", "Tangalle", "Walasmulla"],

    "Jaffna": ["Islands", "Jaffna", "Thenmarachchi", "Vadamarachchi", "Valikamam"],
    "Mannar": ["Madhu", "Mannar"],
    "Vavuniya": ["Vavuniya North", "Vavuniya South"],
    "Mullaitivu": ["Mullaitivu", "Thunukkai"],
    "Kilinochchi": ["Kilinochchi North", "Kilinochchi South"],

    "Batticaloa": ["Batticaloa", "Batticaloa Central", "Batticaloa West", "Kalkudah", "Paddiruppu"],
    "Ampara": ["Akkaraipattu", "Ampara", "Dehiattakandiya", "Kalmunai", "Mahaoya", "Sammanthurai", "Thirukkovil"],
    "Trincomalee": ["Kantale", "Kinniya", "Muttur", "Trincomalee", "Trincomalee North"],

    "Kurunegala": ["Giriulla", "Ibbagamuwa", "Kuliyapitiya", "Kurunegala", "Maho", "Nikaweratiya"],
    "Puttalam": ["Chilaw", "Puttalam"],

    "Anuradhapura": ["Anuradhapura", "Galenbindunuwewa", "Kebithigollewa", "Kekirawa", "Thambuttegama"],
    "Polonnaruwa": ["Dimbulagala", "Hingurakgoda", "Polonnaruwa"],

    "Badulla": ["Badulla", "Bandarawela", "Mahiyanganaya", "Passara", "Viyaluwa", "Welimada"],
    "Moneragala": ["Bibile", "Moneragala", "Thanamalwila", "Wellawaya"],

    "Ratnapura": ["Balangoda", "Embilipitiya", "Nivitigala", "Ratnapura"],
    "Kegalle": ["Dehiowita", "Kegalle", "Mawanella"]
};

// Level of School Options
export const schoolLevelOptions = [
    { label: 'Select...', value: '' },
    { label: 'National Schools', value: 'national' },
    { label: 'Provincial Schools', value: 'provincial' }
];

// Type of School Options
export const schoolTypeOptions = [
    { label: 'Select...', value: '' },
    { label: '1AB Schools', value: '1ab' },
    { label: '1C Schools', value: '1c' },
    { label: 'Type 2 Schools', value: 'type2' },
    { label: 'Type 3 Schools', value: 'type3' }
];

// Grade Span Options
export const gradeSpanOptions = [
    { label: 'Select...', value: '' },
    { label: 'Grade 1-5', value: '1-5' },
    { label: 'Grade 1-8', value: '1-8' },
    { label: 'Grade 1-11', value: '1-11' },
    { label: 'Grade 1-13', value: '1-13' },
    { label: 'Grade 6-11', value: '6-11' },
    { label: 'Grade 6-13', value: '6-13' }
];

// Gender Options
export const genderOptions = [
    { label: 'Select...', value: '' },
    { label: 'Boys Schools', value: 'boys' },
    { label: 'Girls Schools', value: 'girls' },
    { label: 'Mixed Schools', value: 'mixed' }
];

// Ethnicity Options
export const ethnicityOptions = [
    { label: 'Select...', value: '' },
    { label: 'Sinhala Schools', value: 'sinhala' },
    { label: 'Tamil Schools', value: 'tamil' },
    { label: 'Muslim Schools', value: 'muslim' }
];

// Language Medium Options
export const languageMediumOptions = [
    { label: 'Select...', value: '' },
    { label: 'Sinhala Medium', value: 'sinhala' },
    { label: 'Tamil Medium', value: 'tamil' },
    { label: 'Sinhala and Tamil Medium', value: 'sinhala_tamil' },
    { label: 'Sinhala and Bilingual (S/E)', value: 'sinhala_bilingual' },
    { label: 'Tamil and Bilingual (T/E)', value: 'tamil_bilingual' },
    { label: 'Trilingual', value: 'trilingual' }
];

// Student Population Options
export const studentPopulationOptions = [
    { label: 'Select...', value: '' },
    { label: '1–50', value: '1-50' },
    { label: '51–100', value: '51-100' },
    { label: '101–200', value: '101-200' },
    { label: '201–500', value: '201-500' },
    { label: '501–1,000', value: '501-1000' },
    { label: 'Above 1,000', value: 'above_1000' }
];

// Teacher Population Options
export const teacherPopulationOptions = [
    { label: 'Select...', value: '' },
    { label: '1–50', value: '1-50' },
    { label: '51–100', value: '51-100' },
    { label: '101–200', value: '101-200' },
    { label: '201–500', value: '201-500' },
    { label: '501–1,000', value: '501-1000' },
    { label: 'Above 1,000', value: 'above_1000' }
];

// Grades Options
export const gradeOptions = [
    { label: 'Select...', value: '' },
    { label: 'Grade 1', value: 'grade_1' },
    { label: 'Grade 2', value: 'grade_2' },
    { label: 'Grade 3', value: 'grade_3' },
    { label: 'Grade 4', value: 'grade_4' },
    { label: 'Grade 5', value: 'grade_5' },
    { label: 'Grade 6', value: 'grade_6' },
    { label: 'Grade 7', value: 'grade_7' },
    { label: 'Grade 8', value: 'grade_8' },
    { label: 'Grade 9', value: 'grade_9' },
    { label: 'Grade 10', value: 'grade_10' },
    { label: 'Grade 11', value: 'grade_11' },
    { label: 'Grade 12', value: 'grade_12' },
    { label: 'Grade 13', value: 'grade_13' }
];

// Event Grades Options
export const eventGradeOptions = [
    { label: 'Select...', value: '' },
    { label: 'Grade 1', value: 'grade_1' },
    { label: 'Grade 2', value: 'grade_2' },
    { label: 'Grade 3', value: 'grade_3' },
    { label: 'Grade 4', value: 'grade_4' },
    { label: 'Grade 5', value: 'grade_5' },
    { label: 'Grade 6', value: 'grade_6' },
    { label: 'Grade 7', value: 'grade_7' },
    { label: 'Grade 8', value: 'grade_8' },
    { label: 'Grade 9', value: 'grade_9' },
    { label: 'Grade 10', value: 'grade_10' },
    { label: 'Grade 11', value: 'grade_11' },
    { label: 'Grade 12', value: 'grade_12' },
    { label: 'Grade 13', value: 'grade_13' },
    { label: 'Grade 1 to 5', value: 'grade_1_to_5' },
    { label: 'Grade 6 to 9', value: 'grade_6_to_9' },
    { label: 'Grade 1 to 9', value: 'grade_1_to_9' },
    { label: 'Grade 9 to 11', value: 'grade_9_to_11' },
    { label: 'Grade 6 to 11', value: 'grade_6_to_11' },
    { label: 'Grade 6 to 13', value: 'grade_6_to_13' },
    { label: 'Grade 10 to 13', value: 'grade_10_to_13' },
    { label: 'Grade 12 to 13', value: 'grade_12_to_13' },
    { label: 'All Grades', value: 'all_grade' },
];


// Basic subject map for grade 1–11
export const gradeSubjectMap: Record<string, string[]> = {
    grade_1: ["Religion", "First Language", "English Language", "Mathematics", "Environmental Studies", "Aesthetic Education", "Health and Physical Education", "Civic Education"],
    grade_2: ["Religion", "First Language", "English Language", "Mathematics", "Environmental Studies", "Aesthetic Education", "Health and Physical Education", "Civic Education"],
    grade_3: ["Religion", "First Language", "English Language", "Mathematics", "Environmental Studies", "Aesthetic Education", "Health and Physical Education", "Civic Education"],
    grade_4: ["Religion", "First Language", "English Language", "Mathematics", "Environmental Studies", "Aesthetic Education", "Health and Physical Education", "Civic Education"],
    grade_5: ["Religion", "First Language", "English Language", "Mathematics", "Environmental Studies", "Aesthetic Education", "Health and Physical Education", "Civic Education"],

    grade_6: ["Buddhism / Hinduism / Islam / Christianity", "Sinhala / Tamil", "English", "Mathematics", "Science", "History", "Geography", "Health & PE", "ICT", "Aesthetics", "Civic Education"],
    grade_7: ["Buddhism / Hinduism / Islam / Christianity", "Sinhala / Tamil", "English", "Mathematics", "Science", "History", "Geography", "Health & PE", "ICT", "Aesthetics", "Civic Education"],
    grade_8: ["Buddhism / Hinduism / Islam / Christianity", "Sinhala / Tamil", "English", "Mathematics", "Science", "History", "Geography", "Health & PE", "ICT", "Aesthetics", "Civic Education"],
    grade_9: ["Buddhism / Hinduism / Islam / Christianity", "Sinhala / Tamil", "English", "Mathematics", "Science", "History", "Geography", "Health & PE", "ICT", "Aesthetics", "Civic Education"],

    grade_10: ["Buddhism / Hinduism / Islam / Christianity", "Sinhala / Tamil", "English", "Mathematics", "Science", "History", "Civic Education", "Business Studies", "ICT", "Geography", "Home Science", "Art", "Music", "Dance", "Drama", "Tech Subjects"],
    grade_11: ["Buddhism / Hinduism / Islam / Christianity", "Sinhala / Tamil", "English", "Mathematics", "Science", "History", "Civic Education", "Business Studies", "ICT", "Geography", "Home Science", "Art", "Music", "Dance", "Drama", "Tech Subjects"],
};


export const alStreams = [
    { label: 'Science', value: 'science' },
    { label: 'Commerce', value: 'commerce' },
    { label: 'Arts', value: 'arts' },
    { label: 'Technology', value: 'technology' },
    { label: 'General', value: 'general' }
];

export const paperType = [
    { label: 'Select...', value: '' },
    { label: 'Part 1', value: 'part_1' },
    { label: 'Part 2', value: 'part_2' },
    { label: 'Part 3', value: 'part_3' },
    { label: 'Part 4', value: 'part_4' },
    { label: 'Part 5', value: 'part_5' },

];

export const alStreamSubjects: Record<string, string[]> = {
    science: [
        "Combined Mathematics",
        "Biology",
        "Chemistry",
        "Physics",
        "Agriculture",
        "ICT"
    ],
    commerce: [
        "Accounting",
        "Business Studies",
        "Economics"
    ],
    arts: [
        "Logic",
        "Political Science",
        "Geography",
        "History",
        "Sinhala / Tamil / English Literature",
        "Buddhism / Hinduism / Christianity / Islam",
        "Greek and Roman Civilization",
        "Drama and Theatre",
        "Music",
        "Art"
    ],
    technology: [
        "Engineering Technology",
        "Bio Systems Technology",
        "Science for Technology",
        "English for Technology"
    ],
    general: [
        "General English",
        "Common General Test"
    ]
};

// Event Grades Options
export const examsAndNICApplicationOptions = [
    { label: 'Select...', value: '' },
    { label: 'G.C.E. (O/L) Examination', value: 'ol' },
    { label: 'G.C.E. (A/L) Examination', value: 'al' },
    { label: 'Grade 5 Scholarship Examination', value: 'g5' },
    { label: 'NIC Application', value: 'nic' },

];

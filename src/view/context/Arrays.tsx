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

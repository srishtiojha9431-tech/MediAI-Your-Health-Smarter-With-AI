/* =========================================================
   MEDI AI - MULTILINGUAL APPLICATION
   Supported:
   English, Hindi, Gujarati, Marathi, Tamil, Telugu, Bengali
   ========================================================= */


function createLanguageSelector() {
    // Don't create it twice
    if (document.querySelector(".language-switcher")) {
        return;
    }

    const sidebar = document.querySelector(".sidebar");

    if (!sidebar) {
        return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "language-switcher";

    wrapper.innerHTML = `
        <label for="languageSelect">🌐</label>

        <select id="languageSelect" data-language-select>
            <option value="en">🇬🇧 English</option>
            <option value="hi">🇮🇳 हिन्दी</option>
            <option value="gu">🇮🇳 ગુજરાતી</option>
            <option value="mr">🇮🇳 मराठी</option>
            <option value="ta">🇮🇳 தமிழ்</option>
            <option value="te">🇮🇳 తెలుగు</option>
            <option value="bn">🇮🇳 বাংলা</option>
        </select>
    `;

    // Put language selector before navigation
    const nav = sidebar.querySelector(".nav");

    if (nav) {
        sidebar.insertBefore(wrapper, nav);
    } else {
        sidebar.appendChild(wrapper);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    createLanguageSelector();

    initializeLanguage();

    setActiveNavigation();
    initializeEmergencyButton();
    initializeHealthForm();
    initializeDoctorSearch();
    initializeHealthTracking();
    initializeSettings();
    initializeWelcomePage();
});

/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {
    en: {
        /* Common */
        medi_ai: "Medi AI",
        healthcare_assistant: "AI-Powered Healthcare Assistant",
        dashboard: "Dashboard",
        ai_health_check: "AI Health Check",
        consultations: "Consultations",
        medical_records: "Medical Records",
        health_tracking: "Health Tracking",
        find_doctor: "Find Doctor",
        settings: "Settings",
        logout: "Logout",
        search: "Search",
        save: "Save Changes",
        cancel: "Cancel",
        submit: "Submit",
        add: "Add",
        view: "View",
        back: "Back",

        /* Welcome */
        welcome_title: "Your Health. Smarter with AI.",
        welcome_description:
            "Medi AI helps you organize your health information, understand your symptoms, track your health, and connect with healthcare professionals.",
        get_started: "Get Started",
        try_health_check: "Try AI Health Check",
        personalized_health: "Personalized Health Guidance",
        personalized_health_desc:
            "Enter your health information and receive AI-powered guidance to help you understand your next steps.",
        track_health: "Track Your Health",
        track_health_desc:
            "Monitor important health measurements and keep your health information organized.",
        connect_doctors: "Connect With Doctors",
        connect_doctors_desc:
            "Find healthcare professionals and explore online consultation options.",
        safety_notice: "Medical Safety Notice",
        safety_description:
            "Medi AI provides informational guidance and does not replace a qualified healthcare professional. For emergencies, contact local emergency services immediately.",

        /* Dashboard */
        welcome_back: "Welcome back!",
        health_overview: "Here's your health overview.",
        heart_rate: "Heart Rate",
        blood_pressure: "Blood Pressure",
        temperature: "Temperature",
        sleep: "Sleep",
        bpm: "BPM",
        hours: "hours",
        today: "Today",
        normal: "Normal",
        needs_attention: "Needs attention",
        quick_actions: "Quick Actions",
        start_ai_check: "Start AI Health Check",
        find_a_doctor: "Find a Doctor",
        view_records: "View Medical Records",
        track_measurements: "Track Measurements",

        /* AI Health Check */
        health_check_title: "AI Health Check",
        health_check_desc:
            "Enter your health information to receive general AI-powered health guidance.",
        age: "Age",
        gender: "Gender",
        male: "Male",
        female: "Female",
        other: "Other",
        temperature_label: "Temperature",
        blood_pressure_label: "Blood Pressure",
        symptoms: "Symptoms",
        symptoms_placeholder: "Describe your symptoms...",
        medical_history: "Medical History",
        history_placeholder: "Enter relevant medical history...",
        analyze: "Analyze Health",
        ai_summary: "AI Health Summary",
        disclaimer:
            "This information is for educational purposes only and is not a medical diagnosis or prescription.",
        emergency: "Emergency",
        emergency_message:
            "If you are experiencing severe or life-threatening symptoms, contact your local emergency services immediately.",

        /* Consultations */
        consultations_title: "Consultations",
        upcoming: "Upcoming Consultation",
        previous: "Previous Consultations",
        doctor: "Doctor",
        specialty: "Specialty",
        date: "Date",
        time: "Time",
        status: "Status",
        action: "Action",
        join_consultation: "Join Consultation",
        completed: "Completed",
        scheduled: "Scheduled",
        general_physician: "General Physician",
        dermatologist: "Dermatologist",
        cardiologist: "Cardiologist",

        /* Records */
        records_title: "Medical Records",
        records_desc: "View and manage your health records.",
        add_record: "Add Record",
        record_type: "Record Type",
        record_name: "Record Name",
        uploaded: "Uploaded",
        blood_test: "Blood Test",
        health_report: "Health Check Report",
        prescription: "Prescription",
        doctor_consultation: "Doctor Consultation",
        privacy_notice: "Privacy Notice",
        privacy_description:
            "For a real healthcare application, medical records should be stored securely using appropriate encryption, authentication, access controls, and applicable healthcare privacy requirements.",

        /* Tracking */
        tracking_title: "Health Tracking",
        tracking_desc: "Monitor your health measurements over time.",
        add_measurement: "Add Measurement",
        measurement_type: "Measurement Type",
        value: "Value",
        unit: "Unit",
        recent_measurements: "Recent Measurements",
        heart_rate_measurement: "Heart Rate",
        blood_pressure_measurement: "Blood Pressure",
        temperature_measurement: "Temperature",
        sleep_measurement: "Sleep",

        /* Doctor */
        doctor_title: "Find a Doctor",
        doctor_desc: "Search for healthcare professionals by location and specialty.",
        location: "Location",
        location_placeholder: "Enter your location",
        search_doctors: "Search Doctors",
        available_doctors: "Available Doctors",
        consult: "Consult",
        experience: "Experience",
        years: "years",

        /* Settings */
        settings_title: "Settings",
        settings_desc: "Manage your profile and application preferences.",
        personal_information: "Personal Information",
        full_name: "Full Name",
        email: "Email",
        phone: "Phone",
        language: "Language",
        notifications: "Notifications",
        notifications_on: "Enabled",
        notifications_off: "Disabled",
        change_password: "Change Password",
        privacy_security: "Privacy & Security",
        settings_saved: "Settings saved successfully.",
        password_demo: "Password change would open a secure password-change flow in production.",
        logout_message: "You have been logged out of the demo.",

        /* Footer */
        footer_text: "Medi AI — AI-powered healthcare assistance."
    },

    hi: {
        medi_ai: "मेडी AI",
        healthcare_assistant: "AI-संचालित स्वास्थ्य सहायक",
        dashboard: "डैशबोर्ड",
        ai_health_check: "AI स्वास्थ्य जांच",
        consultations: "परामर्श",
        medical_records: "मेडिकल रिकॉर्ड",
        health_tracking: "स्वास्थ्य ट्रैकिंग",
        find_doctor: "डॉक्टर खोजें",
        settings: "सेटिंग्स",
        logout: "लॉग आउट",
        search: "खोजें",
        save: "बदलाव सहेजें",
        cancel: "रद्द करें",
        submit: "जमा करें",
        add: "जोड़ें",
        view: "देखें",
        back: "वापस",

        welcome_title: "आपका स्वास्थ्य। AI के साथ और बेहतर।",
        welcome_description:
            "Medi AI आपकी स्वास्थ्य जानकारी व्यवस्थित करने, लक्षण समझने, स्वास्थ्य ट्रैक करने और डॉक्टरों से जुड़ने में मदद करता है।",
        get_started: "शुरू करें",
        try_health_check: "AI स्वास्थ्य जांच आज़माएं",
        personalized_health: "व्यक्तिगत स्वास्थ्य मार्गदर्शन",
        personalized_health_desc:
            "अपनी स्वास्थ्य जानकारी दर्ज करें और अगले कदमों को समझने में मदद करने वाला AI मार्गदर्शन प्राप्त करें।",
        track_health: "अपने स्वास्थ्य को ट्रैक करें",
        track_health_desc:
            "महत्वपूर्ण स्वास्थ्य मापदंडों की निगरानी करें और जानकारी व्यवस्थित रखें।",
        connect_doctors: "डॉक्टरों से जुड़ें",
        connect_doctors_desc:
            "स्वास्थ्य विशेषज्ञ खोजें और ऑनलाइन परामर्श के विकल्प देखें।",
        safety_notice: "चिकित्सकीय सुरक्षा सूचना",
        safety_description:
            "Medi AI केवल जानकारी और मार्गदर्शन प्रदान करता है। यह योग्य स्वास्थ्य विशेषज्ञ का विकल्प नहीं है। आपात स्थिति में तुरंत स्थानीय आपातकालीन सेवा से संपर्क करें।",

        welcome_back: "वापसी पर स्वागत है!",
        health_overview: "यहां आपका स्वास्थ्य अवलोकन है।",
        heart_rate: "हृदय गति",
        blood_pressure: "रक्तचाप",
        temperature: "तापमान",
        sleep: "नींद",
        bpm: "बीपीएम",
        hours: "घंटे",
        today: "आज",
        normal: "सामान्य",
        needs_attention: "ध्यान आवश्यक",
        quick_actions: "त्वरित कार्य",
        start_ai_check: "AI स्वास्थ्य जांच शुरू करें",
        find_a_doctor: "डॉक्टर खोजें",
        view_records: "मेडिकल रिकॉर्ड देखें",
        track_measurements: "मापदंड ट्रैक करें",

        health_check_title: "AI स्वास्थ्य जांच",
        health_check_desc:
            "सामान्य AI स्वास्थ्य मार्गदर्शन प्राप्त करने के लिए अपनी स्वास्थ्य जानकारी दर्ज करें।",
        age: "उम्र",
        gender: "लिंग",
        male: "पुरुष",
        female: "महिला",
        other: "अन्य",
        temperature_label: "तापमान",
        blood_pressure_label: "रक्तचाप",
        symptoms: "लक्षण",
        symptoms_placeholder: "अपने लक्षणों का वर्णन करें...",
        medical_history: "चिकित्सकीय इतिहास",
        history_placeholder: "प्रासंगिक चिकित्सकीय इतिहास दर्ज करें...",
        analyze: "स्वास्थ्य का विश्लेषण करें",
        ai_summary: "AI स्वास्थ्य सारांश",
        disclaimer:
            "यह जानकारी केवल शैक्षणिक उद्देश्यों के लिए है और चिकित्सा निदान या प्रिस्क्रिप्शन नहीं है।",
        emergency: "आपातकाल",
        emergency_message:
            "यदि आपको गंभीर या जानलेवा लक्षण हो रहे हैं, तो तुरंत स्थानीय आपातकालीन सेवा से संपर्क करें।",

        consultations_title: "परामर्श",
        upcoming: "आगामी परामर्श",
        previous: "पिछले परामर्श",
        doctor: "डॉक्टर",
        specialty: "विशेषज्ञता",
        date: "तारीख",
        time: "समय",
        status: "स्थिति",
        action: "कार्य",
        join_consultation: "परामर्श में शामिल हों",
        completed: "पूर्ण",
        scheduled: "निर्धारित",
        general_physician: "जनरल फिजिशियन",
        dermatologist: "त्वचा विशेषज्ञ",
        cardiologist: "हृदय रोग विशेषज्ञ",

        records_title: "मेडिकल रिकॉर्ड",
        records_desc: "अपने स्वास्थ्य रिकॉर्ड देखें और प्रबंधित करें।",
        add_record: "रिकॉर्ड जोड़ें",
        record_type: "रिकॉर्ड प्रकार",
        record_name: "रिकॉर्ड नाम",
        uploaded: "अपलोड किया गया",
        blood_test: "ब्लड टेस्ट",
        health_report: "स्वास्थ्य जांच रिपोर्ट",
        prescription: "प्रिस्क्रिप्शन",
        doctor_consultation: "डॉक्टर परामर्श",
        privacy_notice: "गोपनीयता सूचना",
        privacy_description:
            "वास्तविक स्वास्थ्य एप्लिकेशन में मेडिकल रिकॉर्ड को उचित एन्क्रिप्शन, प्रमाणीकरण और एक्सेस नियंत्रण के साथ सुरक्षित रूप से संग्रहीत किया जाना चाहिए।",

        tracking_title: "स्वास्थ्य ट्रैकिंग",
        tracking_desc: "समय के साथ अपने स्वास्थ्य मापदंडों की निगरानी करें।",
        add_measurement: "माप जोड़ें",
        measurement_type: "माप प्रकार",
        value: "मान",
        unit: "इकाई",
        recent_measurements: "हाल के माप",
        heart_rate_measurement: "हृदय गति",
        blood_pressure_measurement: "रक्तचाप",
        temperature_measurement: "तापमान",
        sleep_measurement: "नींद",

        doctor_title: "डॉक्टर खोजें",
        doctor_desc: "स्थान और विशेषज्ञता के अनुसार स्वास्थ्य विशेषज्ञ खोजें।",
        location: "स्थान",
        location_placeholder: "अपना स्थान दर्ज करें",
        search_doctors: "डॉक्टर खोजें",
        available_doctors: "उपलब्ध डॉक्टर",
        consult: "परामर्श",
        experience: "अनुभव",
        years: "वर्ष",

        settings_title: "सेटिंग्स",
        settings_desc: "अपनी प्रोफ़ाइल और ऐप प्राथमिकताएं प्रबंधित करें।",
        personal_information: "व्यक्तिगत जानकारी",
        full_name: "पूरा नाम",
        email: "ईमेल",
        phone: "फोन",
        language: "भाषा",
        notifications: "सूचनाएं",
        notifications_on: "सक्षम",
        notifications_off: "बंद",
        change_password: "पासवर्ड बदलें",
        privacy_security: "गोपनीयता और सुरक्षा",
        settings_saved: "सेटिंग्स सफलतापूर्वक सहेजी गईं।",
        password_demo: "प्रोडक्शन में पासवर्ड बदलने के लिए सुरक्षित प्रक्रिया खुलेगी।",
        logout_message: "आप डेमो से लॉग आउट हो गए हैं।",
        footer_text: "Medi AI — AI-संचालित स्वास्थ्य सहायता।"
    },

    gu: {
        medi_ai: "મેડી AI",
        healthcare_assistant: "AI આધારિત આરોગ્ય સહાયક",
        dashboard: "ડેશબોર્ડ",
        ai_health_check: "AI આરોગ્ય તપાસ",
        consultations: "પરામર્શ",
        medical_records: "મેડિકલ રેકોર્ડ્સ",
        health_tracking: "આરોગ્ય ટ્રેકિંગ",
        find_doctor: "ડૉક્ટર શોધો",
        settings: "સેટિંગ્સ",
        logout: "લૉગ આઉટ",
        search: "શોધો",
        save: "ફેરફારો સાચવો",
        cancel: "રદ કરો",
        submit: "સબમિટ કરો",
        add: "ઉમેરો",
        view: "જુઓ",
        back: "પાછા",

        welcome_title: "તમારું આરોગ્ય. AI સાથે વધુ સ્માર્ટ.",
        welcome_description:
            "Medi AI તમારી આરોગ્ય માહિતી ગોઠવવા, લક્ષણો સમજવા, આરોગ્ય ટ્રેક કરવા અને ડૉક્ટરો સાથે જોડાવામાં મદદ કરે છે.",
        get_started: "શરૂ કરો",
        try_health_check: "AI આરોગ્ય તપાસ અજમાવો",
        personalized_health: "વ્યક્તિગત આરોગ્ય માર્ગદર્શન",
        personalized_health_desc:
            "તમારી આરોગ્ય માહિતી દાખલ કરો અને આગળના પગલાં સમજવામાં મદદરૂપ AI માર્ગદર્શન મેળવો.",
        track_health: "તમારું આરોગ્ય ટ્રેક કરો",
        track_health_desc:
            "મહત્વપૂર્ણ આરોગ્ય માપદંડોનું નિરીક્ષણ કરો અને તમારી માહિતી ગોઠવો.",
        connect_doctors: "ડૉક્ટરો સાથે જોડાઓ",
        connect_doctors_desc:
            "આરોગ્ય નિષ્ણાતોને શોધો અને ઓનલાઈન પરામર્શના વિકલ્પો જુઓ.",
        safety_notice: "તબીબી સુરક્ષા સૂચના",
        safety_description:
            "Medi AI માહિતી અને માર્ગદર્શન આપે છે. તે યોગ્ય આરોગ્ય નિષ્ણાતનો વિકલ્પ નથી. કટોકટીમાં તરત સ્થાનિક ઇમરજન્સી સેવાનો સંપર્ક કરો.",

        welcome_back: "ફરી સ્વાગત છે!",
        health_overview: "અહીં તમારું આરોગ્ય અવલોકન છે.",
        heart_rate: "હૃદય દર",
        blood_pressure: "બ્લડ પ્રેશર",
        temperature: "તાપમાન",
        sleep: "ઊંઘ",
        bpm: "BPM",
        hours: "કલાક",
        today: "આજે",
        normal: "સામાન્ય",
        needs_attention: "ધ્યાન જરૂરી",
        quick_actions: "ઝડપી ક્રિયાઓ",
        start_ai_check: "AI આરોગ્ય તપાસ શરૂ કરો",
        find_a_doctor: "ડૉક્ટર શોધો",
        view_records: "મેડિકલ રેકોર્ડ જુઓ",
        track_measurements: "માપ ટ્રેક કરો",

        health_check_title: "AI આરોગ્ય તપાસ",
        health_check_desc:
            "સામાન્ય AI આરોગ્ય માર્ગદર્શન મેળવવા માટે તમારી આરોગ્ય માહિતી દાખલ કરો.",
        age: "ઉંમર",
        gender: "લિંગ",
        male: "પુરુષ",
        female: "સ્ત્રી",
        other: "અન્ય",
        temperature_label: "તાપમાન",
        blood_pressure_label: "બ્લડ પ્રેશર",
        symptoms: "લક્ષણો",
        symptoms_placeholder: "તમારા લક્ષણોનું વર્ણન કરો...",
        medical_history: "તબીબી ઇતિહાસ",
        history_placeholder: "સંબંધિત તબીબી ઇતિહાસ દાખલ કરો...",
        analyze: "આરોગ્યનું વિશ્લેષણ કરો",
        ai_summary: "AI આરોગ્ય સારાંશ",
        disclaimer:
            "આ માહિતી માત્ર શૈક્ષણિક હેતુ માટે છે અને તબીબી નિદાન અથવા પ્રિસ્ક્રિપ્શન નથી.",
        emergency: "ઇમરજન્સી",
        emergency_message:
            "જો તમને ગંભીર અથવા જીવલેણ લક્ષણો હોય તો તરત સ્થાનિક ઇમરજન્સી સેવાનો સંપર્ક કરો.",

        consultations_title: "પરામર્શ",
        upcoming: "આગામી પરામર્શ",
        previous: "પાછલા પરામર્શ",
        doctor: "ડૉક્ટર",
        specialty: "વિશેષતા",
        date: "તારીખ",
        time: "સમય",
        status: "સ્થિતિ",
        action: "ક્રિયા",
        join_consultation: "પરામર્શમાં જોડાઓ",
        completed: "પૂર્ણ",
        scheduled: "નિર્ધારિત",
        general_physician: "જનરલ ફિઝિશિયન",
        dermatologist: "ત્વચા નિષ્ણાત",
        cardiologist: "હૃદય નિષ્ણાત",

        records_title: "મેડિકલ રેકોર્ડ્સ",
        records_desc: "તમારા આરોગ્ય રેકોર્ડ જુઓ અને મેનેજ કરો.",
        add_record: "રેકોર્ડ ઉમેરો",
        record_type: "રેકોર્ડ પ્રકાર",
        record_name: "રેકોર્ડ નામ",
        uploaded: "અપલોડ થયેલ",
        blood_test: "બ્લડ ટેસ્ટ",
        health_report: "આરોગ્ય તપાસ રિપોર્ટ",
        prescription: "પ્રિસ્ક્રિપ્શન",
        doctor_consultation: "ડૉક્ટર પરામર્શ",
        privacy_notice: "ગોપનીયતા સૂચના",
        privacy_description:
            "વાસ્તવિક આરોગ્ય એપ્લિકેશનમાં મેડિકલ રેકોર્ડ્સ યોગ્ય સુરક્ષા, એન્ક્રિપ્શન અને ઍક્સેસ નિયંત્રણ સાથે સંગ્રહવા જોઈએ.",

        tracking_title: "આરોગ્ય ટ્રેકિંગ",
        tracking_desc: "સમય સાથે તમારા આરોગ્ય માપદંડોનું નિરીક્ષણ કરો.",
        add_measurement: "માપ ઉમેરો",
        measurement_type: "માપ પ્રકાર",
        value: "મૂલ્ય",
        unit: "એકમ",
        recent_measurements: "તાજેતરના માપ",
        heart_rate_measurement: "હૃદય દર",
        blood_pressure_measurement: "બ્લડ પ્રેશર",
        temperature_measurement: "તાપમાન",
        sleep_measurement: "ઊંઘ",

        doctor_title: "ડૉક્ટર શોધો",
        doctor_desc: "સ્થાન અને વિશેષતા દ્વારા આરોગ્ય નિષ્ણાતો શોધો.",
        location: "સ્થાન",
        location_placeholder: "તમારું સ્થાન દાખલ કરો",
        search_doctors: "ડૉક્ટર શોધો",
        available_doctors: "ઉપલબ્ધ ડૉક્ટરો",
        consult: "પરામર્શ",
        experience: "અનુભવ",
        years: "વર્ષ",

        settings_title: "સેટિંગ્સ",
        settings_desc: "તમારી પ્રોફાઇલ અને એપ્લિકેશન પસંદગીઓ મેનેજ કરો.",
        personal_information: "વ્યક્તિગત માહિતી",
        full_name: "પૂરું નામ",
        email: "ઈમેલ",
        phone: "ફોન",
        language: "ભાષા",
        notifications: "સૂચનાઓ",
        notifications_on: "ચાલુ",
        notifications_off: "બંધ",
        change_password: "પાસવર્ડ બદલો",
        privacy_security: "ગોપનીયતા અને સુરક્ષા",
        settings_saved: "સેટિંગ્સ સફળતાપૂર્વક સાચવાઈ.",
        password_demo: "પ્રોડક્શનમાં સુરક્ષિત પાસવર્ડ બદલવાની પ્રક્રિયા ખુલશે.",
        logout_message: "તમે ડેમોમાંથી લૉગ આઉટ થયા છો.",
        footer_text: "Medi AI — AI આધારિત આરોગ્ય સહાય."
    },

    mr: {
        medi_ai: "मेडी AI",
        healthcare_assistant: "AI-आधारित आरोग्य सहाय्यक",
        dashboard: "डॅशबोर्ड",
        ai_health_check: "AI आरोग्य तपासणी",
        consultations: "सल्लामसलत",
        medical_records: "वैद्यकीय नोंदी",
        health_tracking: "आरोग्य ट्रॅकिंग",
        find_doctor: "डॉक्टर शोधा",
        settings: "सेटिंग्ज",
        logout: "लॉग आउट",
        search: "शोधा",
        save: "बदल जतन करा",
        cancel: "रद्द करा",
        submit: "सबमिट करा",
        add: "जोडा",
        view: "पहा",
        back: "मागे",

        welcome_title: "तुमचे आरोग्य. AI सोबत अधिक स्मार्ट.",
        welcome_description:
            "Medi AI तुमची आरोग्य माहिती व्यवस्थित करण्यास, लक्षणे समजून घेण्यास, आरोग्य ट्रॅक करण्यास आणि डॉक्टरांशी जोडण्यास मदत करते.",
        get_started: "सुरुवात करा",
        try_health_check: "AI आरोग्य तपासणी वापरा",
        personalized_health: "वैयक्तिक आरोग्य मार्गदर्शन",
        personalized_health_desc:
            "तुमची आरोग्य माहिती भरा आणि पुढील पायऱ्या समजण्यासाठी AI मार्गदर्शन मिळवा.",
        track_health: "तुमचे आरोग्य ट्रॅक करा",
        track_health_desc:
            "महत्त्वाच्या आरोग्य मोजमापांचे निरीक्षण करा.",
        connect_doctors: "डॉक्टरांशी जोडा",
        connect_doctors_desc:
            "आरोग्य तज्ञ शोधा आणि ऑनलाइन सल्ल्याचे पर्याय पहा.",
        safety_notice: "वैद्यकीय सुरक्षा सूचना",
        safety_description:
            "Medi AI माहिती आणि मार्गदर्शन देते. हे पात्र आरोग्य व्यावसायिकाचा पर्याय नाही.",

        welcome_back: "पुन्हा स्वागत आहे!",
        health_overview: "येथे तुमचा आरोग्य आढावा आहे.",
        heart_rate: "हृदय गती",
        blood_pressure: "रक्तदाब",
        temperature: "तापमान",
        sleep: "झोप",
        bpm: "BPM",
        hours: "तास",
        today: "आज",
        normal: "सामान्य",
        needs_attention: "लक्ष देणे आवश्यक",
        quick_actions: "जलद कृती",
        start_ai_check: "AI आरोग्य तपासणी सुरू करा",
        find_a_doctor: "डॉक्टर शोधा",
        view_records: "वैद्यकीय नोंदी पहा",
        track_measurements: "मोजमाप ट्रॅक करा",

        health_check_title: "AI आरोग्य तपासणी",
        health_check_desc:
            "सामान्य AI आरोग्य मार्गदर्शन मिळवण्यासाठी तुमची आरोग्य माहिती भरा.",
        age: "वय",
        gender: "लिंग",
        male: "पुरुष",
        female: "स्त्री",
        other: "इतर",
        temperature_label: "तापमान",
        blood_pressure_label: "रक्तदाब",
        symptoms: "लक्षणे",
        symptoms_placeholder: "तुमच्या लक्षणांचे वर्णन करा...",
        medical_history: "वैद्यकीय इतिहास",
        history_placeholder: "संबंधित वैद्यकीय इतिहास भरा...",
        analyze: "आरोग्याचे विश्लेषण करा",
        ai_summary: "AI आरोग्य सारांश",
        disclaimer:
            "ही माहिती केवळ शैक्षणिक उद्देशासाठी आहे आणि वैद्यकीय निदान किंवा प्रिस्क्रिप्शन नाही.",
        emergency: "आपत्कालीन",
        emergency_message:
            "गंभीर किंवा जीवघेणी लक्षणे असल्यास त्वरित स्थानिक आपत्कालीन सेवेशी संपर्क साधा.",

        consultations_title: "सल्लामसलत",
        upcoming: "आगामी सल्लामसलत",
        previous: "मागील सल्लामसलत",
        doctor: "डॉक्टर",
        specialty: "विशेषता",
        date: "तारीख",
        time: "वेळ",
        status: "स्थिती",
        action: "कृती",
        join_consultation: "सल्लामसलतीत सहभागी व्हा",
        completed: "पूर्ण",
        scheduled: "नियोजित",
        general_physician: "जनरल फिजिशियन",
        dermatologist: "त्वचारोग तज्ञ",
        cardiologist: "हृदयरोग तज्ञ",

        records_title: "वैद्यकीय नोंदी",
        records_desc: "तुमच्या आरोग्य नोंदी पहा आणि व्यवस्थापित करा.",
        add_record: "नोंद जोडा",
        record_type: "नोंद प्रकार",
        record_name: "नोंदीचे नाव",
        uploaded: "अपलोड केले",
        blood_test: "रक्त तपासणी",
        health_report: "आरोग्य तपासणी अहवाल",
        prescription: "प्रिस्क्रिप्शन",
        doctor_consultation: "डॉक्टर सल्लामसलत",
        privacy_notice: "गोपनीयता सूचना",
        privacy_description:
            "वास्तविक आरोग्य प्रणालीमध्ये वैद्यकीय नोंदी सुरक्षितपणे संग्रहित केल्या पाहिजेत.",

        tracking_title: "आरोग्य ट्रॅकिंग",
        tracking_desc: "वेळेनुसार तुमच्या आरोग्य मोजमापांचे निरीक्षण करा.",
        add_measurement: "मोजमाप जोडा",
        measurement_type: "मोजमाप प्रकार",
        value: "मूल्य",
        unit: "एकक",
        recent_measurements: "अलीकडील मोजमाप",

        doctor_title: "डॉक्टर शोधा",
        doctor_desc: "स्थान आणि विशेषतेनुसार आरोग्य तज्ञ शोधा.",
        location: "स्थान",
        location_placeholder: "तुमचे स्थान भरा",
        search_doctors: "डॉक्टर शोधा",
        available_doctors: "उपलब्ध डॉक्टर",
        consult: "सल्ला",
        experience: "अनुभव",
        years: "वर्षे",

        settings_title: "सेटिंग्ज",
        settings_desc: "तुमचे प्रोफाइल आणि अॅप प्राधान्ये व्यवस्थापित करा.",
        personal_information: "वैयक्तिक माहिती",
        full_name: "पूर्ण नाव",
        email: "ईमेल",
        phone: "फोन",
        language: "भाषा",
        notifications: "सूचना",
        notifications_on: "सक्षम",
        notifications_off: "बंद",
        change_password: "पासवर्ड बदला",
        privacy_security: "गोपनीयता आणि सुरक्षा",
        settings_saved: "सेटिंग्ज यशस्वीरित्या जतन केल्या.",
        password_demo: "प्रोडक्शनमध्ये सुरक्षित पासवर्ड बदलण्याची प्रक्रिया उघडेल.",
        logout_message: "तुम्ही डेमोमधून लॉग आउट झाला आहात.",
        footer_text: "Medi AI — AI-आधारित आरोग्य सहाय्य."
    },

    ta: {
        medi_ai: "மெடி AI",
        healthcare_assistant: "AI மூலம் இயங்கும் சுகாதார உதவியாளர்",
        dashboard: "டாஷ்போர்டு",
        ai_health_check: "AI சுகாதார பரிசோதனை",
        consultations: "ஆலோசனைகள்",
        medical_records: "மருத்துவ பதிவுகள்",
        health_tracking: "சுகாதார கண்காணிப்பு",
        find_doctor: "மருத்துவரைக் கண்டுபிடிக்கவும்",
        settings: "அமைப்புகள்",
        logout: "வெளியேறு",
        search: "தேடுக",
        save: "மாற்றங்களை சேமிக்கவும்",
        cancel: "ரத்து",
        submit: "சமர்ப்பிக்கவும்",
        add: "சேர்க்கவும்",
        view: "பார்க்கவும்",
        back: "பின்",

        welcome_title: "உங்கள் ஆரோக்கியம். AI உடன் இன்னும் சிறந்தது.",
        welcome_description:
            "Medi AI உங்கள் சுகாதார தகவல்களை ஒழுங்குபடுத்தவும், அறிகுறிகளைப் புரிந்துகொள்ளவும், ஆரோக்கியத்தை கண்காணிக்கவும் உதவுகிறது.",
        get_started: "தொடங்கவும்",
        try_health_check: "AI சுகாதார பரிசோதனையை முயற்சிக்கவும்",
        personalized_health: "தனிப்பயனாக்கப்பட்ட சுகாதார வழிகாட்டுதல்",
        track_health: "உங்கள் ஆரோக்கியத்தை கண்காணிக்கவும்",
        connect_doctors: "மருத்துவர்களுடன் இணைக்கவும்",
        safety_notice: "மருத்துவ பாதுகாப்பு அறிவிப்பு",
        safety_description:
            "Medi AI தகவல் மற்றும் வழிகாட்டுதலை வழங்குகிறது. இது தகுதியான சுகாதார நிபுணருக்கு மாற்றாகாது.",

        welcome_back: "மீண்டும் வரவேற்கிறோம்!",
        health_overview: "உங்கள் சுகாதார கண்ணோட்டம் இங்கே உள்ளது.",
        heart_rate: "இதய துடிப்பு",
        blood_pressure: "இரத்த அழுத்தம்",
        temperature: "வெப்பநிலை",
        sleep: "தூக்கம்",
        today: "இன்று",
        normal: "இயல்பானது",
        needs_attention: "கவனம் தேவை",

        health_check_title: "AI சுகாதார பரிசோதனை",
        age: "வயது",
        gender: "பாலினம்",
        male: "ஆண்",
        female: "பெண்",
        other: "மற்றவை",
        symptoms: "அறிகுறிகள்",
        symptoms_placeholder: "உங்கள் அறிகுறிகளை விவரிக்கவும்...",
        medical_history: "மருத்துவ வரலாறு",
        history_placeholder: "தொடர்புடைய மருத்துவ வரலாற்றை உள்ளிடவும்...",
        analyze: "ஆரோக்கியத்தை பகுப்பாய்வு செய்யவும்",
        ai_summary: "AI சுகாதார சுருக்கம்",
        disclaimer:
            "இந்த தகவல் கல்வி நோக்கத்திற்காக மட்டுமே. இது மருத்துவ நோயறிதல் அல்லது மருந்துச் சீட்டு அல்ல.",
        emergency: "அவசரநிலை",
        emergency_message:
            "கடுமையான அல்லது உயிருக்கு ஆபத்தான அறிகுறிகள் இருந்தால் உடனடியாக உள்ளூர் அவசர சேவையை தொடர்பு கொள்ளவும்.",

        consultations_title: "ஆலோசனைகள்",
        upcoming: "வரவிருக்கும் ஆலோசனை",
        previous: "முந்தைய ஆலோசனைகள்",
        doctor: "மருத்துவர்",
        specialty: "சிறப்பு",
        date: "தேதி",
        time: "நேரம்",
        status: "நிலை",
        action: "செயல்",
        join_consultation: "ஆலோசனையில் சேரவும்",
        completed: "முடிந்தது",
        scheduled: "திட்டமிடப்பட்டது",

        records_title: "மருத்துவ பதிவுகள்",
        records_desc: "உங்கள் சுகாதார பதிவுகளைப் பார்க்கவும் மற்றும் நிர்வகிக்கவும்.",
        add_record: "பதிவைச் சேர்க்கவும்",
        record_type: "பதிவு வகை",
        record_name: "பதிவு பெயர்",
        uploaded: "பதிவேற்றப்பட்டது",
        privacy_notice: "தனியுரிமை அறிவிப்பு",

        tracking_title: "சுகாதார கண்காணிப்பு",
        tracking_desc: "காலப்போக்கில் உங்கள் சுகாதார அளவீடுகளைக் கண்காணிக்கவும்.",
        add_measurement: "அளவீட்டைச் சேர்க்கவும்",
        measurement_type: "அளவீட்டு வகை",
        value: "மதிப்பு",
        unit: "அலகு",
        recent_measurements: "சமீபத்திய அளவீடுகள்",

        doctor_title: "மருத்துவரைக் கண்டுபிடிக்கவும்",
        doctor_desc: "இடம் மற்றும் சிறப்பின் அடிப்படையில் மருத்துவர்களைக் கண்டறியவும்.",
        location: "இடம்",
        location_placeholder: "உங்கள் இடத்தை உள்ளிடவும்",
        search_doctors: "மருத்துவர்களைத் தேடவும்",
        available_doctors: "கிடைக்கும் மருத்துவர்கள்",
        consult: "ஆலோசனை",

        settings_title: "அமைப்புகள்",
        settings_desc: "உங்கள் சுயவிவரம் மற்றும் பயன்பாட்டு விருப்பங்களை நிர்வகிக்கவும்.",
        personal_information: "தனிப்பட்ட தகவல்",
        full_name: "முழு பெயர்",
        email: "மின்னஞ்சல்",
        phone: "தொலைபேசி",
        language: "மொழி",
        notifications: "அறிவிப்புகள்",
        change_password: "கடவுச்சொல்லை மாற்றவும்",
        privacy_security: "தனியுரிமை மற்றும் பாதுகாப்பு",
        settings_saved: "அமைப்புகள் வெற்றிகரமாக சேமிக்கப்பட்டன.",
        footer_text: "Medi AI — AI சுகாதார உதவி."
    },

    te: {
        medi_ai: "మెడి AI",
        healthcare_assistant: "AI ఆధారిత ఆరోగ్య సహాయకుడు",
        dashboard: "డ్యాష్‌బోర్డ్",
        ai_health_check: "AI ఆరోగ్య పరీక్ష",
        consultations: "సంప్రదింపులు",
        medical_records: "వైద్య రికార్డులు",
        health_tracking: "ఆరోగ్య ట్రాకింగ్",
        find_doctor: "డాక్టర్‌ను కనుగొనండి",
        settings: "సెట్టింగ్స్",
        logout: "లాగ్ అవుట్",
        search: "వెతకండి",
        save: "మార్పులను సేవ్ చేయండి",
        cancel: "రద్దు",
        submit: "సమర్పించండి",
        add: "జోడించండి",
        view: "చూడండి",
        back: "వెనుకకు",

        welcome_title: "మీ ఆరోగ్యం. AIతో మరింత మెరుగ్గా.",
        welcome_description:
            "Medi AI మీ ఆరోగ్య సమాచారాన్ని నిర్వహించడానికి, లక్షణాలను అర్థం చేసుకోవడానికి, ఆరోగ్యాన్ని ట్రాక్ చేయడానికి మరియు వైద్యులతో కనెక్ట్ అవ్వడానికి సహాయపడుతుంది.",
        get_started: "ప్రారంభించండి",
        try_health_check: "AI ఆరోగ్య పరీక్షను ప్రయత్నించండి",
        personalized_health: "వ్యక్తిగత ఆరోగ్య మార్గదర్శకం",
        track_health: "మీ ఆరోగ్యాన్ని ట్రాక్ చేయండి",
        connect_doctors: "వైద్యులతో కనెక్ట్ అవ్వండి",
        safety_notice: "వైద్య భద్రతా సూచన",
        safety_description:
            "Medi AI సమాచారం మరియు మార్గదర్శకాన్ని అందిస్తుంది. ఇది అర్హత కలిగిన వైద్య నిపుణుడికి ప్రత్యామ్నాయం కాదు.",

        welcome_back: "తిరిగి స్వాగతం!",
        health_overview: "మీ ఆరోగ్య అవలోకనం ఇక్కడ ఉంది.",
        heart_rate: "హృదయ స్పందన",
        blood_pressure: "రక్తపోటు",
        temperature: "ఉష్ణోగ్రత",
        sleep: "నిద్ర",
        today: "ఈరోజు",
        normal: "సాధారణం",
        needs_attention: "శ్రద్ధ అవసరం",

        health_check_title: "AI ఆరోగ్య పరీక్ష",
        age: "వయస్సు",
        gender: "లింగం",
        male: "పురుషుడు",
        female: "స్త్రీ",
        other: "ఇతర",
        symptoms: "లక్షణాలు",
        symptoms_placeholder: "మీ లక్షణాలను వివరించండి...",
        medical_history: "వైద్య చరిత్ర",
        history_placeholder: "సంబంధిత వైద్య చరిత్రను నమోదు చేయండి...",
        analyze: "ఆరోగ్యాన్ని విశ్లేషించండి",
        ai_summary: "AI ఆరోగ్య సారాంశం",
        disclaimer:
            "ఈ సమాచారం విద్యా ప్రయోజనాల కోసం మాత్రమే. ఇది వైద్య నిర్ధారణ లేదా ప్రిస్క్రిప్షన్ కాదు.",
        emergency: "అత్యవసరం",
        emergency_message:
            "తీవ్రమైన లేదా ప్రాణాపాయ లక్షణాలు ఉంటే వెంటనే స్థానిక అత్యవసర సేవలను సంప్రదించండి.",

        consultations_title: "సంప్రదింపులు",
        upcoming: "రాబోయే సంప్రదింపు",
        previous: "మునుపటి సంప్రదింపులు",
        doctor: "డాక్టర్",
        specialty: "ప్రత్యేకత",
        date: "తేదీ",
        time: "సమయం",
        status: "స్థితి",
        action: "చర్య",
        join_consultation: "సంప్రదింపులో చేరండి",
        completed: "పూర్తయింది",
        scheduled: "షెడ్యూల్ చేయబడింది",

        records_title: "వైద్య రికార్డులు",
        records_desc: "మీ ఆరోగ్య రికార్డులను చూడండి మరియు నిర్వహించండి.",
        add_record: "రికార్డ్ జోడించండి",
        record_type: "రికార్డ్ రకం",
        record_name: "రికార్డ్ పేరు",
        uploaded: "అప్‌లోడ్ చేయబడింది",
        privacy_notice: "గోప్యతా సూచన",

        tracking_title: "ఆరోగ్య ట్రాకింగ్",
        tracking_desc: "కాలక్రమేణా మీ ఆరోగ్య కొలతలను పర్యవేక్షించండి.",
        add_measurement: "కొలత జోడించండి",
        measurement_type: "కొలత రకం",
        value: "విలువ",
        unit: "యూనిట్",
        recent_measurements: "ఇటీవలి కొలతలు",

        doctor_title: "డాక్టర్‌ను కనుగొనండి",
        doctor_desc: "స్థానం మరియు ప్రత్యేకత ఆధారంగా వైద్యులను కనుగొనండి.",
        location: "స్థానం",
        location_placeholder: "మీ స్థానాన్ని నమోదు చేయండి",
        search_doctors: "డాక్టర్లను వెతకండి",
        available_doctors: "అందుబాటులో ఉన్న డాక్టర్లు",
        consult: "సంప్రదించండి",

        settings_title: "సెట్టింగ్స్",
        settings_desc: "మీ ప్రొఫైల్ మరియు యాప్ ప్రాధాన్యతలను నిర్వహించండి.",
        personal_information: "వ్యక్తిగత సమాచారం",
        full_name: "పూర్తి పేరు",
        email: "ఈమెయిల్",
        phone: "ఫోన్",
        language: "భాష",
        notifications: "నోటిఫికేషన్లు",
        change_password: "పాస్‌వర్డ్ మార్చండి",
        privacy_security: "గోప్యత మరియు భద్రత",
        settings_saved: "సెట్టింగ్స్ విజయవంతంగా సేవ్ చేయబడ్డాయి.",
        footer_text: "Medi AI — AI ఆధారిత ఆరోగ్య సహాయం."
    },

    bn: {
        medi_ai: "মেডি AI",
        healthcare_assistant: "AI-চালিত স্বাস্থ্য সহায়ক",
        dashboard: "ড্যাশবোর্ড",
        ai_health_check: "AI স্বাস্থ্য পরীক্ষা",
        consultations: "পরামর্শ",
        medical_records: "মেডিকেল রেকর্ড",
        health_tracking: "স্বাস্থ্য ট্র্যাকিং",
        find_doctor: "ডাক্তার খুঁজুন",
        settings: "সেটিংস",
        logout: "লগ আউট",
        search: "অনুসন্ধান",
        save: "পরিবর্তন সংরক্ষণ করুন",
        cancel: "বাতিল",
        submit: "জমা দিন",
        add: "যোগ করুন",
        view: "দেখুন",
        back: "ফিরে যান",

        welcome_title: "আপনার স্বাস্থ্য। AI-এর সাথে আরও স্মার্ট।",
        welcome_description:
            "Medi AI আপনার স্বাস্থ্য তথ্য সংগঠিত করতে, উপসর্গ বুঝতে, স্বাস্থ্য ট্র্যাক করতে এবং চিকিৎসকদের সাথে যোগাযোগ করতে সাহায্য করে।",
        get_started: "শুরু করুন",
        try_health_check: "AI স্বাস্থ্য পরীক্ষা চেষ্টা করুন",
        personalized_health: "ব্যক্তিগত স্বাস্থ্য নির্দেশনা",
        track_health: "আপনার স্বাস্থ্য ট্র্যাক করুন",
        connect_doctors: "ডাক্তারের সাথে যোগাযোগ করুন",
        safety_notice: "চিকিৎসা নিরাপত্তা বিজ্ঞপ্তি",
        safety_description:
            "Medi AI তথ্য ও নির্দেশনা প্রদান করে। এটি যোগ্য স্বাস্থ্যসেবা পেশাদারের বিকল্প নয়।",

        welcome_back: "আবার স্বাগতম!",
        health_overview: "এখানে আপনার স্বাস্থ্য সংক্ষিপ্তসার রয়েছে।",
        heart_rate: "হৃদস্পন্দন",
        blood_pressure: "রক্তচাপ",
        temperature: "তাপমাত্রা",
        sleep: "ঘুম",
        today: "আজ",
        normal: "স্বাভাবিক",
        needs_attention: "মনোযোগ প্রয়োজন",

        health_check_title: "AI স্বাস্থ্য পরীক্ষা",
        age: "বয়স",
        gender: "লিঙ্গ",
        male: "পুরুষ",
        female: "মহিলা",
        other: "অন্যান্য",
        symptoms: "উপসর্গ",
        symptoms_placeholder: "আপনার উপসর্গ বর্ণনা করুন...",
        medical_history: "চিকিৎসা ইতিহাস",
        history_placeholder: "প্রাসঙ্গিক চিকিৎসা ইতিহাস লিখুন...",
        analyze: "স্বাস্থ্য বিশ্লেষণ করুন",
        ai_summary: "AI স্বাস্থ্য সারাংশ",
        disclaimer:
            "এই তথ্য শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে এবং এটি চিকিৎসা নির্ণয় বা প্রেসক্রিপশন নয়।",
        emergency: "জরুরি অবস্থা",
        emergency_message:
            "গুরুতর বা জীবন-হুমকির উপসর্গ থাকলে অবিলম্বে স্থানীয় জরুরি পরিষেবায় যোগাযোগ করুন।",

        consultations_title: "পরামর্শ",
        upcoming: "আসন্ন পরামর্শ",
        previous: "পূর্ববর্তী পরামর্শ",
        doctor: "ডাক্তার",
        specialty: "বিশেষত্ব",
        date: "তারিখ",
        time: "সময়",
        status: "অবস্থা",
        action: "কাজ",
        join_consultation: "পরামর্শে যোগ দিন",
        completed: "সম্পন্ন",
        scheduled: "নির্ধারিত",

        records_title: "মেডিকেল রেকর্ড",
        records_desc: "আপনার স্বাস্থ্য রেকর্ড দেখুন এবং পরিচালনা করুন।",
        add_record: "রেকর্ড যোগ করুন",
        record_type: "রেকর্ডের ধরন",
        record_name: "রেকর্ডের নাম",
        uploaded: "আপলোড হয়েছে",
        privacy_notice: "গোপনীয়তা বিজ্ঞপ্তি",

        tracking_title: "স্বাস্থ্য ট্র্যাকিং",
        tracking_desc: "সময়ের সাথে আপনার স্বাস্থ্য পরিমাপ পর্যবেক্ষণ করুন।",
        add_measurement: "পরিমাপ যোগ করুন",
        measurement_type: "পরিমাপের ধরন",
        value: "মান",
        unit: "একক",
        recent_measurements: "সাম্প্রতিক পরিমাপ",

        doctor_title: "ডাক্তার খুঁজুন",
        doctor_desc: "অবস্থান এবং বিশেষত্ব অনুযায়ী ডাক্তার খুঁজুন।",
        location: "অবস্থান",
        location_placeholder: "আপনার অবস্থান লিখুন",
        search_doctors: "ডাক্তার খুঁজুন",
        available_doctors: "উপলব্ধ ডাক্তার",
        consult: "পরামর্শ",

        settings_title: "সেটিংস",
        settings_desc: "আপনার প্রোফাইল এবং অ্যাপের পছন্দ পরিচালনা করুন।",
        personal_information: "ব্যক্তিগত তথ্য",
        full_name: "পুরো নাম",
        email: "ইমেইল",
        phone: "ফোন",
        language: "ভাষা",
        notifications: "বিজ্ঞপ্তি",
        change_password: "পাসওয়ার্ড পরিবর্তন করুন",
        privacy_security: "গোপনীয়তা ও নিরাপত্তা",
        settings_saved: "সেটিংস সফলভাবে সংরক্ষণ করা হয়েছে।",
        footer_text: "Medi AI — AI-চালিত স্বাস্থ্য সহায়তা।"
    }
};


/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */

function initializeLanguage() {
    const savedLanguage = localStorage.getItem("medi_ai_language") || "en";

    applyLanguage(savedLanguage);

    document.querySelectorAll("[data-language-select]").forEach(select => {
        select.value = savedLanguage;

        select.addEventListener("change", () => {
            changeLanguage(select.value);
        });
    });
}

function changeLanguage(language) {
    if (!translations[language]) {
        language = "en";
    }

    localStorage.setItem("medi_ai_language", language);
    applyLanguage(language);
}

function applyLanguage(language) {
    const dictionary = translations[language] || translations.en;

    document.documentElement.lang = language;

    /* Text */
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    /* Placeholders */
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;

        if (dictionary[key]) {
            element.placeholder = dictionary[key];
        }
    });

    /* Tooltips / titles */
    document.querySelectorAll("[data-i18n-title]").forEach(element => {
        const key = element.dataset.i18nTitle;

        if (dictionary[key]) {
            element.title = dictionary[key];
        }
    });

    /* Language selectors */
    document.querySelectorAll("[data-language-select]").forEach(select => {
        select.value = language;
    });
}

function t(key) {
    const language = localStorage.getItem("medi_ai_language") || "en";

    return (
        translations[language]?.[key] ||
        translations.en[key] ||
        key
    );
}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function setActiveNavigation() {
    const currentPage =
        window.location.pathname.split("/").pop() || "welcome.html";

    document.querySelectorAll(".nav a").forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}


/* =========================================================
   EMERGENCY BUTTON
   ========================================================= */

function initializeEmergencyButton() {
    document.querySelectorAll("[data-emergency]").forEach(button => {
        button.addEventListener("click", showEmergencyMessage);
    });
}

function showEmergencyMessage() {
    alert(t("emergency_message"));
}


/* =========================================================
   AI HEALTH CHECK
   ========================================================= */

function initializeHealthForm() {
    const form = document.getElementById("healthForm");

    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        analyzeHealth();
    });
}

function analyzeHealth() {
    const symptoms = getValue("symptoms");

    if (!symptoms) {
        alert(
            t("symptoms") +
            " " +
            (localStorage.getItem("medi_ai_language") === "gu"
                ? "દાખલ કરો."
                : "is required.")
        );
        return;
    }

    const age = getValue("age");
    const temperature = getValue("temperature");
    const bloodPressure = getValue("bloodPressure");
    const history = getValue("history");

    const summary = document.getElementById("summary");
    const result = document.getElementById("result");

    if (!summary || !result) return;

    summary.innerHTML = `
        <strong>${escapeHTML(t("ai_summary"))}</strong>
        <p>
            ${escapeHTML(t("symptoms"))}:
            ${escapeHTML(symptoms)}
        </p>

        ${age ? `<p>${escapeHTML(t("age"))}: ${escapeHTML(age)}</p>` : ""}

        ${temperature
            ? `<p>${escapeHTML(t("temperature_label"))}: ${escapeHTML(temperature)}</p>`
            : ""
        }

        ${bloodPressure
            ? `<p>${escapeHTML(t("blood_pressure_label"))}: ${escapeHTML(bloodPressure)}</p>`
            : ""
        }

        ${history
            ? `<p>${escapeHTML(t("medical_history"))}: ${escapeHTML(history)}</p>`
            : ""
        }

        <div class="notice warning">
            ${escapeHTML(t("disclaimer"))}
        </div>
    `;

    result.style.display = "block";
}


/* =========================================================
   DOCTOR SEARCH
   ========================================================= */

function initializeDoctorSearch() {
    const form = document.getElementById("doctorSearchForm");

    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        findDoctors();
    });
}

function findDoctors() {
    const location = getValue("location");
    const specialty = getValue("specialty");

    if (!location) {
        alert(t("location_placeholder"));
        return;
    }

    alert(
        `${t("search_doctors")}: ${location}` +
        (specialty ? `\n${t("specialty")}: ${specialty}` : "")
    );
}


/* =========================================================
   CONSULTATION
   ========================================================= */

function startConsultation(doctorName) {
    const confirmed = confirm(
        `${t("join_consultation")} ${doctorName}?`
    );

    if (confirmed) {
        alert(`${t("join_consultation")}: ${doctorName}`);
    }
}

document.addEventListener("click", event => {
    const button = event.target.closest("[data-consult-doctor]");

    if (!button) return;

    const doctorName =
        button.dataset.consultDoctor || t("doctor");

    startConsultation(doctorName);
});


/* =========================================================
   HEALTH TRACKING
   ========================================================= */

function initializeHealthTracking() {
    const form = document.getElementById("measurementForm");

    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();
        saveHealthMeasurement();
    });
}

function saveHealthMeasurement() {
    const type = getValue("measurementType");
    const value = getValue("measurementValue");
    const unit = getValue("measurementUnit");

    if (!type || !value) {
        alert(t("value") + " " + t("submit"));
        return;
    }

    const measurements =
        JSON.parse(localStorage.getItem("medi_ai_measurements") || "[]");

    measurements.push({
        type,
        value,
        unit,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem(
        "medi_ai_measurements",
        JSON.stringify(measurements)
    );

    alert(t("settings_saved"));

    location.reload();
}


/* =========================================================
   SETTINGS
   ========================================================= */

function initializeSettings() {
    const form = document.getElementById("settingsForm");

    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        const data = {
            name: getValue("fullName"),
            email: getValue("email"),
            phone: getValue("phone"),
            language:
                document.querySelector("[data-language-select]")?.value || "en"
        };

        localStorage.setItem(
            "medi_ai_profile",
            JSON.stringify(data)
        );

        changeLanguage(data.language);

        alert(t("settings_saved"));
    });
}


/* =========================================================
   WELCOME PAGE
   ========================================================= */

function initializeWelcomePage() {
    const welcome = document.querySelector(".welcome-page");

    if (!welcome) return;

    const language =
        localStorage.getItem("medi_ai_language") || "en";

    applyLanguage(language);
}


/* =========================================================
   MODALS
   ========================================================= */

function openModal(id) {
    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.add("show");
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.remove("show");
    }
}


/* =========================================================
   PATIENT DATA
   ========================================================= */

function savePatientData(data) {
    /*
      DEMO ONLY.

      Do NOT use localStorage for sensitive medical data
      in a real healthcare application.
    */

    localStorage.setItem(
        "medi_ai_patient",
        JSON.stringify(data)
    );
}

function loadPatientData() {
    return JSON.parse(
        localStorage.getItem("medi_ai_patient") || "null"
    );
}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {
    alert(t("logout_message"));
}


/* =========================================================
   HELPERS
   ========================================================= */

function getValue(id) {
    const element = document.getElementById(id);

    return element
        ? element.value.trim()
        : "";
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

export const translations = {
  en: {
    heroOm: 'ॐ',
    heroTop: 'Together with their families,',
    heroInv: 'joyfully invite you to their wedding celebration',
    heroNames: 'Aayush & Kavya',
    heroDate: '12 MAY 2026',
    scroll: 'Scroll Down ↓',
    mantra: 'Vakratunda Mahakaya Suryakoti Samaprabha,\nNirvighnam Kuru Me Deva Sarvakaryeshu Sarvada',
    story1Title: 'The Beginning of a Bond',
    story1Text: 'With the blessings of our families,\na beautiful relationship was arranged...\nTwo families connected,\nand a new journey began...',
    story2Title: 'Two Hearts, One Journey',
    story2Text: 'A beautiful journey of two souls.\nNow the time has come to celebrate this sacred bond with you 💖',
    breakTitle: 'Seven vows, seven lifetimes\nof togetherness',
    galleryTitle: 'Our Memories',
    gallerySub: 'Beautiful moments that brought us here 💖',
    eventsTitle: 'Wedding Functions',
    eventsSub: 'Join us for the celebrations',
    haldi: 'Haldi Ceremony',
    haldiSub: 'The beginning of colors and joy',
    mehendi: 'Mehendi Ceremony',
    mehendiSub: 'An evening painted with colors of love',
    sangeet: 'Sangeet Ceremony',
    sangeetSub: 'A night of celebration, dance and music',
    wedding: 'Wedding & Phere',
    weddingSub: 'The sacred pact of seven lifetimes',
    dateLabel: 'Date:',
    timeLabel: 'Time:',
    venueLabel: 'Venue:',
    haldiDate: '10 MAY 2026',
    mehendiDate: '10 MAY 2026',
    sangeetDate: '11 MAY 2026',
    weddingDate: '12 MAY 2026',
    floralVenue: 'The Floral Gardens',
    oakVenue: 'Green Oak Courtyard',
    crystalVenue: 'The Crystal Ballroom',
    royalVenue: 'Royal Palace Grounds',
    countdownTitle: 'Time left for our special day...',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    location: 'Venue Details',
    locationSub: 'Welcome to our special day',
    venueAddress: '123 Heritage Route, Grand City, 450001',
    getDirections: 'View Location 📍',
    rsvpSub: 'Mark Your Presence',
    rsvpTitle: "Can't wait to see you!",
    rsvpName: 'Full Name',
    rsvpCount: 'Guests Count',
    rsvpAttend: 'Will you attend?',
    rsvpYes: 'Joyfully Accept',
    rsvpNo: 'Regretfully Decline',
    rsvpBtn: 'Submit',
    thankYou: 'Thank You!',
    received: 'We have received your response.',
    endTitle: 'Your presence will be our true blessing 💕',
    endSub: 'Please come and make our special day even more memorable',
    footerNames: 'Aayush ❤️ Kavya\nAwaiting your presence...'
  },
  hi: {
    heroOm: 'ॐ शुभ विवाह',
    heroTop: 'अपने परिवारों के साथ,',
    heroInv: 'आपको सादर आमंत्रित करते हैं\nहमारे विवाह समारोह में',
    heroNames: 'आयुष ❤️ काव्या',
    heroDate: 'दिनांक: 12 मई 2026',
    scroll: 'नीचे स्क्रॉल करें ↓',
    mantra: 'वक्रतुंड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    story1Title: 'रिश्ते की शुरुआत',
    story1Text: 'हमारे परिवारों के आशीर्वाद से,\nएक सुंदर रिश्ता तय हुआ...\nदो परिवार जुड़े,\nऔर एक नया सफर शुरू हुआ...',
    story2Title: 'आयुष ❤️ काव्या',
    story2Text: 'दो दिल, एक रिश्ता, एक खूबसूरत सफर\nअब इस पवित्र बंधन को\nआपके साथ मनाने का समय आ गया है 💖',
    breakTitle: 'सात फेरे, सात वचन,\nसात जन्मों का साथ ',
    galleryTitle: 'हमारी यादें',
    gallerySub: 'कुछ खूबसूरत पल, जो हमें यहां तक लाए 💖',
    eventsTitle: 'विवाह कार्यक्रम',
    eventsSub: 'समारोह में हमारे साथ शामिल हों',
    haldi: 'हल्दी समारोह',
    haldiSub: 'खुशियों और रंगों की शुरुआत',
    mehendi: 'मेहंदी समारोह',
    mehendiSub: 'प्यार के रंगों से सजी शाम',
    sangeet: 'संगीत समारोह',
    sangeetSub: 'खुशियों और नाच-गाने की रात',
    wedding: 'विवाह एवं फेरे',
    weddingSub: 'सात जन्मों का पवित्र बंधन',
    dateLabel: 'तारीख:',
    timeLabel: 'समय:',
    venueLabel: 'स्थान:',
    haldiDate: '10 मई 2026',
    mehendiDate: '10 मई 2026',
    sangeetDate: '11 मई 2026',
    weddingDate: '12 मई 2026',
    floralVenue: 'द फ्लोरल गार्डन्स',
    oakVenue: 'ग्रीन ओक कोर्टयार्ड',
    crystalVenue: 'द क्रिस्टल बॉलरूम',
    royalVenue: 'रॉयल पैलेस ग्राउंड्स',
    countdownTitle: 'हमारे इस खास दिन के लिए\nअब बस इतना समय बाकी है...',
    days: 'दिन',
    hours: 'घंटे',
    minutes: 'मिनट',
    seconds: 'सेकंड',
    location: 'कार्यक्रम स्थल',
    locationSub: 'आपका स्वागत है हमारे इस खास दिन पर',
    venueAddress: '123 हेरिटेज रूट, ग्रैंड सिटी, 450001',
    getDirections: 'लोकेशन देखें 📍',
    rsvpSub: 'अपनी उपस्थिति दर्ज करें',
    rsvpTitle: "हम आपका बेसब्री से इंतज़ार कर रहे हैं!",
    rsvpName: 'नाम',
    rsvpCount: 'मेहमानों की संख्या',
    rsvpAttend: 'क्या आप आएंगे?',
    rsvpYes: 'खुशी से स्वीकार',
    rsvpNo: 'खेद के साथ अस्वीकार',
    rsvpBtn: 'सबमिट करें',
    thankYou: 'धन्यवाद!',
    received: 'हमें आपका उत्तर मिल गया है।',
    endTitle: 'आपकी उपस्थिति हमारे लिए सौभाग्य होगी 💕',
    endSub: 'कृपया आकर हमारे इस खास दिन को और भी यादगार बनाएं',
    footerNames: 'आयुष ❤️ काव्या\nआपका इंतजार रहेगा...'
  }
};

type ContextType = {
  lang: Language;
  toggle: () => void;
  t: (key: keyof typeof translations['en']) => string;
};

const LanguageContext = createContext<ContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const toggle = () => setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  const t = (key: keyof typeof translations['en']) => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

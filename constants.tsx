import React from 'react';
import { Presentation, BarChart3, PenTool, ClipboardCheck, Wine, CreditCard, Home } from 'lucide-react';
import { Member, Project } from './types';

// Using high-quality placeholder images that match the team member descriptions.
// To use your own photos, please ensure the files are in the 'public' folder and update these paths (e.g., '/dror.jpg').
const IMAGES = {
  dror: 'https://i.postimg.cc/8c9tpG6f/דרור.jpg', // Professional & Tech
  yahel: 'https://i.postimg.cc/mkJ8L4Hy/יהל.jpg', // Creative & Management
  ziv: 'https://i.postimg.cc/3NVn8hvZ/זיו.jpg', // Organized & Formal
  stav: 'https://i.postimg.cc/NFSpstH6/סתיו.jpg' // Presentation & Marketing
};

export const TEAM_MEMBERS: Member[] = [
  {
    name: 'יהל לביא',
    role: 'ניהול ומימון',
    description: 'יכולות ניהוליות גבוהות, חשיבה יצירתית, עיצוב ויזואלי ברמה גבוהה.',
    imageUrl: IMAGES.yahel,
    iconType: 'design',
    skills: ['ניהול', 'חשיבה יצירתית', 'עיצוב ויזואלי']
  },
  {
    name: 'סתיו קינן',
    role: 'ניהול ושיווק',
    description: 'מיומנות פרזנטציה חזקה, עמידה מול קהל, שיווק, חשיבה יצירתית.',
    imageUrl: IMAGES.stav,
    iconType: 'presentation',
    skills: ['פרזנטציה', 'שיווק', 'עמידה מול קהל']
  },
  {
    name: 'דרור טפר',
    role: 'ניהול, יזמות וחדשנות',
    description: 'ניתוח ועיבוד נתונים, מחקר שוק, התמחות בטכנולוגיות חדשות.',
    imageUrl: IMAGES.dror,
    iconType: 'data',
    skills: ['ניתוח נתונים', 'מחקר שוק', 'טכנולוגיות']
  },
  {
    name: 'זיו רז',
    role: 'ניהול, יזמות וחדשנות',
    description: 'כתיבה וניסוח, חשיבה יצירתית, ארגון וסדר ברמה גבוהה במיוחד.',
    imageUrl: IMAGES.ziv,
    iconType: 'organize',
    skills: ['כתיבה וניסוח', 'ארגון וסדר', 'חשיבה יצירתית']
  }
];

export const GROUP_CAPABILITIES = [
  "מחויבות גבוהה ומקצועיות ללא פשרות",
  "השקעה מהלב בכל משימה",
  "שילוב מאוזן של ניתוח נתונים, חשיבה יצירתית, תקשורת ועיצוב",
  "חשיבה מערכתית ופתרון בעיות מורכבות",
  "עבודה קבוצתית מצוינת ושיתוף פעולה מלא"
];

export const GROUP_VISION = "ליצור פרויקט בעל ערך ממשי, המשפר את איכות החיים בישראל, עונה על צרכים אמיתיים בשוק, מזהה נקודות כאב ומפתח להן פתרונות חדשניים וישימים.";

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'בית הלוחם',
    category: 'שיקום וקהילה',
    description: 'יצירת ערך מוסף עבור פצועי צה"ל ובני משפחותיהם.',
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800' 
  },
  {
    id: 'p2',
    name: "עמותת מיראז' פרויקט יין",
    category: 'פיתוח אזורי',
    description: 'קידום תעשיית היין בנגב כחלק מפיתוח התיירות והכלכלה.',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    name: 'Fly Card',
    category: 'פיננסים ותיירות',
    description: 'חדשנות במועדוני לקוחות ופתרונות אשראי מתקדמים.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800'
  }
];

export const getIcon = (type: string, size = 24) => {
  switch (type) {
    case 'presentation': return <Presentation size={size} className="text-purple-500" />;
    case 'data': return <BarChart3 size={size} className="text-blue-500" />;
    case 'design': return <PenTool size={size} className="text-pink-500" />;
    case 'organize': return <ClipboardCheck size={size} className="text-green-500" />;
    case 'wine': return <Wine size={size} />;
    case 'card': return <CreditCard size={size} />;
    case 'home': return <Home size={size} />;
    default: return <Presentation size={size} />;
  }
};
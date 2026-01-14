"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Moon,
  Sun,
  Zap,
  X,
} from "lucide-react";

const LEVELS = {
  national: {
    label: { zh: "国家级", en: "National", yue: "國家級" },
    color:
      "text-red-800 dark:text-red-300 border-red-800 dark:border-red-300",
  },
  provincial: {
    label: { zh: "省级", en: "Provincial", yue: "省級" },
    color:
      "text-amber-700 dark:text-amber-300 border-amber-700 dark:border-amber-300",
  },
  municipal: {
    label: { zh: "市级", en: "Municipal", yue: "市級" },
    color:
      "text-blue-800 dark:text-blue-300 border-blue-800 dark:border-blue-300",
  },
  school: {
    label: { zh: "校级", en: "School", yue: "校級" },
    color:
      "text-emerald-800 dark:text-emerald-300 border-emerald-800 dark:border-emerald-300",
  },
  department: {
    label: { zh: "系部级", en: "Dept.", yue: "系部級" },
    color:
      "text-gray-600 dark:text-gray-400 border-gray-600 dark:border-gray-400",
  },
} as const;

const TRANSLATIONS = {
  zh: {
    name: "冯汶乐",
    role: "Medical Lab Tech",
    nav: {
      home: "主页",
      clinical: "临床视界",
      neural: "数字神经",
      honors: "荣誉墙",
      research: "学术档案",
    },
    hero: {
      greeting: "你好，我是冯汶乐",
      title_main: "冯汶乐",
      title_sub: "FENG WENLE",
      role_en: "MEDICAL LABORATORY TECHNOLOGY",
      intro:
        "ENTP 辩论家型人格。热衷于在微观菌落与宏观数据间寻找逻辑的火花，以创新思维打破医学诊断的既定边界。",
    },
    resume: {
      section_title: "佛山大学履历",
      university: "佛山大学",
      degree: "医学检验技术 (本科在读)",
      duration: "2023.09 - 2027.06",
      items: [
        {
          date: "2025.05 - 至今",
          title: "细菌生物信息学研究",
          role: "科研项目",
          desc: "指导老师：广东省中医院 屈平华 (主任技师)",
          type: "research",
        },
        {
          date: "2025.01 - 至今",
          title: "真菌/血液/骨髓形态学与AI识别",
          role: "科研项目",
          desc: "指导老师：佛山市中医院 陈海生团队",
          type: "research",
        },
        {
          date: "2023.09 - 2025.06",
          title: "23医学检验技术3班 班长",
          role: "学生职务",
          desc: "统筹班级事务，协助辅导员管理班级",
          type: "leadership",
        },
        {
          date: "2023.09 - 2024.06",
          title: "校团委新闻部 干事",
          role: "社团经历",
          desc: "负责校园新闻采编与活动报道",
          type: "activity",
        },
      ],
    },
    sections: {
      skills: "专业技能",
      readMore: "阅读",
      back: "返回索引",
      filterTitle: "按级别筛选",
      papers: "论文",
      patents: "专利",
      invention: "发明专利",
      utility: "实用新型",
      contact: "联系",
      editorialNote: "编辑提示：完整内容（含高清显微图与R代码分析）可按需提供。",
      proofs: "材料",
      viewProofs: "查看材料",
      pending: "待上传",
      moreLinks: "相关链接",
    },
    theme: { light: "Light", dark: "Dark", system: "Auto" },
    ui: {
      portfolioTag: "作品集 ’25",
      archetypeLabel: "人格类型",
      traitsLabel: "特质",
      traits: ["外向", "直觉", "思考", "探索"],
      stats: [
        { label: "微生物学", value: "90%" },
        { label: "数据分析", value: "R / SPSS" },
        { label: "媒介", value: "Davinci" },
        { label: "位置", value: "中国 / 广东" },
      ],
      articleHeadings: {
        clinical: { title: "临床视角", tag: "微生物学" },
        neural: { title: "数字神经", tag: "数据科学" },
      },
      honorsTable: { level: "级别", award: "奖项 / 认可", desc: "获奖" },
      honorsDate: "日期",
      honorsTagline: "按级别筛选",
      footerTagline: "医学技术 & 数据科学",
      footerDesign: "设计于广东",
      copyrightSuffix: "保留所有权利",
    },
  },
  en: {
    name: "Wenle Feng",
    role: "Medical Lab Tech",
    nav: {
      home: "Home",
      clinical: "Clinical",
      neural: "Neural",
      honors: "Honors",
      research: "Research",
    },
    hero: {
      greeting: "Hello, I am Wenle Feng",
      title_main: "WENLE",
      title_sub: "FENG",
      role_en: "MEDICAL LABORATORY TECHNOLOGY",
      intro:
        "ENTP Personality. Passionate about finding logical sparks between microscopic colonies and macroscopic data, breaking boundaries in diagnostics.",
    },
    resume: {
      section_title: "ACADEMIC JOURNEY",
      university: "Foshan University",
      degree: "Medical Laboratory Technology (B.S.)",
      duration: "2023.09 - 2027.06",
      items: [
        {
          date: "2025.05 - PRESENT",
          title: "Bacterial Bioinformatics Research",
          role: "Research",
          desc: "Advisor: Qu Pinghua (Guangdong Provincial Hospital of TCM)",
          type: "research",
        },
        {
          date: "2025.01 - PRESENT",
          title: "Morphology (Fungal/Blood/Marrow) & AI",
          role: "Research",
          desc: "Advisor: Chen Haisheng Team (Foshan Hospital of TCM)",
          type: "research",
        },
        {
          date: "2023.09 - 2025.06",
          title: "Class Monitor (Class 3)",
          role: "Leadership",
          desc: "Class management and coordination",
          type: "leadership",
        },
        {
          date: "2023.09 - 2024.06",
          title: "Student Union News Dept. Member",
          role: "Activity",
          desc: "Campus news reporting and editing",
          type: "activity",
        },
      ],
    },
    sections: {
      skills: "Expertise",
      readMore: "Read",
      back: "Back to Index",
      filterTitle: "Filter by Level",
      papers: "Publications",
      patents: "Patents",
      invention: "Invention",
      utility: "Utility",
      contact: "CONTACT",
      editorialNote:
        "Editorial Note: Full content including high-resolution microscopy images and R code analysis is available upon request.",
      proofs: "Proofs",
      viewProofs: "View Proofs",
      pending: "Pending upload",
      moreLinks: "Related links",
    },
    theme: { light: "Light", dark: "Dark", system: "Auto" },
    ui: {
      portfolioTag: "Portfolio ’25",
      archetypeLabel: "Archetype",
      traitsLabel: "Traits",
      traits: ["Extraverted", "Intuitive", "Thinking", "Prospecting"],
      stats: [
        { label: "Microbiology", value: "90%" },
        { label: "Data Analysis", value: "R / SPSS" },
        { label: "Media", value: "Davinci" },
        { label: "Location", value: "China / Guangdong" },
      ],
      articleHeadings: {
        clinical: { title: "Clinical Perspectives", tag: "Microbiology" },
        neural: { title: "Neural Perspectives", tag: "Data Science" },
      },
      honorsTable: { level: "Level", award: "Award / Recognition", desc: "Prize" },
      honorsDate: "Date",
      honorsTagline: "Filter by level",
      footerTagline: "Medical Technology & Data Science",
      footerDesign: "Designed in Guangdong",
      copyrightSuffix: "All rights reserved.",
    },
  },
  yue: {
    name: "馮汶樂",
    role: "Medical Lab Tech",
    nav: {
      home: "首頁",
      clinical: "臨床視界",
      neural: "數字神經",
      honors: "榮譽牆",
      research: "學術檔案",
    },
    hero: {
      greeting: "你好，我係馮汶樂",
      title_main: "馮汶樂",
      title_sub: "FENG WENLE",
      role_en: "MEDICAL LABORATORY TECHNOLOGY",
      intro:
        "ENTP 辯論家型人格。熱衷於喺微觀菌落同宏觀數據之間尋找邏輯嘅火花，以創新思維打破醫學診斷嘅既定邊界。",
    },
    resume: {
      section_title: "佛山大學履歷",
      university: "佛山大學",
      degree: "醫學檢驗技術 (本科在讀)",
      duration: "2023.09 - 2027.06",
      items: [
        {
          date: "2025.05 - 至今",
          title: "細菌生物信息學研究",
          role: "科研項目",
          desc: "導師：屈平華 (廣東省中醫院 主任技師)",
          type: "research",
        },
        {
          date: "2025.01 - 至今",
          title: "真菌/血液/骨髓形態學與AI識別",
          role: "科研項目",
          desc: "導師：陳海生團隊 (佛山市中醫院)",
          type: "research",
        },
        {
          date: "2023.09 - 2025.06",
          title: "23醫學檢驗技術3班 班長",
          role: "學生職務",
          desc: "統籌班級事務，協助輔導員管理班級",
          type: "leadership",
        },
        {
          date: "2023.09 - 2024.06",
          title: "校團委新聞部 幹事",
          role: "社團經歷",
          desc: "負責校園新聞採編同活動報導",
          type: "activity",
        },
      ],
    },
    sections: {
      skills: "專業技能",
      readMore: "閱讀",
      back: "返去索引",
      filterTitle: "按級別篩選",
      papers: "論文",
      patents: "專利",
      invention: "發明專利",
      utility: "實用新型",
      contact: "聯絡",
      editorialNote: "編輯提示：完整內容（連高清顯微圖同R代碼分析）可按需提供。",
      proofs: "材料",
      viewProofs: "睇材料",
      pending: "待上傳",
      moreLinks: "相關連結",
    },
    theme: { light: "光猛", dark: "暗黑", system: "跟隨" },
    ui: {
      portfolioTag: "作品集 ’25",
      archetypeLabel: "人格類型",
      traitsLabel: "特質",
      traits: ["外向", "直覺", "思考", "探索"],
      stats: [
        { label: "微生物學", value: "90%" },
        { label: "數據分析", value: "R / SPSS" },
        { label: "媒介", value: "Davinci" },
        { label: "位置", value: "中國 / 廣東" },
      ],
      articleHeadings: {
        clinical: { title: "臨床視角", tag: "微生物學" },
        neural: { title: "數字神經", tag: "數據科學" },
      },
      honorsTable: { level: "級別", award: "獎項 / 認可", desc: "獎項" },
      honorsDate: "日期",
      honorsTagline: "按級別篩選",
      footerTagline: "醫學技術 & 數據科學",
      footerDesign: "設計於廣東",
      copyrightSuffix: "保留所有權利",
    },
  },
} as const;

type Lang = keyof typeof TRANSLATIONS;
type TabId = "home" | "clinical" | "neural" | "honors" | "research";
type Theme = "light" | "dark" | "system";
type LocalizedString = Record<Lang, string>;
type Translation = (typeof TRANSLATIONS)[Lang];
type ProofAsset = { path?: string; label?: LocalizedString; links?: { url: string; label?: LocalizedString }[] };

type Article = {
  id: number;
  title: LocalizedString;
  date: string;
  summary: LocalizedString;
  content: LocalizedString;
  tags: string[];
};

type Honor = {
  level: keyof typeof LEVELS;
  title: LocalizedString;
  desc: LocalizedString;
  proofs?: ProofAsset[];
  links?: { url: string; label?: LocalizedString }[];
  date?: string;
};

type Patent = {
  title: LocalizedString;
  type: "invention" | "utility";
  number: string;
  desc: LocalizedString;
};

type Paper = {
  title: string;
  journal: string;
  desc: LocalizedString;
  type: "Paper";
};

const parseDateValue = (value?: string) =>
  value ? new Date(value).getTime() : 0;

const formatHonorDate = (value?: string) => {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}.${month}`;
};

const parseCsvHonors = (csvText: string): Honor[] => {
  const lines = csvText.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length <= 1) return HONORS_FALLBACK;
  const [, ...rows] = lines;
  const result: Honor[] = rows
    .map((row) => {
      const cols = row.split(",").map((c) => c.trim());
      if (cols.length < 9) return null;
      const [
        date,
        level,
        title_zh,
        title_en,
        title_yue,
        prize_zh,
        prize_en,
        prize_yue,
        proofs,
      ] = cols;
      const proofList =
        proofs && proofs.length > 0
          ? proofs.split("|").map((p) => ({ path: p }))
          : undefined;
      return {
        level: level as keyof typeof LEVELS,
        date: date || undefined,
        title: { zh: title_zh, en: title_en, yue: title_yue },
        desc: { zh: prize_zh, en: prize_en, yue: prize_yue },
        proofs: proofList,
      } as Honor;
    })
    .filter(Boolean) as Honor[];
  return result.length > 0 ? result : HONORS_FALLBACK;
};

const ARTICLES_DATA: Record<"clinical" | "neural", Article[]> = {
  clinical: [
    {
      id: 1,
      title: {
        zh: "真菌形态学鉴定的关键步骤与避坑指南",
        en: "Key Steps in Fungal Morphological Identification",
        yue: "真菌形態學鑑定嘅關鍵步驟同避坑指南",
      },
      date: "OCT 15, 2024",
      summary: {
        zh: "基于陈海生老师团队实验经历，总结真菌分离培养及镜检观察实战经验。",
        en: "Practical experience in fungal isolation and microscopy from Prof. Chen's lab.",
        yue: "基於陳海生老師團隊實驗經歷，總結真菌分離培養同鏡檢觀察實戰經驗。",
      },
      content: {
        zh: "在真菌形态学鉴定中，玻片培养法是观察分生孢子产孢结构最有效的方法之一...",
        en: "Slide culture is effective for observing conidial structures...",
        yue: "喺真菌形態學鑑定入面，玻片培養法係觀察分生孢子產孢結構最有效嘅方法之一...",
      },
      tags: ["Microbiology", "Lab"],
    },
    {
      id: 2,
      title: {
        zh: "生物安全在微生物实验室的重要性",
        en: "Biosafety in Microbiology Labs",
        yue: "生物安全喺微生物實驗室嘅重要性",
      },
      date: "SEP 20, 2024",
      summary: {
        zh: "结合医院检验科实习规范，探讨规范化实验记录与样本整理。",
        en: "Standardized recording and sample organization in hospital labs.",
        yue: "結合醫院檢驗科實習規範，探討規範化實驗記錄同樣本整理。",
      },
      content: {
        zh: "生物安全不仅仅是佩戴手套和口罩，更关乎样本的接收...",
        en: "Biosafety is more than just PPE...",
        yue: "生物安全唔單止係戴手套同口罩...",
      },
      tags: ["Biosafety", "Protocol"],
    },
  ],
  neural: [
    {
      id: 101,
      title: {
        zh: "基于R语言与CNN的医学图像初探",
        en: "Medical Image Analysis with R and CNN",
        yue: "基於R語言同CNN嘅醫學圖像初探",
      },
      date: "JAN 05, 2025",
      summary: {
        zh: "卷积神经网络在真菌显微图像自动分类中的应用尝试。",
        en: "Applying CNNs to automated fungal microscopic image classification.",
        yue: "卷積神經網絡喺真菌顯微圖像自動分類中嘅應用嘗試。",
      },
      content: {
        zh: "随着深度学习的发展，利用CNN辅助病理诊断已成为热点...",
        en: "CNNs in pathology are a hotspot...",
        yue: "隨著深度學習嘅發展，利用CNN輔助病理診斷...",
      },
      tags: ["AI", "Bioinformatics"],
    },
  ],
};

const HONORS_FALLBACK: Honor[] = [
  {
    level: "national",
    title: {
      zh: "“挑战杯”中国大学生创业大赛 校三等奖",
      en: "Challenge Cup School 3rd Prize",
      yue: "“挑戰杯”中國大學生創業大賽 校三等獎",
    },
    desc: {
      zh: "三等奖",
      en: "3rd Prize",
      yue: "三等獎",
    },
    proofs: [],
  },
  {
    level: "national",
    date: "2024-10-01",
    title: {
      zh: "“外研社·国才杯”全国英语演讲比赛 银奖",
      en: "FLTRP English Speech Contest Silver Award",
      yue: "“外研社·國才杯”全國英語演講比賽 銀獎",
    },
    desc: {
      zh: "银奖",
      en: "Silver",
      yue: "銀獎",
    },
    proofs: [
      {
        path: "/材料/1国家级/国才杯银奖.pdf",
      },
    ],
  },
  {
    level: "national",
    date: "2024-04-01",
    title: {
      zh: "2024百万同题英语写作大赛 优秀作品奖",
      en: "2024 Million Same Title Writing Award",
      yue: "2024百萬同題英語寫作大賽 優秀作品獎",
    },
    desc: {
      zh: "优秀作品奖",
      en: "Award of Excellence",
      yue: "優秀作品獎",
    },
    proofs: [
      { path: "/材料/1国家级/2024百万同题英语写作大赛优秀作品奖.jpg" },
    ],
  },
  {
    level: "national",
    date: "2025-06-01",
    title: {
      zh: "大学生创新创业训练计划 (国家级)",
      en: "National Innovation Training Program",
      yue: "大學生創新創業訓練計劃 (國家級)",
    },
    desc: {
      zh: "三等奖",
      en: "3rd Prize",
      yue: "三等獎",
    },
    proofs: [
      { path: "/材料/1国家级/大创国家级.xlsx" },
    ],
  },
  {
    level: "national",
    date: "2025-04-01",
    title: {
      zh: "全国大学生英语竞赛 参与奖",
      en: "National College English Competition",
      yue: "全國大學生英語競賽 參與獎",
    },
    desc: {
      zh: "参与",
      en: "Participation",
      yue: "參與",
    },
    proofs: [
      { path: "/材料/1国家级/大学生英语竞赛参与.jpg" },
    ],
  },
  {
    level: "national",
    date: "2024-11-01",
    title: {
      zh: "高校计算机挑战赛 (Office) 三等奖",
      en: "University Computer Challenge Word 3rd Prize",
      yue: "高校計算機挑戰賽 Word 三等獎",
    },
    desc: { zh: "Word", en: "Word", yue: "Word" },
    proofs: [
      { path: "/材料/1国家级/高校计算机挑战赛word三等奖.jpg" },
    ],
  },
  {
    level: "national",
    date: "2024-11-01",
    title: {
      zh: "高校计算机挑战赛 (Office) 三等奖",
      en: "University Computer Challenge Excel 3rd Prize",
      yue: "高校計算機挑戰賽 Excel 三等獎",
    },
    desc: { zh: "Excel", en: "Excel", yue: "Excel" },
    proofs: [
      { path: "/材料/1国家级/高校计算机挑战赛excel三等奖.jpg" },
    ],
  },
  {
    level: "national",
    date: "2024-11-01",
    title: {
      zh: "高校计算机挑战赛 (Office) 三等奖",
      en: "University Computer Challenge PPT 3rd Prize",
      yue: "高校計算機挑戰賽 PPT 三等獎",
    },
    desc: { zh: "PPT", en: "PPT", yue: "PPT" },
    proofs: [
      { path: "/材料/1国家级/高校计算机挑战赛ppt三等奖.jpg" },
    ],
  },
  {
    level: "provincial",
    date: "2025-05-01",
    title: {
      zh: "省级学术科研报告竞赛 二等奖",
      en: "Provincial Research Report 2nd Prize",
      yue: "省級學術科研報告競賽 二等獎",
    },
    desc: {
      zh: "二等奖",
      en: "2nd Prize",
      yue: "二等獎",
    },
    proofs: [
      { path: "/材料/2省级/调研报告省二.pdf" },
    ],
  },
  {
    level: "provincial",
    date: "2024-08-01",
    title: {
      zh: "2024研究生科研素养提升",
      en: "2024 Research Literacy Improvement",
      yue: "2024研究生科研素養提升",
    },
    desc: {
      zh: "-",
      en: "-",
      yue: "-",
    },
    proofs: [
      { path: "/材料/2024研究生科研素养提升.png" },
    ],
  },
  {
    level: "municipal",
    date: "2024-10-01",
    title: {
      zh: "韶关市调研大赛 获奖",
      en: "Shaoguan City Research Award",
      yue: "韶關市調研大賽 獲獎",
    },
    desc: {
      zh: "获奖",
      en: "Awarded",
      yue: "獲獎",
    },
    proofs: [
      { path: "/材料/3市级/韶关市调研大赛.jpg" },
    ],
  },
  {
    level: "school",
    date: "2025-03-01",
    title: {
      zh: "“佛大杯”围棋比赛 二等奖",
      en: "Foshan University Cup Go 2nd Prize",
      yue: "“佛大杯”圍棋比賽 二等獎",
    },
    desc: { zh: "二等奖", en: "2nd Prize", yue: "二等獎" },
    proofs: [
      { path: "/材料/4校级/“佛大杯”围棋比赛二等奖.png" },
    ],
  },
  {
    level: "school",
    date: "2025-05-01",
    title: { zh: "校级红旗团支部", en: "School-level Red Flag Branch", yue: "校級紅旗團支部" },
    desc: { zh: "-", en: "-", yue: "-" },
    proofs: [
      { path: "/材料/4校级/红旗团支部.png" },
    ],
  },
  {
    level: "school",
    date: "2025-07-01",
    title: { zh: "“三下乡”社会实践 校级团队", en: "Summer Social Practice Team", yue: "“三下鄉”社會實踐 校級團隊" },
    desc: { zh: "-", en: "-", yue: "-" },
    proofs: [
      { path: "/材料/4校级/三下乡校级.png" },
    ],
  },
  {
    level: "school",
    date: "2025-04-01",
    title: { zh: "摄影大赛 二等奖", en: "Photography Competition 2nd Prize", yue: "攝影大賽 二等獎" },
    desc: { zh: "二等奖", en: "2nd Prize", yue: "二等獎" },
    proofs: [
      { path: "/材料/4校级/摄影大赛二代奖.jpg" },
    ],
  },
  {
    level: "school",
    date: "2024-12-01",
    title: { zh: "十佳易班网络班级", en: "Top 10 Online Class", yue: "十佳易班網絡班級" },
    desc: { zh: "十佳", en: "Top 10", yue: "十佳" },
    proofs: [
      { path: "/材料/4校级/十佳易班网络班级.jpg" },
    ],
  },
  {
    level: "school",
    date: "2025-03-01",
    title: { zh: "职业规划大赛 优胜", en: "Career Planning Winner", yue: "職業規劃大賽 優勝" },
    desc: { zh: "优胜", en: "Winner", yue: "優勝" },
    proofs: [
      { path: "/材料/4校级/职业规划大赛.png" },
    ],
  },
  {
    level: "school",
    date: "2025-05-01",
    title: { zh: "五四调研报告 优秀", en: "May 4th Report Excellence", yue: "五四調研報告 優秀" },
    desc: { zh: "优秀", en: "Excellence", yue: "優秀" },
    proofs: [
      { path: "/材料/4校级/调研报告54.pdf" },
    ],
  },
  {
    level: "department",
    date: "2024-03-01",
    title: { zh: "检验系演讲比赛 一等奖", en: "Dept. Speech Contest 1st Prize", yue: "檢驗系演講比賽 一等獎" },
    desc: { zh: "一等奖", en: "1st Prize", yue: "一等獎" },
    proofs: [
      { path: "/材料/5系部级/检验系演讲比赛一等奖.tif" },
    ],
  },
  {
    level: "department",
    date: "2025-04-01",
    title: { zh: "清明答题比赛 一等奖", en: "Qingming Quiz 1st Prize", yue: "清明答題比賽 一等獎" },
    desc: { zh: "一等奖", en: "1st Prize", yue: "一等獎" },
    proofs: [
      { path: "/材料/5系部级/清明答题一等奖.jpg" },
    ],
  },
] as const;

const RESEARCH_DATA: { papers: Paper[]; patents: Patent[] } = {
  papers: [
    {
      title:
        "From Visual Matching to Integrated Diagnostics in Hematological Morphology: Unlocking Latent Competence via a Peer-to-Peer Digital Morphology Library",
      journal: "PREPRINT / SUBMISSION",
      desc: {
        zh: "点对点数字形态学库在血液形态学诊断中的应用",
        en: "P2P Digital Library in Hematology",
        yue: "點對點數字形態學庫喺血液形態學診斷中嘅應用",
      },
      type: "Paper",
    },
  ],
  patents: [
    {
      title: {
        zh: "一种用于引导式学习的人工智能教学系统及其应用",
        en: "AI Teaching System for Guided Learning",
        yue: "一種用於引導式學習嘅人工智能教學系統",
      },
      type: "invention",
      number: "CN-PENDING",
      desc: { zh: "发明专利", en: "Invention", yue: "發明專利" },
    },
  ],
};

type ArticleListProps = {
  type: "clinical" | "neural";
  data: Article[];
  lang: Lang;
  t: Translation;
  setReadingArticle: React.Dispatch<React.SetStateAction<Article | null>>;
};

const ArticleList = ({
  type,
  data,
  lang,
  t,
  setReadingArticle,
}: ArticleListProps) => (
  <div className="animate-fade-in pb-12">
    <div className="mb-12 flex items-baseline justify-between border-b border-gray-900 dark:border-white pb-4">
      <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 dark:text-white tracking-tight">
        {t.ui.articleHeadings[type].title}
        <span className="italic ml-2 font-light opacity-50">
          {t.ui.articleHeadings[type].tag}
        </span>
      </h2>
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hidden md:block">
        {t.ui.articleHeadings[type].tag}
      </span>
    </div>

    <div className="grid grid-cols-1 gap-12">
      {data.map((article) => (
        <div
          key={article.id}
          onClick={() => setReadingArticle(article)}
          className="group cursor-pointer relative"
        >
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 group-hover:opacity-70 transition-opacity duration-500">
            <span className="text-xs font-mono text-gray-400 dark:text-gray-500 shrink-0 w-24">
              {article.date}
            </span>
            <div className="flex-grow">
              <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-2 leading-snug group-hover:underline decoration-1 underline-offset-4">
                {article.title[lang]}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl font-light">
                {article.summary[lang]}
              </p>
            </div>
            <div className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 border border-gray-200 dark:border-gray-800 rounded-full group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
              <ArrowUpRight size={18} />
            </div>
          </div>
          <div className="absolute -bottom-6 left-0 w-full h-px bg-gray-100 dark:bg-gray-800" />
        </div>
      ))}
    </div>
  </div>
);

type ArticleDetailProps = {
  article: Article;
  lang: Lang;
  t: Translation;
  setReadingArticle: React.Dispatch<React.SetStateAction<Article | null>>;
};

const ArticleDetail = ({
  article,
  lang,
  t,
  setReadingArticle,
}: ArticleDetailProps) => (
  <div className="animate-fade-in max-w-2xl mx-auto py-12">
    <button
      onClick={() => setReadingArticle(null)}
      className="mb-12 text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
    >
      <div className="w-8 h-px bg-current"></div>
      {t.sections.back}
    </button>

    <header className="mb-12">
      <div className="flex gap-2 mb-6">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 border border-gray-200 dark:border-gray-700 text-[10px] tracking-wider uppercase text-gray-500 dark:text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-6 leading-tight">
        {article.title[lang]}
      </h1>
      <time className="font-mono text-xs text-gray-400">{article.date}</time>
    </header>

    <div className="prose dark:prose-invert prose-lg max-w-none font-light leading-loose text-gray-700 dark:text-gray-300">
      <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:mt-[-6px]">
        {article.content[lang]}
      </p>
      <p className="mt-8 text-sm italic text-gray-400 border-l-2 border-gray-200 pl-4">
        {t.sections.editorialNote}
      </p>
    </div>
  </div>
);

type HonorsSectionProps = {
  lang: Lang;
  t: Translation;
  selectedLevels: (keyof typeof LEVELS)[];
  toggleLevel: (level: keyof typeof LEVELS) => void;
  setProofModal: React.Dispatch<React.SetStateAction<Honor | null>>;
  honorsData: Honor[];
};

const HonorsSection = ({
  lang,
  t,
  selectedLevels,
  toggleLevel,
  setProofModal,
  honorsData,
}: HonorsSectionProps) => {
  const honorsSorted = [...honorsData].sort(
    (a, b) => parseDateValue(b.date) - parseDateValue(a.date)
  );
  return (
    <div className="animate-fade-in pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 dark:text-white tracking-tight mb-2">
            {t.nav.honors}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
            {t.ui.honorsTagline}
          </p>
        </div>

      <div className="flex flex-wrap gap-2">
        {Object.entries(LEVELS).map(([key, config]) => (
          <button
            key={key}
            onClick={() => toggleLevel(key as keyof typeof LEVELS)}
            className={`px-3 py-1 text-[10px] tracking-widest uppercase border transition-all duration-300 ${
              selectedLevels.includes(key as keyof typeof LEVELS)
                ? "border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-black"
                : "border-gray-200 text-gray-400 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
            }`}
          >
            {config.label[lang]}
          </button>
        ))}
      </div>
    </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-12 text-[10px] uppercase tracking-widest text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-2 mb-4 px-2">
          <div className="col-span-2">{t.ui.honorsDate}</div>
          <div className="col-span-2">{t.ui.honorsTable.level}</div>
          <div className="col-span-6">{t.ui.honorsTable.award}</div>
          <div className="col-span-2 text-right">{t.ui.honorsTable.desc}</div>
        </div>

        {honorsSorted.map((honor, index) => {
          const isVisible = selectedLevels.includes(honor.level);
          return (
            <div
              key={`${honor.level}-${index}`}
              className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${
                isVisible ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <button
                onClick={() => setProofModal(honor)}
                className="grid grid-cols-12 w-full text-left items-baseline py-4 border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 px-2 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600"
              >
                <div className="col-span-2 text-[10px] md:text-xs font-mono text-gray-500">
                  {formatHonorDate(honor.date)}
                </div>
                <div className="col-span-2 flex items-center">
                  <div
                    className={`w-1.5 h-1.5 rounded-full mr-3 shrink-0 ${LEVELS[honor.level].color
                      .split(" ")[0]
                      .replace("text-", "bg-")}`}
                  ></div>
                  <span className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-wider">
                    {LEVELS[honor.level].label[lang]}
                  </span>
                </div>
                <div className="col-span-6">
                  <h3 className="text-base md:text-lg font-serif text-gray-900 dark:text-gray-100">
                    {honor.title[lang]}
                  </h3>
                </div>
                <div className="col-span-2 text-right text-xs text-gray-800 dark:text-gray-100 font-medium">
                  <span>{honor.desc[lang]}</span>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

type ProofModalProps = {
  honor: Honor;
  lang: Lang;
  t: Translation;
  onClose: () => void;
};

const isImage = (path: string) =>
  [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp", ".tif", ".tiff"].some((ext) =>
    path.toLowerCase().endsWith(ext)
  );
const isPdf = (path: string) => path.toLowerCase().endsWith(".pdf");

const ProofModal = ({ honor, lang, t, onClose }: ProofModalProps) => {
  const proofs = honor.proofs ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProof = proofs[activeIndex];

  const renderViewer = () => {
    if (!activeProof || !activeProof.path) {
      return (
        <div className="flex h-full items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          {t.sections.pending}
        </div>
      );
    }

    if (isPdf(activeProof.path)) {
      return (
        <iframe
          src={activeProof.path}
          title="proof-pdf"
          className="w-full h-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white"
        />
      );
    }

    if (isImage(activeProof.path)) {
      return (
        <div className="relative w-full h-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <Image
            src={activeProof.path}
            alt={(activeProof.label?.[lang] ?? honor.title[lang]) || "proof"}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
          />
        </div>
      );
    }

    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/40">
        <p className="text-sm text-gray-500 dark:text-gray-300 text-center px-4">
          {activeProof.label?.[lang] || honor.title[lang]}
        </p>
        <a
          href={activeProof.path}
          download
          className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-gray-300 dark:border-gray-600 rounded-full hover:border-gray-900 hover:text-gray-900 dark:hover:border-gray-200 dark:hover:text-white transition-colors"
        >
          {t.sections.viewProofs}
        </a>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10" onClick={onClose}>
      <div
        className="relative w-full max-w-5xl h-[80vh] bg-[#FAFAFA] dark:bg-[#0A0A0A] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-gray-500">
              {t.sections.proofs}
            </p>
            <h4 className="text-lg font-serif text-gray-900 dark:text-white leading-tight">
              {honor.title[lang]}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            aria-label="Close proof modal"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-4 h-[calc(80vh-56px)] flex flex-col gap-4">
          <div className="flex-1 min-h-0">{renderViewer()}</div>

          {proofs.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {proofs.map((proof, idx) => (
                <button
                  key={proof.path ?? idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative h-16 w-20 rounded-lg border transition-all ${
                    idx === activeIndex
                      ? "border-gray-900 dark:border-white"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-500 dark:hover:border-gray-400"
                  }`}
                >
                  {proof.path && isImage(proof.path) ? (
                    <Image
                      src={proof.path}
                      alt={honor.title[lang]}
                      fill
                      className="object-cover rounded-lg"
                      sizes="80px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[10px] text-gray-500 px-2 text-center">
                      {proof.label?.[lang] || t.sections.proofs}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {honor.links && honor.links.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-800 pt-3">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                {t.sections.moreLinks}
              </p>
              <div className="flex flex-wrap gap-3">
                {honor.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold uppercase tracking-wider border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full hover:border-gray-900 hover:text-gray-900 dark:hover:border-gray-300 dark:hover:text-white transition-colors"
                  >
                    {link.label?.[lang] || link.url}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type ResearchSectionProps = { lang: Lang; t: Translation };

const ResearchSection = ({ lang, t }: ResearchSectionProps) => (
  <div className="animate-fade-in pb-12">
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-8 border-b border-gray-200 dark:border-gray-800 pb-2">
          {t.sections.patents}
        </h3>
        {RESEARCH_DATA.patents.map((patent, i) => (
          <div key={i} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 border border-gray-900 dark:border-white text-[10px] uppercase font-bold tracking-wider">
                {patent.type === "invention"
                  ? t.sections.invention
                  : t.sections.utility}
              </span>
              <span className="text-xs font-mono text-gray-400">
                {patent.number}
              </span>
            </div>
            <h4 className="text-xl font-serif text-gray-900 dark:text-white leading-relaxed">
              {patent.title[lang]}
            </h4>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-8 border-b border-gray-200 dark:border-gray-800 pb-2">
          {t.sections.papers}
        </h3>
        {RESEARCH_DATA.papers.map((paper, i) => (
          <div key={i} className="mb-8">
            <h4 className="text-lg font-serif italic text-gray-900 dark:text-gray-200 mb-3 leading-relaxed">
              &ldquo;{paper.title}&rdquo;
            </h4>
            <div className="flex flex-col gap-1 text-xs font-mono text-gray-500">
              <span className="uppercase tracking-wider">{paper.journal}</span>
              <span className="text-gray-400">{paper.desc[lang]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

type HomeSectionProps = {
  t: Translation;
  setActiveTab: (tab: TabId) => void;
};

const HomeSection = ({ t, setActiveTab }: HomeSectionProps) => (
  <div className="animate-fade-in pb-8">
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24 pt-8">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-gray-900 dark:bg-white"></div>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
            {t.ui.portfolioTag}
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-serif text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8">
          <span className="block">{t.hero.title_main}</span>
          <span className="block italic font-light opacity-80 text-4xl md:text-6xl mt-2">
            {t.hero.title_sub}
          </span>
        </h1>
        <p className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-12 leading-relaxed">
          {t.hero.role_en}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("research")}
            className="px-8 py-3 bg-gray-900 text-white dark:bg-white dark:text-black text-xs font-bold tracking-widest uppercase hover:opacity-80 transition-opacity"
          >
            {t.nav.research}
          </button>
          <button
            onClick={() => setActiveTab("honors")}
            className="px-8 py-3 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-xs font-bold tracking-widest uppercase hover:border-gray-900 dark:hover:border-white transition-colors"
          >
            {t.nav.honors}
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="aspect-[4/5] relative overflow-hidden group border border-gray-200 dark:border-gray-800 bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-2xl">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow opacity-40 dark:opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[60%] h-[60%] bg-gradient-to-r from-purple-300 to-fuchsia-200 dark:from-purple-900 dark:to-fuchsia-900 rounded-full mix-blend-multiply filter blur-[80px] translate-x-[-20%] translate-y-[-20%] animate-blob"></div>
            <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] bg-gradient-to-r from-indigo-300 to-violet-200 dark:from-indigo-900 dark:to-violet-900 rounded-full mix-blend-multiply filter blur-[80px] translate-x-[20%] translate-y-[20%] animate-blob animation-delay-2000"></div>
          </div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(136, 136, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(136, 136, 136, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
            <div className="flex justify-between items-start opacity-80">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-gray-900 dark:text-white">
                  {t.ui.archetypeLabel}
                </span>
                <span className="text-5xl font-serif text-gray-900 dark:text-white">
                  ENTP
                </span>
              </div>
              <Zap size={18} className="text-gray-900 dark:text-white" />
            </div>
            <div className="space-y-6 relative z-10">
              <div className="flex gap-2 h-16 items-end mb-2">
                <div className="w-1.5 bg-gray-900 dark:bg-white h-[85%] opacity-90 transition-all hover:opacity-100"></div>
                <div className="w-1.5 bg-gray-900 dark:bg-white h-[65%] opacity-70 transition-all hover:opacity-100"></div>
                <div className="w-1.5 bg-gray-900 dark:bg-white h-[45%] opacity-50 transition-all hover:opacity-100"></div>
                <div className="w-1.5 bg-gray-900 dark:bg-white h-[25%] opacity-30 transition-all hover:opacity-100"></div>
              </div>
              <div className="space-y-3">
                <div className="text-[10px] font-mono tracking-widest uppercase text-gray-500">
                  {t.ui.traitsLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.ui.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-2 py-1 border border-gray-400/30 text-[10px] uppercase font-mono text-gray-800 dark:text-gray-200 bg-white/10 backdrop-blur-md"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-gray-300/30 dark:border-gray-700/30">
                <p className="text-sm font-serif italic text-gray-800 dark:text-gray-200 opacity-80 leading-relaxed">
                  &ldquo;{t.hero.intro}&rdquo;
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 border border-transparent group-hover:border-gray-400/30 dark:group-hover:border-gray-500/30 transition-colors duration-700 pointer-events-none"></div>
        </div>
      </div>
    </div>

    <div className="mb-24 border-t border-gray-200 dark:border-gray-800 pt-16">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
          {t.resume.section_title}
        </h3>
        <div className="h-px bg-gray-200 dark:bg-gray-800 w-32"></div>
      </div>

      <div className="relative pl-8 md:pl-12 border-l border-gray-200 dark:border-gray-800 ml-2">
        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-gray-900 dark:bg-white rounded-full border-4 border-white dark:border-[#0A0A0A]"></div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <Image
              src="/FOSU.webp"
              alt={`${t.resume.university} logo`}
              width={56}
              height={56}
              className="h-12 w-12 rounded-lg object-cover border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
              priority
            />
            <h4 className="text-3xl font-serif text-gray-900 dark:text-white">
              {t.resume.university}
            </h4>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm font-mono text-gray-500 uppercase tracking-wide">
            <span>{t.resume.degree}</span>
            <span className="hidden md:inline text-gray-300 dark:text-gray-700">
              |
            </span>
            <span>{t.resume.duration}</span>
          </div>
        </div>

        <div className="space-y-12">
          {t.resume.items.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute -left-[38px] md:-left-[53px] top-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 group-hover:bg-purple-500 group-hover:scale-125 transition-all"></div>

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-xs font-mono text-gray-400 shrink-0 w-32">
                  {item.date}
                </span>
                <div>
                  <h5 className="text-lg font-serif text-gray-800 dark:text-gray-200 mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h5>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 text-[10px] border border-gray-200 dark:border-gray-700 text-gray-500 uppercase tracking-wider rounded">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
      {t.ui.stats.map((item, i) => (
        <div
          key={`${item.label}-${i}`}
          className="bg-white dark:bg-gray-900 p-6 flex flex-col justify-between h-32 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-400">
            {item.label}
          </span>
          <span className="text-xl font-serif text-gray-900 dark:text-white">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

type ControlsProps = {
  lang: Lang;
  theme: Theme;
  themeLabel: string;
  setLang: (lang: Lang) => void;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const LANGUAGE_DISPLAY: Record<Lang, string> = {
  zh: "中文",
  en: "EN",
  yue: "粵語",
};

const LANGUAGE_OPTIONS: Record<Lang, Record<Lang, string>> = {
  zh: { zh: "中文", en: "英文", yue: "粵語" },
  en: { zh: "Chinese", en: "English", yue: "Cantonese" },
  yue: { zh: "中文", en: "英文", yue: "粵語" },
};

const Controls = ({
  lang,
  theme,
  themeLabel,
  setLang,
  setTheme,
}: ControlsProps) => (
  <div className="flex items-center gap-6">
    <div className="relative group">
      <button className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
        {LANGUAGE_DISPLAY[lang]}
      </button>
      <div className="absolute right-0 top-full pt-4 w-24 hidden group-hover:block z-50">
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-2 shadow-2xl">
          {(["zh", "en", "yue"] as Lang[]).map((value) => (
            <button
              key={value}
              onClick={() => setLang(value)}
              className="block w-full text-left px-3 py-2 text-[10px] font-bold tracking-widest uppercase text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
            >
              {LANGUAGE_OPTIONS[lang][value]}
            </button>
          ))}
        </div>
      </div>
    </div>
    <button
      onClick={() =>
        setTheme((prev) =>
          prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
        )
      }
      className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
      title={themeLabel}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun size={16} />
      ) : theme === "dark" ? (
        <Moon size={16} />
      ) : (
        <Monitor size={16} />
      )}
    </button>
  </div>
);

type NavItem = { id: TabId; label: string };

export default function BlogApp() {
  const [theme, setTheme] = useState<Theme>("system");
  const [lang, setLang] = useState<Lang>("zh");
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);
  const [selectedLevels, setSelectedLevels] = useState<
    (keyof typeof LEVELS)[]
  >(["national", "provincial", "municipal", "school", "department"]);
  const [proofModal, setProofModal] = useState<Honor | null>(null);
  const [honorsData, setHonorsData] = useState<Honor[]>(HONORS_FALLBACK);

  useEffect(() => {
    const root = window.document.documentElement;
    const applyTheme = (value: Theme) => {
      if (value === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(media.matches ? "dark" : "light");
      const listener = (event: MediaQueryListEvent) =>
        applyTheme(event.matches ? "dark" : "light");
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }

    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const loadHonors = async () => {
      try {
        const res = await fetch("/honors.csv");
        if (!res.ok) return;
        const text = await res.text();
        const parsed = parseCsvHonors(text);
        setHonorsData(parsed);
      } catch (error) {
        console.warn("Failed to load honors.csv, using fallback.", error);
      }
    };
    loadHonors();
  }, []);

  const t = TRANSLATIONS[lang];

  const navItems: NavItem[] = [
    { id: "home", label: t.nav.home },
    { id: "clinical", label: t.nav.clinical },
    { id: "neural", label: t.nav.neural },
    { id: "honors", label: t.nav.honors },
    { id: "research", label: t.nav.research },
  ];

  const handleNavClick = (tab: TabId) => {
    setActiveTab(tab);
    setReadingArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLevel = (level: keyof typeof LEVELS) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-[#FAFAFA] dark:bg-[#0A0A0A] font-sans selection:bg-gray-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="cursor-pointer group" onClick={() => handleNavClick("home")}>
            <span className="text-lg font-serif font-bold tracking-tighter text-gray-900 dark:text-white group-hover:opacity-50 transition-opacity">
              Y.F.
            </span>
          </div>

          <div className="hidden md:flex gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative ${
                  activeTab === item.id
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-current rounded-full" />
                )}
              </button>
            ))}
          </div>

          <Controls
            lang={lang}
            theme={theme}
            themeLabel={t.theme[theme]}
            setLang={setLang}
            setTheme={setTheme}
          />
        </div>

        <div className="md:hidden flex overflow-x-auto gap-8 px-6 pb-4 scrollbar-hide border-b border-gray-100 dark:border-gray-900">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap ${
                activeTab === item.id
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-screen">
        {readingArticle ? (
          <ArticleDetail
            article={readingArticle}
            lang={lang}
            t={t}
            setReadingArticle={setReadingArticle}
          />
        ) : (
          <div className="animate-fade-in">
            {activeTab === "home" && (
              <HomeSection t={t} setActiveTab={setActiveTab} />
            )}
            {activeTab === "clinical" && (
              <ArticleList
                type="clinical"
                data={ARTICLES_DATA.clinical}
                lang={lang}
                t={t}
                setReadingArticle={setReadingArticle}
              />
            )}
            {activeTab === "neural" && (
              <ArticleList
                type="neural"
                data={ARTICLES_DATA.neural}
                lang={lang}
                t={t}
                setReadingArticle={setReadingArticle}
              />
            )}
            {activeTab === "honors" && (
              <HonorsSection
                lang={lang}
                t={t}
                selectedLevels={selectedLevels}
                toggleLevel={toggleLevel}
                setProofModal={setProofModal}
                honorsData={honorsData}
              />
            )}
            {activeTab === "research" && <ResearchSection lang={lang} t={t} />}
          </div>
        )}
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-900 py-12 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h4 className="font-serif text-2xl text-gray-900 dark:text-white mb-2">{t.name}</h4>
            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              {t.ui.footerTagline}
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="mailto:YaelSuperProMax@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/Super-Yael"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/%E6%B1%B6%E4%B9%90-%E5%86%AF-94b650383/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 text-[10px] text-gray-300 dark:text-gray-800 flex justify-between">
          <span>
            © 2025 {lang === "en" ? t.name.toUpperCase() : t.name}. {t.ui.copyrightSuffix}
          </span>
          <span>{t.ui.footerDesign}</span>
        </div>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@300;400&display=swap");
        .font-serif {
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
        }
        .font-mono {
          font-family: "JetBrains Mono", monospace;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-blob {
          animation: blob 10s infinite alternate;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {proofModal && (
        <ProofModal honor= {proofModal} lang={lang} t={t} onClose={() => setProofModal(null)} />
      )}
    </div>
  );
}

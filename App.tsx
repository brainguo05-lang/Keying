/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronDown,
  Globe,
  Award,
  Briefcase,
  Languages,
  Linkedin,
  Search,
  Camera,
  Music
} from 'lucide-react';

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`font-serif text-4xl md:text-6xl mb-4 ${light ? 'text-white' : 'text-black'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-sm uppercase tracking-[0.3em] font-medium ${light ? 'text-white/40' : 'text-black/40'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const TimelineItem = ({ period, title, org, desc, last = false }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`relative pl-12 pb-16 ${last ? '' : 'border-l border-black/10'}`}
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black" />
    <span className="text-xs font-mono text-black/40 mb-2 block">{period}</span>
    <h3 className="text-2xl font-serif mb-1">{title}</h3>
    <p className="text-black/60 mb-3">{org}</p>
    {desc && <p className="text-sm text-black/50 leading-relaxed max-w-xl">{desc}</p>}
  </motion.div>
);

const translations = {
  en: {
    nav: {
      home: 'Home',
      research: 'Research',
      publications: 'Publications',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      lang: '中文版'
    },
    hero: {
      name: 'Keying Li',
      subtitle: 'I am a Sociology PhD Researcher in Migration Studies. My research explores the transnational identity of second-generation Chinese youth through the lens of their everyday lives. I specialise in multi-sited ethnography and in-depth interview.',
      education: 'Education',
      eduItems: [
        {
          period: "Sept 2021 — July 2026",
          title: "PhD in Sociology",
          org: "University of Glasgow, UK",
          desc: "Researching transnational identity of second-generation Chinese youth."
        },
        {
          period: "Sept 2019 — Nov 2020",
          title: "MA Society, Culture and Media",
          org: "University of Leeds, UK"
        },
        {
          period: "Sept 2016 — Jun 2019",
          title: "BA (Hons) Media and Cultural Studies",
          org: "University of Sussex, UK"
        }
      ]
    },
    research: {
      title: 'PhD Research',
      subtitle: 'PhD Specialisation',
      quote: '"Navigate in-between: transnational identity of second-generation Chinese young people living in the UK."',
      focus: 'My research focus centres on transnationalism, migration, and identity. I have designed and conducted multi-sited qualitative research including interviews, surveys, and ethnographic observation.',
      mechanisms: ["Boundary Work", "Positioning", "Embodiment & Senses", "Digital Mediation", "Capital Conversion", "Translanguaging & Transpositioning"],
      teachingTitle: 'Teaching',
      teachingSubtitle: 'Pedagogy & Impact',
      teachingItems: [
        {
          company: "University of Glasgow",
          period: "Sept 2023 — July 2025",
          content: [
            "Led and taught tutorial sessions for Sociology Level 1 (130+ hours).",
            "Responsible for marking assignments and providing detailed feedback for first-year cohorts (100+ students)."
          ]
        },
        {
          company: "Glasgow Chinese School",
          period: "Sept 2022 — June 2023",
          content: [
            "Guided students to achieve Grade A in Advanced Higher Mandarin (30+ students)."
          ]
        }
      ]
    },
    publications: {
      title: 'Publications',
      subtitle: 'Academic Output',
      items: [
        {
          status: 'In Preparation',
          title: '"Partner Selection and Self-Confidence in Intimate Relationships Among Second-Generation Chinese Young people in the UK."',
          journal: 'Journal of Ethnic and Migration Studies'
        },
        {
          status: 'In Preparation',
          title: '"Converting Parental Capital into Transnational Belonging: Educational Return visits and Identity Formation Among second generation Chinese Youth in Britain."',
          journal: 'Journal of Ethnic and Migration Studies'
        },
        {
          status: 'Submitted / Under Review',
          title: '"Food, Senses, and Belonging: How Second-Generation Chinese Youth in Glasgow Navigate Transnational Identity."',
          journal: 'The Sociological Review'
        }
      ]
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'Professional Journey',
      items: [
        {
          period: "Jun 2018 — Sept 2018",
          title: "Media Intern",
          org: "Nanyang TV Station, Henan, China",
          desc: ["Designed and responsible for communicating with more than 40 interviewees.", "Increased number of live broadcast viewers by 10,000 (17%)."]
        },
        {
          period: "Sept 2020 — Dec 2024",
          title: "Founder, Consultant & Executor",
          org: "Independent UK Bai Offer & Visa Studio",
          desc: ["Supported over 50 students in obtaining offers from top UK universities.", "Developed tailored application strategies and visa consultancy."]
        },
        {
          period: "Oct 2016 — May 2018",
          title: "Member, Public Relations Department",
          org: "CSSA Sussex, Brighton, UK",
          desc: ["Responsible for searching and communicating with financial support organisations.", "Assisted in communicating with city and university leaders for guest activities."]
        },
        {
          period: "Jun 2019 — Sept 2019",
          title: "English Teacher & Assistant",
          org: "Angel Education, Henan, China",
          desc: ["Taught 94 English classes in total with a class size of 25 for each.", "Provided comprehensive feedback and progress reports to parents."]
        }
      ]
    },
    skills: {
      title: 'Skills & Capabilities',
      subtitle: 'Expertise',
      analytical: ["Qualitative Analysis", "NVivo", "Interview Design", "Survey Design", "Thematic Analysis", "Discourse Analysis", "Mixed-methods Research", "User Research Methods", "Ethics Review"],
      technical: ["Adobe Premiere", "Photoshop", "EndNote", "Basic R", "Academic Writing", "Peer-reviewed Publishing"],
      languages: [
        { name: "Mandarin", level: "Native" },
        { name: "English", level: "Proficient" }
      ]
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Connect',
      desc: 'I am always open to discussing research collaborations, teaching opportunities, or cultural projects.',
      email: 'Email',
      linkedin: 'LinkedIn',
      location: 'Location',
      locValue: 'Glasgow, Scotland'
    }
  },
  zh: {
    nav: {
      home: '首页',
      research: '研究',
      publications: '出版',
      experience: '经历',
      skills: '技能',
      contact: '联系',
      lang: 'English'
    },
    hero: {
      name: '李柯颖',
      subtitle: '我是一名移民研究领域的社会学博士研究员。我的博士研究通过观察日常生活，探讨英国第二代华裔青年的跨国身份认同。我的专业专长是开展多地民族志研究和深度访谈。',
      education: '教育背景',
      eduItems: [
        {
          period: "2021年9月 — 2026年7月",
          title: "社会学博士",
          org: "英国格拉斯哥大学",
          desc: "研究英国第二代华裔青年的跨国身份认同。"
        },
        {
          period: "2019年9月 — 2020年11月",
          title: "社会、文化与媒体硕士",
          org: "英国利兹大学"
        },
        {
          period: "2016年9月 — 2019年6月",
          title: "媒体与文化研究学士（荣誉）",
          org: "英国萨塞克斯大学"
        }
      ]
    },
    research: {
      title: '博士研究',
      subtitle: '研究方向',
      quote: '“在两者之间航行：居住在英国的第二代华裔青年的跨国身份认同。”',
      focus: '我的研究重点集中在跨国主义、移民和身份认同。我设计并开展了多地定性研究，包括访谈、问卷调查和民族志观察。',
      mechanisms: ["边界工作", "定位", "体现与感官", "数字中介", "资本转换", "跨语言与跨定位"],
      teachingTitle: '教学经历',
      teachingSubtitle: '教学与影响',
      teachingItems: [
        {
          company: "格拉斯哥大学",
          period: "2023年9月 — 2025年7月",
          content: [
            "领导并教授社会学一级课程的辅导课（130+小时）。",
            "负责为一年级学生批改作业并提供详细反馈（100+学生）。"
          ]
        },
        {
          company: "格拉斯哥中文学校",
          period: "2022年9月 — 2023年6月",
          content: [
            "指导学生在高级中文课程中取得A级成绩（30+学生）。"
          ]
        }
      ]
    },
    publications: {
      title: '学术出版',
      subtitle: '学术成果',
      items: [
        {
          status: '准备中',
          title: '“英国第二代华裔青年亲密关系中的伴侣选择与自信心研究”',
          journal: 'Journal of Ethnic and Migration Studies'
        },
        {
          status: '准备中',
          title: '“将父母资本转化为跨国归属感：英国第二代华裔青年的教育回访与身份形成”',
          journal: 'Journal of Ethnic and Migration Studies'
        },
        {
          status: '已提交 / 审稿中',
          title: '“食物、感官与归属感：格拉斯哥第二代华裔青年如何应对跨国身份”',
          journal: 'The Sociological Review'
        }
      ]
    },
    experience: {
      title: '工作经历',
      subtitle: '职业历程',
      items: [
        {
          period: "2018年6月 — 2018年9月",
          title: "媒体实习生",
          org: "中国河南南阳电视台",
          desc: ["设计并负责与40多名受访者进行沟通。", "将直播观众人数增加了10,000人（17%）。"]
        },
        {
          period: "2020年9月 — 2024年12月",
          title: "创始人、顾问与执行人",
          org: "英国 Bai Offer & Visa 独立工作室",
          desc: ["支持50多名学生获得英国顶尖大学的录取通知书。", "制定量身定制的申请策略和签证咨询。"]
        },
        {
          period: "2016年10月 — 2018年5月",
          title: "公关部成员",
          org: "英国萨塞克斯大学中国学联 (CSSA Sussex)",
          desc: ["负责寻找并与财务支持机构进行沟通。", "协助与城市和大学领导沟通嘉宾活动。"]
        },
        {
          period: "2019年6月 — 2019年9月",
          title: "英语教师与助理",
          org: "中国河南天使教育",
          desc: ["共教授94节英语课，每班规模为25人。", "向家长提供全面的反馈和进度报告。"]
        }
      ]
    },
    skills: {
      title: '技能与能力',
      subtitle: '专业领域',
      analytical: ["定性分析", "NVivo", "访谈设计", "问卷设计", "主题分析", "话语分析", "混合方法研究", "用户研究方法", "伦理审查"],
      technical: ["Adobe Premiere", "Photoshop", "EndNote", "基础 R 语言", "学术写作", "同行评审出版"],
      languages: [
        { name: "普通话", level: "母语" },
        { name: "英语", level: "精通" }
      ]
    },
    contact: {
      title: '联系方式',
      subtitle: '建立连接',
      desc: '我始终欢迎讨论研究合作、教学机会或文化项目。',
      email: '电子邮件',
      linkedin: 'LinkedIn',
      location: '所在地',
      locValue: '英国，格拉斯哥'
    }
  }
};

export default function App() {
  const [lang, setLang] = React.useState<'en' | 'zh'>('en');
  const t = translations[lang];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative bg-[#fcfcfc] selection:bg-black selection:text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-50 border-b border-black/5 px-6 md:px-24 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif text-xl font-bold tracking-tighter"
        >
          KL.
        </motion.div>
        <div className="hidden md:flex gap-8 items-center">
          {[
            { name: t.nav.home, id: 'home' },
            { name: t.nav.research, id: 'research' },
            { name: t.nav.publications, id: 'publications' },
            { name: t.nav.experience, id: 'experience' },
            { name: t.nav.skills, id: 'skills' },
            { name: t.nav.contact, id: 'contact' }
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="text-[10px] uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="ml-4 px-3 py-1 border border-black/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-black/60 hover:bg-black hover:text-white transition-all font-bold"
          >
            {t.nav.lang}
          </button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="text-[10px] font-bold uppercase tracking-widest text-black/60"
          >
            {t.nav.lang}
          </button>
          <Search size={18} className="text-black/40" />
        </div>
      </nav>

      {/* PAGE 1: HERO & EDUCATION */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-24 relative overflow-hidden pt-32">
        {/* Parallax Background Text */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -150]) }}
          className="absolute top-20 right-[-5%] text-[25vw] font-serif text-black/[0.02] select-none pointer-events-none whitespace-nowrap"
        >
          SOCIOLOGY
        </motion.div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 inline-block px-4 py-1 border border-black/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-black/40 bg-white/50 backdrop-blur-sm">
              Personal Portfolio
            </div>
            <h1 className="font-serif text-[12vw] md:text-[7vw] leading-[0.9] mb-8 tracking-tighter">
              {t.hero.name}
            </h1>
            <p className="text-xl md:text-2xl font-light text-black/60 max-w-md leading-relaxed mb-12">
              {t.hero.subtitle}
            </p>
            
            <div className="space-y-12 mt-12">
              <div className="flex items-center gap-4">
                <h4 className="text-xs uppercase tracking-[0.3em] text-black/30 font-semibold">{t.hero.education}</h4>
                <div className="h-px flex-grow bg-black/5" />
              </div>
              <div className="space-y-0">
                {t.hero.eduItems.map((edu, idx) => (
                  <TimelineItem 
                    key={idx}
                    period={edu.period}
                    title={edu.title}
                    org={edu.org}
                    desc={edu.desc}
                    last={idx === t.hero.eduItems.length - 1}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -50]) }}
            className="relative aspect-[4/5] md:aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border border-black/5 translate-x-4 translate-y-4 rounded-2xl" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-black/[0.02] rounded-full blur-3xl" />
            <img 
              src="input_file_1.png" 
              alt="Keying Li" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-black/20"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* PAGE 2: PhD RESEARCH & TEACHING */}
      <section id="research" className="min-h-screen py-32 px-6 md:px-24 bg-white flex flex-col justify-center relative overflow-hidden">
        {/* Parallax Background Text */}
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0.2, 0.4], [100, -100]) }}
          className="absolute top-40 left-[-10%] text-[20vw] font-serif text-black/[0.01] select-none pointer-events-none whitespace-nowrap"
        >
          RESEARCH
        </motion.div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-12 gap-16 mb-40">
            <div className="md:col-span-7">
              <SectionTitle subtitle={t.research.subtitle}>{t.research.title}</SectionTitle>
              <div className="space-y-10 text-lg text-black/70 leading-relaxed">
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-serif text-3xl md:text-4xl text-black italic leading-tight"
                >
                  {t.research.quote}
                </motion.p>
                <p>
                  {t.research.focus}
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8">
                  {t.research.mechanisms.map((mech, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-sm font-medium text-black/60 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-black/10 group-hover:bg-black transition-colors" />
                      {mech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col gap-8">
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0.2, 0.4], [0, -40]) }}
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative group"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <img src="input_file_0.png" alt="Research Participant Activity" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0.2, 0.4], [0, 40]) }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative group"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <img src="input_file_2.png" alt="Dragon Dance Performance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-black/20 text-center">Ethnographic documentation</p>
            </div>
          </div>

          <div className="pt-32 border-t border-black/5">
            <SectionTitle subtitle={t.research.teachingSubtitle}>{t.research.teachingTitle}</SectionTitle>
            <div className="space-y-20">
              {t.research.teachingItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-4xl"
                >
                  <h3 className="font-serif text-4xl md:text-5xl mb-2">{item.company}</h3>
                  <p className="text-xs font-mono text-black/40 uppercase tracking-widest mb-8">{item.period}</p>
                  <ul className="space-y-4">
                    {item.content.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-4 text-black/70 leading-relaxed">
                        <span className="text-black/20 mt-1.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 3: PUBLICATIONS */}
      <section id="publications" className="min-h-screen py-32 px-6 md:px-24 bg-[#0a0a0a] text-white flex flex-col justify-center relative overflow-hidden">
        {/* Parallax Background Text */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.4, 0.6], [100, -100]) }}
          className="absolute bottom-20 right-[-5%] text-[20vw] font-serif text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
        >
          WRITING
        </motion.div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <SectionTitle subtitle={t.publications.subtitle} light>{t.publications.title}</SectionTitle>
          <div className="space-y-16">
            {t.publications.items.map((pub, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-default"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/60">{pub.status}</span>
                  <div className="h-px flex-grow bg-white/10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-4 group-hover:text-white transition-colors text-white/90">
                  {pub.title}
                </h3>
                <p className="text-lg text-white/40 italic">{pub.journal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 4: WORK EXPERIENCE */}
      <section id="experience" className="min-h-screen py-32 px-6 md:px-24 bg-white relative overflow-hidden">
        {/* Parallax Background Text */}
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0.6, 0.8], [-100, 100]) }}
          className="absolute top-20 left-[-5%] text-[20vw] font-serif text-black/[0.01] select-none pointer-events-none whitespace-nowrap"
        >
          JOURNEY
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle subtitle={t.experience.subtitle}>{t.experience.title}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-24 relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 hidden md:block" />
            
            <div className="space-y-12">
              {t.experience.items.slice(0, 2).map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="border-b border-black/5 pb-12 group"
                >
                  <span className="text-xs font-mono text-black/30 mb-4 block group-hover:text-black transition-colors">{exp.period}</span>
                  <h4 className="text-2xl font-serif mb-2">{exp.title}</h4>
                  <p className="text-black/50 mb-6 italic">{exp.org}</p>
                  <ul className="space-y-3 text-sm text-black/70">
                    {exp.desc.map((d, dIdx) => (
                      <li key={dIdx}>• {d}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="space-y-12">
              {t.experience.items.slice(2).map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="border-b border-black/5 pb-12 group"
                >
                  <span className="text-xs font-mono text-black/30 mb-4 block group-hover:text-black transition-colors">{exp.period}</span>
                  <h4 className="text-2xl font-serif mb-2">{exp.title}</h4>
                  <p className="text-black/50 mb-6 italic">{exp.org}</p>
                  <ul className="space-y-3 text-sm text-black/70">
                    {exp.desc.map((d, dIdx) => (
                      <li key={dIdx}>• {d}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 5: SKILLS */}
      <section id="skills" className="min-h-screen py-32 px-6 md:px-24 bg-[#fcfcfc] flex flex-col justify-center relative overflow-hidden">
        {/* Parallax Background Text */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.8, 1.0], [-50, 50]) }}
          className="absolute top-1/2 right-[-5%] -translate-y-1/2 text-[25vw] font-serif text-black/[0.01] select-none pointer-events-none whitespace-nowrap"
        >
          SKILLS
        </motion.div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <SectionTitle subtitle={t.skills.subtitle}>{t.skills.title}</SectionTitle>
          <div className="grid md:grid-cols-3 gap-20">
            <div className="space-y-10">
              <h4 className="text-xs uppercase tracking-[0.4em] text-black/20 font-bold">{lang === 'en' ? 'Analytical' : '分析能力'}</h4>
              <div className="flex flex-wrap gap-3">
                {t.skills.analytical.map((s, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.2)", backgroundColor: "rgba(0,0,0,0.02)" }}
                    className="px-4 py-2 bg-white border border-black/5 rounded-xl text-sm shadow-sm transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="space-y-10">
              <h4 className="text-xs uppercase tracking-[0.4em] text-black/20 font-bold">{lang === 'en' ? 'Technical' : '技术能力'}</h4>
              <div className="flex flex-wrap gap-3">
                {t.skills.technical.map((s, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.2)", backgroundColor: "rgba(0,0,0,0.02)" }}
                    className="px-4 py-2 bg-white border border-black/5 rounded-xl text-sm shadow-sm transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="space-y-10">
              <h4 className="text-xs uppercase tracking-[0.4em] text-black/20 font-bold">{lang === 'en' ? 'Languages' : '语言能力'}</h4>
              <div className="space-y-6">
                {t.skills.languages.map((langItem, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex justify-between items-center border-b border-black/5 pb-4 group"
                  >
                    <span className="text-lg font-serif group-hover:translate-x-2 transition-transform">{langItem.name}</span>
                    <span className="text-[10px] text-black/30 uppercase tracking-[0.3em]">{langItem.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 6: CONTACT */}
      <footer id="contact" className="min-h-screen py-32 px-6 md:px-24 bg-white flex flex-col justify-center text-center relative overflow-hidden">
        {/* Parallax Background Text */}
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0.9, 1.0], [50, -50]) }}
          className="absolute bottom-10 left-[-5%] text-[20vw] font-serif text-black/[0.01] select-none pointer-events-none whitespace-nowrap"
        >
          CONTACT
        </motion.div>

        <div className="max-w-4xl mx-auto w-full relative z-10">
          <SectionTitle subtitle={t.contact.subtitle}>{t.contact.title}</SectionTitle>
          <p className="text-xl md:text-2xl text-black/50 font-light mb-24 max-w-2xl mx-auto leading-relaxed">
            {t.contact.desc}
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mb-32">
            <motion.a 
              href="mailto:keyingli96@outlook.com"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-6 group"
            >
              <div className="w-20 h-20 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-black/20">
                <Mail size={28} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-black/30 block">{t.contact.email}</span>
                <span className="text-sm font-medium border-b border-transparent group-hover:border-black transition-all">keyingli96@outlook.com</span>
              </div>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/keying-li-5947781b3/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-6 group"
            >
              <div className="w-20 h-20 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-black/20">
                <Linkedin size={28} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-black/30 block">{t.contact.linkedin}</span>
                <span className="text-sm font-medium border-b border-transparent group-hover:border-black transition-all">Keying Li</span>
              </div>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-6 group"
            >
              <div className="w-20 h-20 rounded-full border border-black/5 flex items-center justify-center">
                <MapPin size={28} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-black/30 block">{t.contact.location}</span>
                <span className="text-sm font-medium">{t.contact.locValue}</span>
              </div>
            </motion.div>
          </div>

          <div className="pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-black/20">© 2026 Keying Li</p>
            <div className="flex gap-8">
              <motion.a whileHover={{ x: 5 }} href="#" className="text-[10px] uppercase tracking-[0.2em] text-black/30 hover:text-black transition-colors">ResearchGate</motion.a>
              <motion.a whileHover={{ x: 5 }} href="#" className="text-[10px] uppercase tracking-[0.2em] text-black/30 hover:text-black transition-colors">University Profile</motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

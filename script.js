/* ============================================================
   D Swimming — Bilingual (EN / ZH) site script
   ============================================================ */

// ── TRANSLATIONS ──────────────────────────────────────────────
const translations = {
  en: {
    nav_about:    'About',
    nav_programs: 'Programs',
    nav_why:      'Why Us',
    nav_contact:  'Contact',
    nav_enroll:   'Enrol Now',

    hero_badge:  'Ages 4 – 16 · Beginner Friendly',
    hero_title:  'Build Confidence.<br>Learn to Swim.',
    hero_sub:    'Safe, structured, and fun swimming lessons for children — designed with Chinese-speaking families in mind.',
    hero_cta1:   'Get Started Today',
    hero_cta2:   'View Programs',

    stat1_num:   '500+',
    stat1_label: 'Students Taught',
    stat2_num:   '4–16',
    stat2_label: 'Age Range',
    stat3_num:   '100%',
    stat3_label: 'Certified Instructors',

    about_label:      'About D Swimming',
    about_title:      'A swimming school built for your family',
    about_p1:         'At D Swimming, we believe every child deserves the life skill of swimming. Founded with Chinese-speaking families in mind, we offer bilingual instruction so that parents and children can always feel comfortable and understood.',
    about_p2:         'Our small-group classes follow a structured, step-by-step curriculum — from first water confidence all the way through to independent swimming. We make every lesson safe, encouraging, and enjoyable.',
    about_badge_title: 'Certified & Safe',
    about_badge_sub:   'All instructors are nationally certified',
    about_f1: 'Bilingual lessons (English & Mandarin)',
    about_f2: 'Small class sizes for personalised attention',
    about_f3: 'Structured curriculum for ages 4–16',
    about_f4: 'Supportive, child-friendly environment',

    prog_label:   'Our Programs',
    prog_title:   'Classes for every age & level',
    prog_sub:     'All programs focus on building water safety, technique, and confidence at the right pace for your child.',
    prog_popular: 'Most Popular',
    prog_enrol:   'Enrol Now',

    prog1_age:  'Ages 4 – 6',
    prog1_name: 'Little Splashers',
    prog1_desc: 'Introducing water for the very first time. Children learn to feel safe and comfortable in the pool through play-based activities and gentle guidance.',
    prog1_o1:   'Water familiarisation & floating',
    prog1_o2:   'Breath control basics',
    prog1_o3:   'Kicking & arm movement introduction',

    prog2_age:  'Ages 7 – 10',
    prog2_name: 'Junior Swimmers',
    prog2_desc: 'Building on the basics to develop proper freestyle and backstroke technique. Children gain the skills and confidence to swim independently.',
    prog2_o1:   'Freestyle & backstroke technique',
    prog2_o2:   'Lap swimming endurance',
    prog2_o3:   'Water safety awareness',

    prog3_age:  'Ages 11 – 16',
    prog3_name: 'Teen Swimmers',
    prog3_desc: 'Refining technique and building stamina. Older beginners are welcomed in a respectful, non-competitive setting designed for steady progress.',
    prog3_o1:   'All four strokes introduction',
    prog3_o2:   'Tumble turns & starts',
    prog3_o3:   'Goal-based progression',

    why_label: 'Why D Swimming',
    why_title: 'What makes us different',

    why1_title: 'Bilingual Instruction',
    why1_desc:  'Our instructors teach in both English and Mandarin, so families who speak Chinese at home always feel at ease and fully informed.',
    why2_title: 'Family-Centred Approach',
    why2_desc:  'We keep parents involved with regular progress updates and welcome questions at any time — in whatever language you prefer.',
    why3_title: 'Safety First',
    why3_desc:  'Strict pool-side supervision, small class sizes (max 6 per instructor), and certified first-aid trained staff at every session.',
    why4_title: 'Structured Progress',
    why4_desc:  'Our clear, level-based curriculum means your child always knows what they\'re working towards and celebrates each milestone.',
    why5_title: 'Fun & Encouraging',
    why5_desc:  'We believe children learn best when they\'re enjoying themselves. Every class is designed to be positive, patient, and pressure-free.',
    why6_title: 'Flexible Scheduling',
    why6_desc:  'Weekend and after-school time slots available to fit around your family\'s busy schedule.',

    test_label: 'Testimonials',
    test_title: 'What parents say',
    test1_text: '"My daughter was terrified of the water. After just 8 weeks at D Swimming, she\'s floating and kicking on her own. The instructors were so patient and kind — and being able to ask questions in Mandarin made everything so much easier for us."',
    test1_name: 'Wei Fang',
    test1_role: 'Parent of 5-year-old',
    test2_text: '"Both my boys (7 and 11) attend different classes and they absolutely love it. The progress has been amazing. The teachers explain everything clearly in Chinese which helps the kids understand better."',
    test2_name: 'Li Ming',
    test2_role: 'Parent of two students',
    test3_text: '"Our son started as a complete beginner at age 13 and never felt embarrassed — the teen class was perfectly paced and the instructors were very encouraging. Highly recommend D Swimming to every family!"',
    test3_name: 'Chen Jing',
    test3_role: 'Parent of 13-year-old',

    contact_label: 'Get In Touch',
    contact_title: 'Ready to make a splash?',
    contact_sub:   'Fill in the form and we\'ll get back to you within 24 hours to discuss the best program for your child.',
    contact_addr:  '123 Poolside Avenue, Sydney NSW 2000',
    contact_hours: 'Mon–Fri 3pm–7pm · Sat–Sun 8am–5pm',

    form_parent:        'Parent / Guardian Name',
    form_child:         "Child's Name",
    form_age:           "Child's Age",
    form_age_placeholder: 'Select age…',
    form_program:       'Preferred Program',
    form_prog_placeholder: 'Select program…',
    form_prog1:         'Little Splashers (4–6)',
    form_prog2:         'Junior Swimmers (7–10)',
    form_prog3:         'Teen Swimmers (11–16)',
    form_phone:         'Phone Number',
    form_email:         'Email Address',
    form_lang:          'Preferred Language for Communication',
    form_lang_en:       'English',
    form_lang_zh:       'Mandarin Chinese (普通话)',
    form_lang_both:     'Both',
    form_message:       'Any questions or special requirements?',
    form_msg_placeholder: 'e.g. My child has had a bad experience with water before…',
    form_submit:        'Send Enquiry',
    form_success:       "Thank you! We'll be in touch within 24 hours.",

    footer_tagline: 'Teaching children to swim with confidence, safety, and joy.',
    footer_copy:    '© 2026 D Swimming. All rights reserved.',
  },

  zh: {
    nav_about:    '关于我们',
    nav_programs: '课程',
    nav_why:      '为什么选择我们',
    nav_contact:  '联系我们',
    nav_enroll:   '立即报名',

    hero_badge:  '4 – 16岁 · 零基础欢迎',
    hero_title:  '建立自信。<br>学会游泳。',
    hero_sub:    '为孩子们量身定制的安全、系统、有趣的游泳课程 —— 专为华语家庭设计。',
    hero_cta1:   '立即开始',
    hero_cta2:   '查看课程',

    stat1_num:   '500+',
    stat1_label: '学员已结课',
    stat2_num:   '4–16',
    stat2_label: '适合年龄',
    stat3_num:   '100%',
    stat3_label: '持证教练',

    about_label:      '关于 D Swimming',
    about_title:      '专为您的家庭打造的游泳学校',
    about_p1:         '在 D Swimming，我们相信每个孩子都应该掌握游泳这项终身技能。学校专为华语家庭创办，提供中英双语教学，让家长和孩子始终感到舒适和被理解。',
    about_p2:         '我们的小班课程采用系统化、循序渐进的教学方案 —— 从初次接触水到独立游泳。每一堂课都安全、鼓励性强、充满乐趣。',
    about_badge_title: '资质认证 · 安全保障',
    about_badge_sub:   '所有教练均持有国家级认证',
    about_f1: '双语教学（英语和普通话）',
    about_f2: '小班授课，提供个性化关注',
    about_f3: '4–16岁系统化课程体系',
    about_f4: '温馨友好的儿童学习环境',

    prog_label:   '我们的课程',
    prog_title:   '适合每个年龄段和水平的班级',
    prog_sub:     '所有课程均以培养水上安全意识、游泳技术和自信心为核心，按照适合您孩子的节奏进行。',
    prog_popular: '最受欢迎',
    prog_enrol:   '立即报名',

    prog1_age:  '4 – 6 岁',
    prog1_name: '小水花班',
    prog1_desc: '首次接触水的启蒙课程。通过游戏化活动和温和的引导，帮助孩子在泳池中感到安全和舒适。',
    prog1_o1:   '水中适应与漂浮练习',
    prog1_o2:   '呼吸控制基础',
    prog1_o3:   '踢腿与手臂动作入门',

    prog2_age:  '7 – 10 岁',
    prog2_name: '少年游泳班',
    prog2_desc: '在基础上进一步发展正确的自由泳和仰泳技术，帮助孩子掌握独立游泳的技能与自信。',
    prog2_o1:   '自由泳与仰泳技术',
    prog2_o2:   '连续游泳耐力训练',
    prog2_o3:   '水上安全意识',

    prog3_age:  '11 – 16 岁',
    prog3_name: '青少年游泳班',
    prog3_desc: '精进技术、增强体能。在尊重、非竞争性的环境中欢迎年龄较大的初学者，稳步提升游泳水平。',
    prog3_o1:   '四种泳姿入门',
    prog3_o2:   '翻转转身与起跳',
    prog3_o3:   '目标导向的进阶体系',

    why_label: '为何选择 D Swimming',
    why_title: '我们的与众不同之处',

    why1_title: '双语教学',
    why1_desc:  '我们的教练用英语和普通话双语授课，让在家说中文的家庭始终感到轻松自在、清楚明白。',
    why2_title: '以家庭为中心',
    why2_desc:  '我们定期向家长反馈孩子的进步情况，随时欢迎提问 —— 无论您更习惯哪种语言。',
    why3_title: '安全第一',
    why3_desc:  '严格的泳池边监督，每位教练最多带6名学员的小班制，以及每节课均有持证急救人员在场。',
    why4_title: '系统化进阶',
    why4_desc:  '清晰的分级课程体系，让您的孩子始终知道自己的学习目标，并为每一个里程碑感到骄傲。',
    why5_title: '快乐与鼓励',
    why5_desc:  '我们相信孩子在快乐中学得最好。每堂课都积极、耐心、无压力。',
    why6_title: '灵活排课',
    why6_desc:  '提供周末及放学后的时间段，轻松融入繁忙的家庭日程。',

    test_label: '家长评价',
    test_title: '家长们怎么说',
    test1_text: '"我女儿以前非常怕水。在 D Swimming 上了短短8周课后，她已经能独自漂浮和踢腿了。教练非常有耐心、非常和善 —— 能够用普通话提问，让我们轻松了很多。"',
    test1_name: '卫芳',
    test1_role: '5岁学员的家长',
    test2_text: '"我的两个儿子（7岁和11岁）分别在不同班级上课，他们都非常喜欢。进步非常明显。老师用中文讲解得很清楚，孩子们理解得更好。"',
    test2_name: '李明',
    test2_role: '两位学员的家长',
    test3_text: '"我儿子13岁才开始学游泳，是个完全的零基础学员，但从未感到尴尬 —— 青少年班的节奏非常合适，教练也非常鼓励人。强烈推荐 D Swimming 给每个家庭！"',
    test3_name: '陈静',
    test3_role: '13岁学员的家长',

    contact_label: '联系我们',
    contact_title: '准备好开始了吗？',
    contact_sub:   '请填写以下表格，我们将在24小时内与您联系，为您的孩子推荐最合适的课程。',
    contact_addr:  '悉尼市区泳池大道123号，新南威尔士州 2000',
    contact_hours: '周一至周五 下午3时–晚7时 · 周六至周日 早8时–下午5时',

    form_parent:        '家长/监护人姓名',
    form_child:         '孩子姓名',
    form_age:           '孩子年龄',
    form_age_placeholder: '请选择年龄…',
    form_program:       '意向课程',
    form_prog_placeholder: '请选择课程…',
    form_prog1:         '小水花班（4–6岁）',
    form_prog2:         '少年游泳班（7–10岁）',
    form_prog3:         '青少年游泳班（11–16岁）',
    form_phone:         '联系电话',
    form_email:         '电子邮箱',
    form_lang:          '希望使用的沟通语言',
    form_lang_en:       '英语',
    form_lang_zh:       '普通话',
    form_lang_both:     '两者均可',
    form_message:       '有任何问题或特殊需求吗？',
    form_msg_placeholder: '例如：我的孩子曾经有过不愉快的水中经历……',
    form_submit:        '提交咨询',
    form_success:       '谢谢您！我们将在24小时内与您联系。',

    footer_tagline: '带领孩子以自信、安全、快乐的方式学习游泳。',
    footer_copy:    '© 2026 D Swimming. 版权所有。',
  }
};

// ── STATE ─────────────────────────────────────────────────────
let currentLang = 'en';

// ── APPLY LANGUAGE ────────────────────────────────────────────
function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.body.classList.toggle('lang-zh', lang === 'zh');

  // Text content nodes
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (!t[key]) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
      el.placeholder = t[key];
    } else {
      el.innerHTML = t[key];
    }
  });

  // Placeholder for textarea via data-placeholder-key
  document.querySelectorAll('[data-placeholder-key]').forEach(el => {
    const key = el.getAttribute('data-placeholder-key');
    if (t[key]) el.placeholder = t[key];
  });

  // Update language toggle labels
  const nextLangLabel = lang === 'en' ? '中文' : 'English';
  document.querySelectorAll('#langLabel, #langLabelFooter').forEach(el => {
    el.textContent = nextLangLabel;
  });

  // Persist preference
  try { localStorage.setItem('dswim_lang', lang); } catch(e) {}
}

// ── TOGGLE ────────────────────────────────────────────────────
function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'zh' : 'en');
}

document.getElementById('langToggle').addEventListener('click', toggleLanguage);
document.getElementById('langToggleFooter').addEventListener('click', toggleLanguage);

// ── NAVBAR SCROLL ─────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── HAMBURGER MENU ────────────────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// ── CONTACT FORM ──────────────────────────────────────────────
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', e => {
  e.preventDefault();
  // Simple client-side simulation (replace with real backend/API)
  formSuccess.classList.add('show');
  form.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
  setTimeout(() => formSuccess.classList.remove('show'), 6000);
});

// ── SCROLL ANIMATIONS ─────────────────────────────────────────
function initScrollAnimations() {
  const targets = document.querySelectorAll(
    '.program-card, .why-card, .testimonial-card, .about-grid, .contact-grid, .section-header'
  );
  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language preference
  let savedLang = 'en';
  try { savedLang = localStorage.getItem('dswim_lang') || 'en'; } catch(e) {}
  applyLanguage(savedLang);

  initScrollAnimations();
});

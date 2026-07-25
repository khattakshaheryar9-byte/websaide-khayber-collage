import { Course, FacultyMember, GalleryItem, Testimonial, NavItem } from '../types';

export const COLLEGE_INFO = {
  name: 'Khyber College of Global Sciences & Professional Education',
  shortName: 'Khyber College (KCGSPE)',
  slogan: 'Empowering Minds with Global Excellence & Practical Professional Skills',
  established: '2012',
  phonePrimary: '03489779591',
  phoneSecondary: '03489779591',
  whatsapp: '03489779591',
  email: 'khattakshaheryar9@gmail.com',
  admissionsEmail: 'khattakshaheryar9@gmail.com',
  address: 'Mohla Khattak, Hesara Full, Dargai, Charsadda, Pakistan',
  officeHours: 'Monday – Saturday: 8:00 AM – 6:00 PM',
  stats: [
    { label: 'Graduated Students', value: '12,500+', icon: 'GraduationCap' },
    { label: 'Professional Courses', value: '24+', icon: 'BookOpen' },
    { label: 'Expert Faculty Members', value: '45+', icon: 'Users' },
    { label: 'Employment Rate', value: '94%', icon: 'Award' },
  ]
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'courses', label: 'Courses', href: '#courses' },
  { id: 'admissions', label: 'Admissions', href: '#admissions' },
  { id: 'faculty', label: 'Faculty', href: '#faculty' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'contact', label: 'Contact Us', href: '#contact' },
];

export const COURSES_DATA: Course[] = [
  {
    id: 'cit-01',
    title: 'CIT (Certificate in Information Technology)',
    code: 'DIT-101',
    category: 'IT & Computing',
    duration: '6 Months / 1 Year (Diploma)',
    eligibility: 'Matriculation (SSC) or equivalent in any discipline',
    fees: 'PKR 8,500 / month (Scholarships Available)',
    description: 'A comprehensive foundational computing course covering OS administration, office automation suites, networking fundamentals, hardware troubleshooting, and introductory programming.',
    highlights: [
      'Hands-on training in state-of-the-art computer labs',
      'MS Office 365 Professional Mastery (Word, Excel, Access, PowerPoint)',
      'PC Hardware Assembly & LAN Networking configuration',
      'Introduction to Web Technologies & Database Fundamentals',
      'Govt. recognized certificate accredited by Technical Board'
    ],
    iconName: 'Monitor',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    popular: true,
    schedule: 'Morning (9:00 AM - 12:00 PM) & Evening (4:00 PM - 7:00 PM)'
  },
  {
    id: 'web-dev-02',
    title: 'Full-Stack Web Development',
    code: 'WEB-204',
    category: 'IT & Computing',
    duration: '6 Months (Intensive Bootcamp)',
    eligibility: 'Intermediate (FA/FSc/ICS) or basic computer literacy',
    fees: 'PKR 12,000 / month',
    description: 'Master modern web development from scratch. Build responsive front-end interfaces with HTML5, CSS3, JavaScript, and React, coupled with backend development using Node.js and databases.',
    highlights: [
      'HTML5, CSS3, Tailwind CSS & Responsive Web Design',
      'JavaScript (ES6+), DOM Manipulation & Asynchronous programming',
      'React.js for building modern single-page applications',
      'Backend development with Node.js, Express & MongoDB / SQL',
      'Real-world capstone project & GitHub portfolio preparation'
    ],
    iconName: 'Code2',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    popular: true,
    schedule: 'Evening (3:30 PM - 6:30 PM)'
  },
  {
    id: 'ai-digital-03',
    title: 'AI & Digital Skills (Generative AI & Freelancing)',
    code: 'AI-301',
    category: 'IT & Computing',
    duration: '3 Months (Certificate Course)',
    eligibility: 'Matriculation or above with basic English reading skills',
    fees: 'PKR 10,000 / month',
    description: 'Step into the future with artificial intelligence and digital monetization tools. Learn prompt engineering, ChatGPT/Gemini mastery, AI-powered automation, content creation, and global freelancing on Upwork & Fiverr.',
    highlights: [
      'Practical Prompt Engineering & AI Model utilization',
      'AI tools for Graphic Design, Video Editing & Copywriting',
      'Data analysis automation using AI plugins',
      'Setting up high-converting Fiverr & Upwork profiles',
      'Client communication & international payment gateways'
    ],
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800',
    popular: true,
    schedule: 'Weekend & Evening batches available'
  },
  {
    id: 'graphic-design-04',
    title: 'Graphic Design & UI/UX Design',
    code: 'GRD-105',
    category: 'Vocational & Arts',
    duration: '4 Months',
    eligibility: 'Matriculation or above with creative interest',
    fees: 'PKR 9,000 / month',
    description: 'Transform your creative ideas into stunning visual masterpieces. Learn industry-standard design tools including Adobe Photoshop, Illustrator, InDesign, and Figma for UI/UX product design.',
    highlights: [
      'Vector typography, logo design & brand identity systems',
      'Photo manipulation, color grading & layout composition in Photoshop',
      'Social media marketing campaigns & print media preparation',
      'UI/UX wireframing and interactive prototyping in Figma',
      'Commercial portfolio review by industry art directors'
    ],
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    popular: false,
    schedule: 'Morning (10:00 AM - 1:00 PM)'
  },
  {
    id: 'eng-lang-05',
    title: 'Spoken English & IELTS Preparation',
    code: 'ENG-102',
    category: 'Language & Comm.',
    duration: '3 Months / 6 Months',
    eligibility: 'Open to all students, professionals & job seekers',
    fees: 'PKR 7,500 / month',
    description: 'Enhance your global communication fluency, confidence, and public speaking skills. Special focus on American/British pronunciation, grammar structure, business correspondence, and IELTS academic/general training.',
    highlights: [
      'Daily interactive group discussions & speech practice sessions',
      'Audio-visual language lab for accent reduction & listening comprehension',
      'Business email writing, interview preparation & CV drafting',
      'IELTS Mock Tests (Reading, Writing, Listening, Speaking)',
      '1-on-1 feedback from British Council certified trainers'
    ],
    iconName: 'MessageSquare',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
    popular: true,
    schedule: 'Morning (8:30 AM - 10:30 AM) & Evening (5:00 PM - 7:00 PM)'
  },
  {
    id: 'beautician-06',
    title: 'Professional Beautician & Salon Management',
    code: 'COS-108',
    category: 'Vocational & Arts',
    duration: '4 Months (Diploma)',
    eligibility: 'Open to female candidates (Middle / Matric)',
    fees: 'PKR 8,000 / month',
    description: 'A dedicated professional training program covering skincare, advanced bridal makeup, hair styling, cosmetology therapy, hygiene standards, and entrepreneurial salon management skills.',
    highlights: [
      'Advanced skincare treatments, facials & dermatology basics',
      'Professional party, casual, and signature bridal makeup techniques',
      'Hair coloring, cutting, keratin treatments & styling artistry',
      'Salon hygiene, client consultation & cosmetology ethics',
      'Guidance on setting up your own beauty studio / home salon'
    ],
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    popular: false,
    schedule: 'Dedicated Female Wing: Morning (10:00 AM - 1:00 PM)'
  },
  {
    id: 'comp-apps-07',
    title: 'Computer Applications & Office Accounting (Tally / Quickbooks)',
    code: 'CAP-110',
    category: 'Business & Digital',
    duration: '3 Months',
    eligibility: 'Matriculation / Intermediate (Commerce background preferred)',
    fees: 'PKR 7,000 / month',
    description: 'Designed for office administrators, bookkeepers, and students wanting to master digital office productivity and computerized accounting systems used by corporate houses and banks.',
    highlights: [
      'Advanced MS Excel formatting, Pivot tables, VLOOKUP & financial formulas',
      'Computerized Accounting with QuickBooks Online & Tally ERP 9',
      'Payroll management, taxation basics & inventory control',
      'Urdu typing InPage mastery & official document drafting',
      'Digital filing systems and corporate email etiquette'
    ],
    iconName: 'Calculator',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    popular: false,
    schedule: 'Afternoon (1:30 PM - 3:30 PM)'
  }
];

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Prof. Dr. Tariq Mehmood Khattak',
    designation: 'Principal & Head of Academic Council',
    department: 'Computer Science & Information Technology',
    qualification: 'Ph.D. in Computer Science (UET Peshawar), M.Sc. Computing (UK)',
    experience: '22+ Years in Academic Leadership & Research',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    bio: 'Dr. Tariq Khattak has been a visionary educator leading technical institutions across Khyber Pakhtunkhwa. He is passionate about bridging the gap between traditional college degrees and modern tech industry skills.',
    email: 'principal@khybercollege.edu.pk',
    socials: { linkedin: 'https://linkedin.com' }
  },
  {
    id: 'fac-2',
    name: 'Engr. Bilal Ahmad Shinwari',
    designation: 'Senior Lecturer & Web Tech Lead',
    department: 'Software Engineering & Web Development',
    qualification: 'MS Software Engineering (FAST-NUCES), AWS Certified Architect',
    experience: '10+ Years in Full-Stack Dev & Teaching',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    bio: 'Engr. Bilal brings real-world Silicon Valley software engineering standards to the classroom. He has mentored over 3,000 students who are now thriving on Fiverr, Upwork, and software houses.',
    email: 'bilal.shinwari@khybercollege.edu.pk',
    socials: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
  },
  {
    id: 'fac-3',
    name: 'Ms. Ayesha Zafar Khan',
    designation: 'Head of English Language & Communication',
    department: 'Humanities & Linguistics',
    qualification: 'MA English Literature (Peshawar University), CELTA (UK), IELTS 8.5 Band',
    experience: '12+ Years as IELTS Trainer & Corporate Speaker',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    bio: 'Ms. Ayesha specializes in interactive psycholinguistic teaching methods that eliminate public speaking anxiety and help students achieve high band scores in international English proficiency exams.',
    email: 'ayesha.khan@khybercollege.edu.pk'
  },
  {
    id: 'fac-4',
    name: 'Mr. Shahryar Khan Durrani',
    designation: 'Lead AI & Graphic Design Instructor',
    department: 'Digital Arts & Artificial Intelligence',
    qualification: 'BS Computer Science, Certified Google UX Designer & Prompt Engineer',
    experience: '8+ Years in UI/UX & AI Product Design',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    bio: 'Shahryar blends artistic creativity with generative AI algorithms. His students consistently win design competitions and top-tier branding contracts from international clients.',
    email: 'shahryar.durrani@khybercollege.edu.pk',
    socials: { linkedin: 'https://linkedin.com' }
  },
  {
    id: 'fac-5',
    name: 'Ms. Fatima Gul Wazir',
    designation: 'Director of Vocational & Beautician Studies',
    department: 'Vocational Training & Cosmetology',
    qualification: 'Certified Cosmetologist (City & Guilds London), Advanced Aesthetics Diploma',
    experience: '14+ Years Salon Director & Master Trainer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    bio: 'Ms. Fatima has empowered hundreds of women across KP to become self-reliant entrepreneurs by establishing independent salons and mastering modern dermatology beauty protocols.',
    email: 'fatima.wazir@khybercollege.edu.pk'
  },
  {
    id: 'fac-6',
    name: 'Mr. Hammad Ali Qureshi',
    designation: 'Lecturer Computer Applications & Accounting',
    department: 'Business Information Systems',
    qualification: 'M.Com, MBA Finance, Certified QuickBooks & Tally Specialist',
    experience: '9+ Years in Corporate Auditing & IT Applications',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    bio: 'Hammad transforms complex accounting spreadsheets and ERP databases into simple, intuitive concepts that prepare students for immediate placement in accounting firms and corporate HR departments.',
    email: 'hammad.qureshi@khybercollege.edu.pk'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Academic Building & Campus Front',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
    description: 'Our purpose-built campus in Dargai, Charsadda featuring lush green lawns, modern architectural facade, and security surveillance.',
    date: 'Spring 2025'
  },
  {
    id: 'gal-2',
    title: 'High-Performance Computer Lab 1',
    category: 'Computer Lab',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    description: 'Equipped with Core i7 PCs, high-speed fiber internet, and dual monitors for web development and AI training.',
    date: 'January 2025'
  },
  {
    id: 'gal-3',
    title: 'Interactive Multimedia Classroom',
    category: 'Classrooms',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    description: 'Ergonomic seating with 4K smart interactive whiteboards and acoustic wall panels for optimal learning comfort.',
    date: 'Fall 2024'
  },
  {
    id: 'gal-4',
    title: 'Annual IT & Graphic Design Exhibition',
    category: 'Student Activities',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    description: 'Students displaying their AI projects, UI/UX designs, and e-commerce websites to regional industry employers.',
    date: 'December 2024'
  },
  {
    id: 'gal-5',
    title: 'Advanced Networking & Hardware Lab',
    category: 'Computer Lab',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    description: 'Hands-on server racks, router configurations, and hardware maintenance training setups.',
    date: 'February 2025'
  },
  {
    id: 'gal-6',
    title: 'Spoken English & Debate Competitions',
    category: 'Student Activities',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800',
    description: 'Our semester English declamation contest fostering confidence and critical thinking among students.',
    date: 'November 2024'
  },
  {
    id: 'gal-7',
    title: 'Beautician & Cosmetology Practical Studio',
    category: 'Classrooms',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    description: 'Dedicated female training wing featuring salon-grade styling stations, facial steamers, and makeup lighting.',
    date: 'March 2025'
  },
  {
    id: 'gal-8',
    title: 'Graduation Ceremony & Diploma Distribution',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    description: 'Celebrating academic triumphs with parents, faculty, and distinguished chief guests from the provincial education board.',
    date: 'August 2024'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Kamran Ullah Khan',
    course: 'Full-Stack Web Development',
    graduationYear: 'Class of 2024',
    rating: 5,
    review: 'Before joining Khyber College, I had no coding experience. Within 6 months of intense training with Engr. Bilal, I built my first SaaS app and now I earn consistently as a Top Rated seller on Upwork! The supportive lab environment is unmatched in Charsadda.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    currentRole: 'Full-Stack Freelancer on Upwork'
  },
  {
    id: 'test-2',
    name: 'Sumbul Afridi',
    course: 'Graphic Design & UI/UX',
    graduationYear: 'Class of 2024',
    rating: 5,
    review: 'The teachers at KCGSPE don’t just teach tools; they teach design psychology and creative problem solving. My Figma portfolio secured me a remote UI Designer job with a tech startup in Dubai right after completion!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    currentRole: 'UI/UX Designer at TechBay Dubai'
  },
  {
    id: 'test-3',
    name: 'Hamza Shahzad',
    course: 'AI & Digital Skills',
    graduationYear: 'Class of 2025',
    rating: 5,
    review: 'Learning Generative AI and prompt engineering at Khyber College gave me an edge over traditional graduates. I automated content pipelines for international clients and multiplied my freelancing income threefold.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    currentRole: 'AI Consultant & Freelancer'
  },
  {
    id: 'test-4',
    name: 'Nadia Gul',
    course: 'Professional Beautician Course',
    graduationYear: 'Class of 2023',
    rating: 5,
    review: 'The dedicated female campus and respectful atmosphere gave my family complete confidence. Thanks to Ms. Fatima’s masterclasses, I successfully launched "Nadia Aesthetics & Bridal Salon" in Hayatabad which is now booked months in advance!',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    currentRole: 'Founder & CEO, Nadia Aesthetics Salon'
  },
  {
    id: 'test-5',
    name: 'Zeeshan Mehmood',
    course: 'Spoken English & IELTS',
    graduationYear: 'Class of 2024',
    rating: 5,
    review: 'I scored an overall 7.5 Band in IELTS Academic after taking the 3-month preparatory course with Ms. Ayesha Khan. The regular mock speaking tests and audio labs cured my hesitation completely. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    currentRole: 'Graduate Student at University of Manchester, UK'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Accredited & Recognized',
    description: 'Affiliated with Technical Education Board and international training bodies, ensuring your certification is valued globally.',
    icon: 'Award'
  },
  {
    title: '100% Practical & Lab-Focused',
    description: 'We abandon dry textbook lectures in favor of real-time coding, design labs, live projects, and hands-on equipment practice.',
    icon: 'Laptop'
  },
  {
    title: 'Experienced Industry Faculty',
    description: 'Our teachers are active industry practitioners, software architects, and successful freelancers who teach what the market demands today.',
    icon: 'UserCheck'
  },
  {
    title: 'Career & Freelance Cell',
    description: 'Dedicated mentorship on profile building on Fiverr, Upwork, LinkedIn networking, CV optimization, and direct job interview placements.',
    icon: 'Briefcase'
  },
  {
    title: 'Modern Campus & High-Speed Wifi',
    description: 'Air-conditioned multimedia classrooms, uninterrupted backup power, and dedicated high-speed optical fiber internet.',
    icon: 'Wifi'
  },
  {
    title: 'Scholarships & Flexible Fees',
    description: 'Merit-based scholarships, financial aid for deserving students, and easy monthly installment fee plans.',
    icon: 'HeartHandshake'
  }
];

export const FAQS_DATA = [
  {
    question: 'What is the admission procedure at Khyber College?',
    answer: 'Admissions can be submitted online through our Admissions portal on this website or by visiting the campus administration office. Once you submit the form, our academic counselor will contact you within 24 hours to verify documents and confirm your batch timing.'
  },
  {
    question: 'Are there separate classes or timings for female students?',
    answer: 'Yes! We have a dedicated Female Wing with female faculty for courses like Beautician & Cosmetology, as well as dedicated morning and afternoon batches for IT and English courses with complete privacy and security.'
  },
  {
    question: 'Do you offer certificates upon completion of short courses?',
    answer: 'Absolutely. Every student who completes the required course hours and passes the practical capstone assessment receives a government-recognized professional diploma/certificate from Khyber College.'
  },
  {
    question: 'What if I am a beginner with no prior computing or coding knowledge?',
    answer: 'Our foundational courses such as CIT (Certificate in Information Technology), Computer Applications, and Web Development start from absolute zero basics before advancing to professional levels.'
  },
  {
    question: 'Are installment plans or fee discounts available?',
    answer: 'Yes, we offer monthly fee installment options for all diploma courses. We also provide up to 30% merit scholarships for high achievers in matriculation/intermediate and sibling discounts.'
  }
];

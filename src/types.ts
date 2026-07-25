export interface Course {
  id: string;
  title: string;
  code: string;
  category: 'IT & Computing' | 'Language & Comm.' | 'Vocational & Arts' | 'Business & Digital';
  duration: string;
  eligibility: string;
  fees: string;
  description: string;
  highlights: string[];
  iconName: string;
  image: string;
  popular?: boolean;
  schedule: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  image: string;
  bio: string;
  email: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Classrooms' | 'Computer Lab' | 'Student Activities' | 'Events';
  image: string;
  description: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  graduationYear: string;
  rating: number;
  review: string;
  image: string;
  currentRole?: string;
}

export interface AdmissionFormData {
  fullName: string;
  fatherName: string;
  email: string;
  phone: string;
  cnic: string;
  dob: string;
  gender: 'Male' | 'Female' | 'Other' | '';
  address: string;
  city: string;
  previousQualification: 'Matric / O-Level' | 'Intermediate / A-Level' | 'Bachelor' | 'Master' | 'Other' | '';
  marksPercentage: string;
  selectedCourse: string;
  studyShift: 'Morning' | 'Evening' | 'Weekend' | '';
  howDidYouHear: string;
  agreeToTerms: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Form data types
export interface ContactFormData {
  name: string;
  email: string;
  tel?: string;
  details?: string;
  agreeToTerms: boolean;
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

// Component prop types
export interface SectionProps {
  id?: string;
  className?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ClientLogoProps {
  src: string;
  alt: string;
  href: string;
}

export interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

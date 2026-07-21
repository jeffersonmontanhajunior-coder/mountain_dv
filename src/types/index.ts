export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  stack: string[];
  result?: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
}

export type Case = {
  id: number;
  name: string;
  slug: string;
  client?: string;
  hasApp?: boolean;
  hasWebsite?: boolean;
  color: string;
};

export interface CaseHeader {
  video: string;
  photo: string;
  title: string;
}

export interface CaseHero {
  tagLine: string;
}

export interface CaseLink {
  text: string;
  href: string;
}

export interface CaseMeta {
  color: string;
  client: string;
  deliverable: string;
  links: CaseLink[];
}

export interface CaseSection {
  title: string;
  description: string;
  video: string;
  photo: string;
}

export interface CaseContent {
  title?: string;
  tagLine?: string;
  paragraphs?: string[];
  sections: CaseSection[];
}

export interface CaseMask {
  color: string;
  photo: string;
}

export interface CaseFooter {
  title: string;
  links: CaseLink[];
}

export interface CaseTab {
  name: string;
  video: string;
  description: string;
  screenshot: string;
  content: CaseContent;
  mask: CaseMask;
  footer: CaseFooter;
}

export interface CaseData {
  header: CaseHeader;
  hero: CaseHero;
  meta: CaseMeta;
  tabs: CaseTab[];
}

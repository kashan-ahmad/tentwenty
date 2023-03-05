export type Case = {
  id: number;
  name: string;
  slug: string;
  client?: string;
  hasApp?: boolean;
  hasWebsite?: boolean;
  color: string;
};

declare module Case {
  export interface Header {
    video: string;
    photo: string;
    title: string;
  }

  export interface Hero {
    tagLine: string;
  }

  export interface Link {
    text: string;
    href: string;
  }

  export interface Meta {
    client: string;
    deliverables: string;
    links: Link[];
  }

  export interface Section {
    title: string;
    description: string;
    video: string;
    photo: string;
  }

  export interface Content {
    title?: string;
    tagLine?: string;
    paragraphs?: string[];
    sections: Section[];
  }

  export interface Mask {
    color: string;
    photo: string;
  }

  export interface Footer {
    title: string;
    links: Link[];
  }

  export interface Tab {
    name: string;
    video: string;
    description: string;
    screenshot: string;
    content: Content;
    mask: Mask;
    footer: Footer;
  }

  export interface CaseData {
    header: Header;
    hero: Hero;
    meta: Meta;
    tabs: Tab[];
  }
}

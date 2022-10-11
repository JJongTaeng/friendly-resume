export interface ResumeModelType {
  browserTitle: string;
  header: HeaderType;
  contents: ContentsType[];
}

export interface HeaderType {
  title: string;
  introduction: {
    title: string;
    description: string;
  },
  links: PageLinkType[];
}

export interface ContentsType {
  title?: string;
  description?: string;
  period?: string;
  link?: string;
  children: ContentsType[] | string[];
}

export interface PageLinkType {
  name: string;
  link: string;
  image: string;
}
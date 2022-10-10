export interface ResumeModelType {
  browserTitle: string;
  title: string;
  aboutMe: string;
  links: PageLinkType[];
  contents: ContentsType[];
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
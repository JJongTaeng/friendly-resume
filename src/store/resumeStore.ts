import { getResumeData } from "../api";
import { BehaviorSubject } from "rxjs";
import { ContentsType, PageLinkType } from "../type";

const resume = getResumeData();

export const browserTitle$ = () => new BehaviorSubject<string>(resume.browserTitle);

export const resumeTitle$ = () => new BehaviorSubject<string>(resume.title);

export const aboutMe$ = () => new BehaviorSubject(resume.aboutMe);

export const pageLinks$ = () => new BehaviorSubject<PageLinkType[]>(resume.links);

export const resumeContents$ = () => new BehaviorSubject<ContentsType[]>(resume.contents);

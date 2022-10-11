import { getResumeData } from "../api";
import { BehaviorSubject } from "rxjs";
import { ContentsType, PageLinkType } from "../type";

const resume = getResumeData();

export const browserTitle$ = () => new BehaviorSubject<string>(resume.browserTitle);

export const header$ = () => new BehaviorSubject(resume.header);

export const resumeContents$ = () => new BehaviorSubject<ContentsType[]>(resume.contents);

import resume from '../assets/resume.json'
import { ResumeModelType } from "../type";

type GetResumeDataFunctionType = () => ResumeModelType;

export const getResumeData: GetResumeDataFunctionType = () => {
  return resume;
}
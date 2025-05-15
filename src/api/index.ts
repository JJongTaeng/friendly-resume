import resume from "../assets/resume-en.json";
import { ResumeModelType } from "../type";

type GetResumeDataFunctionType = () => ResumeModelType;

export const getResumeData: GetResumeDataFunctionType = () => {
  return resume;
};

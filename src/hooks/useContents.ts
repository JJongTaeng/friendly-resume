import { useEffect, useState } from "react";
import { ContentsType } from "../type";
import { getResumeData } from "../api";

export const useContents = () => {
  const [contents, setContents] = useState<ContentsType[] | string[]>([""]);

  useEffect(() => {
    const contents = getResumeData().contents;
    setContents(contents);
  }, []);

  return { contents };
};

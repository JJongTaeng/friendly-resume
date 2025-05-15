import { useEffect, useState } from "react";
import { HeaderType } from "../type";
import { getResumeData } from "../api";

export const useHeader = () => {
  const [header, setHeader] = useState<HeaderType>({
    title: "",
    introduction: {
      title: "",
      description: "",
    },
    links: [
      {
        link: "",
        image: "",
        name: "",
      },
    ],
  });

  useEffect(() => {
    const header = getResumeData().header;
    setHeader(header);
  }, []);

  return { header };
};

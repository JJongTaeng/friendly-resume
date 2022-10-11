import { useEffect, useState } from "react";
import { header$ } from "../store/resumeStore";
import { HeaderType } from "../type";

export const useHeader = () => {
  const [header, setHeader] = useState<HeaderType>({
    title: '',
    introduction: {
      title: '',
      description: '',
    },
    links: [{
      link: '',
      image: '',
      name: '',
    }]
  });

  useEffect(() => {
    header$().subscribe(setHeader);
  }, []);

  return { header };
}
import { useEffect, useState } from "react";
import { pageLinks$ } from "../store/resumeStore";
import { PageLinkType } from "../type";

export const usePageLinks = () => {
  const [links, setLinks] = useState<PageLinkType[]>([{
    link: '',
    image: '',
    name: '',
  }]);

  useEffect(() => {
    pageLinks$().subscribe((links) => links && setLinks(links));
  }, []);

  return { links };
}
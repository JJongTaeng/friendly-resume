import { useEffect, useState } from "react";
import { resumeTitle$ } from "../store/resumeStore";

export const useTitle = () => {
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    resumeTitle$().subscribe(setTitle);
  }, []);

  return { title };
}
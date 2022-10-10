import { useEffect, useState } from "react";
import { aboutMe$ } from "../store/resumeStore";

export const useAboutMe = () => {
  const [aboutMe, setAboutMe] = useState<string>();

  useEffect(() => {
    aboutMe$().subscribe(setAboutMe);
  }, []);

  return { aboutMe };
}
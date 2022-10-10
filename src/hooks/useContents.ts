import { resumeContents$ } from "../store/resumeStore";
import { useEffect, useState } from "react";
import { ContentsType } from "../type";

export const useContents = () => {
  const [contents, setContents] = useState<ContentsType[] | string[]>(['']);

  useEffect(() => {
    resumeContents$().subscribe(setContents)
  }, [])

  return { contents };
}
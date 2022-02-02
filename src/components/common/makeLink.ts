import { IElement, IStyle } from "common-iutils";
import { svg } from "./svg";

export default function makeLink(link: string) {
  if(!link) {
    return;
  }
  return new IElement('div').appendChild(
      new IElement('a')
        .appendChild(
          new IStyle(new DOMParser().parseFromString(svg.link, "text/xml").children[0])
            .height('25px')
            .width('25px')
            .margin('0.2rem')
            .getElement()
        )
        .setAttribute('href', link)
        .setAttribute('target', '_blank')
        .getElement()
    )
    .getElement();
}
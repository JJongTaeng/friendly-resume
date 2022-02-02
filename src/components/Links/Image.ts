import { IElement, IStyle } from "common-iutils";
import { svg } from "../common/svg";

export default class Image {
  private readonly svg: { [key: string]: string };
  name: string;
  link: string;

  constructor({ name, link }: { name: string, link: string; }) {
    this.svg = svg
    this.name = name;
    this.link = link;
  }

  render() {
    const $svg = new DOMParser().parseFromString(this.svg[this.name], "text/xml").children[0];

    new IStyle($svg).color('black').width('3rem').height('3rem');

    const $image = new IStyle(new IElement('a')
      .appendChild($svg)
      .setAttribute('href', this.link)
      .setAttribute('target', '_blank')
      .getElement())
      .cursor('pointer')
      .getElement();

    if(this.name === 'email') {
      $image.setAttribute('href', `mailto: ${this.link}`);
    }

    return $image;
  }
}
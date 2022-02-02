import { Column, Row } from "common-igrid";
import Image from './Image';
import { IElement, IStyle } from "common-iutils";
interface LinksInterface {
  render(): HTMLElement;
}

interface LinkType {
  link: string;
  name: string;
}

export default class Links {
  private readonly links: LinkType[]

  constructor({ links }: { links: LinkType[] }) {
    this.links = links;
  }

  render() {
    const $row = new IStyle(new IElement('div').getElement())
      .height('100%')
      .display('flex')
      .alignItems('center')
      .justifyContent('space-evenly')
      .getElement();
    const $list = this.links.map((link) =>  new Image({ name: link.name, link: link.link }).render());

    $row.append(...$list);

    return $row
  }
}


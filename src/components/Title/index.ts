import { IElement } from "common-iutils";

export default class Title {
  private readonly title: string;

  constructor({ title }: { title: string }) {
    this.title = title;
  }

  render() {
    return new IElement('h1').setTextContent(this.title).getElement();
  }
}
import { IElement, IStyle } from "common-iutils";

export default class List {
  description: string;

  constructor(description: string) {
    this.description = description;
  }
  render() {
    return new IStyle(new IElement('li').setTextContent(this.description).getElement())
      .fontSize('0.8rem')
      .getElement()
  }
}
import { IElement } from "common-iutils";

export default class CompanyTitle {
  private readonly title: string;
  private readonly period: string;

  constructor({ title, period }: { title: string, period: string }) {
    this.title = title;
    this.period = period;
  }

  render() {
    const $container = new IElement('div').getElement();

    const $title = new IElement('h3')
      .setTextContent(this.title)
      .getElement();

    const $period = new IElement('span')
      .setTextContent(this.period)
      .getElement();

    $period.style.fontSize = '0.7rem';

    $container.append($title, $period);

    return $container;
  }
}
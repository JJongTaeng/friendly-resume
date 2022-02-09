import { IElement, IStyle } from "common-iutils";

export class Scroll {
  private readonly $container: HTMLDivElement;
  private readonly $progress: HTMLDivElement;

  constructor() {
    this.$container = new IElement<HTMLDivElement>('div').getElement();
    this.$progress = new IElement<HTMLDivElement>('div').getElement();

    new IStyle(this.$container)
      .top('0')
      .left('0')
      .right('0')
      .height('10px')
      .backgroundColor('rgba(0, 0, 0, 0.2)')
      .position('fixed');

    new IStyle(this.$progress)
      .top('0')
      .height('10px')
      .backgroundColor('dodgerblue')
      .position('fixed');

    this.$container.append(this.$progress);
    document.body.append(this.$container);

    this.scroll();
  }

  scroll() {

    document.addEventListener('scroll', (e) => {
      const percent = Math.floor(window.scrollY / (document.body.offsetHeight - window.innerHeight)* 100);
      this.$progress.style.width = `${percent}%`;
    })
  }
}
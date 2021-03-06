import { IElement } from "common-iutils";
import { column, row } from "common-igrid";

export default class AboutMe {
  private content: string;
  span = { xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 };

  constructor({ content }: { content: string }) {
    this.content = content;
  }

  render() {
    const $row = row();

    const $aboutMeTitle = column({
      span: this.span,
      children: makeSubTitle('About me'),
    })

    const $aboutMeColumn = column({
      span: this.span,
      children: new IElement('span')
        .setTextContent(this.content)
        .getElement(),
    })

    return $row.setContent($aboutMeTitle, $aboutMeColumn);
  }
}

function makeSubTitle(title: string) {
  return new IElement('h2').setTextContent(title).getElement();
}

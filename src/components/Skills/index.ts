import { Column, Row } from "common-igrid";
import { IElement, IStyle } from "common-iutils";

interface SkillsType {
  title: string;
  description: string[];
}

export default class Skills {
  private readonly skills: SkillsType[];
  span = {
    xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24,
  }

  constructor({ skills }: { skills: SkillsType[] }) {
    this.skills = skills;
  }

  render() {

    const $row = new Row();
    const elementList = [];
    this.skills.forEach(skill => {
      const $title = new Column({
        children: new IStyle(new IElement('h3').setTextContent(skill.title).getElement())
          .marginBottom('0')
          .getElement(),
        span: this.span
      });

      const $contentItems = skill.description.map(description => new IStyle(new IElement('li').setTextContent(description).getElement())
        .fontSize('0.8rem')
        .getElement());

      const $contentList = new Column({
        children: new IElement('ul')
          .append(...$contentItems)
          .getElement(),
        span: this.span
      });

      elementList.push($title, $contentList);
    });

    return $row.setContent(...elementList);
  }
}
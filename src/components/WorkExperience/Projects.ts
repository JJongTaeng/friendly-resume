import { Column, Row } from "common-igrid";
import { IElement, IStyle } from "common-iutils";
import makeLink from "../common/makeLink";

interface ProjectsType {
  name: string;
  description: string;
  myRole: string[];
  link?: string;
}

export default class Projects {
  private readonly projects: ProjectsType[];

  span = {
    xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24,
  }

  constructor({ projects }: { projects: ProjectsType[] }) {
    this.projects = projects;
  }

  render() {
    const $row = new Row();
    const elementList = [];

    this.projects.forEach(project => {
      const $link = makeLink(project?.link);
      const $projectName = new Column({
        children: new IElement('h3').innerHTML(project.name + ($link ? $link.innerHTML : '')).getElement(),
        span: this.span,
      });

      const $description = new Column({
        children: new IStyle(
          new IElement('span').setTextContent('Description').getElement()
        )
          .fontWeight('bold')
          .getElement(),
        span: this.span,
      });
      const $descriptionContent = new Column({
        children: new IElement('ul').appendChild(
          new IStyle(new IElement('li').setTextContent(project.description).getElement())
            .fontSize('0.8rem')
            .getElement()
        ).getElement(),
        span: this.span,
      });

      const $myRole = new Column({
        children: new IStyle(
          new IElement('span').setTextContent('My role').getElement()
        )
          .fontWeight('bold')
          .getElement(),
        span: this.span,
      });

      const roleList = project.myRole.map(role => new IStyle(new IElement('li').setTextContent(role).getElement())
        .fontSize('0.8rem')
        .getElement());

      const $myRoleContent = new Column({
        children: new IElement('ul').append(...roleList).getElement(),
        span: this.span,
      })

      elementList.push($projectName, $description, $descriptionContent, $myRole, $myRoleContent);
    })

    return $row.setContent(...elementList);
  }
};


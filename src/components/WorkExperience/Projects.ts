import { column, row } from "common-igrid";
import { IElement, IStyle } from "common-iutils";
import makeLink from "../common/makeLink";
import List from "../common/List";

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
    const $row = row();
    const elementList = [];

    this.projects.forEach(project => {
      const $link = makeLink(project?.link);
      const $projectName = column({
        children: new IElement('h3').innerHTML(project.name + ($link ? $link.innerHTML : '')).getElement(),
        span: this.span,
      });

      const $description = column({
        children: new IStyle(
          new IElement('span').setTextContent('Description').getElement()
        )
          .fontWeight('bold')
          .getElement(),
        span: this.span,
      });
      const $descriptionContent = column({
        children: new IElement('ul').appendChild(
          new IStyle(new IElement('li').setTextContent(project.description).getElement())
            .fontSize('0.8rem')
            .getElement()
        ).getElement(),
        span: this.span,
      });

      $descriptionContent.setStyle(`
        li::marker {
          color: dodgerblue;
        }
      `);

      const $myRole = column({
        children: new IStyle(
          new IElement('span').setTextContent('My role').getElement()
        )
          .fontWeight('bold')
          .getElement(),
        span: this.span,
      });

      const roleList = project.myRole.map(role => new List(role).render());

      const $myRoleContent = column({
        children: new IElement('ul').append(...roleList).getElement(),
        span: this.span,
      })

      $myRoleContent.setStyle(`
        li::marker {
          color: dodgerblue;
        }
      `);

      elementList.push($projectName, $description, $descriptionContent, $myRole, $myRoleContent);
    })

    return $row.setContent(...elementList);
  }
};


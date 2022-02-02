import { WorkExperienceType } from "./index";
import { Column, Row } from "common-igrid";
import CompanyTitle from "./CompanyTitle";
import Projects from "./Projects";

export default class Item {
  private readonly data: WorkExperienceType;
  span = {
    title: { xxl: 8, xl: 8, lg: 8, md: 10, sm: 12, xs: 24 },
    project: { xxl: 16, xl: 16, lg: 16, md: 14, sm: 12, xs: 24 },
  }
  constructor({ data }: { data: WorkExperienceType }) {
    this.data = data;
  }

  render() {
    const $title = new Column({
      span: this.span.title,
      children: new CompanyTitle({
        title: this.data.company,
        period: this.data.period
      })
        .render()
    });

    const $projects = new Column({
      children: new Projects({ projects: this.data.projects }).render(),
      span: this.span.project,
    })

    const $fragment = new DocumentFragment()
    $fragment.append($title, $projects);
    return $fragment;
  }
}
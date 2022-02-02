import { Row } from "common-igrid";
import Item from "./Item";

export interface WorkExperienceType {
  company: string;
  period: string;
  projects: ProjectType[];
}

interface ProjectType {
  name: string;
  description: string;
  myRole: string[];
}
export default class WorkExperience {

  private readonly dataList:  WorkExperienceType[]
  constructor({ dataList }: { dataList: WorkExperienceType[] }) {
    this.dataList = dataList;
  }

  render() {
    const $row = new Row();

    const documentFragments = this.dataList.map(data => {
      return new Item({ data }).render();
    })
    const $columns =  Array.from(documentFragments, (element => element)) as [];

    return $row.setContent(...$columns);
  }
}
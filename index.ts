import './index.css';
import data from './public/resume.json';
import { Column, Row } from "common-igrid";
import Title from "./src/components/Title";
import Links from "./src/components/Links";
import AboutMe from "./src/components/AboutMe";
import { IElement, IStyle } from "common-iutils";
import WorkExperience from "./src/components/WorkExperience";
import OtherExperience from "./src/components/OtherExperience";
import Skills from "./src/components/Skills";
import profile from "./public/profile.jpg";

const span = {
  header: { xxl: 16, xl: 16, lg: 18, md: 16, sm: 12, xs: 24 },
  link: { xxl: 8, xl: 8, lg: 6, md: 8, sm: 12, xs: 24 },
  all24: { xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 },

  title: { xxl: 8, xl: 8, lg: 8, md: 10, sm: 12, xs: 24 },
  project: { xxl: 16, xl: 16, lg: 16, md: 14, sm: 12, xs: 24 },
};

(() => {
  document.head.querySelector('title').innerText = data.browserTitle;

  const $container = document.querySelector('.container');

  const $row = new Row();
  $container.append($row);

  const $titleColumn = new Column({
    span: span.header,
    children: new Title({ title: data.title }).render()
  })

  const $linkColumn = new Column({
    span: span.link,
    children: new Links({ links: data.links }).render(),
  })

  const $profile = new Column({
    span: span.title,
    children: new IStyle(new IElement('div').getElement())
      .height('100%')
      .width('100%')
      .backgroundPosition('center')
      .backgroundSize('contain')
      .backgroundRepeat('no-repeat')
      .backgroundImage(`url('${profile}')`)
      .getElement(),
    padding: 20,
  })

  const $aboutMe = new Column({
    span: span.project,
    children: new AboutMe({ content: data.aboutMe }).render(),
    padding: 20,
  })

  const $experienceTitle = new Column({
    span: span.all24,
    children: makeSubTitle('Work experience'),

  })

  const $workExperienceList = new Column({
    span: span.all24,
    children: new WorkExperience({ dataList: data.workExperience }).render()
  })

  const $otherExperienceTitle = new Column({
    span: span.title,
    children: makeSubTitle('Other experience')
  })

  const $otherExperienceList = new Column({
    span: span.project,
    children: new OtherExperience({ otherExperience: data.otherExperience }).render()
  })

  const $skillTitle = new Column({
    span: span.title,
    children: makeSubTitle('My Skills'),
  })

  const $skillContent = new Column({
    span: span.project,
    children: new Skills({ skills: data.skills }).render()
  })

  $row.setContent(
    $titleColumn,
    $linkColumn,
    $profile,
    $aboutMe,
    divider(),
    $experienceTitle,
    $workExperienceList,
    divider(),
    $otherExperienceTitle,
    $otherExperienceList,
    divider(),
    $skillTitle,
    $skillContent
  );
})();

function makeSubTitle(title: string) {
  return new IElement('h2').setTextContent(title).getElement();
}

function divider() {
  return new IStyle(new IElement('hr').getElement())
    .width('100%')
    .border('0')
    .borderBottom('1px solid #eee')
    .getElement();
}
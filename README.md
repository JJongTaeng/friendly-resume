# friendly-resume

## Description
JSON 기반의 이력서 페이지를 만들 수 있습니다.

만들어진 이력서를 보고싶으시면 [링크](https://jjongtaeng.github.io/friendly-resume) 로 이동하세요.

## Usage

프로젝트를 fork 해서 자신의 레포지토리에 저장하세요. (레포지토리 이름이 url path가 되니 원하는 레포지토리 이름으로 변경하세요.)

모듈을 설치해야합니다. 아래 명령어를 프로젝트 루트에서 실행해주세요!
```plain
npm install
``` 

프로젝트 모듈이 모두 설치가 되면 아래 명령어로 만들어진 이력서를 볼 수 있습니다.
```plain
npm start
```

사용하는 IDE, 텍스트 에디터로 ./src/assets/resume.json 파일을 열고, 해당 파일의 내용을 수정해주세요.

파일을 수정하면 개발 서버에서 바로 적용됩니다!

수정 후 아래 명령어를 입력하면 `[자신의 github name].github.io/[레포지토리 이름]` 으로 배포됩니다~ ex) https://jjongtaeng.github.io/friendly-resume
```plain
npm run deploy
```

## Profile Photo
1. ./src/assets/profile.jpg 폴더 내에 `profile.jpg` 파일 명으로 이미지를 넣으면 프로필 설정됩니다.

## resume.json
크게 Heading 과 Contents로 구분됩니다

Heading은 간략한 자기소개 공간입니다

Contents는 이력, 스킬, 경험 등 나타내고 싶은 자신의 강점들을 정리해주세요.


# friendly-resume

## Description
JSON 기반의 이력서 페이지를 만들 수 있습니다.

만들어진 이력서를 보고싶으시면 https://jjongtaeng.github.io/friendly-resume 로 이동하세요.

## Usage
1. `git clone https://github.com/JJongTaeng/friendly-resume.git` 로 프로젝트를 받아 자신의 레포지토리에 올리세요.
2. 또는 fork를 해서 자신의 레포지토리에 저장하세요.
3. `npm install`로 종속 모듈을 설치해주세요.
4. 사용하는 IDE, 텍스트 에디터로 ./public/resume.json 파일을 열고, 해당 파일의 내용을 수정해주세요.
5. 수정 후 `npm run deploy` 를 입력 후 실행하면 프로젝트가 배포됩니다.
6. 링크는 `[자신의 github name].github.io/[레포지토리 이름]` 으로 배포됩니다. ex) https://jjongtaeng.github.io/friendly-resume

## Profile Photo
1. public 폴더 내에 `profile.jpg` 파일 명으로 이미지를 넣으면 프로필 설정됩니다.

## resume.json

- `browserTitle` 브라우저 탭의 제목입니다.
- `title` 이력서의 header 타이틀 입니다.
- `aboutMe` 자기소개 말로 자신을 나타내고 싶은 표현을 사용해주세요.
- `links` 추가적인 링크입니다. 우측 상단에 표시됩니다.
  - 사용 가능한 `name`은 (`github`, `email`, `blog`, `notion`)이 있습니다.
  - `link`는 이동할 링크입니다. 
  - `email`로 설정 시 이메일 주소를 작성해주세요.
- workExperience는 경력 사항을 적어주세요.
  - `company`는 회사명
  - `period`는 재직기간
  - `projects`는 해당 기업에서 진행한 프로젝트 입니다.
    - `name`은 프로젝트 명입니다.
    - `period`는 프로젝트 진행 기간입니다.
    - `description`은 프로젝트에 대한 설명입니다.
    - `link`는 프로젝트의 URL이 있다면 넣어주세요**(optional)**
    - `myRole` 은 프로젝트에서 본인이 맡은 역활이 무엇인지 작성해주세요.
- otherExperience는 경력외 다른 경험에 대해 작성해주세요 ex) 개인프로젝트, 졸업학교, 세미나 경험 등
  - `title`은 otherExperience의 제목입니다.
  - `period`는 기간입니다.
  - `link`는 참고할 URL이 있다면 넣어주세요**(optional)**
  - `description`은 다른 경험에 대한 설명입니다.
- `skills`는 본인이 가진 기술적인 역량을 적어주세요.
  - `title`은 기술적 역량의 제목입니다.
  - `description`은 기술적 역량에 대한 설명입니다.


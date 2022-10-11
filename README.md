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

```json
{
  "browserTitle": "이력서 - 조인태", # 브라우저 검색, 제목
  "header": {
    "title": "즐거움과 편리함을 주는 개발자", # 한줄로 표현하는 자신
    "introduction": {
      "title": "About me", # 간력 소개 타이틀
      "description": "안녕하세요. 웹 프론트엔드 엔지니어 조인태입니다. ~~~ "  # 자신에 대한 간략 소개입니다.
    },
    "links": [ # 타 링크로 이동
      {
        "name": "github",
        "link": "[이동할 페이지 링크를 넣어주세요.]",
        "image": "[이미지 링크를 넣어주세요.]"
      },
      {
        "name": "email",
        "link": "mailto:jjojjo141995@gmail.com",
        "image": "[이미지 링크를 넣어주세요.]"
      }
    ]
  },
  "contents": [ # 주요 내용을 작성합니다. children 중첩구조로 같은 형태로 반복할 수 있습니다.(추천 반복 최대 3deps)
    {
      "title": "Work Experience", # Work Experience -> 알서포트 -> RemoteView Box 구조입니다.
      "period": "", # 해당 제목에 대한 기간을 지정합니다.
      "children": [
        {
          "title": "알서포트",
          "period": "2022.01.03 ~",
          "children": [
            {
              "title": "RemoteView Box",
              "period": "",
              "children": [ # 마지막 중첩에는 string 배열 구조로 가져갑니다.
                "Remote View 서비스의 사용할 수 없는 환경에서 사용하기 위해 장치인 Box의 관리자 페이지를 구성",
                "Remote View Client(원격) 에이전트 등록 페이지 작업",
                "접속 네트워크 정보(Wi-Fi, Ethernet) 설정 페이지 작업",
                "사용 기술 스택: React, TypeScript, Recoil, React-Query, CSS-in-JS, Storybook"
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Other Experience",
      "period": "",
      "children": [
        {
          "title": "Simple Meeting",
          "period": "2022.06.25 ~ ",
          "link": "https://meeting.jjongtaeng.com/",
          "children": [
            "화상 미팅 웹 어플리케이션",
            "[Front 기술] WebRTC, SocketIO, React, TypeScript, Tailwind, Recoil",
            "[Back 기술] NestJS, SocketIO, TypeORM, MariaDB"
          ]
        }
      ]
    }
  ]
}
```

`header`은 간략한 자기소개 공간입니다

`contents`는 이력, 스킬, 경험 등 나타내고 싶은 자신의 강점들을 정리해주세요.

`contents`는 `children`  중첩구조로 가져갈 수 있으며, 마지막 `children`은 `string` 배열로 설명을 적어주세요.

수정하실 땐 꼭 npm run start로 개발서버를 실행하시고, 확인하시면서 작업해주세요.

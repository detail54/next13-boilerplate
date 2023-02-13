# next-reactQuery-boilerplat

> - react v18.2.0
> - typescript v4.9.5
> - next v13.1.6
> - react-query v3.39.3

# start

> - yarn install
> - dev: yarn dev
> - local: yarn build -> yarn start
> - development: yarn build:dev -> yarn start:dev
> - production: yarn build:production -> yarn start:production
> - <strong><span style='background-color: #f7dd; color: black'>실제 사용시 .gitignore에 .env파일들 주석 해제 해야함.</span></strong>

## directory structure

```
└── src
    ├── app
    │   ├── head.tsx
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── posts
    │   │   ├── page.tsx
    │   │   ├── Posts.type.d.ts
    │   │   └── postApi.tsx
    │   └── other pages....
    ├── common
    │   ├── api
    │   │   ├── api.ts
    │   │   ├── urls.ts
    │   │   └── ....
    │   ├── components
    │   │   ├── atoms
    │   │   │   └── ....
    │   │   ├── molecules
    │   │   │   └── ....
    │   │   ├── organisms
    │   │   │   └── ....
    │   │   └── templates
    │   │       └── ....
    │   ├── hooks
    │   │   ├── useTheme.ts
    │   │   └── ...
    │   ├── styles
    │   │   ├── global.module.css
    │   │   ├── type.d.ts
    │   │   ├── DarkTheme.module.css
    │   │   └── LightTheme.module.css
    └── layout
        ├── Footer.styles.ts
        ├── Footer.tsx
        ├── Header.styles.ts
        ├── Header.tsx
        └── Main.tsx
```

## Head 관리

- /src/app/head.tsx에 작성.

## 데이터 fetch

- src/common/api 에서 fetch 함수 작성하여 각 페이지에서 사용.
- https://beta.nextjs.org/docs/data-fetching/fundamentals

## style

1.  <strong>css module</strong>

    > - 현 시점 아직 next13에서 css-in-js 사용시 'use client'를 작성해야 해서 app 내의 페이지 컴포넌트도 csr이 되어버린다.<br />
    >   그럼 모든 컴포넌트들이 csr이 되기때문에 next를 사용하는 의미가 없어짐.
    > - app 내의 페이지 컴포넌트에서는 ssr 작업을 하기 위해 styled-components와 emotion을 포기.<br />
    >   tailwind와 css module을 고민 하다가 class명이 길어지는게 싫어서<br />
    >   css module을 선택했고, class명을 최소화 할 수 있는 패턴을 만들어 사용하기로 결정.
    > - src/common/components는 useEffect를 사용하여 csr이 된다.

2.  <strong>Theme</strong>

    > - src/common/styles/lightTheme.module.css: 기본 테마
    > - src/common/styles/darkTheme.module.css: 다크 테마

3.  <strong>style props interface</strong>

    > - src/common/styles/type.d.ts 에서 모든 style관련된 타입을 선언.

4.  <strong>GlobalStyle</strong>

    > - src/common/styles/global.css: 전역 스타일.<br />
    >   기본적으로 적용해 놓을 스타일 작성.<br />
    >   앱 전체에서 사용될 스타일 변수 작성.

5.  <strong>pattern</strong>

    > - src/app 내의 컴포넌트들은 페이지 틀만 조정할 css를 작성.
    > - 안에 들어가는 요소들은 src/common/components 에서 최대한 사용.<br />
    >   그러기 위해서는 각 요소별로 정해진 디자인이 필요하며 그 요소들로만 조합을해서 페이지 디자인 작업을 해야 수월함.

    > - common components의 경우 atomic pattern을 적용하여<br /><br />
    >   | src/components/atoms <br />
    >   | src/components/molecules <br />
    >   | src/components/organisms <br />
    >   | src/components/templates <br /><br />
    >   이렇게 4가지로 구분하였으며, 각 디렉터리에 요소들을 분리하기 위해서 추가로 하위 디렉터리를 만들어 구분하고<br />
    >   각 컴포넌트 별로 css파일을 같은 디렉터리내에 생성하여 관리.
    > - common 컴포넌트는 props를 받아와서 props 값으로 스타일 수정 한다.<br />
    >   이때 src/common/styles/global.css에 있는 변수명에 키? 값을 같이 넣어서 작성하여 키값대로 수정이 되게 하고,<br />
    >   type.d.ts에 각 변수 명에 들어갈 키? 값을 타입으로 지정하여 지정된 값만 props로 받아온다.
    >   받아온 props를 src/common/utils 에 propertyDataGetter와 setProperty를 사용하여 스타일 수정 작업을 한다.

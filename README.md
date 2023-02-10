# next-reactQuery-boilerplat

> - react v18.2.0
> - typescript v4.9.5
> - next v13.1.6
> - react-query v3.39.3
> - styled-components v5.3.6
> - styled-normalize v8.0.7

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
    │   │   ├── Posts.styles.ts
    │   │   ├── usePost.tsx
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
    │   ├── lib
    │   │   ├── StyledComponentsRegistry.ts
    │   │   └── ...
    │   ├── styles
    │   │   ├── GlobalStyle.ts
    │   │   ├── styled.d.ts
    │   │   ├── ThemeDark.ts
    │   │   └── ThemeRight.tsx
    └── layout
        ├── Footer.styles.ts
        ├── Footer.tsx
        ├── Header.styles.ts
        ├── Header.tsx
        └── Main.tsx
```

## Head 관리

- /src/app/head.tsx에 작성.

## style

1.  <strong>next에 적용 (공식문서 참고)</strong>

    > - /src/lib/StyledComponentsRegistry.tsx 컴포넌트 생성 후<br />

        /src/app/layout 에서 children을 감싸준다.

    > - https://beta.nextjs.org/docs/styling/css-in-js#styled-components

2.  <strong>pattern</strong>

    > - common components의 경우 atomic pattern을 적용하여<br /><br />
    >   | src/components/atoms <br />
    >   | src/components/molecules <br />
    >   | src/components/organisms <br />
    >   | src/components/templates <br /><br />
    >   이렇게 4가지로 구분하였으며, 각 디렉터리에 요소들을 분리하기 위해서 추가로 하위 디렉터리를 만들어 구분한다.

3.  <strong>Theme</strong>

    > - src/ThemeRight.ts: DefaultTheme를 기준으로하여 기본 테마에 적용할 스타일 값 선언.
    > - src/ThemeDark.ts: DefaultTheme를 기준으로하여 다크 테마에 적용할 스타일 값 선언.

4.  <strong>style props interface</strong>

    > - src/styles/styled.d.ts 에서 모든 style관련된 타입을 선언.

5.  <strong>GlobalStyle</strong>

    > - src/GlobalStyle.ts: 전역 스타일. 기본적으로 적용해 놓을 스타일 작성.

6.  <strong>create styled components</strong>

    > - 같은 Elements type 의 components를 여러개 만들 경우 basic style을 가지고 있는 compnenet를 만들어 하위에서 상속받아서 사용.
    > - basic styled components는 generic에 IStyleProps interface를 상속받은 interface를 넣고, props들을 열거하여 theme와 그 외 props값을 같이 사용할 수 있게 한다.

    <!-- > - 예시) https://github.com/detail54/new-next-reactquery-boilerplate/blob/cb6b8e61a4ef1abd49ff06de17f884c4a45ac218/src/components/atoms/button/Button.styles.ts#L1-L43 -->

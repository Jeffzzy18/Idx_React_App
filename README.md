# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

src/

├── components/           # 通用可复用组件

│   ├── UI/              # 基础UI组件（Button, Input, Modal等）

│   │   ├── Button/

│   │   ├── Input/

│   │   └── Modal/

│   ├── User/            # 用户相关组件

│   │   ├── UserForm/    # 用户表单组件

│   │   ├── UserList/    # 用户列表组件

│   │   └── UserCard/    # 用户卡片组件

│   └── Common/          # 通用组件（Layout, Header, Footer等）

│

├── screens/             # 页面/屏幕（路由组件）

│   ├── User/

│   │   ├── UserListScreen.jsx    # 用户列表页面

│   │   ├── UserFormScreen.jsx    # 用户表单页面

│   │   └── UserDetailScreen.jsx  # 用户详情页面

│   ├── Auth/

│   │   ├── LoginScreen.jsx       # 登录页面

│   │   └── RegisterScreen.jsx    # 注册页面

│   └── HomeScreen.jsx            # 首页

│

├── hooks/               # 自定义Hook

│   ├── useUser.js

│   └── useAuth.js

│

├── services/            # API服务

│   ├── userService.js

│   └── authService.js

│

├── utils/               # 工具函数

│   ├── formatters.js

│   └── validators.js

│

├── constants/           # 常量

│   └── routes.js

│

├── styles/              # 全局样式

│   ├── global.css

│   └── variables.css

│

├── App.jsx              # 根组件

├── main.jsx             # 入口文件

└── router.jsx           # 路由配置
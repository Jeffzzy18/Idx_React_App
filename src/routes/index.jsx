// src/routes/index.jsx
import { createBrowserRouter } from 'react-router-dom';

// 导入 screens（页面级组件）
import HomeScreen from '../screens/HomeScreen';
// import LoginScreen from '../screens/Auth/LoginScreen';
// import RegisterScreen from '../screens/Auth/RegisterScreen';
// import UserListScreen from '../screens/User/UserListScreen';
// import UserFormScreen from '../screens/User/UserFormScreen';
// import UserDetailScreen from '../screens/User/UserDetailScreen';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
]);

export default routes;
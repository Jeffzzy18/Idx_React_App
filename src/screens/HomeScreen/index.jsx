import './index.css';
import { UserService } from '../../services/UserInfoService';
import React, { useState } from 'react';

const HomeScreen = () => {
  const [userInfos, setUserInfos] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState('');

  const fetchUsers = async () => {
    try {
      const data = await UserService.getUsers();
      setUserInfos(data);
      setUserInfo(null);
    } catch (err) {
      console.log(err.message);
    }
  };
  const fetchUserById = async () => {
    if (!userId) return;
    try {
      const data = await UserService.getUserById(userId);
      setUserInfo(data);
      setUserInfos([]);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleGetUsersClick = () => {
    if (userInfos.length > 0) {
      setUserInfos([]);
    } else {
      fetchUsers();
    }
  };

  const handleOnChange = e => {
    setUserId(e.target.value);
  };

  return (
    <div className="">
      <button onClick={handleGetUsersClick}>
        {userInfos.length > 0 ? '清除所有用户' : '获取所有用户'}
      </button>
      <input
        type="text"
        value={userId}
        onChange={handleOnChange}
        placeholder="输入用户ID进行搜索"
      />
      <button onClick={fetchUserById}>按ID搜索</button>
      <div>数据为：</div>
      {userInfo ? (
        <div className="user-card">
          <h3>搜索结果</h3>
          {Object.entries(userInfo).map(([key, value]) => {
            return (
              <div key={key} className="user-field">
                <span className="key">{key}: </span>
                <span className="value">
                  {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                </span>
              </div>
            );
          })}
        </div>
      ) : userInfos.length > 0 ? (
        userInfos.map((user, index) => {
          return (
            <div key={user.id || index} className="user-card">
              <h3>用户 {index + 1}</h3>
              {Object.entries(user).map(([key, value]) => {
                return (
                  <div key={key} className="user-field">
                    <span className="key">{key}: </span>
                    <span className="value">
                      {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <div>暂无数据</div>
      )}
    </div>
  );
};
export default HomeScreen;

import './index.css';
import { UserService } from '../../services/UserInfoService';
import React, { useState } from 'react';

const HomeScreen = () => {
  const [userInfos, setUserInfos] = useState([]);
  const a = 1;
  console.log(a);

  const fetchUsers = async () => {
    try {
      const data = await UserService.getUsers();
      console.log('获取到的数据是');
      setUserInfos(data);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleOnClick = () => {
    userInfos.length === 0 ? fetchUsers() : setUserInfos([]);
  };

  return (
    <div className="">
      <button onClick={handleOnClick}>获取</button>
      <div>数据为：</div>
      {userInfos.length > 0 ? (
        // (<div>{userInfo[0].id}</div>)
        userInfos.map((userInfo, index) => {
          return (
            <div key={userInfo.id || index} className="user-card">
              <h3>用户 {index + 1}</h3>
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
          );
        })
      ) : (
        <div>暂无数据</div>
      )}
    </div>
  );
};
export default HomeScreen;

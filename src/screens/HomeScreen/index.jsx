import './index.css';
import { UserInfoService } from '../../services/UserInfoService';
import { ActivityInfoService } from '../../services/ActivityInfoService';
import React, { useState } from 'react';

const HomeScreen = () => {
  const [userInfos, setUserInfos] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState('');
  const [activityInfos, setActivityInfos] = useState([]);
  const [activityInfo, setActivityInfo] = useState(null);
  const [activityId, setActivityId] = useState('');

  const fetchUsers = async () => {
    try {
      const data = await UserInfoService.getUsers();
      setUserInfos(data);
      setUserInfo(null);
    } catch (err) {
      console.log(err.message);
    }
  };
  const fetchUserById = async () => {
    if (!userId) return;
    try {
      const data = await UserInfoService.getUserById(userId);
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

  const fetchActivities = async () => {
    try {
      const data = await ActivityInfoService.getActivities();
      console.log(data);

      setActivityInfos(data);
      setActivityInfo(null);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchActivitiesById = async () => {
    if (!activityId) return;
    try {
      const data = await ActivityInfoService.getActivityById(activityId);
      setActivityInfo(data);
      setActivityInfos([]);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleGetActivitiesClick = () => {
    if (activityInfos.length > 0) {
      setActivityInfos([]);
    } else {
      fetchActivities();
    }
  };
  const handleOnActivityIdFieldChange = e => {
    setActivityId(e.target.value);
  };

  return (
    <div className="">
      <div>
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
      </div>

      <div>数据为：</div>
      <div>
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
      <div>
        <div>
          <button onClick={handleGetActivitiesClick}>获取所有活动</button>
          <input
            type="text"
            value={activityId}
            onChange={handleOnActivityIdFieldChange}
            placeholder="输入活动ID进行搜索"
          />
          <button onClick={fetchActivitiesById}>按ID搜索</button>
        </div>
        {activityInfos.length !== 0 ? (
          <div>
            {activityInfos.map((activity, index) => (
              <div key={index}>
                <h2>{index}</h2>
                {Object.entries(activity).map(([key, value]) => {
                  return (
                    <div key={key}>
                      <span>{key}</span>
                      <span>{value}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div>暂无数据</div>
        )}
        {activityInfo ? (
          <div>
            {Object.entries(activityInfo).map(([key, value]) => (
              <div key={key}>
                <span>{key}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default HomeScreen;

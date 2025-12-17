import "./index.css"
import { UserService } from '../../services/UserInfoService'
import React, { useState, useEffect } from "react";

const HomeScreen = () => {
    const [userInfo, setUserInfo] = useState([])
    const fetchUsers = async() => {
        try {
            const data = await UserService.getUsers()
            console.log("获取到的数据是");
            setUserInfo(data);
            console.log(data[0]);
            
        } catch (err) {
            console.log(err.message);
        }
    }
    const handleOnClick = () => {
        fetchUsers()
    }


    return (
        <div className="">
            <button onClick={handleOnClick}>获取</button>
            <div>数据为：</div>
            {userInfo.length >0 ?
            (<div>{userInfo[0].id}</div>)
            :
            (<div></div>)
            }
            
        </div>
    )
}
export default HomeScreen;
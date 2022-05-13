import Btn from "components/UI/Button";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TestService from "services/TestServices";
import { PATH } from "route/manager";

const Profile = () => {
  // const testService = new TestService();
  // const loading = false

  // useEffect(() => {
  //   loading = true;
  //   testService.testService().then((data) => {
  //     console.log("data", data)
  //     loading = false
  //   }).catch((error) => {
  //     loading = false;
  //     console.log("error", error)
  //   });
  // }, []);
  

  return (
    <div>
      <Link to={PATH.HOME}>Go to Home</Link>
      <Btn></Btn>
    </div>
  );
};

export default Profile;

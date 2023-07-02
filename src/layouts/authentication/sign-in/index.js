/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../../examples/constant/data";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
const bgImage =
  "https://media.discordapp.net/attachments/855432118723936276/1123977408836546601/medicine.png?width=825&height=825";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login function
  const login = async (e) => {
    e.preventDefault();
    toast.info("Logging in...");
    try {
    const res = await axios.post(`${API_URL}/api/login`, { email, password });
    const { token } = res.data.authorization;

    localStorage.setItem("token", token);

    localStorage.setItem("user", JSON.stringify(res.data.user));

    toast.success("Login Success");

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000);
  } catch (err) {
    toast.error("Please check your email and password");

  }
};


return (
  <IllustrationLayout
    title="Sign In"
    illustration={{
      image: bgImage,
    }}
  >
    <ArgonBox component="form" role="form">
      <ArgonBox mb={2}>
        <ArgonInput type="email" placeholder="Email" size="large" value={email} onChange={(e) => setEmail(e.target.value)} />
      </ArgonBox>
      <ArgonBox mb={2}>
        <ArgonInput type="password" placeholder="Password" size="large" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </ArgonBox>
      {/* <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox> */}
      <ArgonBox mt={4} mb={1}>
        <ArgonButton color="info" size="large" fullWidth onClick={login}>
          Sign In
        </ArgonButton>
      </ArgonBox>
      <ArgonBox mt={3} textAlign="center">
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Don&apos;t have an account?{" "}
          <ArgonTypography
            component={Link}
            to="/authentication/sign-up"
            variant="button"
            color="info"
            fontWeight="medium"
          >
            Sign up
          </ArgonTypography>
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  </IllustrationLayout>
);
}

export default Illustration;

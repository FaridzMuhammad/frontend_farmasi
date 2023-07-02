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

// react-router-dom components
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import { toast } from "react-toastify";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import { API_URL } from "../../../examples/constant/data";

// Images
const bgImage =
  "https://media.discordapp.net/attachments/855432118723936276/1123977408836546601/medicine.png?width=825&height=825";

function Cover() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //sign up function
  const signUp = async (e) => {
    e.preventDefault();
    toast.info("Signing up...");
    try {
    const res = await axios.post(`${API_URL}/api/register`, { name, email, password });
    const { token } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    toast.success("Sign Up Success");
    
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000);
    } catch (err) {
      toast.error("Please input valid data");
    }
  };

  return (
    <CoverLayout
      image={bgImage}
      imgPosition="center"
    >
      <Card>
        <ArgonBox pt={2} pb={3} px={3}>
          <ArgonBox mb={2}>
          <ArgonTypography variant="h4" color="text" fontWeight="bold">
            Sign up
          </ArgonTypography>
          </ArgonBox>
          <ArgonBox component="form" role="form">
            <ArgonBox mb={2}>
              <ArgonInput placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </ArgonBox>
            <ArgonBox mt={4} mb={1}>
              <ArgonButton variant="gradient" color="dark" fullWidth onClick={signUp}>
                sign up
              </ArgonButton>
            </ArgonBox>
            <ArgonBox mt={2}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <ArgonTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </ArgonTypography>
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;

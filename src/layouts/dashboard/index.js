/* eslint-disable no-unused-vars */
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

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Table from "examples/Tables/Table";
import React from 'react';
import { Pagination } from 'antd';
import people from "./components/img/person.svg";
import pharymacy from "./components/img/pharmacy.svg";

import listData from "layouts/dashboard/data/listData";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";

// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";

function Default() {
  const { size } = typography;
  const { columns, rows } = listData;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={4} mb={5}>
          <Grid item xs={12} md={9} lg={4}>
            <DetailedStatisticsCard
              title="Total Pasien"
              count="$53,000"
              icon={{ color: "info", component: <img src={people} alt="people"/> }}
            />
          </Grid>
          <Grid item xs={12} md={9} lg={4}>
            <DetailedStatisticsCard
              title="Total Obat"
              count="2,300"
              icon={{ color: "error", component: <img src={pharymacy} alt="pharmacy"/> }}
            />
          </Grid>
          <Grid item xs={12} md={9} lg={4}>
            <DetailedStatisticsCard
              title="Total Transaksi"
              count="+3,462"
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
            />
          </Grid>
        </Grid>
        <Grid sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden" }}>
          <ArgonBox mb={3}>
            <Card>
              <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <ArgonTypography variant="h6">List Data</ArgonTypography>
              </ArgonBox>
              <ArgonBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={columns} rows={rows} />
              </ArgonBox>
              <ArgonBox display="flex" justifyContent="end" p={3}>
              <Pagination defaultCurrent={1} total={50}/>
            </ArgonBox>
            </Card>
          </ArgonBox>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;

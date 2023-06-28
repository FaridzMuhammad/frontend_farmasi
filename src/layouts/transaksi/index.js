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
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import Icon from "@mui/material/Icon";
import ArgonButton from "components/ArgonButton";
import { Pagination, Modal, Input, DatePicker, Space } from 'antd';
import { alignItems } from "@mui/system";
import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';

// Data
import dataTransaksi from "layouts/transaksi/data/dataTransaksi";

function Tables() {
  const { columns, rows } = dataTransaksi;

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonButton variant="gradient" color="dark" onClick={showModal}>
        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
        Tambah Transaki
      </ArgonButton>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Input size="large" placeholder="Pasien" />
          <Input size="large" placeholder="Resep Obat" />
          <DatePicker size="large" style={{ width: '100%' }} onChange={onChange} />
          <Input size="large" placeholder="Jumlah harga" />
        </Space>
      </Modal>
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonTypography variant="h6">Authors table</ArgonTypography>
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
              <Pagination defaultCurrent={1} total={50} />
            </ArgonBox>
          </Card>
        </ArgonBox>
        
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;

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
import { Pagination, Modal, Input, DatePicker, Space, Select, Button } from 'antd';
import { alignItems } from "@mui/system";
import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import moment from 'moment';
import { API_URL } from "examples/constant/data";


// Data
import dataTransaksi from "layouts/transaksi/data/dataTransaksi";

function Tables() {
  const { columns, rows } = dataTransaksi;
  const [OptionResepObat, setOptionResepObat] = useState([{
    value: '',
    label: '',
  }]);
  const [selectedResepObat, setSelectedResepObat] = useState();
  const [dataTransaksiList, setDataTransaksiList] = useState([]);
  const [tanggal, setTanggal] = useState();
  const [total, setTotal] = useState();

  const handleCreate = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/transaksi`, {
        pasien_id: selectedResepObat,
        total_harga: total,
        created_at: tanggal,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Berhasil menambahkan transaksi");
      console.log(res);
    } catch (error) {
      toast.error("Gagal menambahkan transaksi");
      console.log(error);
    }
  };

  const fetchDataResepObat = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/resep_obat`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const arrayOption = [];
      res.data.data.forEach((item) => {
        arrayOption.push({
          value: item.id,
          label: item.pasien_id,
        });
      });
      setOptionResepObat(arrayOption);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeResepObat = (value) => {
    setSelectedResepObat(value);
  };

  const handleChangetotal = (e) => {
    setTotal(e.target.value);
  };

  const handleTanggal = (date, dateString) => {
    setTanggal(date);
  };

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
      <Modal title="Edit Pasien" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
        <Button size="large" key="cancel" onClick={handleCancel}>Batal</Button>,
        <Button size="large" key="submit"
          style={{ backgroundColor: '#2CCE89', color: 'white' }} onClick={() => handleCreate()} >Simpan</Button>,
      ]} centered>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Select
            value={selectedResepObat}
            options={OptionResepObat}
            allowClear
            style={{ width: '100%' }}
            placeholder="Pilih Obat"
            onChange={handleChangeResepObat}
            size="large"
          />
          <DatePicker size="large" style={{ width: '100%' }} value={tanggal} onChange={(date, dateString) => setTanggal(dateString)} />
          <Input size="large" placeholder="Jumlah harga"value={tanggal} onChange={handleTanggal} />
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

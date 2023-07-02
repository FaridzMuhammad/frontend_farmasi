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
import { Pagination, Modal, Input, Space, Button } from 'antd';
import { alignItems } from "@mui/system";
import React, { useEffect, useState } from 'react';
import { API_URL } from "examples/constant/data";
import EditDeleteObat from "./components/EditDeleteObat";
import axios from "axios";
import { toast } from "react-toastify";


// Data
import dataObat from "layouts/obat/data/dataObat";

function Tables() {
  const { columns, rows } = dataObat;
  const [obat, setObat] = useState('');
  const [stok, setStok] = useState('');
  const [harga, setHarga] = useState('');
  const [dataObatList, setDataObatList] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = () => {
    try {
      const res = axios.post(`${API_URL}/api/obat`, {
        nama_obat: obat,
        stok_obat: stok,
        harga_obat: harga,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Data berhasil ditambahkan");
    } catch (error) {
      toast.error("Data gagal ditambahkan");
    }
  };

  const handleListData = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/obat`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const listData = [];
      res.data.data.map((item, index) => {
        listData.push({
          Obat: (<ArgonTypography variant="h6" mb={0.5} pl={2} > {item.nama_obat} </ArgonTypography>),
          Stok: <ArgonTypography variant="h6" mb={0.5}> {item.stok_obat} </ArgonTypography>,
          Harga: <ArgonTypography variant="h6" mb={0.5}> {item.harga_obat} </ArgonTypography>,
          Action: (<EditDeleteObat id={item.id} />),
        });
        setDataObatList(listData);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    handleListData();
  }, []);

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
        Tambah Obat
      </ArgonButton>
      <Modal title="Edit Pasien" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
        <Button size="large" key="cancel" onClick={handleCancel}>Batal</Button>,
        <Button size="large" key="submit"
          style={{ backgroundColor: '#2CCE89', color: 'white' }} onClick={() => handleCreate()} >Simpan</Button>,
      ]} centered>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Input size="large" placeholder="Nama Obat" value={obat} onChange={(e) => setObat(e.target.value)} />
          <Input size="large" placeholder="Jumlah" value={stok} onChange={(e) => setStok(e.target.value)} />
          <Input size="large" placeholder="Harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
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
              <Table columns={columns} rows={dataObatList} />
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

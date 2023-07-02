import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import Icon from "@mui/material/Icon";
import ArgonButton from "components/ArgonButton";
import { Pagination, Modal, Input, Space, Select, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { API_URL } from "examples/constant/data";
import axios from "axios";
import { toast } from "react-toastify";
import EditDeleteResep from "./components/EditDeleteResep";
import dataResepObat from "./data/dataResepObat";


const { TextArea } = Input;
const { Option } = Select;

function Tables() {
  // const [dataPasienList, setDataPasienList] = useState([]);
  // const [dataObatList, setDataObatList] = useState([]);
  // const [resepObat, setResepObat] = useState();
  // const [pasien, setPasien] = useState();
  const { columns, rows } = dataResepObat;
  const [OptionResepObat, setOptionResepObat] = useState([{
    value: '',
    label: '',
  }]);
  const [OptionPasien, setOptionPasien] = useState([{
    value: '',
    label: '',
  }]);
  const [keterangan, setKeterangan] = useState('');

  const [selectedPasien, setSelectedPasien] = useState();
  const [selectedObat, setSelectedObat] = useState();
  const [dataResepObatList, setDataResepObatList] = useState([]);
  const { Option } = Select;

  const handleCreate = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/resep_obat`, {
        obat_id: selectedObat,
        pasien_id: selectedPasien,
        keterangan: keterangan,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Berhasil menambahkan resep obat");
      console.log(res);
    } catch (error) {
      toast.error("Gagal menambahkan resep obat");
      console.log(error);
    }
  };

  const fetchDataPasien = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/pasien`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("res Data ", res.data);
      const arrayOption = [];
      res.data.data.map((item) => {
        arrayOption.push({
          value: item.id,
          label: item.nama_pasien,
        });
      });

      setOptionPasien(arrayOption);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataObat = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/obat`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const arrayOption = [];
      res.data.data.map((item) => {
        arrayOption.push({
          value: item.id,
          label: item.nama_obat,
        });
      });
      setOptionResepObat(arrayOption);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeResepObat = (value, option) => {
    console.log("Value ", value);
    console.log("Options ", option);
    setSelectedObat(value);
  };

  const handleChangePasien = (value, option) => {
    console.log("Option ", option);
    setSelectedPasien(value);
  };


  const handleChangeKeterangan = (e) => {
    setKeterangan(e.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    handleCreate();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("OPTION OBAT ", OptionResepObat);
    console.log("OPTION PASIEN ", OptionPasien);
  }, [OptionResepObat, OptionPasien]);

  const handleListData = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/resep_obat`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("res Data ", res.data.data);
      const listData = [];
      res.data.data.map((item) => {
        // Mengambil nama obat berdasarkan ID
        const obat = OptionResepObat.find((option) => option.value === item.obat_id)?.label || "";
        // Mengambil nama pasien berdasarkan ID
        const pasien = OptionPasien.find((option) => option.value === item.pasien_id)?.label || "";
        listData.push({
          Obat: <ArgonTypography variant="h6" mb={0.5} pl={2}>{obat}</ArgonTypography>,
          Pasien: <ArgonTypography variant="h6" mb={0.5}>{pasien}</ArgonTypography>,
          Keterangan: <ArgonTypography variant="h6" mb={0.5}>{item.keterangan}</ArgonTypography>,
          Action: (<EditDeleteResep id={item.id} />),
        });
      });
      setDataResepObatList(listData);
      console.log("List Data", listData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleListData();
    fetchDataPasien();
    fetchDataObat();
  }, []);

  return (

    <DashboardLayout>
      <DashboardNavbar />
      <ArgonButton variant="gradient" color="dark" onClick={showModal}>
        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
        Tambah Resep Obat
      </ArgonButton>
      <Modal title="Edit Pasien" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
        <Button size="large" key="cancel" onClick={handleCancel}>Batal</Button>,
        <Button size="large" key="submit"
          style={{ backgroundColor: '#2CCE89', color: 'white' }} onClick={() => handleCreate()} >Simpan</Button>,
      ]} centered>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          {/* <Select
            value={selectedObat}
            options={OptionResepObat}
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Pilih Obat"
            onChange={handleChangeResepObat}
            size="large"
          /> */}
          <Select
            value={selectedObat}
            options={OptionResepObat}
            allowClear
            style={{ width: '100%' }}
            placeholder="Pilih Obat"
            onChange={handleChangeResepObat}
            size="large"
          />
          <Select
            value={selectedPasien}
            options={OptionPasien}
            allowClear
            style={{ width: '100%' }}
            placeholder="Pilih Pasien"
            onChange={handleChangePasien}
            size="large"
          />
          <TextArea rows={4} value={keterangan} onChange={handleChangeKeterangan} />
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
              <Table columns={columns} rows={dataResepObatList} />
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

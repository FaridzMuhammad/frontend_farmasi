import React, { useEffect, useState } from 'react';
import { Modal, Input, Space, Button, Select } from 'antd';
import ArgonBox from 'components/ArgonBox';
import ArgonButton from 'components/ArgonButton';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from 'examples/constant/data';

const { TextArea } = Input;

function EditDeleteResep(id) {

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [editOptionResepObat, editsetOptionResepObat] = useState([{
        value: '',
        label: '',
    }]);
    const [editOptionPasien, editsetOptionPasien] = useState([{
        value: '',
        label: '',
    }]);
    const [editKeterangan, setEditKeterangan] = useState('');
    const [editSelectedPasien, setEditSelectedPasien] = useState();
    const [editSelectedObat, setEditSelectedObat] = useState();
    const [editDataResepObatList, editSetDataResepObatList] = useState([]);

    //fungsi edit
    const handleEdit = async () => {
        console.log(id);
        try {
            const res = await axios.put(`${API_URL}/api/resep_obat/${id.id}`, {
                obat_id: editSelectedObat,
                pasien_id: editSelectedPasien,
                keterangan: editKeterangan,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            toast.success("Data berhasil diubah");
            setIsEditOpen(false);
        } catch (error) {
            console.log(error);
            toast.error("Data gagal diubah");
            setIsEditOpen(true);
        }
    };

    //fungsi delete
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`${API_URL}/api/resep_obat/${id.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            toast.success("Data berhasil dihapus");
            setIsDeleteOpen(false);
        } catch (error) {
            console.log(error);
            toast.error("Data gagal dihapus");
            setIsDeleteOpen(true);
        }
    };

    const fetchEditDataPasien = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/pasien`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const data = res.data.data.map((item) => ({
                value: item.id_pasien,
                label: item.nama_pasien,
            }));

            editsetOptionPasien(data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchEditDataObat = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/obat`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const data = res.data.data.map((item) => ({
                value: item.id_obat,
                label: item.nama_obat,
            }));
            editsetOptionResepObat(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchEditDataObat();
        fetchEditDataPasien();
    }, []);

    const handleEditChangeKeterangan = (e) => {
        setEditKeterangan(e.target.value);
    };

    const handleEditChangePasien = (value, option) => {
        console.log("edit pasien value", value);
        setEditSelectedPasien(value);
    };

    const handleEditChangeObat = (value, option) => {
        console.log("edit obat value", value);
        setEditSelectedObat(value);
    };

    useEffect(() => {
        console.log(editSelectedPasien);
        console.log(editSelectedObat);
    }, [editSelectedPasien, editSelectedObat]);



    const showEdit = () => {
        setIsEditOpen(true);
    };

    const showDelete = () => {
        setIsDeleteOpen(true);
    };

    const handleEditOk = () => {
        setIsEditOpen(false);
    };

    const handleDeleteOk = () => {
        setIsDeleteOpen(false);
    };

    const handleEditCancel = () => {
        setIsEditOpen(false);
    };

    const handleDeleteCancel = () => {
        setIsDeleteOpen(false);
    };

    return (
        <ArgonBox display="flex" justifyContent="center" alignItems="center">
            <ArgonBox mr={1}>
                <ArgonButton color="success" onClick={showEdit}>Edit</ArgonButton>
            </ArgonBox>
            <Modal title="Edit Pasien" visible={isEditOpen} onOk={handleEditOk} onCancel={handleEditCancel} footer={[
                <Button size="large" key="cancel" onClick={handleEditCancel}>Batal</Button>,
                <Button size="large" key="submit"
                    style={{ backgroundColor: '#2CCE89', color: 'white' }} onClick={() => handleEdit()} >Simpan</Button>,
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
                        value={editSelectedObat} // Perbarui pengaturan value dengan editSelectedObat
                        options={editOptionResepObat}
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Pilih Obat"
                        onChange={handleEditChangeObat}
                        size="large"
                    />
                    <Select
                        value={editSelectedPasien} // Perbarui pengaturan value dengan editSelectedPasien
                        options={editOptionPasien}
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Pilih Pasien"
                        onChange={handleEditChangePasien}
                        size="large"
                    />
                    <TextArea rows={4} value={editKeterangan} onChange={handleEditChangeKeterangan} />
                </Space>
            </Modal>
            <ArgonBox>
                <ArgonButton color="error" danger onClick={showDelete}>Delete</ArgonButton>
            </ArgonBox>
            <Modal title="Delete Resep Obat" visible={isDeleteOpen} onOk={handleDeleteOk} onCancel={handleDeleteCancel} footer={[
                <Button size="large" key="cancel" onClick={handleDeleteCancel} style={{ backgroundColor: '#F5355C', color: 'white' }} >Tidak</Button>,
                <Button size="large" key="submit"
                    style={{ backgroundColor: '#2CCE89', color: 'white' }} onClick={() => handleDelete()} >Ya</Button>,
            ]} centered>
                <p> Apakah anda yakin ingin menghapus data tersebut? </p>
            </Modal>
        </ArgonBox>
    );
};

export default EditDeleteResep;

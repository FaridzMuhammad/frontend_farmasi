import React, { useState } from 'react';
import { Modal, Input, Space, Button } from 'antd';
import ArgonBox from 'components/ArgonBox';
import ArgonButton from 'components/ArgonButton';
import { API_URL } from 'examples/constant/data';
import { toast } from 'react-toastify';
import axios from 'axios';

function EditDeleteResep(id) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [editObat, setEditObat] = useState();
    const [editStok, setEditStok] = useState();
    const [editHarga, setEditHarga] = useState();

    const handleEdited = async () => {
        console.log(id);
        try {
            const res = await axios.put(`${API_URL}/api/obat/${id.id}`, {
                nama_obat: editObat,
                stok_obat: editStok,
                harga_obat: editHarga,
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

    const handleDeleted = async () => {
        try {
            const res = await axios.delete(`${API_URL}/api/obat/${id.id}`, {
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
            <Modal title="Edit Resep Obat" visible={isEditOpen} onOk={handleEditOk} onCancel={handleEditCancel} footer={[
                <Button size="large" key="cancel" onClick={handleEditCancel}>Batal</Button>,
                <Button size="large" key="submit"
                style={{ backgroundColor: '#2CCE89', color: 'white' }} onClick={() => handleEdited(editObat)}>Simpan</Button>,
            ]} centered>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Input size="large" placeholder="Nama Obat" value={editObat} onChange={(e) => setEditObat(e.target.value)} />
                    <Input size="large" placeholder="Jumlah" value={editStok} onChange={(e) => setEditStok(e.target.value)}  />
                    <Input size="large" placeholder="Harga" value={editHarga} onChange={(e) => setEditHarga(e.target.value)} />
                </Space>
            </Modal>
            <ArgonBox>
                <ArgonButton color="error" danger onClick={showDelete}>Delete</ArgonButton>
            </ArgonBox>
            <Modal title="Delete Resep Obat" visible={isDeleteOpen} onOk={handleDeleteOk} onCancel={handleDeleteCancel} footer={[
                <Button size="large" key="cancel" onClick={handleDeleteCancel} style={{ backgroundColor: '#F5355C', color: 'white' }} >Tidak</Button>,
                <Button size="large" key="submit"
                style={{ backgroundColor: '#2CCE89', color: 'white' }} onClick={() => handleDeleted()} >Ya</Button>,
            ]} centered>
                <p> Apakah anda yakin ingin menghapus data tersebut? </p>
            </Modal>
        </ArgonBox>
    );
};

export default EditDeleteResep;

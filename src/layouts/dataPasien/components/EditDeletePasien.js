import React, { useState } from 'react';
import { Modal, Input, Space, Button } from 'antd';
import ArgonBox from 'components/ArgonBox';
import ArgonButton from 'components/ArgonButton';

function EditDeletePasien() {

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

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
                style={{ backgroundColor: '#2CCE89', color: 'white' }} >Simpan</Button>,
            ]} centered>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Input size="large" placeholder="Nama Pasien" />
                    <Input size="large" placeholder="Tepelpon" />
                    <Input size="large" placeholder="Alamat" />
                </Space>
            </Modal>
            <ArgonBox>
                <ArgonButton color="error" danger onClick={showDelete}>Delete</ArgonButton>
            </ArgonBox>
            <Modal title="Delete Resep Obat" visible={isDeleteOpen} onOk={handleDeleteOk} onCancel={handleDeleteCancel} footer={[
                <Button size="large" key="cancel" onClick={handleDeleteCancel} style={{ backgroundColor: '#F5355C', color: 'white' }} >Tidak</Button>,
                <Button size="large" key="submit"
                style={{ backgroundColor: '#2CCE89', color: 'white' }} >Ya</Button>,
            ]} centered>
                <p> Apakah anda yakin ingin menghapus data tersebut? </p>
            </Modal>
        </ArgonBox>
    );
};

export default EditDeletePasien;

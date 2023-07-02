
import ArgonTypography from "components/ArgonTypography";
import EditDeletePasien from "../components/EditDeletePasien"


const dataPasien = {
  columns: [
    { name: "Nama", align: "left" },
    { name: "Telepon", align: "left" },
    { name: "Alamat", align: "left" },
    { name: "Action", align: "center" }
  ],

  rows: [
    {
      Nama: (<ArgonTypography variant="h6" mb={0.5} pl={2} > Hadad </ArgonTypography>),
      Telepon: <ArgonTypography variant="h6" mb={0.5}> Dr. Hadi </ArgonTypography>,
      Harga: <ArgonTypography variant="h6" mb={0.5}> Dr. Hadi </ArgonTypography>,
      Action: (<EditDeletePasien />),
    },
  ],
};


export default dataPasien;

/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";
import EditDeleteObat from "../components/EditDeleteObat"


const dataObat = {
    columns: [
        { name: "Obat", align: "left" },
        { name: "Stok", align: "left"},
        { name: "Harga", align: "left" },
        { name: "Action", align: "center"}
    ],

    rows: [
        {
            Obat: (<ArgonTypography variant="h6" mb={0.5} pl={2} > Hadad </ArgonTypography>),
            Stok: <ArgonTypography variant="h6" mb={0.5}> Dr. Hadi </ArgonTypography>,
            Harga: <ArgonTypography variant="h6" mb={0.5} pl={2}> Dr. Hadi </ArgonTypography>,
            Action: (<EditDeleteObat/>),
        },
    ],
};

export default dataObat;

/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";
import EditDeleteResep from "../components/EditDeleteResep"


// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import ArgonButton from "components/ArgonButton";

const dataResepObat = {
    columns: [
        { name: "Obat", align: "left" },
        { name: "Pasien", align: "left" },
        { name: "Keterangan", align: "left" },
        { name: "Action", align: "center" },
    ],

    rows: [
        {
            Obat: <ArgonTypography variant="h6" mb={0.5} pl={2} > Hadad </ArgonTypography>,
            Pasien: <ArgonTypography variant="h6" mb={0.5}> Dr. Hadi </ArgonTypography>,
            Keterangan: <ArgonTypography variant="h6" mb={0.5} > Dr. Hadi </ArgonTypography>,
            Action: (<EditDeleteResep/>),
            
        },
    ],
};

export default dataResepObat;

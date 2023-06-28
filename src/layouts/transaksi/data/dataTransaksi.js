/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";
import ArgonButton from "components/ArgonButton";
import EditDeleteTransaksi from "../components/EditDeleteTransaksi"

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
    return (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
            <ArgonBox display="flex" flexDirection="column">
                <ArgonTypography variant="button" fontWeight="medium">
                    {name}
                    
                </ArgonTypography>
                <ArgonButton variant="gradient" color="dark"></ArgonButton>
            </ArgonBox>
        </ArgonBox>
    );
}

function Function({ job, org }) {
    return (
        <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="caption" fontWeight="medium" color="text">
                {job}
            </ArgonTypography>
            <ArgonTypography variant="caption" color="secondary">
                {org}
            </ArgonTypography>
        </ArgonBox>
    );
}

const dataTransaksi = {
    columns: [
        { name: "Pasien", align: "left" },
        { name: "ResepObat", align: "left"},
        { name: "Tanggal", align: "left" },
        { name: "Total", align: "left" },
        { name: "Action", align: "center"}
    ],

    rows: [
        {
            Pasien: (<ArgonTypography variant="h6" mb={0.5} pl={2} > Hadad </ArgonTypography>),
            ResepObat: <ArgonTypography variant="h6" mb={0.5}> Dr. Hadi </ArgonTypography>,
            Tanggal: <ArgonTypography variant="h6" mb={0.5} > Dr. Hadi </ArgonTypography>,
            Total: <ArgonTypography variant="h6" mb={0.5} pl={2}> Dr. Hadi </ArgonTypography>,
            Action: (<EditDeleteTransaksi/>),
        },
    ],
};

export default dataTransaksi;

/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

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

const listData = {
    columns: [
        { name: "Pasien", align: "left" },
        { name: "Obat", align: "left" },
        { name: "Deskripsi", align: "left" },
        { name: "Status", align: "center" },
    ],

    rows: [
        {
            Pasien: <ArgonTypography variant="h6"  mb={0.5} pl={2} > Hadad </ArgonTypography>,
            Obat: <ArgonTypography variant="h6"  mb={0.5}> Dr. Hadi </ArgonTypography>,
            Deskripsi: <ArgonTypography variant="h6"  mb={0.5}> Dr. Hadi </ArgonTypography>,
            Status: (
                <ArgonBadge variant="gradient" badgeContent="Selesai" color="success" size="xs" container />
            ),
        },
        {
            Pasien: <ArgonTypography variant="h6"  mb={0.5} pl={2} > Hadad </ArgonTypography>,
            Obat: <ArgonTypography variant="h6"  mb={0.5}> Dr. Hadi </ArgonTypography>,
            Deskripsi: <ArgonTypography variant="h6"  mb={0.5} > Dr. Hadi </ArgonTypography>,
            Status: (
                <ArgonBadge variant="gradient" badgeContent="Selesai" color="success" size="xs" container />
            ),
        },
        {
            Pasien: <ArgonTypography variant="h6"  mb={0.5} pl={2} > Hadad </ArgonTypography>,
            Obat: <ArgonTypography variant="h6"  mb={0.5}> Dr. Hadi </ArgonTypography>,
            Deskripsi: <ArgonTypography variant="h6"  mb={0.5} > Dr. Hadi </ArgonTypography>,
            Status: (
                <ArgonBadge variant="gradient" badgeContent="Selesai" color="success" size="xs" container />
            ),
        },
        {
            Pasien: <ArgonTypography variant="h6"  mb={0.5} pl={2} > Hadad </ArgonTypography>,
            Obat: <ArgonTypography variant="h6"  mb={0.5}> Dr. Hadi </ArgonTypography>,
            Deskripsi: <ArgonTypography variant="h6"  mb={0.5} > Dr. Hadi </ArgonTypography>,
            Status: (
                <ArgonBadge variant="gradient" badgeContent="Selesai" color="success" size="xs" container />
            ),
        },
        {
            Pasien: <ArgonTypography variant="h6"  mb={0.5} pl={2} > Hadad </ArgonTypography>,
            Obat: <ArgonTypography variant="h6"  mb={0.5}> Dr. Hadi </ArgonTypography>,
            Deskripsi: <ArgonTypography variant="h6"  mb={0.5} > Dr. Hadi </ArgonTypography>,
            Status: (
                <ArgonBadge variant="gradient" badgeContent="Selesai" color="success" size="xs" container />
            ),
        },
    ],
};

export default listData;

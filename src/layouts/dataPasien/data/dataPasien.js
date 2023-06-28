/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";
import EditDeletePasien from "../components/EditDeletePasien"

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

const dataPasien = {
  columns: [
    { name: "Name", align: "left" },
    { name: "Telepon", align: "left" },
    { name: "Alamat", align: "left" },
    { name: "Action", align: "center" },
  ],

  rows: [
    {
      Name: (<ArgonTypography variant="h6"  mb={0.5} pl={2} > Hadad </ArgonTypography>),
      Telepon: <ArgonTypography variant="h6"  mb={0.5}> Dr. Hadi </ArgonTypography>,
      Alamat: <ArgonTypography variant="h6"  mb={0.5} pl={2} > Hadad </ArgonTypography>,
      Action: (<EditDeletePasien/>),
    },
  ],
};

export default dataPasien;

/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const keys = [0.9995436834, 0.89677754345, 0.5456705934, 0.2189456734];

export default function data({ setId, handleOpen }) {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title} ₽
      </MDTypography>
    </MDBox>
  );

  const handleId = (e) => {
    setId(e.target.id);
    handleOpen(true);
  };

  return {
    columns: [
      { Header: "INN", accessor: "author", width: "45%", align: "left" },
      { Header: "Capital Size", accessor: "function", align: "left" },
      { Header: "Success prediction", accessor: "status", align: "center" },
      { Header: "register", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" email="7718863470" />,
        function: <Job title="100 000" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent={keys[0]}
              color={keys[0] > 0.8 ? "success" : keys[0] > 0.5 ? "warning" : "error"}
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            id={1}
            fontWeight="medium"
            onClick={handleId}
          >
            Show all
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} name="John Michael" email="7718863470" />,
        function: <Job title="100 000" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent={keys[1]}
              color={keys[1] > 0.8 ? "success" : keys[1] > 0.5 ? "warning" : "error"}
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            id={1}
            fontWeight="medium"
            onClick={handleId}
          >
            Show all
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} name="John Michael" email="7718863470" />,
        function: <Job title="100 000" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent={keys[2]}
              color={keys[2] > 0.8 ? "success" : keys[2] > 0.5 ? "warning" : "error"}
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            id={1}
            fontWeight="medium"
            onClick={handleId}
          >
            Show all
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} name="John Michael" email="7718863470" />,
        function: <Job title="100 000" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent={keys[3]}
              color={keys[3] > 0.8 ? "success" : keys[3] > 0.5 ? "warning" : "error"}
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            id={1}
            fontWeight="medium"
            onClick={handleId}
          >
            Show all
          </MDTypography>
        ),
      },
    ],
  };
}

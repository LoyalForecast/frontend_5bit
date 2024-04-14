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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import modalData from "layouts/tables/data/modalData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { CardContent, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserMock = {
  id: 1,
  slctn_nmbr: 1,
  client_id: "0xA095932790098744A2325A8D152C05C7",
  npo_account_id: "0xD4DBBAC6561929409BA45725A220613E",
  npo_accnts_nmbr: 1,
  pmnts_type: 2,
  year: 2017,
  quarter: "2017Q4",
  gender: 1,
  age: 48,
  clnt_cprtn_time_d: 8091,
  actv_prd_d: 0,
  lst_pmnt_rcnc_d: 6757,
  balance: 679.37,
  oprtn_sum_per_qrtr: 31.34,
  oprtn_sum_per_year: 31.34,
  frst_pmnt_date: "1999-07-02",
  lst_pmnt_date_per_qrtr: null,
  frst_pmnt: 96.25,
  lst_pmnt: 0.09,
  pmnts_sum: 96.25,
  pmnts_nmbr: 1,
  pmnts_sum_per_qrtr: -0.0,
  pmnts_sum_per_year: -0.0,
  pmnts_nmbr_per_qrtr: 0,
  pmnts_nmbr_per_year: 0,
  incm_sum: 583.12,
  incm_per_qrtr: 31.34,
  incm_per_year: 31.34,
  mgd_accum_period: 1.8,
  mgd_payment_period: 1.8,
  phone_number: 0,
  email: 0,
  lk: -1,
  assignee_npo: -1,
  assignee_ops: -1,
  postal_code: 446254,
  region: "САМАРСКАЯ ОБЛ",
  citizen: -1,
  fact_addrss: -1,
  appl_mrkr: 0,
  evry_qrtr_pmnt: 0,
  churn: 0,
};
function Tables() {
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState(null);
  const { columns, rows } = authorsTableData({ setId, handleOpen });

  useEffect(() => {
    if (open) {
      setUser(modalData({ id }));
    }

    return () => {
      setUser(null);
    };
  }, [open]);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Поставщики:
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {id && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Детальная информация:
            </Typography>
            <Card>
              <CardContent sx={{overflowX:"scroll", height:"500px"}}>
                {Object.entries(UserMock).map(([key, value]) => (
                  <Typography
                    key={key}
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "12px" }}
                  >
                    {key}: {value}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Box>
        </Modal>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;

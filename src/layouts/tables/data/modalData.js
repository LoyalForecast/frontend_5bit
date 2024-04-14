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

export default function data(id) {
  const mockUsers = [
    {
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
    },
    {
      id: 2,
      INN: "1234567890",
      OKOPF: "45678",
      OKFS: "23",
      OKTMO: "9876543210",
      OKVED: "12.34",
      Reg_date: "2020-05-20",
      Charter_capital: 150000,
      Avg_employees: 3,
      Proc_count: 8,
      Won_proc_count: 3,
      Exclusion_date: "2022-11-15",
      SME_category: 1,
      Simplified_tax_system: 1,
      Imputed_income_tax: 0,
      Debt_on_enforcement_docs: "50000 rub.",
      Contract_cost: "1200000 rub.",
      Subcontractor_share: "20%",
      Contract_completion_date: "2021-08-10",
      Contracts_via_ESIA_count: 2,
      Order_success_rate: 0.75,
    },
    {
      id: 3,
      INN: "0987654321",
      OKOPF: "54321",
      OKFS: "32",
      OKTMO: "1357924680",
      OKVED: "98.76",
      Reg_date: "2017-03-10",
      Charter_capital: 80000,
      Avg_employees: 2,
      Proc_count: 15,
      Won_proc_count: 5,
      Exclusion_date: null,
      SME_category: 0,
      Simplified_tax_system: 0,
      Imputed_income_tax: 1,
      Debt_on_enforcement_docs: null,
      Contract_cost: "3000000 rub.",
      Subcontractor_share: "10%",
      Contract_completion_date: "2019-11-30",
      Contracts_via_ESIA_count: 1,
      Order_success_rate: 0.5,
    },
    {
      id: 4,
      INN: "2468135790",
      OKOPF: "13579",
      OKFS: "64",
      OKTMO: "3692581470",
      OKVED: "24.68",
      Reg_date: "2019-08-25",
      Charter_capital: 120000,
      Avg_employees: 4,
      Proc_count: 10,
      Won_proc_count: 4,
      Exclusion_date: null,
      SME_category: 1,
      Simplified_tax_system: 1,
      Imputed_income_tax: 0,
      Debt_on_enforcement_docs: "10000 rub.",
      Contract_cost: "2500000 rub.",
      Subcontractor_share: "15%",
      Contract_completion_date: "2022-05-15",
      Contracts_via_ESIA_count: 3,
      Order_success_rate: 0.85,
    },
  ];

  return mockUsers.filter((user) => user.id == id);
}

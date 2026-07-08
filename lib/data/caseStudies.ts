export interface CaseStudy {
  industry: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  { industry: 'Gas Station Network', title: 'Central visibility across 12 branches', problem: 'A multi-branch station operator had no way to see daily sales or stock across locations, relying on phone calls and spreadsheets.', solution: 'Deployed Gas Station POS with a central Fuel ERP and Business Intelligence Dashboard.', result: 'Daily reconciliation time cut from hours to minutes, with real-time visibility for management.' },
  { industry: 'Propane Distributor', title: 'Recovering lost cylinder revenue', problem: 'Cylinders were frequently lost or unreturned, and driver accountability was difficult to enforce.', solution: 'Implemented Propane Cylinder Management with deposit tracking and driver assignment.', result: 'Missing cylinder incidents dropped significantly within the first quarter.' },
  { industry: 'Fuel Distribution Company', title: 'Controlling employee fuel spending', problem: 'Company vehicles had no enforced fuel limits, leading to unpredictable monthly fuel costs.', solution: 'Rolled out the Employee Fuel Limit & Quota System integrated with Fuel Card management.', result: 'Fuel costs became predictable and auditable across all departments.' },
  { industry: 'Fuel Depot', title: 'Closing physical security gaps', problem: 'A regional fuel depot had limited camera coverage and no central monitoring across its perimeter.', solution: 'Installed CCTV & Physical Security with a central monitoring dashboard and access control.', result: 'Full perimeter visibility with centralised alerts for security staff.' },
];

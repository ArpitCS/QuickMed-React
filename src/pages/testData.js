import vitaminD from "../assets/test-icons/health.png";
import vitaminB12 from "../assets/test-icons/vitamin.png";
import thyroid from "../assets/test-icons/thyroid-gland.png";
import liver from "../assets/test-icons/liver.png";
import kidney from "../assets/test-icons/kidney.png";
import bloodSugar from "../assets/test-icons/sugar-blood-level.png";
import bloodCells from "../assets/test-icons/red-blood-cells.png";
import lipid from "../assets/test-icons/lipid.png";

import diabetesPackage from "../assets/package-icons/diabetes-package.png";
import heartPackage from "../assets/package-icons/heart-package.png";
import kidneyPackage from "../assets/package-icons/kidney-package.png";
import liverPackage from "../assets/package-icons/liver-package.png";

import basicCheckup from "../assets/checkup-badges/basic-checkup-plan.png";
import bronzeCheckup from "../assets/checkup-badges/bronze-checkup-plan.png";
import silverCheckup from "../assets/checkup-badges/silver-checkup-plan.png";
import goldCheckup from "../assets/checkup-badges/gold-checkup-plan.png";

export const regularTests = [
  {
    id: 1,
    name: "Vitamin D Test",
    price: 300,
    icon: vitaminD,
  },
  {
    id: 2,
    name: "Vitamin B12 Test",
    price: 250,
    icon: vitaminB12,
  },
  {
    id: 3,
    name: "Thyroid Profile Test",
    price: 500,
    icon: thyroid,
  },
  {
    id: 4,
    name: "Liver Function Test",
    price: 400,
    icon: liver,
  },
  {
    id: 5,
    name: "Kidney Test",
    price: 450,
    icon: kidney,
  },
  {
    id: 6,
    name: "Blood Sugar Test",
    price: 200,
    icon: bloodSugar,
  },
  {
    id: 7,
    name: "Blood Cells Test",
    price: 350,
    icon: bloodCells,
  },
  {
    id: 8,
    name: "Lipid Profile Test",
    price: 600,
    icon: lipid,
  },
];

export const testPackages = [
  {
    id: 1,
    name: "Diabetes Care",
    price: 799,
    total: 40,
    tests: [
      "Fasting Blood Sugar (FBS)",
      "HbA1c",
      "Average Blood Glucose",
      "Complete Blood Count (CBC)",
      "Lipid Profile - Total Cholesterol",
      "Lipid Profile - HDL",
      "Lipid Profile - LDL",
      "Lipid Profile - Triglycerides",
      "Thyroid Stimulating Hormone (TSH)",
      "Insulin Levels",
      "C-Peptide",
      "Glucose Tolerance Test",
      "Creatinine",
      "Urea",
      "Sodium",
      "Potassium",
      "Calcium",
      "Magnesium",
      "Phosphate",
      "Vitamin D",
      "Vitamin B12",
      "Iron Studies",
      "Ferritin",
      "Transferrin",
      "Liver Function Test (ALT/SGPT)",
      "Liver Function Test (AST/SGOT)",
      "Albumin",
      "Bilirubin",
      "Alkaline Phosphatase",
      "Gamma-GT",
      "Uric Acid",
      "C-Reactive Protein (CRP)",
      "Erythrocyte Sedimentation Rate (ESR)",
      "Hemoglobin A1c",
      "Glycemic Index",
      "Cortisol",
      "Renal Function - BUN",
      "Renal Function - Creatinine Clearance",
      "Microalbumin",
      "Proinsulin",
      "Homocysteine",
    ],
    sample_type: "Blood",
    slot: "1 Day",
    delivery_time: "1 Day",
    gender: "Both",
    age: "7 Years & Above",
    preparation: "12 hours fasting",
    description:
      "The Diabetes Care Package helps screen and diagnose prediabetes, diabetes and other types of diabetes. It provides a range of tests for key diabetes parameters such as Fasting Blood Sugar (FBS), HbA1c, and Average Blood Glucose. In addition, it also includes tests for Complete Blood Count / Hemogram (CBC), Lipid Profile, Thyroid.",
    icon: diabetesPackage,
  },
  {
    id: 2,
    name: "Heart Care",
    price: 999,
    total: 50,
    tests: [
      "Lipid Profile - Total Cholesterol",
      "Lipid Profile - HDL",
      "Lipid Profile - LDL",
      "Lipid Profile - Triglycerides",
      "Apolipoprotein A1",
      "Apolipoprotein B",
      "Lipoprotein (a)",
      "C-Reactive Protein (CRP)",
      "Homocysteine",
      "Troponin I",
      "Troponin T",
      "Pro-BNP",
      "Complete Blood Count (CBC)",
      "Hemoglobin",
      "Hematocrit",
      "Platelet Count",
      "White Blood Cell Count",
      "Red Blood Cell Count",
      "Electrolytes - Sodium",
      "Electrolytes - Potassium",
      "Electrolytes - Chloride",
      "Calcium",
      "Magnesium",
      "Phosphate",
      "Vitamin D",
      "Vitamin B12",
      "Thyroid Stimulating Hormone (TSH)",
      "Free T3",
      "Free T4",
      "Glucose Tolerance Test",
      "HbA1c",
      "Liver Function Test (ALT/SGPT)",
      "Liver Function Test (AST/SGOT)",
      "Bilirubin",
      "Albumin",
      "Alkaline Phosphatase",
      "Kidney Function Test - Creatinine",
      "Kidney Function Test - Urea",
      "Glomerular Filtration Rate (GFR)",
      "Uric Acid",
      "Microalbumin",
      "Renal Function - BUN",
      "Renal Function - Creatinine Clearance",
      "High Sensitivity CRP",
      "D-dimer",
      "Fibrinogen",
      "Prothrombin Time (PT)",
      "INR",
      "Vitamin K",
    ],
    sample_type: "Blood",
    slot: "1 Day",
    delivery_time: "1 Day",
    gender: "Both",
    age: "7 Years & Above",
    preparation: "12 hours fasting",
    description:
      "The Heart Care Package is designed to help you monitor your heart health. It provides a range of tests to check for your Lipid Profile, Liver Function, Kidney Function, Thyroid Function, Complete Blood Count, Blood Sugar. It also includes tests for Sodium, Chloride and Calcium levels in the body.",
    icon: heartPackage
  },
  {
    id: 3,
    name: "Kidney Care",
    price: 899,
    total: 48,
    tests: [
      "Kidney Function Test - Creatinine",
      "Kidney Function Test - Urea",
      "Glomerular Filtration Rate (GFR)",
      "Uric Acid",
      "Electrolytes - Sodium",
      "Electrolytes - Potassium",
      "Electrolytes - Chloride",
      "Calcium",
      "Phosphate",
      "Magnesium",
      "Vitamin D",
      "Renal Function - BUN",
      "Renal Function - Creatinine Clearance",
      "Microalbumin",
      "Protein/Creatinine Ratio",
      "Urine Routine Examination",
      "Complete Blood Count (CBC)",
      "Hemoglobin",
      "Hematocrit",
      "Platelet Count",
      "White Blood Cell Count",
      "Red Blood Cell Count",
      "Liver Function Test (ALT/SGPT)",
      "Liver Function Test (AST/SGOT)",
      "Bilirubin",
      "Albumin",
      "Alkaline Phosphatase",
      "Gamma-GT",
      "Thyroid Stimulating Hormone (TSH)",
      "Free T3",
      "Free T4",
      "Vitamin B12",
      "C-Reactive Protein (CRP)",
      "Erythrocyte Sedimentation Rate (ESR)",
      "Fasting Blood Sugar (FBS)",
      "HbA1c",
      "Average Blood Glucose",
      "Lipid Profile - Total Cholesterol",
      "Lipid Profile - HDL",
      "Lipid Profile - LDL",
      "Lipid Profile - Triglycerides",
      "Insulin Levels",
      "Parathyroid Hormone (PTH)",
      "Serum Osmolality",
      "Urine Osmolality",
      "Cystatin C",
      "Beta-2 Microglobulin",
      "Vitamin C",
    ],
    sample_type: "Blood",
    slot: "1 Day",
    delivery_time: "1 Day",
    gender: "Both",
    age: "7 Years & Above",
    preparation: "12 hours fasting",
    description:
      "The Kidney Care Package is designed to help you monitor your kidney health. It provides a range of tests to check for your Liver Function, Kidney Function, Thyroid Function, Complete Blood Count, Blood Sugar, Lipid Profile. It also includes tests for Sodium, Chloride and Calcium levels in the body.",
    icon: kidneyPackage,
  },
  {
    id: 4,
    name: "Liver Care",
    price: 899,
    total: 48,
    tests: [
      "Liver Function Test (ALT/SGPT)",
      "Liver Function Test (AST/SGOT)",
      "Bilirubin - Total",
      "Bilirubin - Direct",
      "Bilirubin - Indirect",
      "Alkaline Phosphatase",
      "Gamma-GT",
      "Albumin",
      "Total Protein",
      "Prothrombin Time (PT)",
      "INR",
      "Thyroid Stimulating Hormone (TSH)",
      "Free T3",
      "Free T4",
      "Vitamin B12",
      "C-Reactive Protein (CRP)",
      "Complete Blood Count (CBC)",
      "Hemoglobin",
      "Hematocrit",
      "Platelet Count",
      "White Blood Cell Count",
      "Red Blood Cell Count",
      "Urea",
      "Creatinine",
      "Glomerular Filtration Rate (GFR)",
      "Calcium",
      "Phosphate",
      "Magnesium",
      "Vitamin D",
      "Lipid Profile - Total Cholesterol",
      "Lipid Profile - HDL",
      "Lipid Profile - LDL",
      "Lipid Profile - Triglycerides",
      "Blood Sugar - Fasting",
      "Blood Sugar - Postprandial",
      "HbA1c",
      "Iron Studies",
      "Ferritin",
      "Transferrin",
      "Electrolytes - Sodium",
      "Electrolytes - Potassium",
      "Electrolytes - Chloride",
      "Lactate Dehydrogenase (LDH)",
      "Alpha-fetoprotein (AFP)",
      "Ammonia",
      "Serum Amylase",
      "Lipase",
      "Uric Acid",
      "Parathyroid Hormone (PTH)",
    ],
    sample_type: "Blood",
    slot: "1 Day",
    delivery_time: "1 Day",
    gender: "Both",
    age: "7 Years & Above",
    preparation: "12 hours fasting",
    description:
      "The Liver Care Package is designed to help you monitor your liver health. It provides a range of tests to check for your Kidney Function, Liver Function, Thyroid Function, Complete Blood Count, Blood Sugar, Lipid Profile. It also includes tests for Sodium, Chloride and Calcium levels in the body.",
    icon: liverPackage,
  },
];

export const healthCheckups = [
  {
    id: 1,
    name: "Basic Health Checkup",
    price: 1049,
    total: 56,
    tests: [
      "Thyroid Function",
      "Lipid Profile",
      "Kidney Function",
      "Liver Function",
      "Fasting Blood Sugar",
    ],
    sample_type: "Blood",
    slot: "1 Day",
    delivery_time: "1 Day",
    preparation: "12 hours fasting",
    description:
      "Basic Health Checkup package can be taken by anyone who wants to track the vital parameters of their body. Such health checkups can help catch the warning signs of hidden illnesses in the body. It provides a range of tests to check for your Thyroid Function, Lipid Profile, Kidney Function, Liver Function, Fasting Blood Sugar etc.",
    icon: basicCheckup,
  },
  {
    id: 2,
    name: "Bronze Health Checkup",
    price: 1449,
    total: 82,
    tests: [
      "Kidney Function",
      "Liver Function",
      "Thyroid Gland",
      "Lipid Profile",
      "Complete Blood Count",
    ],
    sample_type: "Blood",
    slot: "1 Day",
    delivery_time: "1 Day",
    preparation: "12 hours fasting",
    description:
      "The Regular Health Checkup is an ideal test package that covers most of the blood and urine tests needed for essential health monitoring. It covers tests for Kidney and Liver Function, Thyroid Gland, Lipid Profile, Complete Blood Count. It also checks for Sodium, Chloride and Calcium levels in the body.",
    icon: bronzeCheckup,
  },
  {
    id: 3,
    name: "Silver Health Checkup",
    price: 1949,
    total: 90,
    tests: [
      "Heart",
      "Thyroid",
      "Kidney",
      "Liver",
      "Blood Sugar",
      "Complete Blood Count",
      "Lipid Profile",
      "Complete Urine Analysis",
    ],
    sample_type: "Blood",
    slot: "1 Day",
    delivery_time: "1 Day",
    preparation: "12 hours fasting",
    description:
      "The Comprehensive Full Body Checkup with Vitamin D & B12 is ideal for people who want to monitor their overall health. It provides a range of tests to check the health of the Heart, Thyroid, Kidney, and Liver. It also includes tests for Blood Sugar, Complete Blood Count, Lipid Profile and Complete Urine Analysis.",
    icon: silverCheckup,
  },
  {
    id: 4,
    name: "Gold Health Checkup",
    price: 2499,
    total: 97,
    tests: [
      "Heart",
      "Thyroid",
      "Kidney",
      "Liver",
      "Blood Sugar",
      "Complete Blood Count",
      "Lipid Profile",
      "Complete Urine Analysis",
    ],
    sample_type: "Blood",
    slot: "1 Day",
    delivery_time: "1 Day",
    preparation: "12 hours fasting",
    description:
      "Prevention is better than cure! Unhealthy lifestyle or stress can impact one's health. Health Checkup can help pick up early signs of any disease or illness. This package provides a range of tests that check important body parameters like Heart, Thyroid, Kidney, Liver, Blood Sugar, Complete Blood Count, Complete Urine Analysis.",
    icon: goldCheckup,
  },
];

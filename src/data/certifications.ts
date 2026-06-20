import type { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "cert-coursera-ml-spec",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2026",
    credentialId: "T84TCXOI57FM",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/T84TCXOI57FM",
    image: "/certs/Coursera-T84TCXOI57FM.png",
    skills: [
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "TensorFlow",
    ],
  },
  {
    id: "cert-coursera-dl-spec",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2026",
    credentialId: "B9NTNZNS4V5C",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/B9NTNZNS4V5C",
    image: "/certs/Coursera-B9NTNZNS4V5C.png",
    skills: ["Deep Learning", "Neural Networks", "CNNs", "TensorFlow"],
  },
  {
    id: "cert-cs50-sql",
    title: "CS50: Introduction to Databases with SQL",
    issuer: "CS50",
    date: "2025",
    credentialId: "4a66a6af-f741-4462-a275-f7c3b0e31432",
    verifyUrl:
      "https://cs50.harvard.edu/certificates/4a66a6af-f741-4462-a275-f7c3b0e31432",
    image: "/certs/CS50-SQL.png",
    skills: ["SQL", "Database Design", "Query Optimization", "Data Modeling"],
  },
  {
    id: "cert-nvidia-deep-learning",
    title: "Fundamentals of Deep Learning",
    issuer: "Nvidia",
    date: "2025",
    credentialId: "1tO0Ys3ITkGJkXM3sgBKrQ",
    verifyUrl:
      "https://learn.nvidia.com/certificates?id=Yay3V-3YTCSa2dXW6PVJJw",
    image: "/certs/Nvidia-Fundamentals-of-Deep-Learning.png",
    skills: [
      "Deep Learning",
      "Neural Networks",
      "Model Training",
      "AI Fundamentals",
    ],
  },
  {
    id: "cert-databricks-generative-ai",
    title: "Generative AI Fundamentals",
    issuer: "Databricks",
    date: "2025",
    credentialId: "169955376",
    verifyUrl:
      "https://credentials.databricks.com/f9107363-87f2-43b5-8991-e49ad6430ce7",
    image: "/certs/databricks-generative-ai.png",
    skills: [
      "Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "AI Applications",
    ],
  },
  {
    id: "cert-cs50-x",
    title: "CS50X: Introduction to Computer Science",
    issuer: "CS50",
    date: "2022",
    credentialId: "1371a901-a4bd-4012-8311-c5514382a16b",
    verifyUrl:
      "https://cs50.harvard.edu/certificates/1371a901-a4bd-4012-8311-c5514382a16b",
    image: "/certs/CS50x.png",
    skills: [
      "Algorithms",
      "Data Structures",
      "Problem Solving",
      "Programming Fundamentals",
    ],
  },
];

export const Bio = {
  name: "Miguel Ozana",
  roles: [
    "Data Engineer",
    "Big Data Intern",
    "Software Engineer",
    "Python Developer",
    "Automation Engineer",
    "Guitarist",
    "Powerlifter",
  ],
  description:
    "I am a software developer focused on Data Engineering and Big Data, working on the design and implementation of data pipelines, data validation, and analytics in cloud-based Data Lake environments. I have strong experience with Python and PySpark, along with a solid software engineering background. I aim to build scalable, well-structured, and data-driven solutions.",
  github: "https://github.com/m1guelozana",
  resume: "/resume/Miguel_Ozana_Data_Engineer.pdf",
  linkedin: "https://www.linkedin.com/in/miguel-ozana-951855231/",
};


export const skills = [
  {
    title: "Data Engineering & Analytics",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "PySpark",
        image:
          "https://seekvectorlogo.com/wp-content/uploads/2018/12/apache-spark-vector-logo-small.png",
      },
      {
        name: "Apache Spark",
        image:
          "https://seekvectorlogo.com/wp-content/uploads/2018/12/apache-spark-vector-logo-small.png",
      },
      {
        name: "Databricks",
        image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/databricks.svg",
      },
      {
        name: "SQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "Cloud & Data Platforms",
    skills: [
      {
        name: "Microsoft Azure",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
      },
      {
        name: "Azure Data Lake",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "Azure Synapse",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "AWS (S3, basics)",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
    ],
  },
  {
    title: "DevOps & Tooling",
    skills: [
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Apache Airflow",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      },
    ],
  },
];


export const experiences = [
  {
    id: 0,
    img: "https://ugc.production.linktr.ee/29e9f36f-4d8f-4fa7-8139-6609aeaaaeae_logo-miceli.png",
    role: "Python Automation Developer Intern",
    company: "Miceli Sociedade de Advogados",
    date: "Aug 2023 - Jul 2024",
    desc: "Developed Python-based automations for legal and administrative processes, including web scraping, data processing, and automated report generation.",
    skills: [
      "Python",
      "Selenium",
      "Pandas",
      "Regex",
      "BeautifulSoup",
      "Scrapy",
      "Excel",
    ],
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaTsI7GXTIpTU3zmqe0RfIviSKmrDjPwdIw&s",
    role: "Big Data / Data Engineering Intern",
    company: "SERPRO",
    date: "Nov 2024 - Present",
    desc: "Working with data analysis and Data Lake environments, performing SQL queries, data validation, and supporting data pipelines for large-scale datasets.",
    skills: [
      "SQL",
      "Python",
      "Spark",
      "Azure Data Lake",
      "Big Data",
    ],
  },
];


export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0yF214qvhNrCAlqjekD1ATvpbv1hVXHa7A&s",
    school: "FIRJAN SENAI SESI",
    date: "Jan 2020 - Dec 2022",
    desc: "Technical high school program combined with secondary education in Programming and Digital Game Design. The course covered C, C++, C#, and Unity.",
    degree: "Technical High School Diploma in Programming and Digital Game Design",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvUO16mf-8i12RVyoaHoO_MIcu5tbOLvlpg&s",
    school: "Instituto Brasileiro de Medicina de Reabilitação (IBMR)",
    date: "Jan 2023 - Aug 2025",
    desc: "Undergraduate degree in Systems Analysis and Development, focused on software development, databases, and system architecture.",
    degree: "Associate Degree in Systems Analysis and Development",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeyhfSuf_cYZ0qws_1Y7Qil9kK5I8ZMEwcQ&s",
    school: "Centro Universitário UniBTA",
    date: "Aug 2024 - Dec 2028",
    desc: "Bachelor’s degree in Software Engineering, focused on software architecture, data structures, and scalable systems.",
    degree: "Bachelor’s Degree in Software Engineering",
  },
];

export const projects = [
  {
    id: 1,
    title: "PIB Municipal Data Pipeline – Medallion Architecture",
    date: "Apr 2025",
    description:
      "An end-to-end data pipeline built with Apache Spark, Airflow, and Delta Lake following the Medallion Architecture (Bronze → Silver → Gold). Raw municipal GDP data is ingested into the Bronze layer, cleaned and standardized into Parquet format in the Silver layer, and transformed into analytics-ready Delta tables in the Gold layer. The pipeline is orchestrated via Airflow using SparkSubmitOperator and visualized in Metabase dashboards, simulating a production-grade data engineering workflow.",
    tags: [
      "Apache Spark",
      "Delta Lake",
      "Parquet",
      "Apache Airflow",
      "SparkSubmitOperator",
      "Docker",
      "Data Lake",
      "Medallion Architecture",
      "Metabase",
      "Data Engineering",
    ],
    github: "https://github.com/m1guelozana/Apache-Airflow-ETL-PIB_Brasileiro",
  },
  {
    id: 2,
    title: "Data Lake Table Comparator & Validator",
    date: "Jan 2025 - Present",
    description:
      "A data validation and comparison framework built with PySpark to compare tables across different layers of a Data Lake (CSV, Parquet, Delta). The project performs schema profiling, data type normalization, row-level comparison, and generates conformity and non-conformity reports in Excel format. Designed to support large-scale datasets in cloud environments.",
    tags: [
      "Python",
      "PySpark",
      "Apache Spark",
      "Azure Data Lake",
      "Delta Lake",
      "Parquet",
      "Data Validation",
      "Excel Reporting",
    ],
    github: "https://github.com/m1guelozana/comparador_e_validador_de_tabelas_datalake_sas",
  },
  {
    id: 3,
    title: "ETL Pipeline – Bronze to Gold",
    date: "Feb 2025",
    description:
      "An ETL pipeline implemented in Python to process raw data from the Bronze layer, apply cleaning, transformations, and validations, and store refined datasets in the Gold layer using optimized formats. The project follows Data Lake best practices and focuses on data quality and reproducibility.",
    tags: [
      "Python",
      "ETL",
      "Data Cleaning",
      "Data Transformation",
      "Parquet",
      "Data Lake",
    ],
    github: "https://github.com/m1guelozana/ETL",
  },
  {
    id: 4,
    title: "Data Pipeline Orchestration with Apache Airflow",
    date: "Mar 2025",
    description:
      "A data pipeline orchestration project using Apache Airflow to automate ETL workflows. Includes DAG scheduling, task dependencies, retry policies, and logging. Designed to simulate production-like data pipelines with modular and maintainable architecture.",
    tags: [
      "Apache Airflow",
      "Python",
      "Data Pipelines",
      "ETL Orchestration",
      "Scheduling",
      "Automation",
    ],
    github: "https://github.com/m1guelozana/airflow-pipeline",
  },
];


export const TimeLineData = [
  { year: 2022, text: "Started my journey in technology and programming" },
  { year: 2023, text: "First professional experience with Python automation" },
  { year: 2024, text: "Transitioned into Big Data and Data Engineering" },
];



import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const portfolioData = {
    personal: {
        name: "Narayan Bhattarai",
        title: "Software Engineer | Distributed Systems & AI Specialist",
        email: "connectnarayan11@gmail.com",
        location: "South Dakota, US",
        phone: "+1 (605) 740-5718",
        bio: "Skilled software engineer with 5+ years of experience designing and delivering scalable applications across small to large, complex projects using Java and C#. Proven ability to analyze requirements, translate business needs into effective technical solutions, and drive features through the full software development lifecycle. Demonstrated strength in building event-driven, microservices-based systems, with a solid understanding of concurrency, distributed system design, and service-oriented architecture.",
        socials: [
            {
                label: "GitHub",
                href: "https://github.com/narayan-bhattarai",
                icon: Github,
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/narayan-bhattarai/",
                icon: Linkedin,
            },
            {
                label: "Email",
                href: "mailto:connectnarayan11@gmail.com",
                icon: Mail,
            },
            {
                label: "Resume",
                href: "/resume.pdf",
                icon: FileText,
            }
        ]
    },
    skills: {
        languages: ["C#", "Java", "Python", "Scala", "SQL", "JavaScript", "TypeScript"],
        frameworks: [".NET Core", "ASP.NET Core", "Spring Boot", "Hibernate", "Entity Framework", "Web API"],
        architecture: ["Microservices", "Event-Driven", "SOA", "REST", "SOAP"],
        cloud_ops: ["Azure", "AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
        data: ["Kafka", "RabbitMQ", "PostgreSQL", "MSSQL", "MongoDB", "Elasticsearch"],
        ai_ml: ["PyTorch", "Computer Vision", "LLMs", "RAG", "Reinforcement Learning"],
    },
    experience: [
        {
            company: "Imark Pvt. Ltd.",
            role: "Full Stack Developer",
            period: "Sep 2021 — Jul 2024",
            location: "Kathmandu, Nepal",
            technologies: [".NET", "Java", "Kafka", "Spring Boot", "Azure", "Scala"],
            description: [
                "Built and maintained client–server and SOA-based applications supporting scalable enterprise systems.",
                "Developed event-driven microservices with asynchronous communication using Kafka.",
                "Designed and implemented REST and SOAP web services following object-oriented design principles.",
                "Implemented data access services and persistence layers for distributed backend systems.",
                "Contributed to SaaS and PaaS architectures enabling cloud-based deployment and scalability.",
                "Performed large-scale data processing and analysis using Hive and Hadoop ETL pipelines.",
                "Built backend services using Scala for high-performance data and service workloads.",
                "Developed and deployed services using Spring and Spring Boot with clean, modular design.",
                "Automated CI/CD pipelines using Jenkins and Kubernetes to streamline build and release workflows.",
                "Integrated enterprise systems using Apache Camel for reliable message routing and transformation.",
                "Integrated Elasticsearch-based search services to support efficient indexing and low-latency query performance.",
                "Utilized Azure Monitor to track application health, analyze logs and metrics, and troubleshoot production issues.",
                "Enforced code quality standards using SonarQube across development workflows."
            ]
        },
        {
            company: "Danphe Health Inc.",
            role: "Software Developer",
            period: "May 2019 — Sep 2021",
            location: "Kathmandu, Nepal",
            technologies: [".NET Core", "Microservices", "REST/SOAP", "CI/CD"],
            description: [
                "Designed and implemented scalable service-oriented and microservices architectures, enabling loosely coupled, distributed backend systems for enterprise applications.",
                "Developed RESTful and SOAP APIs using object-oriented design principles, with well-defined contracts and documentation via Swagger/OpenAPI to support cross-system integration.",
                "Built event-driven and asynchronous backend services, supporting low-latency, high-throughput communication in distributed environments.",
                "Implemented cloud-native solutions across SaaS and PaaS platforms, supporting scalable deployments, service orchestration, and reliable application delivery.",
                "Established CI/CD pipelines to automate builds, testing, and deployments, improving release reliability and reducing manual effort across environments.",
                "Improved backend performance and system reliability, contributing to 30–40% performance gains through concurrency optimization, code refactoring, and efficient resource utilization."
            ]
        }
    ],
    education: [
        {
            school: "University of South Dakota",
            degree: "M.S. in Computer Information Science (AI Major)",
            period: "Aug 2024 — Present",
            coursework: ["Computer Vision", "Distributed Systems", "Pattern Recognition", "Reinforcement Learning"]
        },
        {
            school: "Tribhuwan University, IOE",
            degree: "B.E. in Electronics & Communication",
            period: "Nov 2014 — Nov 2018",
        }
    ],
    projects: [
        {
            title: "LLM-Powered Proteomics Chatbot",
            description: "Developed a domain-specific expert chatbot using a .NET backend, Angular frontend, and a locally hosted LLM to deliver accurate, context-aware scientific responses.",
            tech: [".NET", "Angular", "LLM", "RAG"],
            impact: "Delivered accurate, context-aware scientific responses using a hybrid RAG architecture.",
        },
        {
            title: "GastroVision (Medical AI)",
            description: "Built a deep-learning–based endoscopic image classification system, evaluating models with precision, recall, confusion matrix, and AUROC for clinical reliability.",
            tech: ["Python", "PyTorch", "Deep Learning"],
            impact: "Enhanced clinical reliability metrics through rigorous model evaluation.",
        },
        {
            title: "Brain Tumor Segmentation",
            description: "Implemented MRI-based glioma segmentation using U-Net and Attention U-Net, applying preprocessing and augmentation to achieve high IoU for tumor-focused medical imaging.",
            tech: ["U-Net", "Attention U-Net", "CV"],
            impact: "Achieved high IoU for tumor-focused medical imaging.",
        },
        {
            title: "Reinforcement Learning (BaghChal)",
            description: "Built an AI game agent using Q-Learning, SARSA, and Expected SARSA, optimizing reward design and state space to improve decision accuracy and convergence speed.",
            tech: ["Q-Learning", "SARSA", "RL"],
            impact: "Improved decision accuracy and convergence speed via optimized reward design.",
        },
        {
            title: "Semantic Search System",
            description: "Developed a hybrid semantic search engine combining BM25 and dense embeddings, implementing vector similarity search and evaluating performance using Precision@K, Recall, MAP, and nDCG.",
            tech: ["BM25", "Embeddings", "Information Retrieval"],
            impact: "Created a hybrid search engine combining sparse and dense retrieval methods.",
        }
    ]
};

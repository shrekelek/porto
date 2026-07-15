export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    description:
      "Built a Logistic Regression model to predict customer churn with 78% accuracy. Reduced false negatives by 32% through threshold tuning and feature engineering.",
    tags: ["Python", "Logistic Regression", "scikit-learn", "Pandas"],
    image: "/images/project-churn.jpg",
    link: "https://bengkodbimasakti.streamlit.app/",
    github: "https://github.com/bimasakti18/uasbengkod/blob/main/streamlit_app.py",
    year: "2025",
  },
  {
    id: "sentiment-analysis-nlp",
    title: "Sentiment Analysis Pipeline",
    description:
      "Created an end-to-end NLP pipeline to classify product reviews. Fine-tuned a transformer model and deployed it as a REST API with FastAPI.",
    tags: ["NLP", "EPL", "TF-IDF", "Cosine Similarity"],
    image: "/images/project-nlp.jpg",
    link: "https://uas-stki-a11202214566-ajywuscavpev7xrc7e7rvb.streamlit.app/",
    github: "https://github.com/bimasakti18/uas-stki-a11202214566/blob/main/app.py",
    year: "2025",
  },
  {
    id: "anomaly-detection",
    title: "Real-Time Anomaly Detection",
    description:
      "Designed an unsupervised anomaly detection system for server metrics using isolation forests and streaming data pipelines.",
    tags: ["Anomaly Detection", "Kafka", "Spark", "Isolation Forest"],
    image: "/images/project-anomaly.jpg",
    link: "#",
    github: "#",
    year: "2022",
  },
];

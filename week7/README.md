# Classic NLP Project: Text Classification & Text Search

## Project Overview

This project demonstrates two fundamental Natural Language Processing (NLP) applications using traditional machine learning techniques.

* **Part 1:** Text Classification
* **Part 2:** Keyword-Based Text Search

The project focuses on classical NLP methods such as text preprocessing, TF-IDF vectorization, Naive Bayes, Logistic Regression, and Cosine Similarity without using deep learning or Large Language Models (LLMs).

---

# Project Structure

```text
Classic-NLP-Project/
│
├── Part1_Text_Classification.ipynb
├── Part2_Text_Search.ipynb
├── README.md
└── requirements.txt
```

---

# Technologies Used

* Python
* Pandas
* NumPy
* Matplotlib
* NLTK
* Scikit-learn

---

# Part 1 – Text Classification

## Objective

Build a text classification system capable of predicting document categories using traditional machine learning algorithms.

## Dataset

The dataset contains labeled text documents for supervised learning.

## Workflow

```text
Load Dataset
      │
      ▼
Exploratory Data Analysis (EDA)
      │
      ▼
Text Cleaning
      │
      ▼
Tokenization
      │
      ▼
Feature Extraction
(CountVectorizer / TF-IDF)
      │
      ▼
Train/Test Split
      │
      ▼
Naive Bayes
      │
      ▼
Logistic Regression
      │
      ▼
Model Evaluation
      │
      ▼
Wrong Prediction Analysis
```

## Text Preprocessing

The following preprocessing steps were applied:

* Convert text to lowercase
* Remove URLs
* Remove punctuation
* Remove numbers
* Remove extra whitespace
* Tokenization

## Feature Extraction

Two feature extraction methods were explored:

* CountVectorizer
* TF-IDF Vectorizer

## Classification Models

* Multinomial Naive Bayes
* Logistic Regression

## Evaluation Metrics

The models were evaluated using:

* Accuracy
* Precision
* Recall
* F1-score
* Confusion Matrix

An additional error analysis was performed by examining at least five incorrectly classified documents.

---

# Part 2 – Simple Text Search

## Objective

Develop a keyword-based document retrieval system using TF-IDF and Cosine Similarity.

## Dataset

* Dataset: **20 Newsgroups**
* Number of documents: **11,314**
* Number of categories: **20**

All documents from the training set were used to simulate a simple search engine.

## Workflow

```text
Load Dataset
      │
      ▼
Exploratory Data Analysis (EDA)
      │
      ▼
Text Cleaning
      │
      ▼
TF-IDF Vectorization
      │
      ▼
Input Query
      │
      ▼
Query Vectorization
      │
      ▼
Cosine Similarity
      │
      ▼
Rank Documents
      │
      ▼
Return Top 5 Results
```

## Search Process

1. Load the 20 Newsgroups dataset.
2. Perform text preprocessing.
3. Convert all documents into TF-IDF vectors.
4. Accept a user query.
5. Transform the query using the same TF-IDF vocabulary.
6. Compute cosine similarity between the query and all documents.
7. Rank documents by similarity score.
8. Return the five most relevant documents.

---

# Exploratory Data Analysis (EDA)

Before building the search engine, an exploratory data analysis was conducted.

The analysis included:

* Dataset overview
* Dataset dimensions
* Missing values
* Duplicate documents
* Category distribution
* Document length distribution
* Average document length by category
* Longest and shortest documents

---

# Limitations of Keyword Search

Although TF-IDF is effective for keyword matching, it has several limitations.

* It cannot understand semantic meaning.
* It cannot recognize synonyms.
* It depends heavily on exact keyword matching.
* It cannot distinguish different meanings of ambiguous words.
* It ignores sentence structure and context.

---

# Possible Improvements

Future improvements could include:

* BM25 ranking
* Word2Vec embeddings
* FastText embeddings
* Sentence-BERT (SBERT)
* Dense semantic retrieval
* Hybrid retrieval methods combining keyword and semantic search

---

# Conclusion

This project demonstrates two important classical NLP tasks.

The text classification system shows how machine learning algorithms can automatically categorize documents using TF-IDF features.

The text search system illustrates how TF-IDF and Cosine Similarity can retrieve relevant documents efficiently from a large document collection.

Although these methods are simple and computationally efficient, they rely primarily on keyword matching and lack semantic understanding. Modern retrieval systems can overcome these limitations by incorporating dense vector embeddings and transformer-based language models.

---

# References

* Scikit-learn Documentation
* NLTK Documentation
* 20 Newsgroups Dataset
* TF-IDF (Term Frequency–Inverse Document Frequency)
* Cosine Similarity

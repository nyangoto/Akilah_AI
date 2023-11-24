
<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Akillah-AI</h3>

  <p align="center">
    An AI chatbot built with RAG functionality
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/nyangoto/Akilah_AI/issues">Report Bug</a>
    ·
    <a href="https://github.com/nyangoto/Akilah_AI/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Akillah AI is a Retrival Augmented Generation Chatbot that extends OpenAI's text generation and conversational AI functionalities by allowing the models to access and leverage external knowledge bases

Retrieval-augmented generation (RAG) is an AI framework that combines the strengths of pre-trained language models and information retrieval systems to generate responses in a conversational AI system or to create content by leveraging external knowledge. It integrates the retrieval of relevant information from a knowledge source and the generation of responses based on that retrieved information.

Existing LLMs can reason about wide-ranging topics, but their knowledge is limited to the public data up to a specific point in time that they were trained on. This application augments the knowledge of the models with the specific information it needs so it can reason about private data or data introduced after a model's cutoff date.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### The App
This application has 3 parts to it:

#### The chatbot
This is the main part of the application that incorporates the actual RAG chain, which takes the user query at run time and retrieves the relevant data from the index (data source), then passes that to the model. The retrieved documents or snippets or information is then provided to a large language model, which uses them as additional context for generating a more detailed, factual, and relevant response.

This functionality of the chatbot is exposed through REST API calls

#### The UI
This is the part of the application that consumes the REST API created from the Chatmodel in a User Interface

### Discord AI Chatbot
This is the part of the application that exposes the RAG augmented chatbot created to users through a Discord chatbot. Users can query the model through Discord in addition to the UI

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

**Chatbot**
**UI**
**Discord chatbot**


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Prerequisites
To get started with this project, you will need:
1. OpenAI API keys
2. Discord Token
3. Pinecone API Key
### Installation and Usage
Clone the repo
    ```
    git clone git@github.com:nyangoto/Akilah_AI.git
    ```
#### Chatbot
Create a .env file at the root of the project and define the environmet variables needed:
    ```
    PINECONE_API_KEY
    PINECONE_ENV
    OPENAI_API_KEY
    DOCKER_IMAGE
    PORT
    ```
Create a virtual environment to run your application and activate it
    ```
    python3 -m venv <virtual-environment-name>
    souce <virtual-environment-name>/bin/activate
    ```
Install the necessary requirements in the virtual environment
    ```
    pip install -r requirements.txt
    ```
Run the chatbot app
Using python:
    ```
    python3 chat.py
    ```
Or using docker:
    ```
    sudo docker compose -p <docker-image-name> up --build
    ```
You should get a confimation like the one below of the API endpoint of the chatbot. Refer to url/docs for documentation on the API
    ```
    Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
    ```

#### UI

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

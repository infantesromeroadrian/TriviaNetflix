import os
import logging
from dotenv import load_dotenv


# Configuración de la API de OpenAI y rutas de archivos
load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

# Rutas de archivos
JSON_PATH = '/Users/adrianinfantes/Desktop/AIR/CollegeStudies/MachineLearningPath/Portfolio/DevProjects/TriviaFlix/data/PreguntasYRespuestas.json'
LOGGING_CONFIG = {
    'level': logging.INFO,
    'format': '%(asctime)s - %(levelname)s - %(message)s'
}

from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
import logging
import time

def tiempo_de_ejecucion(func):
    def wrapper(*args, **kwargs):
        inicio = time.time()
        resultado = func(*args, **kwargs)
        fin = time.time()
        logging.info(f"{func.__name__} tomó {fin - inicio} segundos en ejecutarse.")
        return resultado
    return wrapper

class MiProcesadorNLP:
    def __init__(self, temperatura=0.5, max_tokens=100, top_p=1.0, frequency_penalty=0.0, presence_penalty=0.0):
        self.template = """{question}"""
        self.prompt = PromptTemplate(input_variables=["question"], template=self.template)
        self.llm = OpenAI(temperature=temperatura, max_tokens=max_tokens, top_p=top_p, frequency_penalty=frequency_penalty, presence_penalty=presence_penalty)
        self.chain = LLMChain(llm=self.llm, prompt=self.prompt)

    @tiempo_de_ejecucion
    def ejecutar(self, question):
        return self.chain.run(question=question)
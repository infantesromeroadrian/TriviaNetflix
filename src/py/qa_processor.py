from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
import logging

class ProcesadorQA:
    def __init__(self, buscador_documentos):
        self.buscador_documentos = buscador_documentos
        # Asegúrate de que estás cargando correctamente la cadena con los argumentos esperados
        self.chain = load_qa_chain(OpenAI(), chain_type="stuff")  # Verifica si 'chain_type="stuff"' es correcto

    def ejecutar_qa(self, query):
        try:
            # Fetch documents as context for the query
            docs = self.buscador_documentos.buscar(query, top_n=3)
            # Ensure that 'input_documents' key is used to pass documents
            # Asegúrate de que estás pasando todos los argumentos requeridos por `invoke()`
            resultado = self.chain.invoke(question=query, input_documents=docs)
            logging.info("Consulta de QA ejecutada con éxito.")
            return resultado
        except Exception as e:
            logging.error(f"Error al ejecutar la consulta de QA: {e}")
            return None

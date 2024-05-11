import os
import logging
from config import LOGGING_CONFIG, JSON_PATH
from document_searcher import BuscadorDocumentos
from json_processor import ProcesadorJson

# Configuración del logging
logging.basicConfig(**LOGGING_CONFIG)

def main():
    procesador_json = ProcesadorJson(JSON_PATH)
    datos_trivia = procesador_json.cargar_json()

    if datos_trivia:
        texto_completo = procesador_json.preparar_texto()
        if texto_completo:
            buscador = BuscadorDocumentos()
            if buscador.inicializar_busqueda([texto_completo]):  # Asume que 'texto_completo' es una lista de textos
                resultados = buscador.buscar("Consulta de ejemplo", top_n=3)
                if resultados:
                    print("Resultados de la búsqueda:", resultados)
                else:
                    print("No se encontraron resultados.")
            else:
                print("No se pudo inicializar la búsqueda FAISS.")
        else:
            print("No se pudo preparar el texto a partir del JSON.")
    else:
        print("No se pudo cargar el archivo JSON de trivia.")

if __name__ == "__main__":
    main()

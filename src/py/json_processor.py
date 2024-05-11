import json
import logging

class ProcesadorJson:
    def __init__(self, ruta_archivo):
        self.ruta_archivo = ruta_archivo

    def cargar_json(self):
        try:
            with open(self.ruta_archivo, "r") as f:
                data = json.load(f)
            logging.info(f"Archivo JSON cargado con éxito: '{self.ruta_archivo}'.")
            return data
        except Exception as e:
            logging.error(f"Error al cargar el archivo JSON: {e}")
            return None

    def preparar_texto(self):
        data = self.cargar_json()
        if data:
            texto_completo = ' '.join([
                f"{item['titulo']} Opción A: {item['opcionA']} Opción B: {item['opcionB']} " +
                f"Opción C: {item['opcionC']} Opción D: {item['opcionD']}"
                for item in data
            ])
            logging.info("Texto preparado con éxito a partir de JSON.")
            return texto_completo
        else:
            logging.error("No se pudo cargar datos para preparar texto.")
            return ""

import json
import logging


class ProcesadorTrivia:
    def __init__(self, datos_trivia, procesador_qa):
        self.trivia = datos_trivia
        self.procesador_qa = procesador_qa

    def ejecutar_trivia(self):
        respuestas = {}
        for pregunta in self.trivia:
            pregunta_texto = f"{pregunta['titulo']} Opción A: {pregunta['opcionA']} Opción B: {pregunta['opcionB']} " \
                             f"Opción C: {pregunta['opcionC']} Opción D: {pregunta['opcionD']}"
            respuesta = self.procesador_qa.ejecutar_qa(pregunta_texto)
            respuesta_correcta = pregunta[f"opcion{pregunta['correcta'].upper()}"]
            respuestas[pregunta["id"]] = {
                "pregunta": pregunta_texto,
                "respuesta_obtenida": respuesta,
                "respuesta_correcta": respuesta_correcta
            }
        return respuestas

    def guardar_respuestas(self, respuestas, ruta_archivo):
        try:
            with open(ruta_archivo, "w") as f:
                json.dump(respuestas, f, indent=4)
            logging.info(f"Respuestas de la trivia guardadas en '{ruta_archivo}'.")
        except Exception as e:
            logging.error(f"Error al guardar respuestas de la trivia: {e}")
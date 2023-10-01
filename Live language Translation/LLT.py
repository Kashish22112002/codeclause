import speech_recognition as sr
from googletrans import Translator
recognizer = sr.Recognizer()
translator = Translator()
def recognize_speech():
    with sr.Microphone() as source:
        print("Speak something...")
        audio = recognizer.listen(source)

    try:
        text = recognizer.recognize_google(audio)
        return text
    except sr.UnknownValueError:
        return "Could not understand audio"
    except sr.RequestError as e:
        return f"Could not request results: {str(e)}"

def translate_text(text, target_language='en'):
    translation = translator.translate(text, dest=target_language)
    return translation.text
while True:
    user_input = recognize_speech()
    if user_input.lower() == 'exit':
        break

    translated_text = translate_text(user_input)
    print(f"Translated: {translated_text}")

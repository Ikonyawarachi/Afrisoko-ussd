import deepspeech
import numpy as np
import wave

# Load pre-trained Swahili model (fine-tune later)
model = deepspeech.Model('swahili_model.pb')

def voice_to_text(audio_path):
    with wave.open(audio_path, 'rb') as wav:
        audio = np.frombuffer(wav.readframes(wav.getnframes()), np.int16)
    text = model.stt(audio)
    return text  # e.g., "Nauza mitumba jeans 300 bob"

# Test with a recorded voice clip
print(voice_to_text('user_audio.wav'))

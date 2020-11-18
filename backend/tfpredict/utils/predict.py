import numpy as np
from tensorflow.keras.models import load_model

import backend.settings as sett

from .load_files import create_files_batch

CLASSES = ["glass", "metal", "organic", "paper", "plastic"]


def predict_files(directory):
    files = create_files_batch(directory)
    model = load_model(f"{sett.BASE_DIR}/tfpredict/model/model.hdf5")

    batch_prediction = np.argmax(model.predict(files), axis=-1)

    return [CLASSES[prediction] for prediction in batch_prediction]

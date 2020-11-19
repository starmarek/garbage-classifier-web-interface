import numpy as np

import backend.settings as sett

from .load_files import create_files_batch

CLASSES = ["glass", "metal", "organic", "paper", "plastic"]


def predict_files(directory):
    files = create_files_batch(directory)

    batch_prediction = np.argmax(sett.MODEL(files, training=False), axis=-1)

    return [CLASSES[prediction] for prediction in batch_prediction]

import os

import numpy as np
from tensorflow.keras.applications.xception import preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array, load_img


def create_files_batch(directory):
    img_size = 299
    batch_size = len(os.listdir(directory))
    batch_holder = np.zeros((batch_size, img_size, img_size, 3))

    for i, img in enumerate(os.listdir(directory)):
        print(os.listdir(directory), flush=True)
        img = load_img(
            os.path.join(directory, img),
            target_size=(
                img_size,
                img_size,
            ),
        )
        img = img_to_array(img)
        img = np.expand_dims(img, axis=0)
        img = preprocess_input(img)
        batch_holder[i, :] = img

    return batch_holder

import tensorflow as tf
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
from tensorflow.keras.models import Sequential


def model():
    model = Sequential([
        Conv2D(input_shape=(150, 150, 3), kernel_size=(
            3, 3), filters=32, activation='relu',),
        MaxPooling2D(2, 2),

        Conv2D(input_shape=(150, 150, 3), kernel_size=(
            3, 3), filters=64, activation='relu',),
        MaxPooling2D(2, 2),

        Conv2D(input_shape=(150, 150, 3), kernel_size=(
            3, 3), filters=64, activation='relu',),
        MaxPooling2D(2, 2),

        Conv2D(input_shape=(150, 150, 3), kernel_size=(
            3, 3), filters=128, activation='relu',),
        MaxPooling2D(2, 2),

        Conv2D(input_shape=(150, 150, 3), kernel_size=(
            3, 3), filters=128, activation='relu',),
        MaxPooling2D(2, 2),


        Flatten(),
        Dense(200, activation='relu'),
        Dense(50, activation='relu'),
        Dense(1, activation='sigmoid'),
    ])

    return model

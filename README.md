# Cat Dog Classifier TensorFlow.js: Project Overview
Classifying dog and cats photos using Tensorflow.js **(val_acc ~ 0.975)**
* Pre-processed the images using a Data Generator and applied `Image Augmentation`
* Build a `transfer learning` model from the `VGG16` pre-trained model
* Built a single-page application using `HTML`, `JavaScript`, and `CSS`
* Uploaded the model using a `chrome server` to predict the images. 

## Resouces:

[How I learned about the VGG16 model] [https://towardsdatascience.com/step-by-step-vgg16-implementation-in-keras-for-beginners-a833c686ae6c]

## Image Pre-Processing and Image Augmentation 

* Used the VGG16 mean values to standardize the model, since it is better for performance. 
* Used simple data augmentation techniques like `width_shift`, `height_shift`, and `horizontal flip`
* Resized all the images using a DataGenerator to be of shape `(224, 224, 3)` which is `(width, height, n_channels)`

Here is an Example:

![alt text](https://github.com/ahmedheakl/Cat-Dog-Classifier-TensorFlow-Js/blob/main/Data_Augmentation.png)

## Model Building and Transfer Learning

* Loaded the weights of the VGG16 pre-trained model (with the output layers removed).
* Added a `Flatten` layer followed by a `Dense` layer of 128 neurons with `relu` activation. 
* Added a `Dense` output layer of 1 neuron (because I'm using binary classes) with a `sigmoid` activation.
* Merged the built model with the pre-trained model. 
* Compiled the model with:
    * Optimizer: Stochastic Gradient Descent with ```learning_rate = 0.001```  
    * Loss: Binary_CrossEntropy 
    * Metrics: Accuracy 
* Trained the model for the 10 epochs. It showed astonishing results from the first epoch.
* Saved the model as the `JSON` object for later use in Tensorflow.js

**Note: I didn't upload the trained model here because of its huge size (~ 280 MB).
You can run the train.ipynb notebook to train the model and create the model**

![alt_text](https://www.researchgate.net/publication/328966158/figure/fig2/AS:693278764720129@1542301946576/An-overview-of-the-VGG-16-model-architecture-this-model-uses-simple-convolutional-blocks.png)

## Website Building and Model Uploading

* Built an entry `HTML` page:
      * A header with the title of my project
      * An input field with type file to upload the image.
      * A button to predict the classes.
* Designed the UI using `CSS`
* Implemented the logic using `JavaScript`:
      * Added Event Listener for the form to read the image data.
      * Loaded the pre-trained model using tensorflow.js
      * Resized the image for the model.
      * Predicted the umage class.
      * Updated the UI with predicted class value.

Here is a view of how the website looks:

![alt_text](https://github.com/ahmedheakl/Cat-Dog-Classifier-TensorFlow-Js/blob/main/entry_page.png)

![alt_text](https://github.com/ahmedheakl/Cat-Dog-Classifier-TensorFlow-Js/blob/main/image_uploaded.png)

![alt_text](https://github.com/ahmedheakl/Cat-Dog-Classifier-TensorFlow-Js/blob/main/cat_prediction.png)

![alt_text](https://github.com/ahmedheakl/Cat-Dog-Classifier-TensorFlow-Js/blob/main/dog_predict.png)




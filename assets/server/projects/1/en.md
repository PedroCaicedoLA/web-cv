# Volume rendering using multidimensional transfer functions

The volume display is a visualization technique that consists of projecting the volume samples in an image. This process is divided into several stages: the reconstruction of samples, the classification and the composition. In particular, classification is the most important stage, because it is here that the optical properties are assigned to the volume samples. In the classification, the different materials present in the volume are emphasized or not. The most common way to perform the classification is through the use of transfer functions.

The implementation of the transfer function is generally carried out by means of a piecewise linear function, whereby each possible sample of the volume is assigned a color and an absorption. These one-dimensional functions do not allow the correct characterization of the boundaries between the materials. To deal with this problem, other variables are considered when classifying the volume. These variables are the gradient, its length, the normal vector, among others. By increasing the domain dimension of the transfer function we also increase the set of data used in the characterization of areas of interest, allowing us to distinguish the boundaries between the materials.

In this work an implementation of a multidimensional transfer function is performed, expanding its domain through the magnitude of the gradient and the second directional derivative along the gradient, these calculations were obtained by the method of reconstruction of sum of convolutions. In addition, a widget-based interface was implemented for editing the transfer function. The tests show that the multidimensional transfer functions allow to improve the specification of the classification in the volumes, being able to isolate parts of the volume in an effective way.

<a class="github" href="https://github.com/caicedo1089/ftm" target="_black"><i class="fa fa-github" aria-hidden="true"></i> GitHub repository</a>
<a class="github right" href="https://caicedo1089.github.io/server/projects/1/PedroCaicedo-FTM-TEG.pdf" target="_black"><i class="fa fa-file" aria-hidden="true"></i> Document of the T.E.G.</a>

## Images of Demonstration

<div class="carousel carousel-slider center">
	<div class="carousel-item center" href="#one!">
		<p><img src="https://caicedo1089.github.io/server/projects/1/img01.jpg" height="100%" ></p>
    </div>
    <div class="carousel-item center" href="#two!">
		<p><img src="https://caicedo1089.github.io/server/projects/1/img02.jpg" height="100%" ></p>
    </div>
    <div class="carousel-item center" href="#three!">
		<p><img src="https://caicedo1089.github.io/server/projects/1/img03.jpg" height="100%" ></p>
    </div>
</div>

## Video of Demonstration

<iframe width="100%" height="500" src="https://www.youtube.com/embed/GZasf7z_hAQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

</br>

# Visualización de volúmenes utilizando funciones de transferencia multidimensionales

El despliegue de volumen es una técnica de visualización que consiste en la proyección de las muestras del volumen en una imagen. Este proceso se divide en varias etapas: la reconstrucción de muestras, la clasificación y la composición. En particular, la clasificación es la etapa de mayor importancia, pues es aquí donde se asignan las propiedades ópticas a las muestras del volumen. En la clasificación, se enfatizan o no los diversos materiales presentes en el volumen. La manera más común de realizar la clasificación es mediante el uso de funciones de transferencia.

La implementación de la función de transferencia se realiza generalmente mediante una función lineal a trozos, en donde se le asigna a cada muestra posible del volumen un color y una absorción. Estas funciones unidimensionales no permiten la correcta caracterización de las fronteras entre los materiales. Para lidiar con este problema, se consideran otras variables al momento de clasificar el volumen. Dichas variables son el gradiente, su longitud, el vector normal, entre otros. Al aumentar la dimensión del dominio de la función de transferencia también aumentamos el conjunto de datos usados en la caracterización de zonas de interés, permitiéndonos entonces distinguir las fronteras entre los materiales.

En este trabajo se realiza una implementación de una función de transferencia multidimensional, expandiendo su dominio a través de la magnitud del gradiente y la segunda derivada direccional a lo largo del gradiente, estos cálculos fueron obtenidos por el método de reconstrucción de suma de convoluciones. Además se implementó una interfaz basada en widget para la edición de la función de transferencia. Las pruebas demuestran que las funciones de transferencia multidimensionales permiten mejorar la especificación de la clasificación en los volúmenes, pudiendo aislar partes del volumen de manera efectiva.

## Imágenes de Demostración

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

## Video de Demostración

<iframe width="100%" height="500" src="https://www.youtube.com/embed/GZasf7z_hAQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

</br>

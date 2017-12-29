![bannner][bannner]

# MySQL, importar archivo SQL desde consola

Importar datos SQLs en MySQL es muy sencillo a través de PHPMyAdmin, ya sea desde la opción importar o directamente ejecutando el SQL. La cosa se complica cuando son muchos datos y el archivo SQL pesa más que el permitido por la opción importar ó, en el ejecutador de SQL web se hace pesado hacer un simple cortar y pegar(ctr + c y ctrl + v) debido a la gran cantidad de información. Es en este punto donde se hace necesario saber cómo ejecutar un archivo SQL directamente desde la consola del MySQL, para lograrlo haremos los siguientes pasos:

* Lo primero que debemos hacer es autenticarnos en MySQL. En mi caso desde Windows utilizando XAMPP, me ubico en la carpeta bin de MySQL desde una consola CMD y ejecutamos el siguiente comando:

        C:\xampp\mysql\bin> mysql.exe -u<usuario> -p<contraseña>

* Una vez allí ya ingresamos en la consola de nuestra base de datos MySQL y debemos seleccionar ahora la base de datos a la cual cargaremos los datos SQL. Para lograr tal objetivo hacemos uso del comando USE de MySQL, quedando entonces:

        MariaDB [(none)]> use <base_datos>
	
* Ahora ya tenemos seleccionada la base de datos a la cual queremos cargar el archivo SQL. Nos quedaría entonces cargar el archivo SQL, para ello utilizaremos el comando SOURCE como se muestra a continuación:

        MariaDB [nombre_base_datos]> source <archivo_sql>
		
Al ejecutar este último comando el interprete MySQL ejecutará cada unas de las líneas contenidas en el archivo SQL y nos responderá la consola directamente, como se muestra en la siguiente imagen:

![bannner][img01]

[bannner]: https://caicedo1089.github.io/server/blog/1/imgBanner.png "Banner" 
[img01]: https://caicedo1089.github.io/server/blog/1/img01.png
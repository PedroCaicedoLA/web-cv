![bannner][bannner]

# MySQL, import SQL file from console

Importing SQL data in MySQL is very simple through PHPMyAdmin, either from the import option or directly executing the SQL. The thing gets complicated when there are a lot of data and the SQL file weighs more than the one allowed by the import option or, in the SQL web executer, it becomes heavy to make a simple cut and paste (ctr + cy ctrl + v) due to the large amount of information. It is at this point where it is necessary to know how to execute an SQL file directly from the MySQL console, to achieve this we will do the following steps:

* The first thing we must do is authenticate in MySQL. In my case from Windows using XAMPP, I locate in the bin folder of MySQL from a CMD console and execute the following command:

        C:\xampp\mysql\bin> mysql.exe -u<user> -p<password>

* Once there, we enter the console of our MySQL database and we must now select the database to which we will load the SQL data. To achieve this goal we use the USE command of MySQL, leaving then:

        MariaDB [(none)]> use <database>
	
* Now we have selected the database to which we want to load the SQL file. We would then load the SQL file, for this we will use the SOURCE command as shown below:

        MariaDB [database_name]> source <file_sql>
		
When executing this last command, the MySQL interpreter will execute each one of the lines contained in the SQL file and the console will respond directly, as shown in the following image:

![bannner][img01]

[bannner]: https://caicedo1089.github.io/server/blog/1/imgBanner.png "Banner" 
[img01]: https://caicedo1089.github.io/server/blog/1/img01.png
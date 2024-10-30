-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `korisnik`
--

LOCK TABLES `korisnik` WRITE;
/*!40000 ALTER TABLE `korisnik` DISABLE KEYS */;
INSERT INTO `korisnik` VALUES (1,'Aca','Sto','acasto','10'),(2,'a','a','a@gmail.com','10/10/2000'),(3,'a','a','a@gmail.com','10/10/2000'),(4,'g','g','g@gmail.com','10/10/2001'),(5,'s','s','s@gmail.com','10/10/2001'),(6,'Aleksandar','Stpanevecic','a@gmail.com','10/10/2012'),(7,'Stef','Petar','p@gmail.com','20/02/2003'),(8,'joka','beba','beba@gmail.com','10/10/2000');
/*!40000 ALTER TABLE `korisnik` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `kupljenipaket`
--

LOCK TABLES `kupljenipaket` WRITE;
/*!40000 ALTER TABLE `kupljenipaket` DISABLE KEYS */;
INSERT INTO `kupljenipaket` VALUES (1,2,'Osnovni plan',30,10),(2,2,'Osnovni plan',30,10),(3,2,'Osnovni plan',30,10),(4,2,'Osnovni plan',30,10),(5,2,'Osnovni plan',30,10),(6,2,'Osnovni plan',27,10),(7,2,'Osnovni plan',27,10),(8,2,'Osnovni plan',27,10),(9,2,'Osnovni plan',24,10),(10,2,'Osnovni plan',27,10),(11,2,'Osnovni plan',27,10),(12,2,'Osnovni plan',30,10),(13,2,'Osnovni plan',30,10),(14,2,'Osnovni plan',24,10),(15,2,'Osnovni plan',30,10);
/*!40000 ALTER TABLE `kupljenipaket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `paket`
--

LOCK TABLES `paket` WRITE;
/*!40000 ALTER TABLE `paket` DISABLE KEYS */;
INSERT INTO `paket` VALUES (1,'Welness',3000,14),(2,'Osnovni plan',30,10);
/*!40000 ALTER TABLE `paket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `poruka`
--

LOCK TABLES `poruka` WRITE;
/*!40000 ALTER TABLE `poruka` DISABLE KEYS */;
INSERT INTO `poruka` VALUES (1,'marko','mark@gmail.com','Pozdrav!'),(2,'aas','as@gmail.com','asas'),(3,'Aca','Sto@gmail.com','Pozdrav');
/*!40000 ALTER TABLE `poruka` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-30 18:05:02

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
-- Table structure for table `korisnik`
--

DROP TABLE IF EXISTS `korisnik`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `korisnik` (
  `idkorisnik` int NOT NULL AUTO_INCREMENT,
  `ime` varchar(45) DEFAULT NULL,
  `prezime` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `datumrodjenja` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`idkorisnik`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `korisnik`
--

LOCK TABLES `korisnik` WRITE;
/*!40000 ALTER TABLE `korisnik` DISABLE KEYS */;
INSERT INTO `korisnik` VALUES (1,'Aca','Sto','acasto','10'),(2,'a','a','a@gmail.com','10/10/2000'),(3,'a','a','a@gmail.com','10/10/2000'),(4,'g','g','g@gmail.com','10/10/2001'),(5,'s','s','s@gmail.com','10/10/2001'),(6,'Aleksandar','Stpanevecic','a@gmail.com','10/10/2012'),(7,'Stef','Petar','p@gmail.com','20/02/2003'),(8,'joka','beba','beba@gmail.com','10/10/2000');
/*!40000 ALTER TABLE `korisnik` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kupljenipaket`
--

DROP TABLE IF EXISTS `kupljenipaket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kupljenipaket` (
  `idkupljenipaket` int NOT NULL AUTO_INCREMENT,
  `idpaket` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `duration` int DEFAULT NULL,
  PRIMARY KEY (`idkupljenipaket`,`idpaket`),
  KEY `fk_paket` (`idpaket`),
  CONSTRAINT `fk_paket` FOREIGN KEY (`idpaket`) REFERENCES `paket` (`idpaket`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kupljenipaket`
--

LOCK TABLES `kupljenipaket` WRITE;
/*!40000 ALTER TABLE `kupljenipaket` DISABLE KEYS */;
INSERT INTO `kupljenipaket` VALUES (1,2,'Osnovni plan',30,10),(2,2,'Osnovni plan',30,10),(3,2,'Osnovni plan',30,10),(4,2,'Osnovni plan',30,10),(5,2,'Osnovni plan',30,10),(6,2,'Osnovni plan',27,10),(7,2,'Osnovni plan',27,10),(8,2,'Osnovni plan',27,10),(9,2,'Osnovni plan',24,10),(10,2,'Osnovni plan',27,10),(11,2,'Osnovni plan',27,10),(12,2,'Osnovni plan',30,10),(13,2,'Osnovni plan',30,10),(14,2,'Osnovni plan',24,10),(15,2,'Osnovni plan',30,10);
/*!40000 ALTER TABLE `kupljenipaket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paket`
--

DROP TABLE IF EXISTS `paket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paket` (
  `idpaket` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `duration` int DEFAULT NULL,
  PRIMARY KEY (`idpaket`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paket`
--

LOCK TABLES `paket` WRITE;
/*!40000 ALTER TABLE `paket` DISABLE KEYS */;
INSERT INTO `paket` VALUES (1,'Welness',3000,14),(2,'Osnovni plan',30,10);
/*!40000 ALTER TABLE `paket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poruka`
--

DROP TABLE IF EXISTS `poruka`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poruka` (
  `idporuka` int NOT NULL AUTO_INCREMENT,
  `ime` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `poruka` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idporuka`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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

-- Dump completed on 2024-10-30 18:18:51

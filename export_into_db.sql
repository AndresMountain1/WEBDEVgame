-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: Hackgames
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `Hackgames`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `Hackgames` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `Hackgames`;

--
-- Table structure for table `AI`
--

DROP TABLE IF EXISTS `AI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AI` (
  `AIid` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) DEFAULT NULL,
  `filename` varchar(30) DEFAULT NULL,
  `MatchidA` int DEFAULT NULL,
  PRIMARY KEY (`AIid`),
  KEY `MatchidA` (`MatchidA`),
  CONSTRAINT `AI_ibfk_1` FOREIGN KEY (`MatchidA`) REFERENCES `Matchy` (`Matchid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AI`
--

LOCK TABLES `AI` WRITE;
/*!40000 ALTER TABLE `AI` DISABLE KEYS */;
/*!40000 ALTER TABLE `AI` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Matchy`
--

DROP TABLE IF EXISTS `Matchy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Matchy` (
  `Matchid` int NOT NULL AUTO_INCREMENT,
  `dateevent` date DEFAULT NULL,
  `Player1` varchar(30) DEFAULT NULL,
  `Player2` varchar(30) DEFAULT NULL,
  `PlayerWin` int DEFAULT NULL,
  `IAVSIA` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Matchid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Matchy`
--

LOCK TABLES `Matchy` WRITE;
/*!40000 ALTER TABLE `Matchy` DISABLE KEYS */;
/*!40000 ALTER TABLE `Matchy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `Userid` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) DEFAULT NULL,
  `Mdp` varchar(30) DEFAULT NULL,
  `MatchidU` int DEFAULT NULL,
  PRIMARY KEY (`Userid`),
  KEY `MatchidU` (`MatchidU`),
  CONSTRAINT `User_ibfk_1` FOREIGN KEY (`MatchidU`) REFERENCES `Matchy` (`Matchid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'troy','1pok31op23k',NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-27 17:00:50

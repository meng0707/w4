-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2024 at 12:42 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wms`
--

-- --------------------------------------------------------

--
-- Table structure for table `treasury`
--

CREATE TABLE `treasury` (
  `product_id` int(50) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `location` varchar(100) NOT NULL,
  `supplier` varchar(100) NOT NULL,
  `received_date` date NOT NULL,
  `expiry_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `treasury`
--

INSERT INTO `treasury` (`product_id`, `product_name`, `quantity`, `location`, `supplier`, `received_date`, `expiry_date`) VALUES
(1234, 'meng', 0, 'Warehouse A', 'Supplier', '2024-07-16', '2034-12-30'),
(1234, 'meng', 0, 'Warehouse A', 'Supplier', '2024-07-16', '2034-12-30'),
(1234, 'meng', 0, 'Warehouse A', 'Supplier', '2024-07-16', '2034-12-30'),
(1234, 'meng', 0, 'Warehouse A', 'Supplier', '2024-07-16', '2034-12-30'),
(1233334, 'meng', 10, '', '', '2024-07-16', '2025-12-31'),
(12334, 'meng', 10, '', '', '2024-07-16', '2025-12-31'),
(12334, 'meng', 10, '', '', '2024-07-16', '2025-12-31'),
(555, 'meng', 10, '', '', '2024-07-16', '2024-12-31');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2020 at 09:08 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clothing-store`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` int(50) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`email`, `password`, `role`) VALUES
('admin@gmail.com', '1234', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `email` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `address` varchar(250) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `role` int(1) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`email`, `name`, `password`, `phone`, `address`, `gender`, `role`) VALUES
('ahmed@gmail.com', 'Shafin Ahmed', '1234', '01794911274', 'Ma,38 merul badda,Dhaka', 'male', 2),
('Nafi1@gmail.com', 'Nafi', '1234', '01794911275', 'dkg eou ', 'Male', 2),
('nafi@gmail.com', 'nafi', '1234', '01794911275', 'avc ', 'Male', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) NOT NULL,
  `cemail` varchar(20) NOT NULL,
  `pid` varchar(10) NOT NULL,
  `pname` varchar(30) NOT NULL,
  `quantity` varchar(10) NOT NULL,
  `size` varchar(10) NOT NULL,
  `price` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `cemail`, `pid`, `pname`, `quantity`, `size`, `price`) VALUES
(1, 'ahmed@gmail.com', '9', 'kameez', '1', 'M', '2000'),
(3, 'ahmed@gmail.com', '12', 'shorts', '2', 'L', '2000'),
(4, 'nafi@gmail.com', '10', 'kameez', '3', 'M', '6000'),
(5, 'nafi@gmail.com', '13', 'Shirt', '3', 'XL', '2100');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `category` varchar(10) NOT NULL,
  `type` varchar(50) NOT NULL,
  `image` varchar(200) NOT NULL,
  `size` varchar(50) NOT NULL,
  `price` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `category`, `type`, `image`, `size`, `price`) VALUES
(9, 'kameez', 'pakistani kameez', 'Female', 'Salwar', 'kameez.jpg', 'M', 2000),
(10, 'kameez', 'pakistani kameez', 'Female', 'Salwar', 'kameez.jpg', 'M', 2000),
(11, 'jeans', 'Thailand jeans', 'Female', 'Jeans', 'jeans.jpg', 'M', 1000),
(12, 'shorts', 'Gents Sgorts', 'Male', 'Pant', 'shrots.jpg', 'L', 1000),
(13, 'Shirt', 'Plain Shrt', 'Male', 'Shirt', 'shirtjpg.jpg', 'XL', 700);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

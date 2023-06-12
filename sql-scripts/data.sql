CREATE TABLE `users` (
  `user_id` varchar(36) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `isActive` tinyint NOT NULL DEFAULT '1',
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO db.users (user_id,username,email,isActive,password) VALUES
	 ('05a834a6-a833-4541-9c23-233199477c9e','kerem','kerem@gmail.com',1,'123'),
	 ('3d0de35b-580b-4d08-b105-b30afa0ded6e','halil','halil@gmail.com',1,'123');

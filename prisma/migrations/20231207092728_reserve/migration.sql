/*
  Warnings:

  - You are about to drop the column `email` on the `reserve` table. All the data in the column will be lost.
  - Added the required column `address` to the `Reserve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cvv` to the `Reserve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email_address` to the `Reserve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rooms` to the `Reserve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Reserve` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reserve` DROP COLUMN `email`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `cvv` VARCHAR(191) NOT NULL,
    ADD COLUMN `email_address` VARCHAR(191) NOT NULL,
    ADD COLUMN `rooms` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

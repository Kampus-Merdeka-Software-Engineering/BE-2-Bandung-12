/*
  Warnings:

  - Added the required column `check_in` to the `Reserve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `check_out` to the `Reserve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guest` to the `Reserve` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reserve` ADD COLUMN `check_in` DATETIME(3) NOT NULL,
    ADD COLUMN `check_out` DATETIME(3) NOT NULL,
    ADD COLUMN `guest` INTEGER NOT NULL;

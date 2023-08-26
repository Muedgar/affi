/*
  Warnings:

  - You are about to drop the column `profile_pic` on the `Affidavit` table. All the data in the column will be lost.
  - Added the required column `left_profile_pic` to the `Affidavit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `right_profile_pic` to the `Affidavit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signature` to the `Affidavit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Affidavit" DROP COLUMN "profile_pic",
ADD COLUMN     "left_profile_pic" TEXT NOT NULL,
ADD COLUMN     "right_profile_pic" TEXT NOT NULL,
ADD COLUMN     "signature" TEXT NOT NULL;

/*
  Warnings:

  - Added the required column `affi_code` to the `Affidavit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `before_me` to the `Affidavit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qr_code` to the `Affidavit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Affidavit" ADD COLUMN     "affi_code" TEXT NOT NULL,
ADD COLUMN     "before_me" TEXT NOT NULL,
ADD COLUMN     "qr_code" TEXT NOT NULL;

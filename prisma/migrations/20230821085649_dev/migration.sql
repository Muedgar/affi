/*
  Warnings:

  - Changed the type of `fee_paid` on the `Affidavit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Affidavit" DROP COLUMN "fee_paid",
ADD COLUMN     "fee_paid" INTEGER NOT NULL;

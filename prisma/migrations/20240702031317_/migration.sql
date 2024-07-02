/*
  Warnings:

  - Changed the type of `updateTime` on the `Update` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Update" DROP COLUMN "updateTime",
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

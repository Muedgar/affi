-- CreateTable
CREATE TABLE "Affidavit" (
    "id" TEXT NOT NULL,
    "profile_pic" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "paragraphs" TEXT[],
    "date" TEXT NOT NULL,
    "from_language" TEXT NOT NULL,
    "to_language" TEXT NOT NULL,
    "fee_paid" TEXT NOT NULL,

    CONSTRAINT "Affidavit_pkey" PRIMARY KEY ("id")
);

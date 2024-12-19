-- CreateTable
CREATE TABLE "Products" (
    "PID" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT,
    "Detail" TEXT,
    "Price" DOUBLE PRECISION NOT NULL,
    "Category" TEXT NOT NULL,
    "Status" INTEGER NOT NULL DEFAULT 2,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("PID")
);

-- CreateTable
CREATE TABLE "Images" (
    "ImgID" TEXT NOT NULL,
    "PID" TEXT NOT NULL,
    "ImageData" BYTEA NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("ImgID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_Title_key" ON "Products"("Title");

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_PID_fkey" FOREIGN KEY ("PID") REFERENCES "Products"("PID") ON DELETE CASCADE ON UPDATE CASCADE;

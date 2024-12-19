-- CreateTable
CREATE TABLE "Categories" (
    "CID" TEXT NOT NULL,
    "Category_name" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("CID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_Category_name_key" ON "Categories"("Category_name");

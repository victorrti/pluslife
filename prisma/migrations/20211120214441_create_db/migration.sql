-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tipouser" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "medico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "descricao" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "medico_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    CONSTRAINT "paciente_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "publicacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url_image" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "publicacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "mypacient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "medicoId" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    CONSTRAINT "mypacient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "mypacient_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "mypacient_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "medicosseguidos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "medicoId" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    CONSTRAINT "medicosseguidos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "medicosseguidos_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "medicosseguidos_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

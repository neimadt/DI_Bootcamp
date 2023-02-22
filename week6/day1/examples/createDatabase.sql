-- Database: Hoolywood
DROP DATABASE IF EXISTS "Hollywood";

CREATE DATABASE "Hollywood" WITH OWNER = postgres ENCODING = 'UTF8' LC_COLLATE = 'English_United Kingdom.1252' LC_CTYPE = 'English_United Kingdom.1252' TABLESPACE = pg_default CONNECTION
LIMIT
    = -1 IS_TEMPLATE = False;

COMMENT ON DATABASE "Hollywood" IS 'Dummy db ';
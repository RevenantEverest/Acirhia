CREATE TABLE ITEMS (
  ID serial PRIMARY KEY,
  ITEM_NAME VARCHAR(255) NOT NULL,
  ITEM_DESCRIPTION VARCHAR(1000) NOT NULL,
  ITEM_TYPE VARCHAR(255) NOT NULL,
  ITEM_RARITY VARCHAR(255) NOT NULL,
  ATTACK INT,
  DEFENSE INT,
  LEVEL_REQUIREMENT INT,
  SLOT VARCHAR(255),
  WORTH INT
);
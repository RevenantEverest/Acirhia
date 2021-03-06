CREATE TABLE INVENTORY (
  ID serial PRIMARY KEY,
  USER_ID INT,
  CHARACTER_ID INT,
  ITEM_ID INT,
  ITEM_NAME VARCHAR(255),
  ITEM_DESCRIPTION VARCHAR(1000),
  ITEM_TYPE VARCHAR(255),
  ITEM_RARITY VARCHAR(255),
  ATTACK INT,
  DEFENSE INT,
  LEVEL_REQUIREMENT INT,
  SLOT VARCHAR(255),
  WORTH INT
);

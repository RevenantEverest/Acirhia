CREATE TABLE QUESTLOG (
  ID serial PRIMARY KEY,
  USER_ID INT,
  CHARACTER_ID INT,
  QUEST_NAME VARCHAR(255),
  QUEST_DESCRIPTION VARCHAR(1000),
  QUEST_TYPE VARCHAR(255),
  REQUIREMENT INT,
  ACQUIRED INT
);
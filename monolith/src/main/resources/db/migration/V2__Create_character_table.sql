CREATE TABLE CHARACTERS (
    CHARACTER_ID serial,
    USER_ID INT NOT NULL,
    CHARACTER_NAME VARCHAR(255) NOT NULL,
    CLASS_ID INT NOT NULL,
    HEALTH INT NOT NULL,
    ATTACK INT NOT NULL,
    DEFENSE INT NOT NULL,
    GOLD INT NOT NULL
);
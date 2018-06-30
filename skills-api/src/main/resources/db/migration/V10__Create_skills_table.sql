CREATE TABLE SKILLS (
    ID serial PRIMARY KEY,
    SKILL_NAME VARCHAR(255),
    SKILL_DESCRIPTION VARCHAR(1000),
    SKILL_TYPE VARCHAR(255),
    LEVEL_REQUIREMENT INT,
    CLASS_REQUIREMENT INT,
    BASE_DAMAGE INT,
    BUFF INT
);
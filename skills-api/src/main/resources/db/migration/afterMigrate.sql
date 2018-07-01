INSERT INTO SKILLS (SKILL_NAME, SKILL_DESCRIPTION, SKILL_TYPE, LEVEL_REQUIREMENT, CLASS_REQUIREMENT, BASE_DAMAGE, BUFF) VALUES(
    'Knight Default',
    '',
    'Melee',
    1,
    1,
    25,
    0
), (
    'Wizard Default',
    '',
    'Melee',
    1,
    2,
    25,
    0
), (
    'Archer Default',
    '',
    'Melee',
    1,
    3,
    25,
    0
),

-- ################## Knight Skills ##################

(
    'Berserk',
    'Warrior invokes an inner rage, unleashing a fury of attacks inflicting heavy wounds to the target.',
    'Melee',
    2,
    1,
    50,
    0
), (
    'Ravage',
    'Warrior unleashes a powerful swing of their weapon, resulting in a horrendous gash in the opponent.',
    'Melee',
    5,
    1,
    75,
    0
), (
    'Lance',
    'Warrior steps back and throws their weapon. The strength behind the throw causes a deep wound.',
    'Ranged',
    8,
    1,
    100,
    0
), (
    'Cleave',
    'Warrior sweeps the area in front of them, damaging all nearby opponents.',
    'Melee',
    12,
    1,
    125,
    0
),

-- ################## Wizard Skills ##################

(
    'Fireball',
    'Caster conjures a ball of heat and despair, severely damaging for all who encounter it''s wake',
    'Spell',
    2,
    2,
    50,
    0
), (
    'Shadowball',
    'Caster reaches to the depths of the abyss and conjures a ball of absolute darkness.',
    'Spell',
    5,
    2,
    75,
    0
), (
    'Thunder Charge',
    'With hands in the air, the caster brings down an electrical storm, striking the opponent.',
    'Spell',
    8,
    2,
    100,
    0
), (
    'Blizzard',
    'Caster channels the North, bringing forth a strong wind dense with ice and snow.',
    'Spell',
    12,
    2,
    125,
    0
),

-- ################## Archer Skills ##################

(
    'Scatter Shot',
    'Ranger releases a barrage of arrows raining down on their opponent.',
    'Ranged',
    2,
    3,
    30,
    0
), (
    'Piercing Shot',
    'Ranger takes a deep breath, tightening his aim. The released arrow flies with immense precision neglecting the opponents armor.',
    'Ranged',
    5,
    3,
    75,
    0
), (
    'Blade Thrust',
    'A quick slide behind the opponent, the Ranger will draw their blade slashing with rapid movements.',
    'Melee',
    8,
    3,
    100,
    0
), (
    'Power Shot',
    'Ranger pulls back their bow tightly, creating a strong tension. When released the arrow pierces through the air striking the opponent with a poweful force.',
    'Ranged',
    12,
    3,
    125,
    0
);
INSERT INTO USERS (USER_NAME, PASSWORD) VALUES (
'Stefischer',
'1234'
);

INSERT INTO CHARACTERS (USER_ID, CHARACTER_NAME, CLASS_ID, HEALTH, ATTACK, DEFENSE, GOLD) VALUES (
1,
'Revenant',
1,
100,
12,
10,
100
);

INSERT INTO ITEMS (ITEM_NAME, ITEM_TYPE, WORTH) VALUES (
  'Shadow Axe of Strength',
  'Weapon',
  45
),(
  'Fire Staff of Intellect',
  'Weapon',
  30
),(
  'Helmet of Agility',
  'Armor',
  32
),
(
  'Pants of True Shot',
  'Armor',
  40
),
(
  'Long Bow of Alchemy',
  'Weapon',
  25
),
(
  'Great Sword of Disease',
  'Weapon',
  45
),
(
  'Potion of Agility',
  'Consumeable',
  30
),
(
  'Elixr of True Shot',
  'Consumeable',
  34
),
(
  'Apple',
  'Consumeable',
  2
),
(
  'Honey Comb',
  'Consumeable',
  3
),
(
  'Iron Ingot',
  'Crafting',
  10
),
(
  'Wood',
  'Crafting',
  8
),
(
  'Bear Tooth',
  'Crafting',
  4
),
(
  'Health Potion',
  'Consumeable',
  50
),
(
  'Large Health Potion',
  'Consumeable',
  80
),
(
  'Mystic Warhammer of Vengeance',
  'Artifact',
  80
),
(
  'Rusted Iron Sword',
  'Weapon',
  12
),
(
  'Potato Soup',
  'Consumeable',
  10
),
(
  'Potion of Invisibility',
  'Consumeable',
  35
),
(
  'Greatsword of Knerk',
  'Artifact',
  80
),
(
  'Wolf Pelt',
  'Crafting',
  20
),
(
  'Deck of Spiritual Cards',
  'Misc',
  5
),
(
  'Human Skull',
  'Misc',
  6
),
(
  'Jewelled Crown',
  'Armor',
  20
),
(
  'Moose Antlers',
  'Crafting',
  5
),
(
  'Heart of Everest',
  'Consumeable',
  100
),
(
  'Great Iron Lance',
  'Weapon',
  15
),
(
  'Steel Ingot',
  'Crafting',
  20
);

INSERT INTO INVENTORY (USER_ID, ITEM_ID) VALUES (
1,
1
);
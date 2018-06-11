package com.example.usersapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "CHARACTERS")
public class Character {

    public Character(Long userId, String characterName, int classID, int health, int attack, int defense, int exp, int lvl, int gold) {
        this.userId = userId;
        this.characterName = characterName;
        this.classID = classID;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.exp = exp;
        this.lvl = lvl;
        this.gold = gold;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "CHARACTER_NAME")
    private String characterName;

    @Column(name = "CLASS_ID")
    private int classID;

    @Column(name = "HEALTH")
    private int health;

    @Column(name = "ATTACK")
    private int attack;

    @Column(name = "DEFENSE")
    private int defense;

    @Column(name = "EXP")
    private int exp;

    @Column(name = "LVL")
    private int lvl;

    @Column(name = "GOLD")
    private int gold;
}
package com.example.enemiesapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "ENEMIES")
public class Enemy {

    public Enemy(String enemyName, int health, int attack, int defense, int exp, int lvl) {
        this.enemyName = enemyName;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.exp = exp;
        this.lvl = lvl;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ENEMY_NAME")
    private String enemyName;

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
}
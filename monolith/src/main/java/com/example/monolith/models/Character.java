package com.example.monolith.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "CHARACTERS")
public class Character {

    public Character(Long userId, String characterName, int classID, int health, int attack, int defense) {
        this.userId = userId;
        this.characterName = characterName;
        this.classID = classID;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long characterId;

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
}

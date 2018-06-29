package com.example.tasksapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "INVENTORY")
public class Inventory {

    public Inventory(Long userId, Long characterId, Long itemId, String itemName, String itemDescription, String itemType, String itemRarity,
                     int attack, int defense, int levelRequirement, int worth) {
        this.userId = userId;
        this.characterId = characterId;
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemType = itemType;
        this.itemRarity = itemRarity;
        this.attack = attack;
        this.defense = defense;
        this.levelRequirement = levelRequirement;
        this.worth = worth;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "CHARACTER_ID")
    private Long characterId;

    @Column(name = "ITEM_ID")
    private Long itemId;

    @Column(name = "ITEM_NAME")
    private String itemName;

    @Column(name = "ITEM_DESCRIPTION")
    private String itemDescription;

    @Column(name = "ITEM_TYPE")
    private String itemType;

    @Column(name = "ITEM_RARITY")
    private String itemRarity;

    @Column(name = "ATTACK")
    private int attack;

    @Column(name = "DEFENSE")
    private int defense;

    @Column(name = "LEVEL_REQUIREMENT")
    private int levelRequirement;

    @Column(name = "WORTH")
    private int worth;
}
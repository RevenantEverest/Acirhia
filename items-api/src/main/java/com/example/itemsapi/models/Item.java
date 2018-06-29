package com.example.itemsapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.springframework.web.bind.annotation.PatchMapping;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "ITEMS")
public class Item {

    public Item(String itemName, String itemDescription, String itemType,String itemRarity, int attack, int defense, int levelRequirement, int worth) {
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
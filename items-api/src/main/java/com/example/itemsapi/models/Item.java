package com.example.itemsapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "ITEMS")
public class Item {

    public Item(String itemName, String itemType, int worth) {
        this.itemName = itemName;
        this.itemType = itemType;
        this.worth = worth;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ITEM_NAME")
    private String itemName;

    @Column(name = "ITEM_TYPE")
    private String itemType;

    @Column(name = "WORTH")
    private int worth;
}
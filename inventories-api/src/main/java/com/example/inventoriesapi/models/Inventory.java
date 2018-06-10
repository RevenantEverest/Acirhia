package com.example.inventoriesapi.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "INVENTORY")
public class Inventory {

    public Inventory(Long userId, int itemId, String itemName, String itemType) {
        this.userId = userId;
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemType = itemType;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "ITEM_ID")
    private int itemId;

    @Column(name = "ITEM_NAME")
    private String itemName;

    @Column(name = "ITEM_TYPE")
    private String itemType;
}
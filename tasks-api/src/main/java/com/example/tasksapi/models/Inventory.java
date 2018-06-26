package com.example.tasksapi.models;
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

    public Inventory(Long userId, Long characterId, Long itemId, String itemName, String itemType, int worth) {
        this.userId = userId;
        this.characterId = characterId;
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemType = itemType;
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

    @Column(name = "ITEM_TYPE")
    private String itemType;

    @Column(name = "WORTH")
    private int worth;
}
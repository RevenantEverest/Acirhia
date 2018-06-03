package com.example.monolith.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "INVENTORY")
public class Inventory {

    public Inventory(Long userId, int itemId) {
        this.userId = userId;
        this.itemId = itemId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long entryId;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "ITEM_ID")
    private int itemId;
}

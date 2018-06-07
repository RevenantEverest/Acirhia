package com.example.monolith.models;

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

//    @OneToMany(mappedBy="inventory",  cascade = CascadeType.ALL)
//    @JsonIgnoreProperties("inventory")
//    public List<Item> items;

//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name="ITEM_ID")
//    @JsonIgnoreProperties("INVENTORY")
//    public Item item;

//    @ManyToOne(fetch = FetchType.LAZY)
//    private Item item;

    @ManyToMany(fetch = FetchType.LAZY)
    private Set<Item> item;
}

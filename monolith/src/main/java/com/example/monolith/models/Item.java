package com.example.monolith.models;

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
    private Long itemId;

    @Column(name = "ITEM_NAME")
    private String itemName;

    @Column(name = "ITEM_TYPE")
    private String itemType;

    @Column(name = "WORTH")
    private int worth;

    //    @ManyToOne(fetch = FetchType.EAGER)
    //    @JoinColumn(name="INVENTORY_ID")
    //    @JsonIgnoreProperties("ITEMS")
    //    public Inventory inventory;

    //    @OneToMany(mappedBy="item", cascade = CascadeType.ALL)
    //    @JsonIgnoreProperties("ITEMS")
    //    public List<Inventory> inventory;

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "item")
//    private Set<Inventory> inventory = new HashSet<>();

//    @ManyToOne(fetch = FetchType.LAZY)
//    private Inventory inventory;

//    @ManyToOne
//    @JoinColumn(name = "ITEM_ID")
//    Inventory inventory;

}

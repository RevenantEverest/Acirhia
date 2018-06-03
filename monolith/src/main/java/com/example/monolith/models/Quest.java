package com.example.monolith.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "QUESTS")
public class Quest {

    public Quest(String questName, String questDescription, int requirement) {
        this.questName = questName;
        this.questDescription = questDescription;
        this.requirement = requirement;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questId;

    @Column(name = "QUEST_NAME")
    private String questName;

    @Column(name = "QUEST_DESCRIPTION")
    private String questDescription;

    @Column(name = "REQUIREMENT")
    private int requirement;
}

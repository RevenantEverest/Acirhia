package com.example.tasksapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "QUESTLOG")
public class QuestLog {

    public QuestLog(Long userId, Long characterId, String questName, String questDescription, String questType, int requirement, int acquired) {
        this.userId = userId;
        this.characterId = characterId;
        this.questName = questName;
        this.questDescription = questDescription;
        this.questType = questType;
        this.requirement = requirement;
        this.acquired = acquired;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "CHARACTER_ID")
    private Long characterId;

    @Column(name = "QUEST_NAME")
    private String questName;

    @Column(name = "QUEST_DESCRIPTION")
    private String questDescription;

    @Column(name = "QUEST_TYPE")
    private String questType;

    @Column(name = "REQUIREMENT")
    private int requirement;

    @Column(name = "ACQUIRED")
    private int acquired;
}
package com.example.tasksapi.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "QUESTS")
public class Quest {

    public Quest(String questName, String questDescription, String questType, int requirement) {
        this.questName = questName;
        this.questDescription = questDescription;
        this.questType = questType;
        this.requirement = requirement;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "QUEST_NAME")
    private String questName;

    @Column(name = "QUEST_DESCRIPTION")
    private String questDescription;

    @Column(name = "QUEST_TYPE")
    private String questType;

    @Column(name = "REQUIREMENT")
    private int requirement;
}
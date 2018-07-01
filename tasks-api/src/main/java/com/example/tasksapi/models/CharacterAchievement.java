package com.example.tasksapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "CHARACTER_ACHIEVEMENTS")
public class CharacterAchievement {

    public CharacterAchievement(Long userId, Long characterId, String achievementName, String achievementDescription, int achievementScore) {
        this.userId = userId;
        this.characterId = characterId;
        this.achievementName = achievementName;
        this.achievementDescription = achievementDescription;
        this.achievementScore = achievementScore;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "CHARACTER_ID")
    private Long characterId;

    @Column(name = "ACHIEVEMENT_NAME")
    private String achievementName;

    @Column(name = "ACHIEVEMENT_DESCRIPTION")
    private String achievementDescription;

    @Column(name = "ACHIEVEMENT_SCORE")
    private int achievementScore;
}

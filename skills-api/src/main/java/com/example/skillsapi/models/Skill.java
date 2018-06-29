package com.example.skillsapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "SKILLS")
public class Skill {

    public Skill(String skillName, String skillDescription, String skillType, int levelRequirement, int classRequirement, int baseDamage, int buff) {
        this.skillName = skillName;
        this.skillDescription = skillDescription;
        this.skillType = skillType;
        this.levelRequirement = levelRequirement;
        this.classRequirement = classRequirement;
        this.baseDamage = baseDamage;
        this.buff = buff;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "SKILL_NAME")
    private String skillName;

    @Column(name = "SKILL_DESCRIPTION")
    private String skillDescription;

    @Column(name = "SKILL_TYPE")
    private String skillType;

    @Column(name = "LEVEL_REQUIREMENT")
    private int levelRequirement;

    @Column(name = "CLASS_REQUIREMENT")
    private int classRequirement;

    @Column(name = "BASE_DAMAGE")
    private int baseDamage;

    @Column(name = "BUFF")
    private int buff;
}

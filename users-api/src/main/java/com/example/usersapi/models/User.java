package com.example.usersapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "USERS")
public class User {

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USERNAME")
    private String userName;

    @Column(name = "PASSWORD")
    private String password;

}
package com.devsuperior.dscatalog.repositories;

import com.devsuperior.dscatalog.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dscatalog.entities.Category;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}

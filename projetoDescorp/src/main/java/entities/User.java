/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.br.CPF;
import validator.PasswordValidate;

/**
 *
 * @author root
 */
@Entity
@Table(name = "TB_USER")
@Inheritance(strategy = InheritanceType.JOINED) //Estratégia de herança.
@DiscriminatorColumn(name = "USER_TYPE", //Nome da coluna que vai discriminar subclasses.
        discriminatorType = DiscriminatorType.STRING, length = 1)
@Access(AccessType.FIELD)
public abstract class User implements Serializable {

    public static final String USER_BY_CPF = "UserByCPF";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @NotNull
    @CPF
    @Column(name = "USER_CPF")
    protected String cpf;

    @NotBlank
    @Size(max = 20)
    @Column(name = "USER_LOGIN")
    protected String login;

    @Column(name = "USER_NAME")
    protected String name;

    @Email
    @Column(name = "USER_EMAIL")
    protected String email;

    @NotBlank
    @Size(min = 6, max = 20)
    @PasswordValidate
    @Column(name = "USER_PASSWORD")
    protected String password;

    @Past
    @Temporal(TemporalType.DATE)
    @Column(name = "USER_BIRTH", nullable = true)
    protected Date birthday;

    @ElementCollection
    @CollectionTable(name = "TB_CONTACT",
            joinColumns = @JoinColumn(name = "ID_USUARIO"))
    @Column(name = "CONTACT_PHONE", length = 20)
    protected Collection<String> phones;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
   
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Collection<String> getPhones() {
        return phones;
    }

    public void addPhone(String phone) {
        if (phones == null) {
            phones = new HashSet<>();
        }
        phones.add(phone);
    }

    public boolean contains(String phone) {
        return phones.contains(phones);
    }

    // Client == Employee???
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof User)) {
            return false;
        }
        User other = (User) object;

        return !((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id)));
    }
}

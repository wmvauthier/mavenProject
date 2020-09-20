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
import javax.persistence.CascadeType;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
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

@Entity
@Table(name = "terminal")
public class Terminal implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cod_terminal")
    protected String codTerminal;
    
    @Column(name = "modelo_terminal")
    protected String modelo;
    
    @OneToOne(cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn(name = "terminal_idpatios", referencedColumnName = "id")
    protected Patios responsavel;

    public Long getId() {
        return id;
    }

	public void setId(Long id) {
        this.id = id;
    }	

    public String getCodTerminal() {
		return codTerminal;
	}

	public void setCodTerminal(String codTerminal) {
		this.codTerminal = codTerminal;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public Patios getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(Patios responsavel) {
		this.responsavel = responsavel;
	}

	@Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Terminal)) {
            return false;
        }
        Terminal other = (Terminal) object;

        return !((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id)));
    }
}

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
import javax.persistence.ManyToOne;
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
@Table(name = "patios")
public class Patios implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_patio")
    protected String name;
    
    @Column(name = "preco_base")
    protected Double valor_base;
    
    @Column(name = "preco_fracao")
    protected Double valor_fracao;
    
    @ManyToOne
    protected Usuario responsavel;

    
    public Long getId() {
        return id;
    }


	public Double getValor_base() {
		return valor_base;
	}


	public void setValor_base(Double valor_base) {
		this.valor_base = valor_base;
	}


	public Double getValor_fracao() {
		return valor_fracao;
	}


	public void setValor_fracao(Double valor_fracao) {
		this.valor_fracao = valor_fracao;
	}


	public Usuario getResponsavel() {
		return responsavel;
	}


	public void setResponsavel(Usuario responsavel) {
		this.responsavel = responsavel;
	}


	public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Patios)) {
            return false;
        }
        Patios other = (Patios) object;

        return !((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id)));
    }
}

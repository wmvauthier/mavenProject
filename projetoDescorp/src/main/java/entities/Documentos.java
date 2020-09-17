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
@Table(name = "documento")
public class Documentos implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="entrada_documento")
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date entradaDocumento;
    
    @Column(name="saida_documento")
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date saidaDocumento;
    
    @Column(name = "placa_veiculo")
    protected String placaVeiculo;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "terminal_idterminal", referencedColumnName = "id")
    protected Terminal responsavel;

    public Long getId() {
        return id;
    }

	public void setId(Long id) {
        this.id = id;
    }	

	public java.util.Date getEntradaDocumento() {
		return entradaDocumento;
	}

	public void setEntradaDocumento(java.util.Date entradaDocumento) {
		this.entradaDocumento = entradaDocumento;
	}

	public java.util.Date getSaidaDocumento() {
		return saidaDocumento;
	}

	public void setSaidaDocumento(java.util.Date saidaDocumento) {
		this.saidaDocumento = saidaDocumento;
	}

	public String getPlacaVeiculo() {
		return placaVeiculo;
	}

	public void setPlacaVeiculo(String placaVeiculo) {
		this.placaVeiculo = placaVeiculo;
	}

	public Terminal getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(Terminal responsavel) {
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
        if (!(object instanceof Documentos)) {
            return false;
        }
        Documentos other = (Documentos) object;

        return !((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id)));
    }
}

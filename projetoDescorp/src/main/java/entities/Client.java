/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

/**
 *
 * @author root
 */
@Entity
@Table(name = "TB_CLIENT")
@DiscriminatorValue(value = "C")
@PrimaryKeyJoinColumn(name = "USER_ID", referencedColumnName = "ID")
public class Client extends User implements Serializable {

    @OneToMany(mappedBy = "client", targetEntity = Ticket.class, fetch = FetchType.LAZY,
            cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ticket> tickets;

    @OneToMany(mappedBy = "client", targetEntity = Piece.class, fetch = FetchType.LAZY,
            cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Piece> pieces;

    @Embedded
    private Address address;

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void addTicket(Ticket ticket) {
        if (this.tickets == null) {
            this.tickets = new ArrayList<>();
        }
        this.tickets.add(ticket);
        ticket.setClient(this);
    }

    public List<Piece> getPieces() {
        return pieces;
    }

    public void addTicket(Piece piece) {
        if (this.pieces == null) {
            this.pieces = new ArrayList<>();
        }
        this.pieces.add(piece);
        piece.setClient(this);
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

}

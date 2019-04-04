package tests;

import entities.Client;
import entities.Employee;
import entities.Piece;
import entities.Ticket;
import java.util.HashMap;
import java.util.Map;
import javax.persistence.CacheRetrieveMode;
import static tests.GenericTest.logger;
import org.junit.Test;
import static org.junit.Assert.*;

public class TicketCRUDTest extends GenericTest {

    @Test
    public void persistTicket() {
        logger.info("Executando persistTicket()");
        Ticket newTicket = new Ticket();
        Piece dbPiece = em.find(Piece.class, new Long(1));
        Client dbClient = em.find(Client.class, new Long(1));
        Employee dbEmployee = em.find(Employee.class, new Long(2));
        newTicket.setClient(dbClient);
        newTicket.setEmployee(dbEmployee);
        newTicket.setTckPiece(dbPiece);
        newTicket.setState("Aberto");
        em.persist(newTicket);
        em.flush();
        assertNotNull(newTicket.getId());
    }

//    @org.junit.Test
//    public void atualizarInvalido() {
//
//    }
    @Test
    public void updateTicket() {
        logger.info("Executando updateTicket()");
        Piece dbPiece = em.find(Piece.class, new Long(2));
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Ticket dbTicket = em.find(Ticket.class, new Long(1));
        assertNotNull(dbTicket);
        dbTicket.setTckPiece(dbPiece);
        em.flush();
        dbTicket = em.find(Ticket.class, new Long(1), properties);
        assertEquals(dbPiece, dbTicket.getTckPiece());
    }

    @Test
    public void mergeTicket() {
        logger.info("Executando updateTicket()");
        Piece dbPiece = em.find(Piece.class, new Long(3));
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Ticket dbTicket = em.find(Ticket.class, new Long(2));
        assertNotNull(dbTicket);
                em.clear();
        dbTicket.setTckPiece(dbPiece);
        em.merge(dbTicket);
        em.flush();
        dbTicket = em.find(Ticket.class, new Long(2), properties);
        assertEquals(dbPiece, dbTicket.getTckPiece());
    }

    @Test
    public void deleteTicket() {
        logger.info("Executando deleteTicket()");
        Ticket dbTicket = em.find(Ticket.class, new Long(3));
        assertNotNull(dbTicket);
        em.remove(dbTicket);
        em.flush();
        Ticket testDBTicket = em.find(Ticket.class, new Long(3));
        assertNull(testDBTicket);
    }

}

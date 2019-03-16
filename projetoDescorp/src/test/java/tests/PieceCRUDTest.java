package tests;

import entities.Client;
import entities.Piece;
import entities.Status;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.persistence.CacheRetrieveMode;
import static tests.GenericTest.logger;
import org.junit.Test;
import static org.junit.Assert.*;

public class PieceCRUDTest extends GenericTest {

    @Test
    public void persistPiece() {
        logger.info("Executando persistPiece()");
        Piece newPiece = new Piece();
        Client dbClient = em.find(Client.class, new Long(5));
        newPiece.setSerialNumber("AX2345");
        newPiece.setType("MODULO ACIONAMENTO");
        newPiece.setDescription("Nao inicializa a comunicacao com a cancela");
        newPiece.setClient(dbClient);
        newPiece.setStatus(Status.BROKEN);
        em.persist(newPiece);
        em.flush();
        assertNotNull(newPiece.getId());
    }

//    @org.junit.Test
//    public void atualizarInvalido() {
//
//    }
    
    @Test
    public void updatePiece() {
        logger.info("Executando updatePiece()");
        String newSerial = "AB1234";
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Piece dbPiece = em.find(Piece.class, new Long(1));
        assertNotNull(dbPiece);
        dbPiece.setSerialNumber(newSerial);
        em.flush();
        dbPiece = em.find(Piece.class, new Long(1));
        assertEquals(newSerial, dbPiece.getSerialNumber());
    }

    @Test
    public void mergePiece() {
        logger.info("Executando mergePiece()");
        String newSerial = "AB1234";
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Piece dbPiece = em.find(Piece.class, new Long(2));
        assertNotNull(dbPiece);
        em.clear();
        dbPiece.setSerialNumber(newSerial);
        em.merge(dbPiece);
        em.flush();
        dbPiece = em.find(Piece.class, new Long(2));
        assertEquals(newSerial, dbPiece.getSerialNumber());
    }

    @Test
    public void deletePiece() {
        logger.info("Executando deletePiece()");
        Piece dbPiece = em.find(Piece.class, new Long(3));
        assertNotNull(dbPiece);
        em.remove(dbPiece);
        em.flush();
        Piece testDBPiece = em.find(Piece.class, new Long(3));
        assertNull(testDBPiece);
    }
    
}

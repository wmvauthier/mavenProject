package tests;

import entities.Client;
import java.util.HashMap;
import java.util.Map;
import javax.persistence.CacheRetrieveMode;
import static tests.GenericTest.logger;
import org.junit.Test;
import static org.junit.Assert.*;

public class ClientCRUDTest extends GenericTest {

    @Test
    public void persistClient() {
        logger.info("Executando persistClient()");
        Client newClient = new Client();
        newClient.setCpf("108.823.174-82");
        em.persist(newClient);
        em.flush();
        assertNotNull(newClient.getId());
    }

//    @org.junit.Test
//    public void atualizarInvalido() {
//
//    }

    @Test
    public void updateClient() {
        logger.info("Executando updateClient()");
        String newName = "Bufallo Bill";
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Client dbClient = em.find(Client.class, new Long(1));
        assertNotNull(dbClient);
        dbClient.setName(newName);
        em.flush();
        dbClient = em.find(Client.class, new Long(1), properties);
        assertEquals(newName, dbClient.getName());
    }

    @Test
    public void mergeClient() {
        logger.info("Executando updateClient()");
        String newName = "Bufallo Bill";
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Client dbClient = em.find(Client.class, new Long(1));
        assertNotNull(dbClient);
        em.clear();
        dbClient.setName(newName);
        em.merge(dbClient);
        em.flush();
        dbClient = em.find(Client.class, new Long(1), properties);
        assertEquals(newName, dbClient.getName());
    }
    
    @Test
    public void deleteClient() {
        logger.info("Executando deleteClient()");
        Client dbClient = em.find(Client.class, new Long(3));
        assertNotNull(dbClient);
        em.remove(dbClient);
        em.flush();
        Client testDBClient = em.find(Client.class, new Long(3));
        assertNull(testDBClient);
    }

}

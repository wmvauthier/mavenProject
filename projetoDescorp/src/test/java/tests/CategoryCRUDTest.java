package tests;

import entities.Category;
import entities.Client;
import java.util.HashMap;
import java.util.Map;
import javax.persistence.CacheRetrieveMode;
import static tests.GenericTest.logger;
import org.junit.Test;
import static org.junit.Assert.*;

public class CategoryCRUDTest extends GenericTest {

    @Test
    public void persistCategory() {
        logger.info("Executando persistCategory()");
        Category newCategory = new Category();
        String description = "Instalações";
        newCategory.setDescription(description);
        em.persist(newCategory);
        em.flush();
        assertNotNull(newCategory.getId());
    }

//    @org.junit.Test
//    public void atualizarInvalido() {
//
//    }

    @Test
    public void updateCategory() {
        logger.info("Executando updateCategory()");
        String newDescription = "Chamados Programados";
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Category dbCategory = em.find(Category.class, new Long(2));
        assertNotNull(dbCategory);
        dbCategory.setDescription(newDescription);
        em.flush();
        dbCategory = em.find(Category.class, new Long(2), properties);
        assertEquals(newDescription, dbCategory.getDescription());
    }

    @Test
    public void mergeCategory() {
        logger.info("Executando mergeCategory()");
        String newDescription = "Peças Advindas";
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Category dbCategory = em.find(Category.class, new Long(3));
        assertNotNull(dbCategory);
        em.clear();
        dbCategory.setDescription(newDescription);
        em.merge(dbCategory);
        em.flush();
        dbCategory = em.find(Category.class, new Long(3), properties);
        assertEquals(newDescription, dbCategory.getDescription());
    }
    
    @Test
    public void deleteClient() {
        logger.info("Executando deleteClient()");
        Category dbCategory = em.find(Category.class, new Long(4));
        assertNotNull(dbCategory);
        em.remove(dbCategory);
        em.flush();
        Category testDBCategory = em.find(Category.class, new Long(4));
        assertNull(testDBCategory);
    }

}

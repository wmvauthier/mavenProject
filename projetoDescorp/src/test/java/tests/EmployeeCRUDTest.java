package tests;

import entities.Employee;
import java.util.HashMap;
import java.util.Map;
import javax.persistence.CacheRetrieveMode;
import static tests.GenericTest.logger;
import org.junit.Test;
import static org.junit.Assert.*;

public class EmployeeCRUDTest extends GenericTest {

    @Test
    public void persistEmployee() {
        logger.info("Executando persistEmployee()");
        Employee newEmployee = new Employee();
        newEmployee.setCpf("108.823.174-82");
        em.persist(newEmployee);
        em.flush();
        assertNotNull(newEmployee.getId());
    }

//    @org.junit.Test
//    public void atualizarInvalido() {
//
//    }
    @Test
    public void updateEmployee() {
        logger.info("Executando updateEmployee()");
        String newName = "Dave Jones";
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Employee dbEmployee = em.find(Employee.class, new Long(2));
        assertNotNull(dbEmployee);
        dbEmployee.setName(newName);
        em.flush();
        dbEmployee = em.find(Employee.class, new Long(2), properties);
        assertEquals(newName, dbEmployee.getName());
    }

    @Test
    public void mergeEmployee() {
        logger.info("Executando mergeEmployee()");
        String newName = "Dave Jones";
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Employee dbEmployee = em.find(Employee.class, new Long(4));
        assertNotNull(dbEmployee);
        em.clear();
        dbEmployee.setName(newName);
        em.merge(dbEmployee);
        em.flush();
        dbEmployee = em.find(Employee.class, new Long(4), properties);
        assertEquals(newName, dbEmployee.getName());
    }

    @Test
    public void deleteEmployee() {
        logger.info("Executando deleteEmployee()");
        Employee dbEmployee = em.find(Employee.class, new Long(6));
        assertNotNull(dbEmployee);
        em.remove(dbEmployee);
        em.flush();
        Employee testDBEmployee = em.find(Employee.class, new Long(6));
        assertNull(testDBEmployee);
    }

}

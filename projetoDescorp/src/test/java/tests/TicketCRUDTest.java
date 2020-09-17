package tests;

import java.util.HashMap;
import java.util.Map;
import javax.persistence.CacheRetrieveMode;
import static tests.GenericTest.logger;
import org.junit.Test;
import static org.junit.Assert.*;

public class TicketCRUDTest extends GenericTest {

    @Test
    public void testCriacaoBanco() {
        System.out.println("Criou ou Não????");
        DbUnitUtil.inserirDados();
    }

}

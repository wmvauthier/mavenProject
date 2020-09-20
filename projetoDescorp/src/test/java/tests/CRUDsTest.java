package tests;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.persistence.CacheRetrieveMode;
import javax.validation.ConstraintViolationException;

import static tests.GenericTest.logger;

import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import entities.Documentos;
import entities.Patios;
import entities.Planos;
import entities.Terminal;
import entities.Tipo;
import entities.Usuario;

import static org.junit.Assert.*;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class CRUDsTest extends GenericTest {

    @Test
    public void T01_testCriacaoBanco() {
        System.out.println("Criou ou Não????");
    }
    
    @Test
    public void T02_persistTiposUsuarios() {
        logger.info("Executando persistTiposUsuarios()");
        Tipo tipoAdmin = new Tipo();
        Tipo tipoGestor = new Tipo();
        Tipo tipoUsuario = new Tipo();
        Tipo tipoGuest = new Tipo();
       
        tipoAdmin.setName("ADMIN");
        em.persist(tipoAdmin);
        em.flush();
        
        tipoGestor.setName("GESTOR");
        em.persist(tipoGestor);
        em.flush();
        
        tipoUsuario.setName("USUARIO");
        em.persist(tipoUsuario);
        em.flush();
        
        tipoGuest.setName("GUEST");
        em.persist(tipoGuest);
        em.flush();
        
        assertNotNull(tipoAdmin.getId());
        assertNotNull(tipoGestor.getId());
        assertNotNull(tipoUsuario.getId());
        assertNotNull(tipoGuest.getId());
    }
    
    @Test
    public void T03_persistPlanos() {
        logger.info("Executando persistPlanos()");
        Planos planos = new Planos();
        Double valorPlano = new Double("89.90");
        planos.setName("Mensalista");
        planos.setValor(valorPlano);
        em.persist(planos);
        em.flush();
        assertNotNull(planos.getId());
        
    }
    
    @Test
    public void T04_persistUsuario() {
        logger.info("Executando persistUsuario()");
        Tipo tipoAdmin = em.find(Tipo.class, new Long(1));
        Tipo tipoGestor = em.find(Tipo.class, new Long(2));
        Tipo tipoUsuario = em.find(Tipo.class, new Long(3));
        Tipo tipoGuest = em.find(Tipo.class, new Long(4));
        
        Usuario user01 = new Usuario();
        user01.setName("Tiago Cintura");
        user01.setAtivo(1);
        user01.setEmail("tiago@hotmail.com");
        user01.setLogin("admin01");
        user01.setPassword("Admin123");
        user01.setTipo(tipoUsuario);
       
        
        Usuario user02 = new Usuario();
        user02.setName("Paulo Paulada");
        user02.setAtivo(1);
        user02.setEmail("paulo@gmail.com");
        user02.setLogin("admin02");
        user02.setPassword("Admin123");
        user02.setTipo(tipoGuest);
        
        
        Usuario user03 = new Usuario();
        user03.setName("Rafael o Grão Mestre");
        user03.setAtivo(1);
        user03.setEmail("rafael@amazon.com");
        user03.setLogin("admin03");
        user03.setPassword("Admin123");
        user03.setTipo(tipoGestor);
        
        
        Usuario user04 = new Usuario();
        user04.setName("Felipe o Conquistador");
        user04.setAtivo(1);
        user04.setEmail("felipe@outlook.com");
        user04.setLogin("admin04");
        user04.setPassword("Admin123");
        user04.setTipo(tipoAdmin);
        try {
        em.persist(user01);
        em.persist(user02);
        em.persist(user03);
        em.persist(user04);
        em.flush();}
        catch (ConstraintViolationException e) {
        	System.out.println(e.getConstraintViolations());
		}
        
        assertNotNull(user01.getId());
        assertNotNull(user02.getId());
        assertNotNull(user03.getId());
        assertNotNull(user04.getId());
        
    }
    
    @Test
    public void T05_persistPatios() {
        logger.info("Executando persistPatios()");
        Usuario responsavel = em.find(Usuario.class, new Long(3));
        Patios patio = new Patios();
        patio.setName("Super Shopping");
        patio.setValor_base(new Double("16.00"));
        patio.setValor_fracao(new Double("8.50"));
        patio.setResponsavel(responsavel);
        em.persist(patio);
        em.flush();
        assertNotNull(patio.getId());
        
    }
    
    @Test
    public void T06_persistTerminais() {
        logger.info("Executando persistTerminais()");
        Patios patio = em.find(Patios.class, new Long(1));
        Terminal t01 = new Terminal();
        t01.setCodTerminal("01");
        t01.setModelo("Alpha");
        t01.setResponsavel(patio);
        
        Terminal t02 = new Terminal();
        t02.setCodTerminal("02");
        t02.setModelo("Beta");
        t02.setResponsavel(patio);
        
        Terminal t03 = new Terminal();
        t03.setCodTerminal("03");
        t03.setModelo("Omega");
        t03.setResponsavel(patio);
        
        em.persist(t01);
        em.persist(t02);
        em.persist(t03);
        em.flush();
        
        assertNotNull(t01.getId());
        assertNotNull(t02.getId());
        assertNotNull(t03.getId());
        
    }
    
    @Test
    public void T07_persistDocumento() {
        logger.info("Executando persistDocumento()");
        Terminal terminal1 = em.find(Terminal.class, new Long(1));
        Terminal terminal2 = em.find(Terminal.class, new Long(2));
        Date date = new Date();
        
        Documentos doc01 = new Documentos();
        doc01.setEntradaDocumento(date);
        doc01.setPlacaVeiculo("ABC0123");
        doc01.setTerminal(terminal1);
        
        Documentos doc02 = new Documentos();
        doc02.setEntradaDocumento(date);
        doc02.setPlacaVeiculo("ABC1234");
        doc02.setTerminal(terminal2);
        
        em.persist(doc01);
        em.persist(doc02);
        em.flush();
        
        assertNotNull(doc01.getId());
        assertNotNull(doc02.getId());
        
    }
    
    @Test
    public void T08_alterPlanos() {
        logger.info("Executando alterPlanos()");
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Planos planos = em.find(Planos.class, new Long(1));
        Double valorAntigo = new Double("89.90");
        assertNotNull(planos);
        planos.setValor(new Double("189.90"));
        em.flush();
        em.find(Planos.class, new Long(1));
        Assert.assertFalse(planos.getValor().equals(valorAntigo));
        
    }
    
    @Test
    public void T09_alterUsuario() {
        logger.info("Executando alterUsuario()");
        Map properties = new HashMap();
        properties.put("javax.persistence.cache.retrieveMode", CacheRetrieveMode.BYPASS);
        Tipo tipoGuest = em.find(Tipo.class, new Long(4));
        assertNotNull(tipoGuest);
        
        Usuario user01 = em.find(Usuario.class, new Long(2));
        assertNotNull(user01);
        user01.setEmail("tiago.cintura@hotmail.com");
        user01.setTipo(tipoGuest);
        em.flush();
  
        Assert.assertFalse(user01.getEmail().equals("tiago@hotmail.com"));
        Assert.assertTrue(user01.getTipo().getName().equals(tipoGuest.getName()));
        
    }


}

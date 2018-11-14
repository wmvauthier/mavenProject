/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import Itens.Chamado;
import Itens.Client;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

/**
 *
 * @author LnkConsertos
 */
@WebServlet(name = "clientRefresh", urlPatterns = {"/clientRefresh"})
public class clientRefresh extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, SQLException, ClassNotFoundException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("{\"clients\": " + refreshClients() + "}");
        }
    }
    
    private ArrayList<JSONObject> refreshClients() throws SQLException, ClassNotFoundException {

        Class.forName("org.apache.derby.jdbc.ClientDriver");
        Connection con = DriverManager.getConnection("jdbc:derby://localhost:1527/gerlinkcne;create=true", "root", "root");

        ArrayList<JSONObject> list = new ArrayList<JSONObject>();
        Statement stmt = null;
        String query = "SELECT * FROM client ORDER BY CLIENT_NAME DESC";

        try {
            stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                String id = rs.getString("CLIENT_ID");
                String cpf = rs.getString("CLIENT_CPF");
                String login = rs.getString("CLIENT_LOGIN");
                String password = rs.getString("CLIENT_PASSWORD");
                String name = rs.getString("CLIENT_NAME");
                String email = rs.getString("CLIENT_EMAIL");
                String date = rs.getString("CLIENT_DATE");
                String contact = rs.getString("CLIENT_CONTACT");
                String address = rs.getString("CLIENT_LOG");
                String neigh = rs.getString("CLIENT_NEIGH");
                String number = rs.getString("CLIENT_NUMBER");
                String zip = rs.getString("CLIENT_ZIP");
                String city = rs.getString("CLIENT_CITY");
                String state = rs.getString("CLIENT_STATE");
                Client client = new Client(id,cpf,login,password,name,email,date,contact,address,neigh,number,zip,city,state);
                JSONObject json = new JSONObject(client);
                list.add(json);
            }
        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            if (stmt != null) {
                stmt.close();
            }
        }

        return list;
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (SQLException ex) {
            Logger.getLogger(clientRefresh.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(clientRefresh.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (SQLException ex) {
            Logger.getLogger(clientRefresh.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(clientRefresh.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

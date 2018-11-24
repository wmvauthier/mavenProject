/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets.Ticket;

import Itens.Ticket;
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
 * @author ALUNO
 */
@WebServlet(name = "ticketRefresh", urlPatterns = {"/ticketRefresh"})
public class ticketRefresh extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, SQLException, ClassNotFoundException {
        
        response.setContentType("text/html;charset=UTF-8");
                
        String category = request.getParameter("category");
        
        try (PrintWriter out = response.getWriter()) {
            out.println("{\"tickets\": " + refreshTickets(category) + "}");
        }
    }

    private ArrayList<JSONObject> refreshTickets(String categoryChoosen) throws SQLException, ClassNotFoundException {

        Class.forName("org.apache.derby.jdbc.ClientDriver");
        Connection con = DriverManager.getConnection("jdbc:derby://localhost:1527/gerlinkcne;create=true", "root", "root");

        ArrayList<JSONObject> list = new ArrayList<>();
        Statement stmt = null;
        String query = "SELECT * FROM ticket ORDER BY TICKET_CATEGORY DESC WHERE TICKET_ID = '"+categoryChoosen+"'";

        try {
            stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                String id = rs.getString("TICKET_ID");
                String category = rs.getString("TICKET_CATEGORY");
                String client = rs.getString("TICKET_CLIENT");
                String employee = rs.getString("TICKET_EMPLOYEE");
                String date = rs.getString("TICKET_DATE");
                String description = rs.getString("TICKET_DESCRIPTION");
                String status = rs.getString("TICKET_STATUS");
                String priority = rs.getString("TICKET_PRIORITY");
                Ticket ticket = new Ticket(id, category, client, employee, date, description, status, priority);
                JSONObject json = new JSONObject(ticket);
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
        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(ticketRefresh.class.getName()).log(Level.SEVERE, null, ex);
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
        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(ticketRefresh.class.getName()).log(Level.SEVERE, null, ex);
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

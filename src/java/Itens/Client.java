package Itens;

public class Client {

    private String id;
    private String cpf;
    private String login;
    private String password;
    private String name;
    private String email;
    private String date;
    private String contact;
    private String log;
    private String neigh;
    private String number;
    private String zip;
    private String city;
    private String state;

    public Client(String id, String cpf, String login, String password, String name, String email, String date, String contact, String log, String neigh, String number, String zip, String city, String state) {
        this.id = id;
        this.cpf = cpf;
        this.login = login;
        this.password = password;
        this.name = name;
        this.email = email;
        this.date = date;
        this.contact = contact;
        this.log = log;
        this.neigh = neigh;
        this.number = number;
        this.zip = zip;
        this.city = city;
        this.state = state;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getLog() {
        return log;
    }

    public void setLog(String log) {
        this.log = log;
    }

    public String getNeigh() {
        return neigh;
    }

    public void setNeigh(String neigh) {
        this.neigh = neigh;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

}

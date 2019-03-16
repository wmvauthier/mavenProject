package entities;

public class Email {

    private String personal;
    private String domain;

    public Email(String email) {              

        this.personal = email.substring(0, email.indexOf('@'));
        this.domain   = email.substring(email.indexOf('@')+1);
    }

    public String getPersonal() {
        return personal;
    }

    public void setPersonal(String personal) {
        this.personal = personal;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

  

}

package Itens;

public class Chamado {
    
    private String id;
    private String cliente;
    private String descricao;
    private String data;
    private String tecnico;
    private String status;

    public Chamado(String id, String cliente, String data, String descricao, String tecnico,  String status) {
        this.id = id;
        this.cliente = cliente;
        this.descricao = descricao;
        this.data = data;
        this.status = status;
        this.tecnico = tecnico;
    }

    public String getTecnico() {
        return tecnico;
    }

    public void setTecnico(String tecnico) {
        this.tecnico = tecnico;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}

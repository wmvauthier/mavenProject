/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

/**
 *
 * @author ALUNO
 */
@Embeddable
public class Address implements Serializable {
    
    @Size(max = 150)
    @Column(name = "ADDRESS_LOG", nullable = true)
    private String log;
    @Size(max = 150)
    @Column(name = "ADDRESS_NEIGHB", nullable = true)
    private String neighborhood;
    @Min(1)
    @Max(99999)
    @Size(max = 5)
    @Column(name = "ADDRESS_NUMBER", nullable = true)
    private Integer number; 
    @Column(name = "ADDRESS_ZIP", length = 20, nullable = true)
    private String zip;
    @Column(name = "ADDRESS_CITY", length = 50, nullable = true)
    private String city;

    public String getLog() {
        return log;
    }

    public void setLog(String log) {
        this.log = log;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
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

}

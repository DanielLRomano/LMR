package RevisaoFPOO.Cadastro;

public abstract class Animal {
    
    //atributos
    double peso;
    String nome;
    String especie;
    String proprietario;

    //métodos
    //construtor cheio 
    public Animal(double peso, String nome, String especie, String proprietario) {
        this.peso = peso;
        this.nome = nome;
        this.especie = especie;
        this.proprietario = proprietario;
    }

    //construtor vazio
    public Animal(){}

    //sets and gets
    public double getPeso() {
        return peso;
    }
    public void setPeso(double peso) {
        this.peso = peso;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getEspecie() {
        return especie;
    }
    public void setEspecie(String especie) {
        this.especie = especie;
    }
    public String getProprietario() {
        return proprietario;
    }
    public void setProprietario(String proprietario) {
        this.proprietario = proprietario;
    }
    
}

package RevisaoFPOO;

import javax.swing.JOptionPane;

import RevisaoFPOO.Cadastro.Cachorro;
import RevisaoFPOO.Cadastro.Gato;
import RevisaoFPOO.Cadastro.Outros;

public class App {
    public static void main(String[] args) {

        Cachorro cachorros[] = new Cachorro[10];
        Gato gatos[] = new Gato[10];
        Outros outro[] = new Outros[10];
        Agenda agendamento[] = new Agenda[10];

        boolean aberta = true;
        boolean aberta1 = true;
        int ContCachorro = 0;
        int ContGato = 0;
        int ContOutros = 0;
        int ContAgenda = 0;

        JOptionPane.showMessageDialog(null, "Seja Bem Vindo ao PetShop!");
        while (aberta) {
            int acaoMenu = Integer.parseInt(
                    JOptionPane.showInputDialog(
                            "Escolha a ação desejada"
                                    + "\n 1 - Cadastro"
                                    + "\n 2 - Agendamento"
                                    + "\n 3 - Sair"));
            if (acaoMenu == 1) {
                while (aberta1) {
                    int acao = Integer.parseInt(
                            JOptionPane.showInputDialog(
                                    "Escolha a ação desejada"
                                            + "\n 1 - Cadastrar Cachorro"
                                            + "\n 2 - Cadastrar Gato"
                                            + "\n 3 - Cadastrar Outro Animal"
                                            + "\n 4 - Sair"));
                    if (acao == 1) {
                        boolean CadastroCachorro = true;
                        while (CadastroCachorro) {
                            cachorros[ContCachorro] = new Cachorro();
                            cachorros[ContCachorro].setNome((JOptionPane.showInputDialog("Informe o Nome")));
                            cachorros[ContCachorro]
                                    .setPeso(Integer.parseInt(JOptionPane.showInputDialog("Informe o Peso")));
                            cachorros[ContCachorro]
                                    .setProprietario((JOptionPane.showInputDialog("Informe o nome do Proprietario")));
                            cachorros[ContCachorro].setRaca((JOptionPane.showInputDialog("Informe a Raça")));
                            JOptionPane.showMessageDialog(null,
                                    "Animal Cadastrado com Sucesso!"
                                            + "\n Nome: " + cachorros[ContCachorro].getNome()
                                            + "\n Peso: " + cachorros[ContCachorro].getPeso()
                                            + "\n Proprietario: " + cachorros[ContCachorro].getProprietario()
                                            + "\n Raça: " + cachorros[ContCachorro].getRaca());
                            ContCachorro++;
                            CadastroCachorro = false;
                        }
                    } else if (acao == 2) {
                        boolean CadastroGato = true;
                        while (CadastroGato) {
                            gatos[ContGato] = new Gato();
                            gatos[ContGato].setNome((JOptionPane.showInputDialog("Informe o Nome")));
                            gatos[ContGato].setPeso(Integer.parseInt(JOptionPane.showInputDialog("Informe o Peso")));
                            gatos[ContGato]
                                    .setProprietario((JOptionPane.showInputDialog("Informe o nome do Proprietario")));
                            gatos[ContGato].setRaca((JOptionPane.showInputDialog("Informe a Raça")));
                            JOptionPane.showMessageDialog(null,
                                    "Animal Cadastrado com Sucesso!"
                                            + "\n Nome: " + gatos[ContGato].getNome()
                                            + "\n Peso: " + gatos[ContGato].getPeso()
                                            + "\n Proprietario: " + gatos[ContGato].getProprietario()
                                            + "\n Raça: " + gatos[ContGato].getRaca());
                            ContGato++;
                            CadastroGato = false;
                        }
                    } else if (acao == 3) {
                        boolean CadastroOutro = true;
                        while (CadastroOutro) {
                            outro[ContOutros] = new Outros();
                            outro[ContOutros].setEspecie((JOptionPane.showInputDialog("Informe a Especie")));
                            outro[ContOutros].setNome((JOptionPane.showInputDialog("Informe o Nome")));
                            outro[ContOutros].setPeso(Integer.parseInt(JOptionPane.showInputDialog("Informe o Peso")));
                            outro[ContOutros]
                                    .setProprietario((JOptionPane.showInputDialog("Informe o nome do Proprietario")));
                            outro[ContOutros].setRaca((JOptionPane.showInputDialog("Informe a Raça")));
                            JOptionPane.showMessageDialog(null,
                                    "Animal Cadastrado com Sucesso!"
                                            + "\n Especie: " + outro[ContOutros].getEspecie()
                                            + "\n Nome: " + outro[ContOutros].getNome()
                                            + "\n Peso: " + outro[ContOutros].getPeso()
                                            + "\n Proprietario: " + outro[ContOutros].getProprietario()
                                            + "\n Raça: " + outro[ContOutros].getRaca());
                            ContOutros++;
                            CadastroOutro = false;
                        }
                    } else if (acao == 4) {
                        aberta1 = false;
                    } else {
                        JOptionPane.showMessageDialog(null, "Insira uma opção válida.");
                    }
                }
            } else if (acaoMenu == 2) {
                boolean cadastroOK = false;
                String nomeAgenda = JOptionPane.showInputDialog("Informe o Nome do PET");
                for (int i = 0; i < ContGato; i++) {
                    if (gatos[i].getNome().equals(nomeAgenda)) {
                        JOptionPane.showMessageDialog(null, "PET Encontrado.");
                        cadastroOK = true;
                        break;
                    }

                }
                for (int i = 0; i < ContCachorro; i++) {
                    if (cachorros[i].getNome().equals(nomeAgenda)) {
                        JOptionPane.showMessageDialog(null, "PET Encontrado.");
                        cadastroOK = true;
                        break;
                    }

                }
                for (int i = 0; i < ContOutros; i++) {
                    if (outro[i].getNome().equals(nomeAgenda)) {
                        JOptionPane.showMessageDialog(null, "PET Encontrado.");
                        cadastroOK = true;
                        break;
                    }
                }
                if (cadastroOK) {
                    boolean agendar = true;
                    while (agendar) {
                        String dataAgenda = JOptionPane.showInputDialog("Informe a Data do agendamento");
                        String horaAgenda = JOptionPane.showInputDialog("Informe a Hora do Agendamento");
                        if (ContAgenda == 0) {
                            agendamento[ContAgenda] = new Agenda();
                            agendamento[ContAgenda].setData(dataAgenda);
                            agendamento[ContAgenda].setHora(horaAgenda);
                            JOptionPane.showMessageDialog(null, "Agendamento Realizado com Sucesso!");
                            agendar = false;
                        } else {
                            for (int i = 0; i < ContAgenda; i++) {
                                if (agendamento[i].getDataHora().equals(dataAgenda + horaAgenda)) {
                                    JOptionPane.showMessageDialog(null, "Horário já foi agendado. Favor tentar outro!");
                                    break;
                                } else {
                                    agendamento[ContAgenda] = new Agenda();
                                    agendamento[ContAgenda].setData(dataAgenda);
                                    agendamento[ContAgenda].setHora(horaAgenda);
                                    JOptionPane.showMessageDialog(null, "Agendamento Realizado com Sucesso!");
                                    agendar = false;
                                }
                            }
                        }
                    }
                }
            } else {
                JOptionPane.showMessageDialog(null, "Obrigado por utilizar nosso site! \n Volte sempre!");
                aberta = false;
            }
        }
    }
}

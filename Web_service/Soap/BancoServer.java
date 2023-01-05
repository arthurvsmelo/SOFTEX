package app;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

import javax.xml.namespace.QName;
import javax.mal.ws.Service;
import java.net.URL;

@WebService
@SOAPBinding(style = Style.RPC)
public interface BancoServer {
    @WebMethod String pagarBoleto(String codigoBarras);
    @WebMethod String criarBoleto(float valor, String cpfCliente);
    @WebMethod boolean verificarPagamento(String codigoBarras);
    @WebMethod boolean cancelarBoleto(String codigoBarras);
}

class BancoClient {
    public static void main(String args[]) Exception{
        URL url = new URL("http://127.0.0.1:3030/app?wsdl");
        QName qname = new QName("http://app", "BancoServerImplService");
        Service ws = Service.create(url, qname);
        BancoServer banco = ws.getPort(CalculadoraServer.class);
    }
}
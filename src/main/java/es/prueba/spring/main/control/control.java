package es.prueba.spring.main.control;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import es.prueba.spring.main.models.Usuarioss;
import es.prueba.spring.main.util.lib;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class control {
	
	@GetMapping(value="/get/{nombre}")
	protected ResponseEntity<String> getJSON (HttpServletRequest req, HttpServletResponse response, @PathVariable("nombre") String objeto) throws ServletException, IOException {
		if (objeto.equals("usuarios") || objeto.equals("compras") || objeto.equals("productos") || objeto.equals("roles")) {
			RestTemplate restTemplate = new RestTemplate();
			String url = "http://localhost:8090/" + objeto;
			return restTemplate.getForEntity(url, String.class);
		} else {
			return null;
		}
	}
	
	@RequestMapping("/post/{nombre}")
	protected void doPost (HttpServletRequest req, HttpServletResponse response, @PathVariable("nombre") String nombre) throws IOException, ParseException {
		if (nombre.equals("usuario") || nombre.equals("compra") || nombre.equals("producto") || nombre.equals("rol")) {
	         switch(nombre) {
	         case "usuario":
				 String body = lib.getBody(req);
		         JSONParser parser = new JSONParser();  
		         JSONObject json = (JSONObject) parser.parse(body);
		         RestTemplate restTemplate = new RestTemplate();
		         HttpHeaders headers = new HttpHeaders();
		         headers.setContentType(MediaType.APPLICATION_JSON);
		         HttpEntity<String> request = new HttpEntity<>(json.toString(), headers);
		         String a = restTemplate.postForObject("http://localhost:8090/usuario/add", request, String.class);
		         break;
	         case "compra":
	        	 break;
	         case "producto":
	        	 break;
	         case "rol":
	        	 break;
	         }
		} else {
			System.out.println("No");

		}
 }
}
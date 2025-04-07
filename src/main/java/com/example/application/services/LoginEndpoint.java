package com.example.application.services;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.Endpoint;
import com.vaadin.hilla.exception.EndpointException;
import jakarta.annotation.Nonnull;


@Endpoint
@AnonymousAllowed
public class LoginEndpoint {
    public String login(String username, String password) {
        if ("ozlem".equals(username) && "1234".equals(password)) {
            return "Bearer dummy-jwt-token-123";
        }
        throw new EndpointException("Geçersiz giriş");
    }
}



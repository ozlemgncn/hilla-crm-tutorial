package com.example.application.services;


import com.example.application.data.ResultMessage;
import com.vaadin.hilla.Endpoint;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import jakarta.annotation.Nullable;
import java.util.List;
import java.util.stream.Collectors;

@Endpoint
@AnonymousAllowed
public class ResultMessageEndpoint {

    private final ResultMessageService resultMessageService = new ResultMessageService();

    public List<ResultMessage> getAllMessages() {
        return resultMessageService.findAll();
    }

    public List<ResultMessage> getFilteredMessages(
            @Nullable String code,
            @Nullable String squad,
            @Nullable String message,
            @Nullable String createdBy
    ) {
        return resultMessageService.findAll().stream()
                .filter(msg -> code == null || msg.getCode().toLowerCase().contains(code.toLowerCase()))
                .filter(msg -> squad == null || msg.getSquad().toLowerCase().contains(squad.toLowerCase()))
                .filter(msg -> message == null || msg.getMessage().toLowerCase().contains(message.toLowerCase()))
                .filter(msg -> createdBy == null || msg.getCreatedBy().toLowerCase().contains(createdBy.toLowerCase()))
                .collect(Collectors.toList());
    }

    public ResultMessage getByCode(String code) {
        return resultMessageService.findAll().stream()
                .filter(msg -> msg.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }

    public ResultMessage save(ResultMessage message) {
        return resultMessageService.save(message);
    }

    public void delete(String code) {
        resultMessageService.deleteByCode(code);
    }
}


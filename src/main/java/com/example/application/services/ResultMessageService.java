package com.example.application.services;


import com.example.application.data.ResultMessage;

import java.util.List;
import java.util.ArrayList;

public class ResultMessageService {
    public List<ResultMessage> findAll() {
        List<ResultMessage> messages = new ArrayList<>();
        messages.add(new ResultMessage("f230fh0g3", "Bamboo Watch", "Bamboo Watch", "Accessories", "Accessories", "2023-09-01", "Some message"));
        messages.add(new ResultMessage("a123fh8g5", "Blue T-Shirt", "User Layer", "Warning", "System", "2023-10-22", "Another message"));
        return messages;
    }

    public ResultMessage save(ResultMessage message) {
        return message;
    }

    public void deleteByCode(String code) {
    }
}

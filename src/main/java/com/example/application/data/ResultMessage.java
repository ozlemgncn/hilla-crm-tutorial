package com.example.application.data;


public class ResultMessage {
    private String code;
    private String squad;
    private String layer;
    private String errorLevel;
    private String createdBy;
    private String createdDate;
    private String message;

    public String getSquad() {
        return squad;
    }

    public void setSquad(String squad) {
        this.squad = squad;
    }

    public String getLayer() {
        return layer;
    }

    public void setLayer(String layer) {
        this.layer = layer;
    }

    public String getErrorLevel() {
        return errorLevel;
    }

    public void setErrorLevel(String errorLevel) {
        this.errorLevel = errorLevel;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    // constructor
    public ResultMessage(String code, String squad, String layer, String errorLevel, String createdBy, String createdDate, String message) {
        this.code = code;
        this.squad = squad;
        this.layer = layer;
        this.errorLevel = errorLevel;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}


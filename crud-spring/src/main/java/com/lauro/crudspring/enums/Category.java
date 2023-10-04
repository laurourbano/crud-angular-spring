package com.lauro.crudspring.enums;

public enum Category {

    BACKEND("Front-end"), FRONTEND("Back-end");

    private String value;

    private Category(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return value;
    }

}

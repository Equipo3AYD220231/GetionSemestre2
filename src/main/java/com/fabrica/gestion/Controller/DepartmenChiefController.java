package com.fabrica.gestion.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DepartmenChiefController {

    @PostMapping("/departmentChief")
    public String departmentChief(){
        return "departmentChief";
    }



}

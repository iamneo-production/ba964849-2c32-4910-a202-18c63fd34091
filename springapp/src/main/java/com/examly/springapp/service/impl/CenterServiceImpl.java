package com.examly.springapp.service.impl;

import com.examly.springapp.model.Center;
import com.examly.springapp.repo.CenterRepository;
import com.examly.springapp.service.CenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CenterServiceImpl implements CenterService {
    //properties
    @Autowired
    private CenterRepository serviceCenterRepository;

    @Override
    public Center addCenter(Center serviceCenter ) {
        return this.serviceCenterRepository.save(serviceCenter);
    }

    @Override
    public List<Center> viewCenter() {
        return this.serviceCenterRepository.findAll();
    }

    @Override
    public Center editCenter(Center serviceCenter,Long id) {
        List<Center> serviceCenters = viewCenter();
        for(Center x: serviceCenters){
            if (x.getId() == serviceCenter.getId()) {
                x.setName(serviceCenter.getName());
                x.setMobileNumber(serviceCenter.getMobileNumber());
                x.setAddress(serviceCenter.getAddress());
                x.setImgUrl(serviceCenter.getImgUrl());
                x.setEmail(serviceCenter.getEmail());
                x.setDescription(x.getDescription());
            }
        }
        return serviceCenter;
    }

    @Override
    public Center deleteCenter(long id) {
        List<Center> serviceCenters = viewCenter();
        Center serviceCenter = new Center();
        for(Center x: serviceCenters){
            if (x.getId() == id) {
                serviceCenter = x;
                serviceCenterRepository.delete(x);
            }
        }
        return serviceCenter;
    }
}
package com.examly.springapp.service.impl;

import java.util.Optional;
import com.examly.springapp.model.Center;
import com.examly.springapp.repo.CenterRepository;
import com.examly.springapp.service.CenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CenterServiceImpl implements CenterService {
    // properties
    @Autowired
    private CenterRepository serviceCenterRepository;

    @Override
    public Center addCenter(Center serviceCenter) {
        return this.serviceCenterRepository.save(serviceCenter);
    }

    @Override
    public List<Center> viewCenter() {
        return this.serviceCenterRepository.findAll();
    }

    @Override
    public Center editCenter(Center serviceCenter, Long id) {
        // List<Center> serviceCenters = viewCenter();
        // for (Center x : serviceCenters) {
        // if (x.getId() == id) {
        // x.setName(serviceCenter.getName());
        // x.setMobileNumber(serviceCenter.getMobileNumber());
        // x.setAddress(serviceCenter.getAddress());
        // x.setImgUrl(serviceCenter.getImgUrl());
        // x.setEmail(serviceCenter.getEmail());
        // x.setDescription(x.getDescription());
        // }
        // }
        Optional<Center> center = serviceCenterRepository.findById(id);

        Center myCenter = center.orElseThrow(() -> new RuntimeException("No such data found"));

        myCenter.setName(serviceCenter.getName());
        myCenter.setMobileNumber(serviceCenter.getMobileNumber());
        myCenter.setAddress(serviceCenter.getAddress());
        myCenter.setEmail(serviceCenter.getEmail());
        myCenter.setImgUrl(serviceCenter.getImgUrl());
        myCenter.setDescription(serviceCenter.getDescription());

        serviceCenterRepository.save(myCenter);

        return myCenter;
    }

    @Override
    public Center deleteCenter(long id) {
        List<Center> serviceCenters = viewCenter();
        Center serviceCenter = new Center();
        for (Center x : serviceCenters) {
            if (x.getId() == id) {
                serviceCenter = x;
                serviceCenterRepository.delete(x);
            }
        }
        return serviceCenter;
    }
}
package com.examly.springapp.service.impl;

import java.util.Optional;
import com.examly.springapp.model.Center;
import com.examly.springapp.repo.CenterRepository;
import com.examly.springapp.service.CenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.Slot;

import java.util.ArrayList;
import java.util.List;

@Service
public class CenterServiceImpl implements CenterService {
    // properties
    @Autowired
    private CenterRepository serviceCenterRepository;

    @Override
    public Center addCenter(Center serviceCenter) {
        serviceCenter.initSlots();
        return this.serviceCenterRepository.save(serviceCenter);
    }

    @Override
    public Center getCenter(long id) {

        Optional<Center> center = serviceCenterRepository.findById(id);

        Center myCenter = center.orElseThrow(() -> new RuntimeException("No such data found"));

        return myCenter;
    }

    @Override
    public List<Center> viewCenter() {
        return this.serviceCenterRepository.findAll();
    }

    @Override
    public Center editCenter(Center serviceCenter, Long id) {
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
            if (x.getServiceCenterId() == id) {
                serviceCenter = x;
                serviceCenterRepository.delete(x);
            }
        }
        return serviceCenter;
    }
}
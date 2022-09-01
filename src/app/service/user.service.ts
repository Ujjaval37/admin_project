import { Injectable } from '@angular/core';
import { User } from "../model/user.model"
import { Device } from "../model/device.model"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersData: Array<User> = [
    {
      id: 1,
      firstname: "Sushay",
      lastname: "Jain",
      email: "sushay@infobeans.com",
      device: [1, 2],
      password: "Sushay@123",
      type: "Admin"
    },
    {
      id: 2,
      firstname: "Anshul",
      lastname: "Mehta",
      email: "anshul@infobeans.com",
      device: [3, 4],
      password: "Anshul@123",
      type: "User"
    },
    {
      id: 3,
      firstname: "Pravin",
      lastname: "Gupta",
      email: "pravin@infobeans.com",
      device: [5, 6],
      password: "Pravin@123",
      type: "User"
    },
    {
      id: 4,
      firstname: "Amitesh",
      lastname: "Namdev",
      email: "amitesh@infobeans.com",
      device: [7, 8],
      password: "Amitesh@123",
      type: "User"
    },
    {
      id: 5,
      firstname: "Rohit",
      lastname: "Negi",
      email: "rohit@infobeans.com",
      device: [9, 10],
      password: "Rohit@123",
      type: "User"
    },
    {
      id: 6,
      firstname: "Vishal",
      lastname: "Soni",
      email: "vishal@infobeans.com",
      device: [11, 12, 13],
      password: "Vishal@123",
      type: "User"
    }
  ]


  devices: Array<Device> = [
    { deviceId: 1, deviceName: "HP Probook" },
    { deviceId: 2, deviceName: "Macbook Pro" },
    { deviceId: 3, deviceName: "HP Probook" },
    { deviceId: 4, deviceName: "Macbook Pro" },
    { deviceId: 5, deviceName: "Dell Inspiron 16" },
    { deviceId: 6, deviceName: "HP Probook" },
    { deviceId: 7, deviceName: "HP Pavilion 14" },
    { deviceId: 8, deviceName: "Dell Inspiron 16" },
    { deviceId: 9, deviceName: "Macbook Pro" },
    { deviceId: 10, deviceName: "HP Pavilion 14" },
    { deviceId: 11, deviceName: "Dell Lattitude 14" },
    { deviceId: 12, deviceName: "Macbook Pro" },
    { deviceId: 13, deviceName: "HP Pavilion 14" },
  ]

  constructor() { }
}

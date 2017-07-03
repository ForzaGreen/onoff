
## Architecture
```
Front End ---(MQTT PUBLISH)---> Xively (IoT Platform) ---> AWS Kinesis ---> AWS Lambda ---> Phillips HUE API 
                                   |
                                   |
                            (MQTT SUBSCRIBE)
                                   |
                                   v
                          Raspberry Pi + LEDs
```

Link: https://forzagreen.github.io/onoff

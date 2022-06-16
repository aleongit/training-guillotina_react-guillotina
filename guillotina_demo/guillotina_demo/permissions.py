from guillotina import configure

configure.permission("guillotina_demo.AccesGMI", "Acces to GMI")

configure.role("guillotina_demo.GMIUser", "GMIUser", "Have acces to GMI", True)

configure.grant(permission="guillotina_demo.AccesGMI", role="guillotina_demo.GMIUser")
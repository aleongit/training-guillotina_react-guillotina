from guillotina import configure


app_settings = {
    # provide custom application settings here...
}


def includeme(root):
    """
    custom application initialization here
    """
    configure.scan('guillotina_demo.api')
    configure.scan('guillotina_demo.install')
    configure.scan('guillotina_demo.permissions')
    configure.scan('guillotina_demo.content')

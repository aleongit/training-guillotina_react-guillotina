from guillotina import schema
from guillotina import configure
from guillotina.content import Folder
from guillotina.interfaces import IFolder
from guillotina.directives import index_field


class IDemoType(IFolder):

    index_field("text_field", type="searchabletext")
    text_field = schema.Text(
        title="Text field",
        required=True
    )

    index_field("text_richtext_field", type="searchabletext")
    text_richtext_field = schema.Text(
        title="Rich text field",
        widget= "richtext",
        required=False
    )

    index_field("number_field", type="int")
    number_field = schema.Int(
        title="Number field",
        required=False
    )

    index_field("choice_field", type="keyword")
    choice_field = schema.Choice(
        title="Choce field",
        values=("plone", "guillotina", "other"),
        required=True,
    )
    
    index_field("boolean_field", type="boolean")
    boolean_field = schema.Bool(
        title="Boolean field",
        required=False,
        default=False,
    )

    index_field("list_field", type="keyword")
    list_field = schema.List(
        value_type=schema.TextLine(title="Item list field"),
        required=False,
        missing_value=[],
        title="List field",
    )

    date_time_field = schema.Datetime(
        required=False,
        title="Date time field",
    )

    date_field = schema.Date(
        required=False,
        title="Date field",
    )



@configure.contenttype(
    type_name="DemoType",
    schema=IDemoType,
    behaviors=[
        'guillotina.behaviors.dublincore.IDublinCore',
        'guillotina.behaviors.attachment.IMultiAttachment'
    ]
)
class DemoType(Folder):
    pass
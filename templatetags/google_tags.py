from django import template
from contact.models import Google

register = template.Library()

# Google snippets
@register.inclusion_tag('contact/tags/google.html', takes_context=True)
def google_tags(context):
    return {
        'google_tags': Google.objects.all(),
        'request': context['request'],
    }
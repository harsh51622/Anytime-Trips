
from django.contrib import admin
from .models import *

admin.site.register(Trips)
admin.site.register(User)
admin.site.register(Cart)
admin.site.register(CartItems)
admin.site.register(Order)
admin.site.register(OrderItem)

